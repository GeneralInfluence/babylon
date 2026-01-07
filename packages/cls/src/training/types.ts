// Types for short-cycle RL and GRPO

export interface Trajectory {
  id: string;
  agentId: string;
  episodeId?: string;
  steps: TrajectoryStep[];
  tags?: string[];
}

export interface TrajectoryStep {
  ts: number;
  observation: Record<string, unknown>;
  action: Record<string, unknown>;
  reward: number;
  done: boolean;
  info?: Record<string, unknown>;
}

export interface TrainingBatch {
  trajectories: Trajectory[];
  windowStart: number;
  windowEnd: number;
  tags?: string[];
}
