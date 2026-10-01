import React from 'react';
import { LayoutDashboard, Home, Radio, Thermometer, BatteryCharging } from 'lucide-react';

interface NavigationProps {
  currentView: 'landing' | 'dashboard';
  onNavigate: (view: 'landing' | 'dashboard') => void;
  stationTemp?: number;
  batteryPct?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onNavigate,
  stationTemp = -28,
  batteryPct = 78,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/90 bg-[#071126]/92 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* Zone 1: Brand title */}
        <button
          type="button"
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 text-left group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl px-1 shrink-0 cursor-pointer"
          aria-label="Go to PolarGrid AI Home"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/25 group-hover:border-cyan-400 transition-all shrink-0 shadow-sm shadow-cyan-500/10">
            <Radio className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
            PolarGrid AI
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop & Tablet) */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className={`min-h-[44px] py-1 transition-colors flex items-center cursor-pointer relative ${
              currentView === 'landing'
                ? 'text-cyan-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-400 after:rounded-full'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className={`min-h-[44px] py-1 transition-colors flex items-center cursor-pointer relative ${
              currentView === 'dashboard'
                ? 'text-cyan-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-400 after:rounded-full'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Dashboard
          </button>
        </nav>

        {/* Zone 3: Primary Action & Quick Status */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Scientific Telemetry Status Ribbon */}
          <div className="hidden md:flex items-center gap-2.5 text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="flex items-center gap-1 text-cyan-300 font-bold">
              <Thermometer className="w-3 h-3 text-cyan-400" />
              <span>{stationTemp}°C</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-sky-300 font-bold">
              <BatteryCharging className="w-3 h-3 text-sky-400" />
              <span>{batteryPct}% Battery</span>
            </span>
          </div>

          {currentView === 'landing' ? (
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-xl transition-all shadow-md shadow-cyan-500/25 whitespace-nowrap cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all whitespace-nowrap cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-cyan-400" />
              <span>Home</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
