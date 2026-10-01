import React from 'react';
import { AiInsightItem } from '../types/energy';
import { Sparkles, TrendingUp, BatteryCharging, Flame, Sun } from 'lucide-react';

interface AiInsightsPanelProps {
  insights: AiInsightItem[];
}

export const AiInsightsPanel: React.FC<AiInsightsPanelProps> = ({ insights }) => {
  const getCategoryConfig = (category: AiInsightItem['category']) => {
    switch (category) {
      case 'demand':
        return {
          icon: <TrendingUp className="w-4 h-4 text-amber-600" />,
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
          cardHover: 'hover:border-amber-300',
          label: 'Demand Shift',
        };
      case 'battery':
        return {
          icon: <BatteryCharging className="w-4 h-4 text-emerald-600" />,
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          cardHover: 'hover:border-emerald-300',
          label: 'Storage Health',
        };
      case 'heating':
        return {
          icon: <Flame className="w-4 h-4 text-cyan-600" />,
          badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
          cardHover: 'hover:border-cyan-300',
          label: 'Thermal Efficiency',
        };
      case 'renewable':
        return {
          icon: <Sun className="w-4 h-4 text-sky-600" />,
          badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
          cardHover: 'hover:border-sky-300',
          label: 'Renewable Yield',
        };
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between">
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200/70 text-cyan-600">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              AI Insights & Recommendations
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Autonomous grid optimizations based on polar telemetry
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-semibold text-cyan-800 shrink-0">
          {insights.length} Recommendations
        </span>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => {
          const config = getCategoryConfig(insight.category);
          return (
            <div
              key={insight.id}
              className={`p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3.5 ${config.cardHover} hover:bg-white transition-all duration-150`}
            >
              <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs shrink-0 mt-0.5">
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${config.badgeBg}`}>
                    {config.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {insight.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
