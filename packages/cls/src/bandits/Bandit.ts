import type { BanditStats, StrategyMode } from './types';

export interface Bandit {
  select(stats: BanditStats, context?: Record<string, unknown>): StrategyMode;
  update(stats: BanditStats, mode: StrategyMode, reward: number): BanditStats;
}
