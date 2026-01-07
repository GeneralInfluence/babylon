import type { TrainingBatch, Trajectory } from './types';

// Example batch scheduler for short-cycle RL
export class BatchScheduler {
  constructor(private windowSizeMs: number = 15 * 60 * 1000) {}

  // Group trajectories into time windows
  schedule(trajectories: Trajectory[]): TrainingBatch[] {
    // Dummy logic: all in one batch
    const now = Date.now();
    return [
      {
        trajectories,
        windowStart: now - this.windowSizeMs,
        windowEnd: now,
        tags: ['short_cycle'],
      },
    ];
  }
}
