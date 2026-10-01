import React from 'react';
import { AiInsightItem } from '../types/energy';
import { Sparkles, TrendingUp, BatteryCharging, Flame, Sun } from 'lucide-react';

interface AiInsightsPanelProps {
  insights: AiInsightItem[];
}

export const AiInsightsPanel: React.FC<AiInsightsPanelProps> = ({ insights }) => {
  const getIcon = (category: AiInsightItem['category']) => {
    switch (category) {
      case 'demand':
        return <TrendingUp className="w-4 h-4 text-amber-400" />;
      case 'battery':
        return <BatteryCharging className="w-4 h-4 text-emerald-400" />;
      case 'heating':
        return <Flame className="w-4 h-4 text-cyan-400" />;
      case 'renewable':
        return <Sun className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <h3 className="text-base sm:text-lg font-semibold text-slate-100">
          AI Insights & Recommendations
        </h3>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
          >
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
              {getIcon(insight.category)}
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
              {insight.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
