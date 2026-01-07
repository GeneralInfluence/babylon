import type { Bandit, BanditStats, StrategyMode } from './Bandit';

// Example StrategyRouter for developer reference
export class StrategyRouter {
  constructor(private bandit: Bandit) {}

  selectStrategy(
    stats: BanditStats,
    context?: Record<string, unknown>
  ): StrategyMode {
    return this.bandit.select(stats, context);
  }

  updateStrategy(
    stats: BanditStats,
    mode: StrategyMode,
    reward: number
  ): BanditStats {
    return this.bandit.update(stats, mode, reward);
  }
}

// --- Example usage for documentation / developer reference ---
/*
import { UCBBandit } from './UCB';
import { StrategyRouter } from './StrategyRouter';

const bandit = new UCBBandit();
const router = new StrategyRouter(bandit);

// Before agent decision
const stats: BanditStats = { arms: [
  { mode: 'low_risk', count: 10, totalReward: 50, meanReward: 5 },
  { mode: 'high_risk', count: 5, totalReward: 10, meanReward: 2 }
] };
const context = { volatility: 0.3 };
const selectedMode = router.selectStrategy(stats, context);

// After outcome
const updatedStats = router.updateStrategy(stats, selectedMode, 7);
*/
