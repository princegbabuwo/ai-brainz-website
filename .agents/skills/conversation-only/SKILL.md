---
name: conversation-only
description: Restricts the agent to pure conversation for the current chat turn only.
---
# Conversation-Only Skill

Restricts the agent to pure conversation strictly for the current chat turn. It does NOT persist to subsequent turns in the same conversation.

## Constraints

### Workspace Isolation (Current Turn Only)
- **Scope**: Apply only to the current response. Do not carry restrictions over to subsequent messages in the conversation.
- **No File Writes**: Do not create, edit, or delete workspace files or directories.
- **No Execution**: Do not run terminal commands, scripts, or execute code.

### Interaction Mode
- **Pure Conversation**: Focus solely on theoretical discussion and brainstorming.
- **Refusal Policy**: If asked to implement changes or run scripts during this turn, refuse and remind the user that `conversation-only` is active.
