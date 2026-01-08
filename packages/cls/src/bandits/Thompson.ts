import type { Bandit } from './Bandit';
import type { BanditStats, StrategyMode, BanditArm } from './types';

// Dummy Thompson Sampling implementation for scaffolding
export class ThompsonBandit implements Bandit {
  select(stats: BanditStats, _context?: Record<string, unknown>): StrategyMode {
    // Example: randomly select an arm (placeholder)
    const idx = Math.floor(Math.random() * stats.arms.length);
    return stats.arms[idx].mode;
  }
  update(stats: BanditStats, mode: StrategyMode, reward: number): BanditStats {
    // Example: increment count and update meanReward
    const arms = stats.arms.map((arm: BanditArm) =>
      arm.mode === mode
        ? {
            ...arm,
            count: arm.count + 1,
            totalReward: arm.totalReward + reward,
            meanReward: (arm.totalReward + reward) / (arm.count + 1),
          }
        : arm
    );
    return { ...stats, arms, lastSelected: mode };
  }
}
