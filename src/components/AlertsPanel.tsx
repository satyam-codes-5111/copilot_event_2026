import React from 'react';
import { EnergyAlertItem } from '../types/energy';
import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AlertsPanelProps {
  alerts: EnergyAlertItem[];
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts }) => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between">
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-600">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Energy Alerts & Thresholds
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Active ambient warnings and grid balance signals
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700 shrink-0">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>{alerts.length} Active</span>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-xl border transition-all duration-150 ${
              alert.level === 'warning'
                ? 'bg-amber-50/60 border-amber-200 border-l-4 border-l-amber-500 hover:bg-amber-50'
                : 'bg-cyan-50/60 border-cyan-200 border-l-4 border-l-cyan-500 hover:bg-cyan-50'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                {alert.level === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                )}
                <h4
                  className={`text-xs sm:text-sm font-bold ${
                    alert.level === 'warning' ? 'text-amber-950' : 'text-cyan-950'
                  }`}
                >
                  {alert.title}
                </h4>
              </div>
              <span
                className={`text-[11px] font-mono font-semibold ${
                  alert.level === 'warning' ? 'text-amber-800' : 'text-cyan-800'
                }`}
              >
                {alert.time}
              </span>
            </div>
            <p
              className={`text-xs leading-relaxed pl-6 ${
                alert.level === 'warning' ? 'text-amber-900' : 'text-cyan-900'
              }`}
            >
              {alert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
