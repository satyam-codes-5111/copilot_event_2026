import React from 'react';
import { EnergyAlertItem } from '../types/energy';
import { Bell, AlertTriangle, Info } from 'lucide-react';

interface AlertsPanelProps {
  alerts: EnergyAlertItem[];
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts }) => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-cyan-400" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Energy Alerts
          </h3>
        </div>
        <span className="text-xs font-mono text-slate-400">
          {alerts.length} Active
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3.5 rounded-xl border ${
              alert.level === 'warning'
                ? 'bg-amber-950/20 border-amber-500/30'
                : 'bg-slate-950/60 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                {alert.level === 'warning' ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                ) : (
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                )}
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                  {alert.title}
                </h4>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {alert.time}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-5">
              {alert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
