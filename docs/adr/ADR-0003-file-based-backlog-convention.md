# ADR-0003: File-Based Backlog Convention

## Status
Accepted

## Context
Prior tracking approaches were inconsistent and depended on removed workflows. The repo needed a stable, local, AI-friendly backlog contract.

## Decision
Adopt standalone markdown work items:
- Active items in `backlog/active/`
- Completed items in `backlog/done/`
- Required 4-section schema per item:
  1. Outcome
  2. Constraints & References
  3. Acceptance Checks
  4. Explicit Non-Goals

## Consequences
- Work is executable without external tooling.
- Backlog remains transparent in version control.
- Completion becomes a simple move operation from active to done.
