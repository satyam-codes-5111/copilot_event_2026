import React from 'react';
import { LayoutDashboard, Home, Radio } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand title */}
        <button
          type="button"
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 text-left group min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-1 shrink-0"
          aria-label="Go to PolarGrid AI Home"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shrink-0">
            <Radio className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
            PolarGrid AI
          </span>
        </button>

        {/* Zone 2: Navigation Links (Visible on tablets and desktops) */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className={`min-h-[40px] px-2 py-1 transition-colors flex items-center cursor-pointer ${
              currentView === 'landing'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className={`min-h-[40px] px-2 py-1 transition-colors flex items-center cursor-pointer ${
              currentView === 'dashboard'
                ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Dashboard
          </button>
        </nav>

        {/* Zone 3: Primary Action & Quick Status */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 border-r border-slate-800 pr-3">
            <span className="text-slate-300">{stationTemp}°C</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-400">{batteryPct}% Battery</span>
          </div>

          {currentView === 'landing' ? (
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[38px] text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-lg transition-all shadow-sm shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[38px] text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors whitespace-nowrap cursor-pointer"
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
