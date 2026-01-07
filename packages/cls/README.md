# Continuous Learning System (CLS)

This package provides the core interfaces and scaffolding for Babylon's Continuous Learning System. CLS enables real-time agent adaptation, online strategy selection, trajectory logging, and background reinforcement learning integration.

## Key Components
- Trajectory logging
- Agent state management
- Strategy routing (bandits, scaffolding only)
- RL training integration (scaffolding only)
- Integration points for agents, game engine, and training

**Note:**
This package currently exports scaffolding/no-op implementations for contextual bandits (strategy routing) and short-cycle RL (batching, trainer integration). These modules are not yet wired into agent flows and are provided for reference and future integration. Reviewers: see `src/index.ts` for explicit exports and comments.

This is the foundation for real-time and long-term learning in Babylon agents.

## Out of scope for this PR
- No runtime wiring into agent flows (no behavior changes)
- No Redis persistence (in-memory / no-op only)
- No trainer deployment or model promotion logic
