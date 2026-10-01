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
import { Zap, TrendingUp } from 'lucide-react';

interface EnergyChartsProps {
  consumptionData: HourlyConsumptionPoint[];
  predictionData: PredictionPoint[];
}

export const EnergyCharts: React.FC<EnergyChartsProps> = ({
  consumptionData,
  predictionData,
}) => {
  // Custom Dark Polar Glass Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2.5 sm:p-3 bg-slate-900/95 border border-slate-700 rounded-lg shadow-xl text-xs font-mono backdrop-blur-md">
          <div className="text-slate-300 font-semibold mb-1.5 border-b border-slate-800 pb-1 flex items-center justify-between gap-4">
            <span>{label}</span>
            <span className="text-[10px] text-slate-500 font-sans">Simulated Telemetry</span>
          </div>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="font-sans text-xs">{entry.name}:</span>
                </span>
                <span className="font-bold tabular-nums text-slate-100">
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
      {/* 1. Energy Consumption Chart */}
      <div className="min-w-0 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-semibold text-slate-100 truncate">
              Energy Consumption & Generation
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono shrink-0">
            Current: <strong className="text-slate-200">72 kW</strong>
          </span>
        </div>

        <div className="h-[250px] sm:h-[280px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={consumptionData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
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
                wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                iconType="circle"
              />
              <Area
                type="monotone"
                dataKey="consumption"
                name="Consumption"
                stroke="#38bdf8"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorConsumption)"
              />
              <Area
                type="monotone"
                dataKey="solar"
                name="Solar"
                stroke="#fbbf24"
                strokeWidth={2}
                fillOpacity={0}
              />
              <Area
                type="monotone"
                dataKey="wind"
                name="Wind"
                stroke="#06b6d4"
                strokeWidth={2}
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. 24-Hour Energy Prediction Chart */}
      <div className="min-w-0 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-semibold text-slate-100 truncate">
              24-Hour AI Energy Prediction
            </h3>
          </div>
          <span className="text-xs text-amber-400 font-mono shrink-0">
            Predicted Peak: <strong>84 kW</strong>
          </span>
        </div>

        <div className="h-[250px] sm:h-[280px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={predictionData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
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
                wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                iconType="circle"
              />
              <Line
                type="monotone"
                dataKey="actual"
                name="Actual Load"
                stroke="#38bdf8"
                strokeWidth={2.5}
                dot={{ fill: '#38bdf8', r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                name="AI Predicted Demand"
                stroke="#f59e0b"
                strokeWidth={2.5}
                strokeDasharray="4 4"
                dot={{ fill: '#f59e0b', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
