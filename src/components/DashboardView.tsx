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
  ThermometerSnowflake,
  TrendingUp,
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
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      {/* Dashboard Sub-Header */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-100">
                Polar Station Energy Dashboard
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">
              Live telemetry and simulated AI energy monitoring for remote polar research.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Status: <strong className="text-emerald-400 font-normal">Active</strong></span>
            <span>·</span>
            <span>Outpost Grid Online</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8 space-y-6 sm:space-y-8">
        {/* Primary Metric Cards Grid (6 cards required by prompt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {/* Station Temperature */}
          <MetricCard
            label="Station Temp"
            value={metrics.temperature}
            unit="°C"
            subtext="Exterior Air Sensor"
            icon={ThermometerSnowflake}
            accentColor="cyan"
          />

          {/* Current Energy Consumption */}
          <MetricCard
            label="Energy Consumption"
            value={metrics.energyConsumption}
            unit="kW"
            subtext="Current Station Load"
            progressPct={(metrics.energyConsumption / 100) * 100}
            icon={Zap}
            accentColor="rose"
          />

          {/* Solar Energy Generation */}
          <MetricCard
            label="Solar Generation"
            value={metrics.solarGeneration}
            unit="kW"
            subtext="Photovoltaic Yield"
            progressPct={(metrics.solarGeneration / 50) * 100}
            icon={Sun}
            accentColor="amber"
          />

          {/* Wind Energy Generation */}
          <MetricCard
            label="Wind Generation"
            value={metrics.windGeneration}
            unit="kW"
            subtext="Turbine Generation"
            progressPct={(metrics.windGeneration / 40) * 100}
            icon={Wind}
            accentColor="cyan"
          />

          {/* Battery Level */}
          <MetricCard
            label="Battery Level"
            value={metrics.batteryLevel}
            unit="%"
            subtext="Reserve Storage"
            progressPct={metrics.batteryLevel}
            icon={BatteryCharging}
            accentColor="blue"
          />

          {/* AI Predicted Demand */}
          <MetricCard
            label="Predicted Demand"
            value={metrics.predictedDemand}
            unit="kW"
            subtext="Next 3h Peak"
            icon={TrendingUp}
            accentColor="amber"
            highlight={true}
          />
        </div>

        {/* Charts: One Energy Consumption Chart + One 24-Hour Prediction Chart */}
        <EnergyCharts
          consumptionData={consumptionData}
          predictionData={predictionData}
        />

        {/* AI Insights & Energy Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AiInsightsPanel insights={insights} />
          <AlertsPanel alerts={alerts} />
        </div>
      </div>
    </div>
  );
};
