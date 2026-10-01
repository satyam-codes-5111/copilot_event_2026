import React from 'react';
import { PolarStationVisual } from './PolarStationVisual';
import {
  Cpu,
  Sun,
  Battery,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Wind,
  Thermometer,
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
    <div className="min-h-screen bg-[#071126] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-12 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Arctic Radial Glow in Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.4) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-8 sm:mb-12">
            {/* Scientific Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-mono text-cyan-300 mb-4 tracking-wider uppercase shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>Polar Microgrid Control · Autonomous AI</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5 [text-wrap:balance]">
              AI-Driven Smart Energy for Remote{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">
                Polar Research Stations
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              An intelligent energy management platform orchestrating clean power generation, predictive load balancing, and battery storage resilience through sub-zero Antarctic weather conditions.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onViewDashboard}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-xl transition-all shadow-lg shadow-cyan-500/25 whitespace-nowrap cursor-pointer"
              >
                <span>Open Control Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-all whitespace-nowrap"
              >
                <span>System Capabilities</span>
              </a>
            </div>
          </div>

          {/* High-Fidelity Polar Research Station Artwork */}
          <div className="w-full">
            <PolarStationVisual
              temperature={temperature}
              solarKw={solarKw}
              windKw={windKw}
              batteryPct={batteryPct}
            />
          </div>

          {/* Clean White/Light Metric Overview Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-6 sm:mt-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/10 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                <span>Exterior Temp</span>
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600">
                  <Thermometer className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 tabular-nums">
                {temperature}°C
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Polar ambient sensor</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/10 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                <span>Current Load</span>
                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                  <Zap className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 tabular-nums">
                {consumptionKw}{' '}
                <span className="text-xs font-mono font-semibold text-slate-500">kW</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Station consumption</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/10 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                <span>Renewable Yield</span>
                <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                  <Sun className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600 tabular-nums">
                {solarKw + windKw}{' '}
                <span className="text-xs font-mono font-semibold text-slate-500">kW</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Solar {solarKw} kW + Wind {windKw} kW</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/10 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                <span>Battery Reserve</span>
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-sky-600 tabular-nums">
                {batteryPct}%
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>Li-FePO4 thermal buffer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section id="features" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-3 tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5" />
            <span>Architecture & Features</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Intelligent Energy Systems Built for Extreme Arctic Environments
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Engineered to continuously prevent power failure, optimize thermal buffers, and maximize clean renewable harvest in isolated polar outposts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-5 shadow-xs">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Predictive Load Forecasting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Neural forecasting predicts electrical load curves 24 hours in advance, allowing habitat heating systems to pre-warm before blizzard temperature drops.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-cyan-700 gap-1.5">
              <span>Next 3h Peak Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5 shadow-xs">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Hybrid Renewable Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Orchestrates bifacial polar photovoltaic arrays with arctic wind turbines, adjusting power dispatch dynamically as cloud cover and wind gusts shift.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700 gap-1.5">
              <span>Solar & Wind Dispatch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-5 shadow-xs">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Sub-Zero Storage Monitoring
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Monitors temperature-compensated battery discharge rates and cell health, preserving emergency reserve buffers for life-support systems.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-700 gap-1.5">
              <span>78% Storage State</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Autonomous AI Insights
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Generates continuous microgrid optimizations, such as shedding non-essential scientific experiments during weather warnings.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700 gap-1.5">
              <span>Actionable Alerts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 border-t border-slate-800/80 bg-[#060e22]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-3 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Closed-Loop Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              How the Polar Energy System Operates
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              A robust 3-stage feedback system ensuring zero blackout risk in extreme Antarctic research outposts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-600 mb-3 tracking-widest uppercase">
                  Step 01
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Continuous Telemetry Ingestion
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Sensors collect exterior air temperatures (-28°C), irradiance on polar photovoltaic arrays, and anemometer wind speed every second.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Data Stream: Live Telemetry
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-600 mb-3 tracking-widest uppercase">
                  Step 02
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Predictive Neural Modeling
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Machine learning algorithms calculate projected heating requirements, predicting peak demand spikes (84 kW) up to 24 hours ahead.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Inference: 24h Horizon
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md shadow-slate-950/5 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-600 mb-3 tracking-widest uppercase">
                  Step 03
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Autonomous Energy Dispatch
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The system delivers real-time recommendations to reduce thermal demand and switches between renewable arrays and battery reserves.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                Action: Automated Optimization
              </div>
            </div>
          </div>

          {/* Prominent Command Center CTA */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1630] to-slate-900 border border-cyan-800/60 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-300 mb-3">
                <span>POLARGRID COMMAND INTERFACE</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Launch the Smart Energy Dashboard
              </h3>
              <p className="text-xs sm:text-base text-slate-300 mt-2 leading-relaxed">
                Monitor live power curves, inspect the 24-hour predictive forecast, and review simulated AI recommendations.
              </p>
            </div>
            <button
              type="button"
              onClick={onViewDashboard}
              className="px-7 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-xl transition-all shadow-lg shadow-cyan-500/30 whitespace-nowrap self-stretch sm:self-auto text-center cursor-pointer"
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Clean Scientific Footer */}
      <footer className="py-8 border-t border-slate-800/80 bg-[#050b1a] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-white tracking-tight">PolarGrid AI</span>
            <span className="text-slate-600">·</span>
            <span>Remote Polar Station Energy Management System</span>
          </div>
          <div className="font-mono text-slate-500">
            Frontend Scientific Prototype · Antarctic Energy Console
          </div>
        </div>
      </footer>
    </div>
  );
};
