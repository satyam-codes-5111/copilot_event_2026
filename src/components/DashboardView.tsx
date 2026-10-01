import React from 'react';
import {
  StationMetrics,
  HourlyConsumptionPoint,
  PredictionPoint,
  AiInsightItem,
  EnergyAlertItem,
} from '../types/energy';
import { MetricCard } from './MetricCard';
import { EnergyCharts } from './EnergyCharts';
import { AiInsightsPanel } from './AiInsightsPanel';
import { AlertsPanel } from './AlertsPanel';
import {
  Zap,
  BatteryCharging,
  Sun,
  Wind,
  Thermometer,
  TrendingUp,
  Radio,
  Clock,
} from 'lucide-react';

interface DashboardViewProps {
  metrics: StationMetrics;
  consumptionData: HourlyConsumptionPoint[];
  predictionData: PredictionPoint[];
  insights: AiInsightItem[];
  alerts: EnergyAlertItem[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  metrics,
  consumptionData,
  predictionData,
  insights,
  alerts,
}) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-cyan-500/20 selection:text-cyan-800">
      {/* Scientific Sub-Header / Telemetry Banner */}
      <div className="border-b border-slate-200 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Polar Station Smart Energy Console
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 flex flex-wrap items-center gap-2">
              <span>Antarctic Outpost Microgrid</span>
              <span className="text-slate-300">·</span>
              <span className="font-mono text-cyan-700 font-semibold">Autonomous Power Balancing</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">Station Coordinates: 77°51'S, 166°40'E</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>15:00 UTC Active</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-xs font-semibold">
              <Radio className="w-3.5 h-3.5 text-emerald-600" />
              <span>Grid Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8 bg-white">
        {/* Six Primary Energy Metric Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Real-Time Outpost Telemetry
            </h2>
            <span className="text-xs font-mono text-cyan-700 font-semibold">Updated: Live</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {/* 1. Station Temperature */}
            <MetricCard
              label="Station Temp"
              value={metrics.temperature}
              unit="°C"
              subtext="Exterior Air Sensor"
              icon={Thermometer}
              accentColor="cyan"
            />

            {/* 2. Current Energy Consumption */}
            <MetricCard
              label="Energy Consumption"
              value={metrics.energyConsumption}
              unit="kW"
              subtext="Current Station Load"
              progressPct={(metrics.energyConsumption / 100) * 100}
              icon={Zap}
              accentColor="rose"
            />

            {/* 3. Solar Energy Generation */}
            <MetricCard
              label="Solar Generation"
              value={metrics.solarGeneration}
              unit="kW"
              subtext="Bifacial Array Output"
              progressPct={(metrics.solarGeneration / 50) * 100}
              icon={Sun}
              accentColor="amber"
            />

            {/* 4. Wind Energy Generation */}
            <MetricCard
              label="Wind Generation"
              value={metrics.windGeneration}
              unit="kW"
              subtext="Turbine Generation"
              progressPct={(metrics.windGeneration / 40) * 100}
              icon={Wind}
              accentColor="cyan"
            />

            {/* 5. Battery Level */}
            <MetricCard
              label="Battery Level"
              value={metrics.batteryLevel}
              unit="%"
              subtext="Reserve Storage"
              progressPct={metrics.batteryLevel}
              icon={BatteryCharging}
              accentColor="blue"
            />

            {/* 6. AI Predicted Demand */}
            <MetricCard
              label="Predicted Demand"
              value={metrics.predictedDemand}
              unit="kW"
              subtext="Next 3h Peak Load"
              icon={TrendingUp}
              accentColor="amber"
              highlight={true}
            />
          </div>
        </div>

        {/* Energy Charts: Consumption Area Chart & 24h Prediction Line Chart */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Power Curves & Neural Forecasting
            </h2>
            <span className="text-xs font-mono text-slate-500">24-Hour Observation Window</span>
          </div>

          <EnergyCharts
            consumptionData={consumptionData}
            predictionData={predictionData}
          />
        </div>

        {/* AI Recommendations & Energy Alerts Panels */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Autonomous Intelligence & Signal Monitoring
            </h2>
            <span className="text-xs font-mono text-emerald-700 font-semibold">Optimal Grid Equilibrium</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AiInsightsPanel insights={insights} />
            <AlertsPanel alerts={alerts} />
          </div>
        </div>
      </div>
    </div>
  );
};
