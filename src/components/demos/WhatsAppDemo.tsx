import { useState } from 'react';
import { MessageSquare, Search, Filter, Folder, Pin, ArrowRightLeft, Check, Sparkles } from 'lucide-react';

export default function WhatsAppDemo() {
  const [viewMode, setViewMode] = useState<'redesign' | 'original'>('redesign');
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'personal' | 'unread'>('all');

  const chats = [
    { name: 'Engineering Core Team', category: 'work', last: 'PR #42 merged: TimescaleDB hypertable compression', time: '10:42 AM', unread: 3, pinned: true },
    { name: 'Dr. Ramesh (IEEE Branch)', category: 'work', last: 'Symposium presentation slides confirmed for Monday.', time: '09:15 AM', unread: 0, pinned: true },
    { name: 'Family Group', category: 'personal', last: 'Photos from weekend trip sent to shared drive', time: 'Yesterday', unread: 1, pinned: false },
    { name: 'GeeksforGeeks Campus Chapter', category: 'work', last: 'Next DSA sprint announcement is scheduled for 5 PM.', time: 'Yesterday', unread: 0, pinned: false },
    { name: 'Ananya Sharma', category: 'personal', last: 'Are we joining the hackathon pitch tomorrow?', time: 'Oct 2', unread: 0, pinned: false },
  ];

  const filteredChats = chats.filter((c) => {
    if (activeFilter === 'work') return c.category === 'work';
    if (activeFilter === 'personal') return c.category === 'personal';
    if (activeFilter === 'unread') return c.unread > 0;
    return true;
  });

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="text-xs font-mono text-emerald-400">WHATSAPP UI/UX REDESIGN</div>
          <h4 className="text-base font-semibold text-white">Visual Hierarchy & Context-Aware Navigation Prototype</h4>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setViewMode('redesign')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
              viewMode === 'redesign'
                ? 'bg-emerald-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Redesigned UX
          </button>
          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 rounded transition-colors ${
              viewMode === 'original'
                ? 'bg-slate-800 text-white font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Legacy Baseline
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column: Interactive Mobile Mockup */}
        <div className="lg:col-span-2">
          {viewMode === 'redesign' ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
              {/* App Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-base font-bold text-white tracking-tight">Messages</span>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900">
                    <Folder className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Functional Segmented Filter Tabs */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
                {(['all', 'work', 'personal', 'unread'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1 rounded-full capitalize text-xs transition-colors whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-emerald-600 text-white font-medium'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {filter === 'all' ? 'All Chats' : filter}
                  </button>
                ))}
              </div>

              {/* Chat Feed */}
              <div className="divide-y divide-slate-800/60 bg-slate-900">
                {filteredChats.map((chat, idx) => (
                  <div
                    key={idx}
                    className="p-3 hover:bg-slate-850 transition-colors flex items-start gap-3 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center font-bold text-xs text-emerald-400 border border-slate-700">
                      {chat.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white truncate flex items-center gap-1.5">
                          {chat.name}
                          {chat.pinned && <Pin className="w-3 h-3 text-emerald-400 rotate-45" />}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">{chat.time}</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{chat.last}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center max-w-md mx-auto space-y-3">
              <div className="text-slate-400 text-xs">Original Legacy Interface Friction Points:</div>
              <ul className="text-xs text-slate-300 text-left space-y-2 list-disc pl-5">
                <li>Work, college, and personal chats jumbled in a single unfilterable stream.</li>
                <li>Search lacks contextual filters (links, docs, audio buried together).</li>
                <li>Visual hierarchy overloads eye with unweighted green badges.</li>
              </ul>
              <button
                onClick={() => setViewMode('redesign')}
                className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-medium"
              >
                Switch to Modern Redesign
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Design Case Study Highlights */}
        <div className="space-y-4 text-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
            <h5 className="font-semibold text-white">UX Architectural Decisions</h5>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium">Work vs Personal Segmentation: </span>
                  <span className="text-slate-400">Allows users to silence work chatter during evenings without losing critical messages.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium">Thumb-Accessible Bottom Navigation: </span>
                  <span className="text-slate-400">Placed primary touch targets within 44px reach zone on modern tall screens.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium">High-Contrast Typographic Rhythm: </span>
                  <span className="text-slate-400">Improved legibility with distinct weight contrasts between contact names and snippet text.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
