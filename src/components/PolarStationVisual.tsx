import React from 'react';
import { Thermometer, Wind, Sun, BatteryCharging, Radio } from 'lucide-react';

interface PolarStationVisualProps {
  temperature?: number;
  solarKw?: number;
  windKw?: number;
  batteryPct?: number;
}

export const PolarStationVisual: React.FC<PolarStationVisualProps> = ({
  temperature = -28,
  solarKw = 31,
  windKw = 18,
  batteryPct = 78,
}) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-900/40 bg-[#060e22] shadow-2xl">
      {/* Arctic Atmosphere Canvas */}
      <div className="relative h-[290px] sm:h-[380px] md:h-[420px] w-full overflow-hidden select-none">
        {/* Deep Polar Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030714] via-[#06122d] to-[#0b1f48]" />

        {/* Dynamic Aurora Waves */}
        <div
          className="absolute -top-16 left-1/4 w-[600px] h-[220px] rounded-full opacity-40 blur-3xl pointer-events-none animate-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.45) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 70%)',
            animationDuration: '6s',
          }}
        />
        <div
          className="absolute top-2 right-1/4 w-[450px] h-[160px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
          }}
        />

        {/* Distant Arctic Stars */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-6 left-12 w-1 h-1 bg-white rounded-full opacity-80" />
          <div className="absolute top-14 left-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-90" />
          <div className="absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full opacity-70" />
          <div className="absolute top-20 right-16 w-1 h-1 bg-sky-300 rounded-full opacity-80" />
          <div className="absolute top-28 left-1/5 w-1 h-1 bg-white rounded-full opacity-60" />
        </div>

        {/* Layer 1: Distant Glacier Peaks */}
        <svg
          viewBox="0 0 1200 400"
          className="absolute bottom-16 sm:bottom-20 left-0 w-full h-auto opacity-35 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,280 L120,220 L240,270 L380,180 L520,260 L660,160 L800,240 L940,150 L1080,230 L1200,190 L1200,400 L0,400 Z"
            fill="#091b3b"
          />
        </svg>

        {/* Layer 2: Midground Antarctic Crevasses */}
        <svg
          viewBox="0 0 1200 400"
          className="absolute bottom-10 sm:bottom-12 left-0 w-full h-auto opacity-60 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,320 L160,260 L300,300 L440,240 L580,290 L720,220 L860,280 L1000,210 L1120,270 L1200,240 L1200,400 L0,400 Z"
            fill="#0d244f"
          />
          <path
            d="M0,350 L180,310 L340,330 L480,290 L640,320 L800,270 L960,320 L1100,280 L1200,300 L1200,400 L0,400 Z"
            fill="#122f66"
          />
        </svg>

        {/* Ice Shelf Ground Plains */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-[#060f24] via-[#0d224d] to-transparent" />

        {/* Scientific Polar Research Station Outpost (High-Precision SVG) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 960 440" className="w-full h-full max-w-5xl" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="domeGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#0369a1" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#082f49" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="solarCellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="panelFrameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>

            {/* Micro Wind Turbines (Left Flank) */}
            <g transform="translate(170, 190)">
              {/* Mast 1 */}
              <line x1="0" y1="0" x2="0" y2="135" stroke="#94a3b8" strokeWidth="3.5" />
              <line x1="-12" y1="135" x2="12" y2="135" stroke="#64748b" strokeWidth="3" />
              {/* Hub */}
              <circle cx="0" cy="0" r="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              {/* Rotating Blades */}
              <line x1="0" y1="0" x2="0" y2="-44" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="0" x2="38" y2="22" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-38" y2="22" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
              <text x="0" y="155" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                Wind Turbines ({windKw} kW)
              </text>
            </g>

            {/* Smaller Secondary Turbine (Deep perspective) */}
            <g transform="translate(100, 220) scale(0.65)">
              <line x1="0" y1="0" x2="0" y2="120" stroke="#64748b" strokeWidth="3" />
              <circle cx="0" cy="0" r="5" fill="#0284c7" />
              <line x1="0" y1="0" x2="0" y2="-38" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="0" x2="32" y2="18" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-32" y2="18" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Central Geodesic Polar Research Habitat Outpost */}
            <g transform="translate(480, 275)">
              {/* Hydraulic Elevating Stilts (Protects against drifting snow) */}
              <line x1="-95" y1="30" x2="-95" y2="75" stroke="#475569" strokeWidth="5" />
              <line x1="-35" y1="35" x2="-35" y2="75" stroke="#475569" strokeWidth="5" />
              <line x1="35" y1="35" x2="35" y2="75" stroke="#475569" strokeWidth="5" />
              <line x1="95" y1="30" x2="95" y2="75" stroke="#475569" strokeWidth="5" />
              {/* Foundation Pads */}
              <rect x="-105" y="73" width="20" height="6" rx="2" fill="#334155" />
              <rect x="-45" y="73" width="20" height="6" rx="2" fill="#334155" />
              <rect x="25" y="73" width="20" height="6" rx="2" fill="#334155" />
              <rect x="85" y="73" width="20" height="6" rx="2" fill="#334155" />

              {/* Station Base Hull */}
              <rect x="-120" y="28" width="240" height="12" rx="4" fill="url(#panelFrameGrad)" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Main Geodesic Biosphere Dome */}
              <path
                d="M -90 28 C -90 -45, 90 -45, 90 28 Z"
                fill="url(#domeGlowGrad)"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              {/* Faceted Structural Framework Lines */}
              <path d="M -70 28 L -45 -18 L 45 -18 L 70 28" fill="none" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.7" />
              <line x1="0" y1="-42" x2="0" y2="28" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.7" />
              <line x1="-45" y1="-18" x2="0" y2="-42" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.7" />
              <line x1="45" y1="-18" x2="0" y2="-42" stroke="#7dd3fc" strokeWidth="1.2" opacity="0.7" />

              {/* Communications Mast & Sensor Array on Top of Dome */}
              <line x1="0" y1="-42" x2="0" y2="-75" stroke="#94a3b8" strokeWidth="2.5" />
              <circle cx="0" cy="-77" r="3.5" fill="#f43f5e" />
              <line x1="-12" y1="-62" x2="12" y2="-62" stroke="#94a3b8" strokeWidth="2" />
              <line x1="-8" y1="-52" x2="8" y2="-52" stroke="#94a3b8" strokeWidth="2" />

              {/* Secondary Habitat Pod (Left Connector) */}
              <rect x="-160" y="10" width="55" height="20" rx="3" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
              <rect x="-152" y="15" width="10" height="8" rx="1.5" fill="#fef08a" opacity="0.8" />
              <rect x="-135" y="15" width="10" height="8" rx="1.5" fill="#fef08a" opacity="0.8" />
              <line x1="-140" y1="30" x2="-140" y2="70" stroke="#475569" strokeWidth="4" />

              {/* Warm Laboratory Observation Windows (Central Dome) */}
              <rect x="-30" y="0" width="15" height="10" rx="2" fill="#fef08a" opacity="0.95" />
              <rect x="-7" y="0" width="15" height="10" rx="2" fill="#fef08a" opacity="0.95" />
              <rect x="16" y="0" width="15" height="10" rx="2" fill="#fef08a" opacity="0.95" />

              {/* Research Station Title */}
              <text x="0" y="60" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                Polar Research Outpost
              </text>
            </g>

            {/* Bifacial Photovoltaic Solar Arrays (Right Flank) */}
            <g transform="translate(710, 240)">
              {/* Front Solar Panel Rack */}
              <g transform="rotate(-18)">
                <rect x="0" y="0" width="80" height="35" rx="3" fill="url(#solarCellGrad)" stroke="#38bdf8" strokeWidth="2" />
                <line x1="26" y1="0" x2="26" y2="35" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="53" y1="0" x2="53" y2="35" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="0" y1="17.5" x2="80" y2="17.5" stroke="#0ea5e9" strokeWidth="1.5" />
              </g>
              <line x1="35" y1="20" x2="35" y2="75" stroke="#64748b" strokeWidth="3.5" />
              <line x1="25" y1="75" x2="45" y2="75" stroke="#475569" strokeWidth="3" />

              {/* Offset Rear Solar Panel Rack */}
              <g transform="translate(65, 25) rotate(-18)">
                <rect x="0" y="0" width="80" height="35" rx="3" fill="url(#solarCellGrad)" stroke="#38bdf8" strokeWidth="2" />
                <line x1="26" y1="0" x2="26" y2="35" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="53" y1="0" x2="53" y2="35" stroke="#0ea5e9" strokeWidth="1.5" />
                <line x1="0" y1="17.5" x2="80" y2="17.5" stroke="#0ea5e9" strokeWidth="1.5" />
              </g>
              <line x1="100" y1="45" x2="100" y2="95" stroke="#64748b" strokeWidth="3.5" />
              <line x1="90" y1="95" x2="110" y2="95" stroke="#475569" strokeWidth="3" />

              <text x="65" y="125" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                Solar Arrays ({solarKw} kW)
              </text>
            </g>
          </svg>
        </div>

        {/* Floating Scientific Telemetry HUD Bar */}
        <div className="absolute top-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-200 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg self-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-white tracking-wide">Polar Outpost Grid</span>
            <span className="text-slate-600">·</span>
            <span className="font-mono text-cyan-300 text-[11px]">Autonomous Control</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg font-mono text-xs self-start sm:self-auto">
            <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <Thermometer className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              <span>{temperature}°C</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Sun className="w-3 h-3 text-amber-400" />
              <span>{solarKw} kW</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-sky-300">
              <Wind className="w-3 h-3 text-sky-400" />
              <span>{windKw} kW</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-emerald-300">
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
              <span>{batteryPct}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
