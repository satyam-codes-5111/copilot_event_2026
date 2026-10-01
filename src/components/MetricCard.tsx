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
  const accentClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/5',
      bar: 'bg-cyan-400',
      iconBg: 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/60',
    },
    amber: {
      border: 'border-amber-500/30',
      bgGlow: 'bg-amber-500/5',
      bar: 'bg-amber-400',
      iconBg: 'bg-amber-950/60 text-amber-400 border border-amber-800/60',
    },
    emerald: {
      border: 'border-emerald-500/30',
      bgGlow: 'bg-emerald-500/5',
      bar: 'bg-emerald-400',
      iconBg: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60',
    },
    blue: {
      border: 'border-sky-500/30',
      bgGlow: 'bg-sky-500/5',
      bar: 'bg-sky-400',
      iconBg: 'bg-sky-950/60 text-sky-400 border border-sky-800/60',
    },
    rose: {
      border: 'border-rose-500/30',
      bgGlow: 'bg-rose-500/5',
      bar: 'bg-rose-400',
      iconBg: 'bg-rose-950/60 text-rose-400 border border-rose-800/60',
    },
  }[accentColor];

  return (
    <div
      className={`min-w-0 p-4 sm:p-5 rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-colors hover:border-slate-700 flex flex-col justify-between ${
        highlight ? `${accentClasses.border} ${accentClasses.bgGlow}` : 'border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[11px] sm:text-xs font-medium text-slate-400 tracking-wide uppercase truncate">
            {label}
          </span>
          <div className={`p-1.5 sm:p-2 rounded-lg ${accentClasses.iconBg} shrink-0`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-baseline mt-1 mb-2">
          <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-slate-100 tabular-nums">
            {value}
          </span>
          {unit && (
            <span className="text-xs font-mono font-medium text-slate-400 ml-1.5 uppercase">
              {unit}
            </span>
          )}
        </div>
      </div>

      <div>
        {progressPct !== undefined && (
          <div className="w-full bg-slate-800/90 rounded-full h-1.5 mb-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${accentClasses.bar}`}
              style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
            />
          </div>
        )}

        {subtext && (
          <div className="text-[11px] sm:text-xs text-slate-400 truncate">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
