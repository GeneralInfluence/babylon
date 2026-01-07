import type { Bandit, BanditStats, StrategyMode } from './Bandit';

// Dummy UCB implementation for scaffolding
export class UCBBandit implements Bandit {
  select(stats: BanditStats, context?: Record<string, unknown>): StrategyMode {
    // Example: select arm with highest meanReward
    return stats.arms.reduce(
      (best, arm) => (arm.meanReward > best.meanReward ? arm : best),
      stats.arms[0]
    ).mode;
  }
  update(stats: BanditStats, mode: StrategyMode, reward: number): BanditStats {
    // Example: increment count and update meanReward
    const arms = stats.arms.map((arm) =>
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
