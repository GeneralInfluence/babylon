import type { AgentId } from './types';

// Extended state schema for real-time adaptation
export interface AgentPerformanceState {
  balance: number;
  lifetimePnL: number;
  rollingPnL: number[]; // e.g., last N trades
  winRate: number; // e.g., last N trades
  volatility: number; // e.g., current market regime
  recentActions: Array<{
    type: string; // e.g., 'trade', 'hold', 'post'
    outcome: string; // e.g., 'win', 'loss', 'neutral'
    ts: number;
    details?: Record<string, unknown>;
  }>;
  // Add more fields as needed (e.g., Sharpe ratio, drawdown, etc.)
}

export interface AgentStateStore {
  get<T>(agentId: AgentId, key: string): Promise<T | undefined>;
  set<T>(
    agentId: AgentId,
    key: string,
    value: T,
    ttlSeconds?: number
  ): Promise<void>;
}

export class InMemoryAgentStateStore implements AgentStateStore {
  private map = new Map<string, unknown>();

  async get<T>(agentId: AgentId, key: string): Promise<T | undefined> {
    return this.map.get(`${agentId}:${key}`) as T | undefined;
  }

  async set<T>(agentId: AgentId, key: string, value: T): Promise<void> {
    this.map.set(`${agentId}:${key}`, value);
  }
}

// --- Example usage for documentation / developer reference ---

// Example: Update agent state after a trade (dummy logic)
/*
import { AgentPerformanceState, AgentStateStore } from '@babylon/cls';

const agentStateStore: AgentStateStore = ... // get from DI or singleton
const agentId = 'agent-123';
const prevState = await agentStateStore.get<AgentPerformanceState>(agentId, 'performance');
const updatedState: AgentPerformanceState = {
  ...prevState,
  balance: prevState.balance - 100,
  rollingPnL: [...prevState.rollingPnL.slice(-9), 10],
  winRate: 0.7,
  volatility: 0.3,
  recentActions: [
    ...prevState.recentActions.slice(-19),
    { type: 'trade', outcome: 'win', ts: Date.now(), details: { amount: 100 } }
  ],
};
await agentStateStore.set(agentId, 'performance', updatedState);

// Example: Fetch agent state before making a decision
const state = await agentStateStore.get<AgentPerformanceState>(agentId, 'performance');
// Inject state into LLM prompt or use for bandit selection
*/
