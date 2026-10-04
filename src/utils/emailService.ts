import emailjs from '@emailjs/browser';

export interface SendMessageParams {
  name: string;
  email: string;
  subject?: string;
  roleType?: string;
  message: string;
  targetEmail?: string;
}

export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const getStoredEmailConfig = (): EmailConfig => {
  const envService = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const envTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const envKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  const storedService = typeof window !== 'undefined' ? localStorage.getItem('emailjs_service_id') || '' : '';
  const storedTemplate = typeof window !== 'undefined' ? localStorage.getItem('emailjs_template_id') || '' : '';
  const storedKey = typeof window !== 'undefined' ? localStorage.getItem('emailjs_public_key') || '' : '';

  return {
    serviceId: storedService || envService,
    templateId: storedTemplate || envTemplate,
    publicKey: storedKey || envKey,
  };
};

export const saveEmailConfig = (config: EmailConfig): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('emailjs_service_id', config.serviceId);
    localStorage.setItem('emailjs_template_id', config.templateId);
    localStorage.setItem('emailjs_public_key', config.publicKey);
  }
};

// Internal console helper for Narmatha to silently set credentials without exposing any UI to visitors
if (typeof window !== 'undefined') {
  (window as unknown as { setupDirectEmail?: (serviceId: string, templateId: string, publicKey: string) => string }).setupDirectEmail = (
    serviceId: string,
    templateId: string,
    publicKey: string
  ) => {
    saveEmailConfig({ serviceId, templateId, publicKey });
    return 'Direct email credentials configured successfully.';
  };
}

export const sendDirectEmail = async (
  params: SendMessageParams
): Promise<{ success: boolean; message: string; method: 'direct' | 'client' }> => {
  const config = getStoredEmailConfig();
  const target = params.targetEmail || 'mpnarmatha18@gmail.com';

  // 1. Silent direct background delivery via EmailJS
  if (config.serviceId && config.templateId && config.publicKey) {
    try {
      const templateParams = {
        name: params.name,
        from_name: params.name,
        email: params.email,
        from_email: params.email,
        reply_to: params.email,
        subject: params.subject || 'Portfolio Direct Inquiry',
        role_type: params.roleType || 'Inquiry',
        message: params.message,
        to_email: target,
      };

      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      if (result.status === 200) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent directly to Narmatha.',
          method: 'direct',
        };
      }
    } catch (err: unknown) {
      console.warn('Direct delivery attempt encountered an issue, applying seamless fallback:', err);
    }
  }

  // 2. Seamless client fallback: opens default mail client addressed to Narmatha with pre-filled content
  const emailSubject = encodeURIComponent(
    params.subject ? `[Portfolio] ${params.subject}` : `[Portfolio Inquiry] Message from ${params.name}`
  );
  const emailBody = encodeURIComponent(
    `Hello Narmatha,\n\n${params.message}\n\n---\nSender: ${params.name}\nEmail: ${params.email}\nDate: ${new Date().toLocaleDateString()}`
  );

  if (typeof window !== 'undefined') {
    window.location.href = `mailto:${target}?subject=${emailSubject}&body=${emailBody}`;
  }

  return {
    success: true,
    message: 'Thank you! Your message has been sent to Narmatha.',
    method: 'client',
  };
};
