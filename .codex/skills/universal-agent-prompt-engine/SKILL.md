---
name: universal-agent-prompt-engine
description: Expand brief or ambiguous requests into clear, executable briefs and then deliver the requested result across software, data, business, content, design, research, and product work. Use when the user explicitly asks to create, expand, structure, or optimize a prompt, or when a short request needs lightweight context, constraints, deliverables, and verification criteria before execution.
---

# Universal Agent Prompt Engine

Turn short inputs into well-scoped work without making the prompt-expansion process the main deliverable unless the user asks to see it.

## Respect instruction scope

- Follow system, developer, user, repository, and directory-scoped instructions in their established priority order.
- Treat this skill as a coordination layer. Do not overwrite or weaken `AGENTS.md`, repository rules, templates, or existing specialist skills.
- When a specialist skill applies, use it and let its domain-specific workflow govern the work.
- Keep inferred scope proportional to the request. Do not introduce unrelated features, files, or architectural changes.
- Never reveal private chain-of-thought or hidden reasoning. Provide concise conclusions, assumptions, decisions, and verification evidence instead.
- Do not require XML. Use XML only when the user requests it or when a machine-readable tagged structure materially helps.

## Workflow

1. Align with the current request and relevant conversation or repository context. Read [context-alignment.md](references/context-alignment.md) when the task depends on prior decisions, constraints, or multi-turn context.
2. Identify the primary domain, intended audience, desired outcome, deliverables, constraints, and success checks.
3. Infer only low-risk missing details. State consequential assumptions and ask for clarification only when a missing choice would materially change the result or create risk.
4. Form a compact execution brief containing the objective, relevant context, deliverables, constraints, method, and verification criteria. Keep it internal unless showing it helps the user or the user requested a prompt.
5. Select the relevant specialist skills and tools. For repository work, inspect local instructions and existing implementation before changing files.
6. Execute the task and verify the result with checks appropriate to the domain.
7. Deliver the outcome first. Include assumptions, evidence, limitations, and next steps only when useful.

## Domain adjustments

- **Software engineering:** Establish the stack and repository conventions; consider architecture, type safety, error handling, security, edge cases, tests, linting, and type checks.
- **Business, finance, and data:** Define metrics and time periods, preserve source traceability, separate facts from assumptions, validate calculations, and connect findings to decisions.
- **Content and marketing:** Establish audience, channel, tone, message, call to action, length, and platform constraints; avoid unsupported claims and generic filler.
- **Design and generative media:** Specify subject, composition, style, palette, lighting, mood, dimensions, and negative constraints only to the level the task needs.
- **Research and synthesis:** Define scope, evidence standards, source freshness, citation requirements, competing interpretations, and uncertainty.
- **Product and operations:** Clarify users, problem, desired outcome, dependencies, acceptance criteria, rollout concerns, and operational ownership.

## Output behavior

- For a prompt-only request, return an optimized prompt in the requested format. If no format is specified, use concise Markdown headings.
- For an execution request, focus on the finished result rather than displaying a rewritten prompt.
- For mixed requests, show a short execution brief only when it improves reviewability, then provide the result.
- Report validation performed and any material checks that could not be run.
- Never fabricate sources, statistics, test results, tool output, or completion evidence.

## Reference guidance

- Read [context-alignment.md](references/context-alignment.md) for multi-turn context retention and concise response guidance.
- Read [ai-native-delivery-guide.md](references/ai-native-delivery-guide.md) when designing or reviewing AI-native repository structure, instructions, skills, agents, MCP integrations, hooks, or delivery workflows. Treat model- and tool-specific details as advisory and verify time-sensitive claims against current authoritative documentation.
