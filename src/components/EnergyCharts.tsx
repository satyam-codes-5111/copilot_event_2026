import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { HourlyConsumptionPoint, PredictionPoint } from '../types/energy';
import { Zap, TrendingUp, Activity } from 'lucide-react';

interface EnergyChartsProps {
  consumptionData: HourlyConsumptionPoint[];
  predictionData: PredictionPoint[];
}

export const EnergyCharts: React.FC<EnergyChartsProps> = ({
  consumptionData,
  predictionData,
}) => {
  // Precision Dark HUD Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-slate-900/95 border border-slate-700/80 rounded-xl shadow-2xl text-xs font-mono backdrop-blur-md">
          <div className="text-slate-300 font-bold mb-2 border-b border-slate-800 pb-1.5 flex items-center justify-between gap-4">
            <span className="text-cyan-300 font-semibold">{label} UTC</span>
            <span className="text-[10px] text-slate-400 font-sans tracking-wide uppercase">Telemetry</span>
          </div>
          <div className="space-y-1.5">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="font-sans text-xs font-medium text-slate-300">{entry.name}:</span>
                </span>
                <span className="font-bold font-mono tabular-nums text-white">
                  {entry.value} kW
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 1. Energy Consumption & Generation Area Chart */}
      <div className="min-w-0 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200/70 text-cyan-600 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Energy Consumption & Generation
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Continuous balance of power load vs renewable input
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto px-2.5 py-1 rounded-lg bg-slate-100/90 text-xs font-mono text-slate-700 font-semibold shrink-0">
            <Activity className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            <span>Load: 72 kW</span>
          </div>
        </div>

        <div className="h-[260px] sm:h-[290px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={consumptionData}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <defs>
                <linearGradient id="gradientConsumption" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
                minTickGap={10}
                fontFamily="monospace"
              />
              <YAxis
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
                unit=" kW"
                width={48}
                fontFamily="monospace"
                domain={[0, 95]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Area
                type="monotone"
                dataKey="consumption"
                name="Station Consumption"
                stroke="#0284c7"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#gradientConsumption)"
              />
              <Area
                type="monotone"
                dataKey="solar"
                name="Solar Generation"
                stroke="#f59e0b"
                strokeWidth={2}
                fillOpacity={0}
              />
              <Area
                type="monotone"
                dataKey="wind"
                name="Wind Turbines"
                stroke="#06b6d4"
                strokeWidth={2}
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. 24-Hour AI Energy Prediction Line Chart */}
      <div className="min-w-0 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-600 shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                24-Hour AI Energy Prediction
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Predictive neural network forecasting station thermal spikes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 self-start sm:self-auto px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-xs font-mono text-amber-800 font-semibold shrink-0">
            <span>Peak: 84 kW (+3h)</span>
          </div>
        </div>

        <div className="h-[260px] sm:h-[290px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={predictionData}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
                minTickGap={10}
                fontFamily="monospace"
              />
              <YAxis
                stroke="#64748b"
                fontSize={11}
                tickLine={false}
                unit=" kW"
                width={48}
                fontFamily="monospace"
                domain={[40, 95]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                iconType="circle"
              />
              <Line
                type="monotone"
                dataKey="actual"
                name="Actual Observed Load"
                stroke="#0284c7"
                strokeWidth={2.5}
                dot={{ fill: '#0284c7', r: 3.5, strokeWidth: 1, stroke: '#ffffff' }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                name="AI Predicted Demand"
                stroke="#d97706"
                strokeWidth={2.5}
                strokeDasharray="4 4"
                dot={{ fill: '#d97706', r: 3.5, strokeWidth: 1, stroke: '#ffffff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
