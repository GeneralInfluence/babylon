export type AgentId = string;

export type TrajectoryEventType =
  | 'decision'
  | 'action'
  | 'observation'
  | 'reward'
  | 'error';

export interface TrajectoryEvent {
  id: string; // uuid
  ts: number; // epoch ms
  agentId: AgentId;
  episodeId?: string;
  type: TrajectoryEventType;
  context?: Record<string, unknown>;
  action?: Record<string, unknown>;
  outcome?: Record<string, unknown>;
  reward?: number;
  model?: { provider?: string; name?: string; version?: string };
  tags?: string[];
}
