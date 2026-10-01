export interface StationMetrics {
  temperature: number; // -28°C
  energyConsumption: number; // 72 kW
  solarGeneration: number; // 31 kW
  windGeneration: number; // 18 kW
  batteryLevel: number; // 78%
  predictedDemand: number; // 84 kW
}

export interface HourlyConsumptionPoint {
  time: string;
  consumption: number;
  solar: number;
  wind: number;
}

export interface PredictionPoint {
  time: string;
  actual?: number;
  predicted: number;
}

export interface AiInsightItem {
  id: string;
  message: string;
  category: 'demand' | 'battery' | 'heating' | 'renewable';
}

export interface EnergyAlertItem {
  id: string;
  level: 'warning' | 'info';
  title: string;
  description: string;
  time: string;
}
