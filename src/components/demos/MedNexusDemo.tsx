import { useState } from 'react';
import { Users, Building2, BedDouble, Calendar, Activity, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function MedNexusDemo() {
  const [activePortal, setActivePortal] = useState<'citizen' | 'admin'>('citizen');
  const [selectedDept, setSelectedDept] = useState('Emergency Care');
  const [patientName, setPatientName] = useState('Sarah Jenkins');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  // Admin portal state
  const [wards, setWards] = useState([
    { id: 'icu', name: 'ICU Ward A', total: 12, occupied: 11, critical: 4 },
    { id: 'emergency', name: 'Trauma & Emergency', total: 20, occupied: 16, critical: 2 },
    { id: 'cardiac', name: 'Cardiology Care', total: 15, occupied: 9, critical: 1 },
    { id: 'general', name: 'General Inpatient', total: 40, occupied: 28, critical: 0 },
  ]);

  const toggleBed = (wardId: string, delta: number) => {
    setWards((prev) =>
      prev.map((w) => {
        if (w.id === wardId) {
          const newOcc = Math.max(0, Math.min(w.total, w.occupied + delta));
          return { ...w, occupied: newOcc };
        }
        return w;
      })
    );
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => setBookedSuccess(false), 4000);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 md:p-6 text-slate-200">
      {/* Header bar with Portal Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="text-xs font-mono text-blue-400">MED NEXUS DUAL-PORTAL SIMULATOR</div>
          <h4 className="text-base font-semibold text-white">Live Role-Based Access Control (RBAC) Architecture</h4>
        </div>

        {/* Portal Switcher Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setActivePortal('citizen')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activePortal === 'citizen'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Citizen Portal
          </button>
          <button
            onClick={() => setActivePortal('admin')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activePortal === 'admin'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Hospital Admin Portal
          </button>
        </div>
      </div>

      {/* PORTAL VIEW 1: CITIZEN */}
      {activePortal === 'citizen' ? (
        <div className="mt-5 space-y-5">
          <div className="p-3 bg-blue-950/30 border border-blue-900/40 rounded-lg text-xs text-blue-200 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Authenticated as Citizen / Patient (Token: JWT-AES256)
            </span>
            <span className="text-slate-400">FHIR Health ID: #IND-938210</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Quick appointment booking */}
            <div className="md:col-span-2 bg-slate-900/70 border border-slate-800 rounded-lg p-4">
              <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                Schedule Priority Consultation
              </h5>

              <form onSubmit={handleBook} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Patient Full Name</label>
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Select Specialty</label>
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      <option>Emergency Care</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>General Medicine</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-400">
                    Est. Wait Time: <span className="text-emerald-400 font-medium">8 minutes</span>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium transition-colors"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>

              {bookedSuccess && (
                <div className="mt-3 p-2.5 bg-emerald-950/60 border border-emerald-800/80 rounded text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Appointment booked successfully! Queued at Central Triage API (Status 201 Created).
                </div>
              )}
            </div>

            {/* Live Queue Status */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4 space-y-3">
              <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                Live Token Queue
              </h5>

              <div className="text-center py-3 bg-slate-950 rounded border border-slate-800">
                <div className="text-2xl font-bold font-mono text-blue-400 tabular-nums">#A-42</div>
                <div className="text-xs text-slate-400 mt-1">Current Serving Token</div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Your Token:</span>
                  <span className="font-mono text-white">#A-45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">People Ahead:</span>
                  <span className="font-mono text-emerald-400">2 Patients</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Room:</span>
                  <span className="text-white">Bay 04 (Dr. A. Verma)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* PORTAL VIEW 2: HOSPITAL ADMIN */
        <div className="mt-5 space-y-5">
          <div className="p-3 bg-purple-950/30 border border-purple-900/40 rounded-lg text-xs text-purple-200 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-400" />
              Administrative Operations Console · Multi-Ward Bed Allocator
            </span>
            <span className="text-slate-400">API Telemetry: Shared TimescaleDB Cluster</span>
          </div>

          {/* Bed Allocation Management */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-slate-300 flex items-center justify-between">
              <span>Real-Time Ward Occupancy & Bed Allocation (Click +/- to simulate live admission)</span>
              <span className="text-slate-400 font-mono text-[11px]">Synced via WebSocket</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {wards.map((ward) => {
                const percent = Math.round((ward.occupied / ward.total) * 100);
                const isHigh = percent >= 85;

                return (
                  <div
                    key={ward.id}
                    className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">{ward.name}</span>
                      {isHigh ? (
                        <span className="text-[10px] text-amber-400 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Near Capacity
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-400">Available</span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div className="text-lg font-bold font-mono text-white tabular-nums">
                        {ward.occupied} / {ward.total}
                      </div>
                      <span className="text-xs font-mono text-slate-400">{percent}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isHigh ? 'bg-amber-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    {/* Quick admission controls */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => toggleBed(ward.id, -1)}
                        disabled={ward.occupied <= 0}
                        className="px-2 py-0.5 text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded text-slate-300"
                        title="Discharge Patient"
                      >
                        - Discharge
                      </button>
                      <button
                        onClick={() => toggleBed(ward.id, 1)}
                        disabled={ward.occupied >= ward.total}
                        className="px-2 py-0.5 text-xs bg-blue-700 hover:bg-blue-600 disabled:opacity-30 rounded text-white"
                        title="Admit Patient"
                      >
                        + Admit
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">
              <div className="text-slate-400">Total System Beds</div>
              <div className="text-base font-bold font-mono text-white mt-0.5">87</div>
            </div>
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">
              <div className="text-slate-400">Active Inpatients</div>
              <div className="text-base font-bold font-mono text-blue-400 mt-0.5">
                {wards.reduce((acc, w) => acc + w.occupied, 0)}
              </div>
            </div>
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">
              <div className="text-slate-400">Available Beds</div>
              <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">
                {wards.reduce((acc, w) => acc + (w.total - w.occupied), 0)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
