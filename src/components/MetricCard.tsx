import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  icon: LucideIcon;
  accentColor?: 'cyan' | 'amber' | 'emerald' | 'blue' | 'rose';
  highlight?: boolean;
  progressPct?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  subtext,
  icon: Icon,
  accentColor = 'cyan',
  highlight = false,
  progressPct,
}) => {
  const colorThemes = {
    cyan: {
      iconBg: 'bg-cyan-50 text-cyan-600 border border-cyan-200/80',
      bar: 'bg-gradient-to-r from-cyan-500 to-sky-400',
      accentDot: 'bg-cyan-500',
      highlightBorder: 'border-cyan-300 ring-2 ring-cyan-400/20',
    },
    amber: {
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/80',
      bar: 'bg-gradient-to-r from-amber-500 to-yellow-400',
      accentDot: 'bg-amber-500',
      highlightBorder: 'border-amber-300 ring-2 ring-amber-400/25',
    },
    emerald: {
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
      bar: 'bg-gradient-to-r from-emerald-500 to-teal-400',
      accentDot: 'bg-emerald-500',
      highlightBorder: 'border-emerald-300 ring-2 ring-emerald-400/20',
    },
    blue: {
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-200/80',
      bar: 'bg-gradient-to-r from-sky-500 to-blue-500',
      accentDot: 'bg-sky-500',
      highlightBorder: 'border-sky-300 ring-2 ring-sky-400/20',
    },
    rose: {
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-200/80',
      bar: 'bg-gradient-to-r from-rose-500 to-pink-500',
      accentDot: 'bg-rose-500',
      highlightBorder: 'border-rose-300 ring-2 ring-rose-400/20',
    },
  }[accentColor];

  return (
    <div
      className={`min-w-0 p-4 sm:p-5 rounded-2xl transition-all duration-200 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
        highlight
          ? `bg-white/98 border ${colorThemes.highlightBorder} shadow-amber-500/10`
          : 'bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-cyan-300/80 shadow-slate-950/5'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 truncate">
            {label}
          </span>
          <div className={`p-2 rounded-xl ${colorThemes.iconBg} shrink-0 transition-transform group-hover:scale-110`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline mb-2">
          <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-slate-900 tabular-nums">
            {value}
          </span>
          {unit && (
            <span className="text-xs font-mono font-bold text-slate-500 ml-1.5 uppercase">
              {unit}
            </span>
          )}
        </div>
      </div>

      <div className="mt-1">
        {progressPct !== undefined && (
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-500 ${colorThemes.bar}`}
              style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
            />
          </div>
        )}

        {subtext && (
          <div className="text-[11px] sm:text-xs text-slate-500 font-medium truncate flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${colorThemes.accentDot} shrink-0`} />
            <span className="truncate">{subtext}</span>
          </div>
        )}
      </div>
    </div>
  );
};
