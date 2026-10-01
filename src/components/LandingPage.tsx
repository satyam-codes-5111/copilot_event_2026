import React from 'react';
import { PolarStationVisual } from './PolarStationVisual';
import {
  Cpu,
  Sun,
  Wind,
  Battery,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface LandingPageProps {
  onViewDashboard: () => void;
  temperature: number;
  solarKw: number;
  windKw: number;
  batteryPct: number;
  consumptionKw: number;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onViewDashboard,
  temperature,
  solarKw,
  windKw,
  batteryPct,
  consumptionKw,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-10 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 tracking-wider uppercase">
              <span>Polar Research Station</span>
              <span className="text-slate-600">·</span>
              <span>Smart Energy System</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight mb-4 [text-wrap:balance]">
              AI-Driven Smart Energy Management System for Polar Research Stations
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              An intelligent energy management prototype demonstrating how AI monitors and balances consumption, solar and wind generation, battery storage, and temperature in remote polar research environments.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onViewDashboard}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-xl transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap"
              >
                <span>View Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                className="px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Polar Research Station Visual */}
          <div className="w-full">
            <PolarStationVisual
              temperature={temperature}
              solarKw={solarKw}
              windKw={windKw}
              batteryPct={batteryPct}
            />
          </div>

          {/* Clean Metric Overview Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800 text-left">
            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-900/40 sm:bg-transparent border sm:border-0 border-slate-800">
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-mono mb-0.5 sm:mb-1">
                Temperature
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-slate-100">
                {temperature}°C
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Polar ambient reading
              </div>
            </div>

            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-900/40 sm:bg-transparent border sm:border-0 border-slate-800">
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-mono mb-0.5 sm:mb-1">
                Energy Consumption
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-slate-100">
                {consumptionKw} <span className="text-xs font-mono text-slate-400">kW</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Current station load
              </div>
            </div>

            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-900/40 sm:bg-transparent border sm:border-0 border-slate-800">
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-mono mb-0.5 sm:mb-1">
                Renewable Generation
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                {solarKw + windKw} <span className="text-xs font-mono text-slate-400">kW</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Solar ({solarKw} kW) + Wind ({windKw} kW)
              </div>
            </div>

            <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-slate-900/40 sm:bg-transparent border sm:border-0 border-slate-800">
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase font-mono mb-0.5 sm:mb-1">
                Battery Level
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-sky-400">
                {batteryPct}%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Reserve capacity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
            <span>Key Features</span>
            <span className="text-slate-600">·</span>
            <span>Intelligent Outpost</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-100 [text-wrap:balance]">
            Key Capabilities of the Polar Smart Energy System
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
            Essential tools for monitoring energy balance and keeping polar stations powered through freezing conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-2">
                Predictive Demand Forecasting
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Predicts future electrical demand 24 hours in advance to prepare for temperature drops and weather shifts.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400 mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-2">
                Solar & Wind Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Monitors real-time output from polar solar arrays and arctic wind turbines to maximize clean energy utilization.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-sky-400 mb-4">
                <Battery className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-2">
                Battery Storage Tracking
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tracks state-of-charge and reserve buffer to maintain uninterrupted power during renewable lulls.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-2">
                AI Insights & Alerts
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Provides recommendations to reduce heating load and sends early notices when temperatures dip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple "How It Works" Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-slate-800 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
              <span>Workflow</span>
              <span className="text-slate-600">·</span>
              <span>Simple Architecture</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-100 [text-wrap:balance]">
              How It Works
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
              A 3-step closed-loop system designed for reliability in remote polar environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-2 sm:mb-3">
                STEP 01
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-200 mb-1.5 sm:mb-2">
                Real-Time Telemetry
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sensors continuously collect data on ambient temperature (-28°C), solar output, turbine rotation, and station load.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-2 sm:mb-3">
                STEP 02
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-200 mb-1.5 sm:mb-2">
                AI Demand Prediction
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Machine learning models correlate outside temperatures with heating demands to forecast energy consumption curves.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl border border-slate-800 bg-slate-900/50">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-2 sm:mb-3">
                STEP 03
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-200 mb-1.5 sm:mb-2">
                Smart Recommendations
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                The system delivers actionable suggestions such as reducing non-priority heating loads to safeguard battery life.
              </p>
            </div>
          </div>

          {/* Clean Dashboard CTA */}
          <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100">
                Ready to explore the prototype?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Open the Smart Energy Dashboard to view live charts and simulated AI insights.
              </p>
            </div>
            <button
              type="button"
              onClick={onViewDashboard}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap self-stretch sm:self-auto text-center"
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="py-6 border-t border-slate-800/80 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">PolarGrid AI</span>
            <span>·</span>
            <span>Polar Research Station Energy Management</span>
          </div>
          <div>Frontend Web Prototype</div>
        </div>
      </footer>
    </div>
  );
};
