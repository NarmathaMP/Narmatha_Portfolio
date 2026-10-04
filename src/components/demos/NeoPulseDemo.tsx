import { useState, useEffect } from 'react';
import { Activity, AlertOctagon, Sparkles, Rewind, Play, Pause, RefreshCw, Heart, Stethoscope, FileText } from 'lucide-react';

export default function NeoPulseDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [deteriorationMode, setDeteriorationMode] = useState(false);
  const [timeOffset, setTimeOffset] = useState(0); // 0 = now, -6 to 0 hours for replay
  const [isGeneratingNarrative, setIsGeneratingNarrative] = useState(false);
  const [narrativeGenerated, setNarrativeGenerated] = useState(false);

  // Dynamic vitals
  const [heartRate, setHeartRate] = useState(78);
  const [mapVal, setMapVal] = useState(86);
  const [spo2, setSpo2] = useState(98);
  const [respRate, setRespRate] = useState(16);
  const [riskScore, setRiskScore] = useState(18);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (deteriorationMode) {
        // Trending towards sepsis decompensation
        setHeartRate((prev) => Math.min(138, Math.max(110, prev + (Math.random() * 4 - 1.5))));
        setMapVal((prev) => Math.max(54, Math.min(68, prev - (Math.random() * 3 - 1))));
        setSpo2((prev) => Math.max(91, Math.min(95, prev + (Math.random() * 2 - 1.2))));
        setRespRate((prev) => Math.min(28, Math.max(22, prev + (Math.random() * 2 - 0.8))));
        setRiskScore((prev) => Math.min(94, Math.max(76, prev + 1.2)));
      } else {
        // Stable baseline vitals
        setHeartRate((prev) => Math.min(84, Math.max(72, prev + (Math.random() * 4 - 2))));
        setMapVal((prev) => Math.min(92, Math.max(82, prev + (Math.random() * 3 - 1.5))));
        setSpo2((prev) => Math.min(99, Math.max(96, prev + (Math.random() * 1.5 - 0.7))));
        setRespRate((prev) => Math.min(18, Math.max(14, prev + (Math.random() * 1.5 - 0.7))));
        setRiskScore((prev) => Math.min(24, Math.max(12, prev + (Math.random() * 2 - 1))));
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isPlaying, deteriorationMode]);

  const handleSimulateDecompensation = () => {
    setDeteriorationMode(!deteriorationMode);
    if (!deteriorationMode) {
      setHeartRate(112);
      setMapVal(64);
      setRiskScore(78);
    } else {
      setHeartRate(78);
      setMapVal(86);
      setRiskScore(18);
    }
  };

  const handleGenerateNarrative = () => {
    setIsGeneratingNarrative(true);
    setTimeout(() => {
      setIsGeneratingNarrative(false);
      setNarrativeGenerated(true);
    }, 1500);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 md:p-6 text-slate-200">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="text-xs font-mono text-emerald-400">NEOPULSE ICU TELEMETRY ENGINE</div>
          <h4 className="text-base font-semibold text-white">Missingness-Aware Time-Series Pipeline & Explainable AI</h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-md text-xs text-slate-300 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? 'Pause Stream' : 'Resume'}
          </button>

          <button
            onClick={handleSimulateDecompensation}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              deteriorationMode
                ? 'bg-rose-950 border border-rose-800 text-rose-300 hover:bg-rose-900'
                : 'bg-amber-600/20 border border-amber-500/40 text-amber-300 hover:bg-amber-600/30'
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            {deteriorationMode ? 'Revert to Stable Vitals' : 'Simulate Decompensation Trend'}
          </button>
        </div>
      </div>

      {/* Main Clinical Grid */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left 2 Cols: Live Telemetry & Waveforms */}
        <div className="lg:col-span-2 space-y-4">
          {/* Vitals Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* Heart Rate */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500" /> HR
                </span>
                <span className="font-mono text-[10px]">bpm</span>
              </div>
              <div
                className={`text-2xl font-bold font-mono mt-1 tabular-nums ${
                  heartRate > 100 ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {Math.round(heartRate)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {heartRate > 100 ? 'Tachycardia Alert' : 'Normal Sinus Rhythm'}
              </div>
            </div>

            {/* Mean Arterial Pressure */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" /> MAP
                </span>
                <span className="font-mono text-[10px]">mmHg</span>
              </div>
              <div
                className={`text-2xl font-bold font-mono mt-1 tabular-nums ${
                  mapVal < 65 ? 'text-amber-400' : 'text-cyan-300'
                }`}
              >
                {Math.round(mapVal)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {mapVal < 65 ? 'Hypotension Warning' : 'Target Perfusion'}
              </div>
            </div>

            {/* SpO2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-blue-400" /> SpO2
                </span>
                <span className="font-mono text-[10px]">%</span>
              </div>
              <div className="text-2xl font-bold font-mono mt-1 tabular-nums text-blue-400">
                {Math.round(spo2)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {spo2 < 93 ? 'Desaturation Risk' : 'Adequate Oxygenation'}
              </div>
            </div>

            {/* Resp Rate */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>RR</span>
                <span className="font-mono text-[10px]">breaths/m</span>
              </div>
              <div className="text-2xl font-bold font-mono mt-1 tabular-nums text-purple-400">
                {Math.round(respRate)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {respRate > 22 ? 'Tachypnea Flag' : 'Steady Ventilation'}
              </div>
            </div>
          </div>

          {/* Simulated ECG / Physiological Waveform Canvas */}
          <div className="demo-terminal-dark bg-slate-900/80 border border-slate-800 rounded-lg p-3.5">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LEAD II RHYTHM STREAM (TimescaleDB Continuous Aggregate)
              </span>
              <span className="text-slate-400 font-mono text-[11px]">Sampling: 250 Hz · Imputation: Spline</span>
            </div>

            {/* Waveform SVG */}
            <div className="w-full h-20 bg-slate-950 rounded border border-slate-800/80 overflow-hidden relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 80">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d={
                    deteriorationMode
                      ? 'M0,40 Q20,38 30,40 L35,15 L40,65 L45,35 L50,40 Q70,42 90,40 L95,12 L100,68 L105,32 L110,40 Q130,42 150,40 L155,10 L160,70 L165,30 L170,40 Q190,42 210,40 L215,8 L220,72 L225,28 L230,40 Q250,42 270,40 L275,12 L280,68 L285,32 L290,40 Q310,42 330,40 L335,10 L340,70 L345,30 L350,40 Q370,42 390,40 L395,8 L400,72 L405,28 L410,40 Q430,42 450,40 L455,12 L460,68 L465,32 L470,40 L500,40'
                      : 'M0,40 Q30,40 50,40 L55,25 L60,55 L65,35 L70,40 Q100,40 130,40 L135,25 L140,55 L145,35 L150,40 Q180,40 210,40 L215,25 L220,55 L225,35 L230,40 Q260,40 290,40 L295,25 L300,55 L305,35 L310,40 Q340,40 370,40 L375,25 L380,55 L385,35 L390,40 Q420,40 450,40 L455,25 L460,55 L465,35 L470,40 L500,40'
                  }
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="2"
                  className={isPlaying ? 'animate-pulse' : ''}
                />
              </svg>
              {/* Grid lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#10b981 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px'
                }}
              />
            </div>
          </div>

          {/* Counterfactual Replay Slider */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Rewind className="w-3.5 h-3.5 text-blue-400" />
                Counterfactual Audit & Historical Trajectory Replay
              </span>
              <span className="font-mono text-blue-400">
                {timeOffset === 0 ? 'Live (t = 0)' : `${timeOffset} Hours Ago`}
              </span>
            </div>
            <input
              type="range"
              min="-6"
              max="0"
              value={timeOffset}
              onChange={(e) => setTimeOffset(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>t-6h (Pre-admission baseline)</span>
              <span>t-3h (Onset of variance)</span>
              <span>t=0 (Current Alert State)</span>
            </div>
          </div>
        </div>

        {/* Right Col: Risk Score & Claude Narrative */}
        <div className="space-y-4">
          {/* Risk Gauge Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-3">
            <div className="text-xs text-slate-400 font-medium">EARLY-WARNING RISK INDEX</div>
            <div className="flex items-baseline justify-between">
              <div
                className={`text-4xl font-extrabold font-mono tabular-nums ${
                  riskScore > 70
                    ? 'text-rose-400'
                    : riskScore > 40
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}
              >
                {Math.round(riskScore)}%
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${
                  riskScore > 70
                    ? 'bg-rose-950 text-rose-300 border border-rose-800'
                    : riskScore > 40
                    ? 'bg-amber-950 text-amber-300 border border-amber-800'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                }`}
              >
                {riskScore > 70 ? 'CRITICAL RISK' : riskScore > 40 ? 'ELEVATED' : 'NOMINAL'}
              </span>
            </div>

            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  riskScore > 70 ? 'bg-rose-500' : riskScore > 40 ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${riskScore}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Prediction Window: Decompensation probability within the next 4.2 hours.
            </div>
          </div>

          {/* Claude LLM Narrative Layer */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Claude API Clinical Briefing
              </span>
              <button
                onClick={handleGenerateNarrative}
                disabled={isGeneratingNarrative}
                className="text-[11px] text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isGeneratingNarrative ? 'animate-spin' : ''}`} />
                {isGeneratingNarrative ? 'Synthesizing...' : 'Re-analyze'}
              </button>
            </div>

            <div className="bg-slate-950 rounded border border-slate-800/80 p-3 text-xs leading-relaxed text-slate-300">
              {isGeneratingNarrative ? (
                <div className="py-4 text-center text-slate-400 flex flex-col items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
                  <span>Synthesizing multi-parameter telemetry narrative...</span>
                </div>
              ) : deteriorationMode || narrativeGenerated ? (
                <div className="space-y-2">
                  <p className="font-semibold text-rose-300 text-[11px] uppercase tracking-wide">
                    Potential Septic Shock Onset Detected
                  </p>
                  <p className="text-slate-300">
                    Patient presents with progressive tachycardia ({Math.round(heartRate)} bpm) co-occurring with MAP drop to {Math.round(mapVal)} mmHg over 3.5 hours. Time-series cross-entropy indicates systemic inflammatory response syndrome (SIRS).
                  </p>
                  <div className="pt-1.5 border-t border-slate-800 text-[11px] text-emerald-400 font-mono">
                    Suggested Protocol: Order STAT serum lactate, initiate IV crystalloids, prepare blood cultures.
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 text-slate-400">
                  <p className="font-semibold text-emerald-400 text-[11px]">Baseline Physiology Stable</p>
                  <p>
                    All multi-parameter streams are within acceptable bounds. Variance remains under 1.2 standard deviations from individual 24-hour baseline.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
