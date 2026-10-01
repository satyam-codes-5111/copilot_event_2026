import React from 'react';
import { Thermometer } from 'lucide-react';

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
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
      {/* Arctic Atmosphere Background */}
      <div className="relative h-[270px] sm:h-[360px] md:h-[400px] w-full overflow-hidden select-none">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#09152e] to-[#0e2142]" />

        {/* Soft Aurora Borealis Glow */}
        <div
          className="absolute -top-10 left-1/3 w-[500px] h-[180px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)',
          }}
        />

        {/* Distant Antarctic Mountain Ridge (SVG) */}
        <svg
          viewBox="0 0 1200 400"
          className="absolute bottom-14 sm:bottom-16 left-0 w-full h-auto opacity-40 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,320 L100,260 L220,300 L340,220 L460,290 L580,200 L700,270 L840,180 L980,250 L1100,210 L1200,280 L1200,400 L0,400 Z"
            fill="#0f2142"
          />
          <path
            d="M0,340 L150,290 L270,330 L400,270 L520,310 L650,240 L790,300 L920,230 L1050,290 L1200,250 L1200,400 L0,400 Z"
            fill="#132a54"
          />
        </svg>

        {/* Ice Shelf Plains */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t from-slate-950 via-[#0e2140] to-transparent" />

        {/* Polar Research Station Schematic Visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 900 420" className="w-full h-full max-w-4xl" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="domeGradSimple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="solarGradSimple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#075985" />
              </linearGradient>
            </defs>

            {/* Micro Wind Turbines (Left) */}
            <g transform="translate(160, 180)">
              <line x1="0" y1="0" x2="0" y2="130" stroke="#94a3b8" strokeWidth="3" />
              <circle cx="0" cy="0" r="5" fill="#38bdf8" />
              <line x1="0" y1="0" x2="0" y2="-40" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="0" x2="35" y2="20" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-35" y2="20" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <text x="0" y="150" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
                Turbines ({windKw} kW)
              </text>
            </g>

            {/* Central Geodesic Habitat Station */}
            <g transform="translate(450, 270)">
              {/* Support Stilts */}
              <line x1="-80" y1="30" x2="-80" y2="65" stroke="#475569" strokeWidth="4" />
              <line x1="-25" y1="35" x2="-25" y2="65" stroke="#475569" strokeWidth="4" />
              <line x1="25" y1="35" x2="25" y2="65" stroke="#475569" strokeWidth="4" />
              <line x1="80" y1="30" x2="80" y2="65" stroke="#475569" strokeWidth="4" />

              {/* Station Base Platform */}
              <rect x="-100" y="28" width="200" height="10" rx="3" fill="#334155" stroke="#38bdf8" strokeWidth="1" />

              {/* Station Dome */}
              <path d="M -75 28 C -75 -35, 75 -35, 75 28 Z" fill="url(#domeGradSimple)" stroke="#38bdf8" strokeWidth="2" />
              <path d="M -55 28 L -35 -10 L 35 -10 L 55 28" fill="none" stroke="#7dd3fc" strokeWidth="1" opacity="0.6" />
              <line x1="0" y1="-30" x2="0" y2="28" stroke="#7dd3fc" strokeWidth="1" opacity="0.5" />

              {/* Glowing Warm Station Windows */}
              <rect x="-24" y="2" width="12" height="8" rx="2" fill="#fef08a" opacity="0.9" />
              <rect x="-4" y="2" width="12" height="8" rx="2" fill="#fef08a" opacity="0.9" />
              <rect x="16" y="2" width="12" height="8" rx="2" fill="#fef08a" opacity="0.9" />

              <text x="0" y="55" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace">
                Polar Research Outpost
              </text>
            </g>

            {/* Solar Panel Array (Right) */}
            <g transform="translate(680, 240)">
              <g transform="rotate(-15)">
                <rect x="0" y="0" width="70" height="30" rx="2" fill="url(#solarGradSimple)" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="23" y1="0" x2="23" y2="30" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="46" y1="0" x2="46" y2="30" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="0" y1="15" x2="70" y2="15" stroke="#0ea5e9" strokeWidth="1" />
              </g>
              <line x1="30" y1="18" x2="30" y2="60" stroke="#64748b" strokeWidth="3" />

              <g transform="translate(60, 20) rotate(-15)">
                <rect x="0" y="0" width="70" height="30" rx="2" fill="url(#solarGradSimple)" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="23" y1="0" x2="23" y2="30" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="46" y1="0" x2="46" y2="30" stroke="#0ea5e9" strokeWidth="1" />
                <line x1="0" y1="15" x2="70" y2="15" stroke="#0ea5e9" strokeWidth="1" />
              </g>
              <line x1="90" y1="38" x2="90" y2="80" stroke="#64748b" strokeWidth="3" />

              <text x="60" y="105" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace">
                Solar Arrays ({solarKw} kW)
              </text>
            </g>
          </svg>
        </div>

        {/* Clean Station Status Bar */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs text-slate-300 pointer-events-none">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-800 self-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-medium text-slate-200">Remote Polar Station</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="font-mono text-slate-400 hidden sm:inline">Microgrid System</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-800 font-mono text-[11px] self-start sm:self-auto">
            <span className="flex items-center gap-1 text-cyan-300">
              <Thermometer className="w-3 h-3 shrink-0" />
              <span>{temperature}°C</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-400">Solar {solarKw} kW</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-400">Wind {windKw} kW</span>
            <span className="text-slate-600">·</span>
            <span className="text-sky-400">Battery {batteryPct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
