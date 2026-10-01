/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { DashboardView } from './components/DashboardView';
import {
  STATION_METRICS,
  CONSUMPTION_HISTORY,
  PREDICTION_24H,
  AI_INSIGHTS,
  ENERGY_ALERTS,
} from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Responsive Navigation Bar */}
      <Navigation
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        stationTemp={STATION_METRICS.temperature}
        batteryPct={STATION_METRICS.batteryLevel}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'landing' ? (
          <LandingPage
            onViewDashboard={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            temperature={STATION_METRICS.temperature}
            solarKw={STATION_METRICS.solarGeneration}
            windKw={STATION_METRICS.windGeneration}
            batteryPct={STATION_METRICS.batteryLevel}
            consumptionKw={STATION_METRICS.energyConsumption}
          />
        ) : (
          <DashboardView
            metrics={STATION_METRICS}
            consumptionData={CONSUMPTION_HISTORY}
            predictionData={PREDICTION_24H}
            insights={AI_INSIGHTS}
            alerts={ENERGY_ALERTS}
          />
        )}
      </main>
    </div>
  );
}
