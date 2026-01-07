// Reward shaping utilities for RL

export function computeReward(step: any): number {
  // Dummy reward function for scaffolding
  // In practice, use PnL, engagement, regime, etc.
  return typeof step.reward === 'number' ? step.reward : 0;
}
