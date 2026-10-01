import {
  StationMetrics,
  HourlyConsumptionPoint,
  PredictionPoint,
  AiInsightItem,
  EnergyAlertItem,
} from '../types/energy';

export const STATION_METRICS: StationMetrics = {
  temperature: -28,
  energyConsumption: 72,
  solarGeneration: 31,
  windGeneration: 18,
  batteryLevel: 78,
  predictedDemand: 84,
};

export const CONSUMPTION_HISTORY: HourlyConsumptionPoint[] = [
  { time: '00:00', consumption: 58, solar: 2, wind: 22 },
  { time: '03:00', consumption: 56, solar: 6, wind: 20 },
  { time: '06:00', consumption: 64, solar: 16, wind: 19 },
  { time: '09:00', consumption: 71, solar: 28, wind: 17 },
  { time: '12:00', consumption: 76, solar: 35, wind: 20 },
  { time: '15:00', consumption: 72, solar: 31, wind: 18 }, // Current
  { time: '18:00', consumption: 82, solar: 12, wind: 24 },
  { time: '21:00', consumption: 74, solar: 3, wind: 25 },
];

export const PREDICTION_24H: PredictionPoint[] = [
  { time: '12:00', actual: 76, predicted: 75 },
  { time: '14:00', actual: 72, predicted: 73 },
  { time: '16:00', actual: 74, predicted: 75 },
  { time: '18:00', predicted: 84 }, // +3h peak
  { time: '20:00', predicted: 81 },
  { time: '22:00', predicted: 70 },
  { time: '02:00', predicted: 58 },
  { time: '06:00', predicted: 65 },
  { time: '10:00', predicted: 73 },
  { time: '14:00', predicted: 71 },
];

export const AI_INSIGHTS: AiInsightItem[] = [
  {
    id: 'ins-1',
    message: 'Energy demand is expected to increase in the next 3 hours.',
    category: 'demand',
  },
  {
    id: 'ins-2',
    message: 'Battery level is currently healthy.',
    category: 'battery',
  },
  {
    id: 'ins-3',
    message: 'Reduce heating load during low-priority periods.',
    category: 'heating',
  },
  {
    id: 'ins-4',
    message: 'Renewable energy generation is currently stable.',
    category: 'renewable',
  },
];

export const ENERGY_ALERTS: EnergyAlertItem[] = [
  {
    id: 'alt-1',
    level: 'warning',
    title: 'Low Ambient Temperature Notice',
    description: 'Outside temperature is -28°C. Station thermal heating systems are active.',
    time: '14:15 UTC',
  },
  {
    id: 'alt-2',
    level: 'info',
    title: 'Renewable Mix Optimal',
    description: 'Solar and wind arrays currently supply 49 kW (68%) of station load.',
    time: '13:50 UTC',
  },
];
