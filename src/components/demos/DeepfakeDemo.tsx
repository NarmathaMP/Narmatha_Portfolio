import { useState } from 'react';
import { ShieldAlert, ShieldCheck, Scan, Eye, Volume2, Video, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

interface MediaSample {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio';
  isSynthetic: boolean;
  score: number;
  indicators: { label: string; score: number; flagged: boolean }[];
  summary: string;
}

const SAMPLES: MediaSample[] = [
  {
    id: 'sample-1',
    name: 'Sample A: High-Res Synthetic Face Portrait',
    type: 'image',
    isSynthetic: true,
    score: 94.6,
    indicators: [
      { label: 'Corneal Reflection Symmetry', score: 98, flagged: true },
      { label: 'Facial Boundary Warping', score: 92, flagged: true },
      { label: 'High-Frequency FFT Residue', score: 94, flagged: true },
      { label: 'Skin Pore Texture Naturalness', score: 86, flagged: true }
    ],
    summary:
      'High probability of synthetic GAN/Diffusion generation. Irregular specular reflections in both pupils and mismatched skin micro-textures detected along facial hairline boundary.'
  },
  {
    id: 'sample-2',
    name: 'Sample B: Studio Broadcast Video Clip',
    type: 'video',
    isSynthetic: false,
    score: 6.2,
    indicators: [
      { label: 'Blink Rate Periodicity', score: 98, flagged: false },
      { label: 'Lip-Sync Phoneme Coherence', score: 95, flagged: false },
      { label: 'Optical Flow Consistency', score: 94, flagged: false },
      { label: 'Lighting Angle Uniformity', score: 92, flagged: false }
    ],
    summary:
      'Verified Authentic. Natural eye blink intervals (14 blinks/min) and consistent temporal optical flow without frame-level blend artifacts.'
  },
  {
    id: 'sample-3',
    name: 'Sample C: Voice Assistant Audio Snippet',
    type: 'audio',
    isSynthetic: true,
    score: 88.4,
    indicators: [
      { label: 'Spectrogram Mel-Frequency Gaps', score: 91, flagged: true },
      { label: 'Vocal Breath Inhalation Artifacts', score: 87, flagged: true },
      { label: 'Pitch Micro-Jitter Spectrum', score: 89, flagged: true }
    ],
    summary:
      'Synthetic Voice Clone Flagged. Absence of physiological glottal pulses and mechanical smoothing detected in upper 8kHz frequency harmonics.'
  }
];

export default function DeepfakeDemo() {
  const [selectedSample, setSelectedSample] = useState<MediaSample>(SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(true);

  const triggerScan = (sample: MediaSample) => {
    setSelectedSample(sample);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1000);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="text-xs font-mono text-cyan-400">MULTIMODAL DEEPFAKE FORENSICS</div>
          <h4 className="text-base font-semibold text-white">Automated Synthetic Artifact & Biometric Analysis</h4>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          {SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => triggerScan(sample)}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                selectedSample.id === sample.id
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {sample.type === 'image' ? 'Image' : sample.type === 'video' ? 'Video' : 'Audio'} Test
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column: Forensic Inspection Viewport */}
        <div className="lg:col-span-2 space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
              <span className="font-mono flex items-center gap-2">
                <Scan className="w-4 h-4 text-cyan-400" />
                {selectedSample.name}
              </span>
              <button
                onClick={() => setShowHeatmap(!showHeatmap)}
                className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded border transition-colors ${
                  showHeatmap
                    ? 'bg-cyan-950 border-cyan-800 text-cyan-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <Layers className="w-3 h-3" />
                {showHeatmap ? 'Artifact Mesh: ON' : 'Artifact Mesh: OFF'}
              </button>
            </div>

            {/* Visual Canvas Representation */}
            <div className="relative my-4 aspect-video rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden">
              {isScanning ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  <div className="text-xs font-mono text-cyan-400">Extracting Fourier Spectrogram & Landmarks...</div>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Wireframe overlay */}
                  {selectedSample.type === 'image' && (
                    <div className="relative w-44 h-44 rounded-full border border-dashed border-cyan-500/60 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-cyan-400/40 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-cyan-400" />
                      </div>
                      {showHeatmap && selectedSample.isSynthetic && (
                        <div className="absolute inset-0 bg-rose-500/20 rounded-full animate-pulse flex items-center justify-center">
                          <span className="text-[10px] font-mono bg-rose-900/90 text-rose-200 px-2 py-0.5 rounded border border-rose-700">
                            Artifact Delta: 94.6%
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedSample.type === 'video' && (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Video className="w-10 h-10 text-emerald-400" />
                      <div className="text-xs text-slate-400 font-mono">Continuous 60 FPS Optical Stream</div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                        Temporal Consistency Verified
                      </span>
                    </div>
                  )}

                  {selectedSample.type === 'audio' && (
                    <div className="flex flex-col items-center gap-3 w-full px-8">
                      <Volume2 className="w-8 h-8 text-cyan-400" />
                      <div className="w-full flex items-end justify-center gap-1.5 h-14">
                        {[40, 75, 90, 60, 30, 85, 95, 70, 45, 60, 80, 50, 65, 90, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`w-2.5 rounded-t transition-all ${
                              selectedSample.isSynthetic && i > 8 ? 'bg-rose-500' : 'bg-cyan-500'
                            }`}
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">Harmonic Spectrum Analyzer (0–16 kHz)</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-white">Forensic Finding: </span>
              {selectedSample.summary}
            </div>
          </div>
        </div>

        {/* Right Column: Score & Indicator Breakdown */}
        <div className="space-y-4">
          {/* Main Verdict Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
            <div className="text-xs text-slate-400 font-medium">AUTHENTICITY VERDICT</div>
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`text-3xl font-extrabold font-mono tabular-nums ${
                    selectedSample.isSynthetic ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  {selectedSample.score}%
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Synthetic Probability</div>
              </div>

              {selectedSample.isSynthetic ? (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-950 border border-rose-800 rounded-md text-xs font-semibold text-rose-300">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  DEEPFAKE
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950 border border-emerald-800 rounded-md text-xs font-semibold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  AUTHENTIC
                </div>
              )}
            </div>

            {/* Score progress bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  selectedSample.isSynthetic ? 'bg-rose-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${selectedSample.score}%` }}
              />
            </div>
          </div>

          {/* Forensic Indicators List */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
            <div className="text-xs font-semibold text-white">Multi-Layer Feature Breakdown</div>
            <div className="space-y-2.5">
              {selectedSample.indicators.map((ind, i) => (
                <div key={i} className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">{ind.label}</span>
                    <span
                      className={`font-mono text-[11px] ${
                        ind.flagged ? 'text-rose-400' : 'text-emerald-400'
                      }`}
                    >
                      {ind.score}% confidence
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${ind.flagged ? 'bg-rose-500' : 'bg-emerald-500'}`}
                      style={{ width: `${ind.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
