// Types for strategy modes and bandit arms

export type StrategyMode =
  | 'low_risk'
  | 'medium_risk'
  | 'high_risk'
  | 'price_driven'
  | 'sentiment_driven'
  | 'news_driven'
  | 'scalp'
  | 'swing'
  | 'long_term';

export interface BanditArm {
  mode: StrategyMode;
  count: number;
  totalReward: number;
  meanReward: number;
  // Add more stats as needed
}

export interface BanditStats {
  arms: BanditArm[];
  lastSelected?: StrategyMode;
}
