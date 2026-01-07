import type { TrajectoryEvent } from './types';

export interface TrajectoryWriter {
  append(event: TrajectoryEvent): Promise<void>;
}

export class NoopTrajectoryWriter implements TrajectoryWriter {
  async append(_: TrajectoryEvent): Promise<void> {
    // intentionally empty
  }
}
