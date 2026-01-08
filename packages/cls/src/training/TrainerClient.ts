import type { TrainingBatch } from './types';

// Interface for background RL trainer integration
export interface TrainerClient {
  submitBatch(batch: TrainingBatch): Promise<void>;
  getStatus(): Promise<{
    lastCheckpoint: string;
    lastWindow: [number, number];
  }>;
}

// Dummy implementation for scaffolding
export class NoopTrainerClient implements TrainerClient {
  async submitBatch(_batch: TrainingBatch): Promise<void> {
    // no-op
  }
  async getStatus(): Promise<{ lastCheckpoint: string; lastWindow: [number, number]; }> {
    return { lastCheckpoint: 'none', lastWindow: [0, 0] };
  }
}
