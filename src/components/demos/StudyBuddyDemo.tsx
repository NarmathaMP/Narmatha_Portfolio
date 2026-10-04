import { useState } from 'react';
import { Bot, BookOpen, CheckSquare, Sparkles, ArrowRight, BrainCircuit } from 'lucide-react';

const TOPICS = [
  {
    id: 'fastapi',
    title: 'FastAPI Concurrency & Async Architecture',
    level: 'Full Stack / Intermediate',
    milestones: [
      { step: '01', title: 'ASGI Event Loop & uvloop integration', desc: 'Understanding non-blocking I/O vs multithreading in Python.' },
      { step: '02', title: 'Pydantic v2 Request Validation', desc: 'Strict serialization schemas and fast Rust-backed validation.' },
      { step: '03', title: 'Dependency Injection & DB Session Pooling', desc: 'Managing asyncpg connection lifecycles safely.' }
    ],
    sampleQuestion: 'Why does defining a route with `async def` allow FastAPI to handle more concurrent requests than standard WSGI?'
  },
  {
    id: 'timescale',
    title: 'TimescaleDB Hypertables & Continuous Aggregates',
    level: 'Database / Advanced',
    milestones: [
      { step: '01', title: 'Chunk Partitioning Mechanics', desc: 'Auto-partitioning telemetry data by time intervals.' },
      { step: '02', title: 'Materialized Continuous Views', desc: 'Pre-computing rolling moving averages for real-time dashboards.' },
      { step: '03', title: 'Columnar Compression Policies', desc: 'Achieving 90%+ storage savings on historical ICU vitals.' }
    ],
    sampleQuestion: 'How does hypertable chunk exclusion optimize time-windowed queries compared to plain PostgreSQL tables?'
  },
  {
    id: 'react-patterns',
    title: 'Modern React Architecture & Custom Hooks',
    level: 'Frontend / Core',
    milestones: [
      { step: '01', title: 'State Normalization & Context Isolation', desc: 'Preventing unnecessary subtree re-renders in heavy dashboards.' },
      { step: '02', title: 'Custom Stream Hook Architecture', desc: 'Handling real-time WebSockets with resilient reconnection.' },
      { step: '03', title: 'Accessible ARIA Design Systems', desc: 'Building keyboard-navigable components compliant with WCAG AA.' }
    ],
    sampleQuestion: 'When should you prefer lifting state up vs subscribing to an external event store in high-frequency data UIs?'
  }
];

export default function StudyBuddyDemo() {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const handleSelect = (topic: typeof TOPICS[0]) => {
    setSelectedTopic(topic);
    setRevealedAnswer(false);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="text-xs font-mono text-purple-400">STUDY BUDDY AI ENGINE</div>
          <h4 className="text-base font-semibold text-white">Adaptive Learning Roadmap & Knowledge Verification</h4>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelect(t)}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedTopic.id === t.id
                  ? 'bg-purple-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Roadmap milestones */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              Generated 3-Step Milestone Roadmap
            </span>
            <span className="text-[11px] font-mono text-slate-400">{selectedTopic.level}</span>
          </div>

          <div className="space-y-3 pt-1">
            {selectedTopic.milestones.map((m) => (
              <div key={m.step} className="p-3 bg-slate-950 rounded border border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/60">
                    {m.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-200">{m.title}</span>
                </div>
                <p className="text-xs text-slate-400 pl-7">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Recall Knowledge Check */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                Active Recall Drill
              </span>
              <span className="text-[11px] text-purple-400 font-mono">Spaced Repetition</span>
            </div>

            <div className="mt-3 p-3.5 bg-slate-950 rounded border border-slate-800 text-xs text-slate-200 leading-relaxed">
              <div className="text-[11px] font-mono text-slate-400 mb-1">PROMPT FOR LEARNER:</div>
              "{selectedTopic.sampleQuestion}"
            </div>

            {revealedAnswer ? (
              <div className="mt-3 p-3 bg-purple-950/40 border border-purple-800/60 rounded text-xs text-purple-200 leading-relaxed">
                <div className="font-semibold text-purple-300 mb-1 text-[11px] font-mono">MODEL EXPLANATION:</div>
                Async routes yield control to the single-threaded asyncio event loop during I/O operations (database queries or HTTP calls), allowing thousands of pending requests to be interleaved without thread-switching overhead.
              </div>
            ) : (
              <div className="mt-3 p-3 bg-slate-950/60 border border-dashed border-slate-800 rounded text-xs text-slate-400 text-center">
                Formulate your answer mentally before inspecting the AI explanation model.
              </div>
            )}
          </div>

          <button
            onClick={() => setRevealedAnswer(!revealedAnswer)}
            className="w-full mt-3 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs font-medium transition-colors"
          >
            {revealedAnswer ? 'Hide Technical Explanation' : 'Verify My Knowledge Model'}
          </button>
        </div>
      </div>
    </div>
  );
}
