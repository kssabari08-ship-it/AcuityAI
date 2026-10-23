# Notion Revision Board Template & Workspace Setup Guide

## 1. Overview & Setup in Notion

This template provides a ready-to-deploy **Active Revision & Metacognitive Error Journal** database in [Notion](https://www.notion.so/). You can copy and paste the markdown table below directly into an empty Notion page to instantly populate the database with all 95 sessions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Aarav's Revision Sprint Hub                     │
│  [Board View]  [Timeline / Calendar]  [Error Journal]  [Subject Matrix]│
├─────────────────┬───────────────────┬──────────────────┬───────────────┤
│    NOT STARTED  │    IN PROGRESS    │    COMPLETED     │  RESCHEDULED  │
│ ┌─────────────┐ │ ┌─────────────┐   │ ┌─────────────┐  │ ┌───────────┐ │
│ │ Math: Parts │ │ │ Phys: Lenz  │   │ │ CS: Logic   │  │ │ (Sunday   │ │
│ │ [Weak] 50m  │ │ │ [Weak] 50m  │   │ │ [Strong] 50m│  │ │  Buffer)  │ │
│ └─────────────┘ │ └─────────────┘   │ └─────────────┘  │ └───────────┘ │
└─────────────────┴───────────────────┴──────────────────┴───────────────┘
```

---

## 2. Notion Database Property Specification

Create a new database named **`Exam Revision Sprints`** with the following properties:

| Property Name | Notion Property Type | Options / Formula Configuration |
|---|---|---|
| **Sprint Title** | `Title` | Primary identifier (e.g., `[MATH] Definite Integration by Parts`) |
| **Date & Time** | `Date` | Start Date + Include Time (e.g., `Oct 12, 2026 5:30 PM → 6:20 PM`) |
| **Week** | `Select` | `Week 1`, `Week 2`, `Week 3`, `Week 4` |
| **Day** | `Select` | `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` |
| **Subject** | `Select` | `Mathematics` (Blue), `Physics` (Orange), `Computer Science` (Green), `Chemistry` (Purple) |
| **Classification** | `Select` | `Weak Focus` (Red), `Weak Spaced Retrieval` (Yellow), `Strong Maintenance` (Green), `Mock Simulation` (Pink), `Error Audit` (Gray) |
| **Active Modality**| `Select` | `Past Paper Problem Set`, `Feynman Technique`, `Code & State Tracing`, `Spaced Flashcards`, `Error Journal Dissection` |
| **Duration (min)** | `Number` | Formatted as number (default `50`) |
| **Status** | `Status` | `Not Started` (Default), `In Progress`, `Completed`, `Rescheduled` |
| **Confidence (Pre)**| `Select` | `1 - Confused (0-40%)`, `2 - Shaky (40-60%)`, `3 - Capable (60-80%)`, `4 - Confident (80-100%)` |
| **Confidence (Post)**| `Select` | `1 - Struggled`, `2 - Improved`, `3 - Solid`, `4 - Mastered (Exam Ready)` |
| **Progress Formula**| `Formula` | `if(prop("Status") == "Completed", "✅ Done", if(prop("Status") == "In Progress", "⏳ Active", "⭕ Pending"))` |
| **Error Log Notes**| `Text` | Markdown text field for recording exact formulas forgotten or execution errors |

---

## 3. Notion Card Page Template (Inside Every Session)

Inside each database card, use the following interactive template:

```markdown
# Session Learning Objective
- Master the specific mechanics of: **[Insert Topic Focus]**
- Target questions attempted: **[e.g., 5 Level-2 Past Paper Problems]**

---

### Phase 1: Retrieval Warm-Up (Minutes 0 - 10)
- [ ] Blank-page formula recall (Write all relevant identities from memory)
- [ ] Diagnostic self-check against formula reference sheet

### Phase 2: Active Problem Solving (Minutes 10 - 45)
- [ ] Attempt Problem 1 (Timed, exam hall conditions)
- [ ] Attempt Problem 2 (Timed, exam hall conditions)
- [ ] Attempt Problem 3 (Timed, exam hall conditions)
- [ ] Attempt Problem 4 (Timed, exam hall conditions)

### Phase 3: Error Journal Dissection (Minutes 45 - 50)
* **What specific mistake occurred?** (e.g., Dropped minus sign in integration by parts formula)
* **Why did it happen?** (Rushed algebra; didn't write out $u, v, du, dv$ explicitly)
* **Corrective rule for next attempt**: (Always write the 4-quadrant substitution box before integrating)

---
**Post-Session Status**: Mark status as `Completed` and step away for a 10-minute screen-free break.
```

---

## 4. Master Import Table (Week 1 Database Rows)

*Copy the table below and paste directly into Notion to generate database rows:*

| Sprint Title | Date & Time | Week | Day | Subject | Classification | Active Modality | Duration | Status |
|---|---|---|---|---|---|---|:---:|:---:|
| [MATH] Definite Integration by Parts | Oct 12, 2026 17:30 - 18:20 | Week 1 | Mon | Mathematics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [MATH] Repeated & Trig Integration | Oct 12, 2026 18:30 - 19:20 | Week 1 | Mon | Mathematics | Weak Focus | Feynman Technique | 50 | Completed |
| [CHEM] Periodic Trends & Periodicity | Oct 12, 2026 19:30 - 20:20 | Week 1 | Mon | Chemistry | Strong Maintenance | Spaced Flashcards | 50 | Completed |
| [PHYS] EMI: Faraday & Lenz Laws | Oct 13, 2026 17:30 - 18:20 | Week 1 | Tue | Physics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [PHYS] Motional EMF & Induced Currents| Oct 13, 2026 18:30 - 19:20 | Week 1 | Tue | Physics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [CS] Boolean Logic & De Morgan Laws | Oct 13, 2026 19:30 - 20:20 | Week 1 | Tue | Computer Science | Strong Maintenance | Code & State Tracing | 50 | Completed |
| [CS] DP: Memoization vs Tabulation | Oct 14, 2026 17:30 - 18:20 | Week 1 | Wed | Computer Science | Weak Focus | Code & State Tracing | 50 | Rescheduled |
| [CS] DP: 0/1 Knapsack State Space | Oct 14, 2026 18:30 - 19:20 | Week 1 | Wed | Computer Science | Weak Focus | Code & State Tracing | 50 | Completed |
| [MATH] Spaced Retrieval: Integrals (+3d)| Oct 14, 2026 19:30 - 20:20 | Week 1 | Wed | Mathematics | Weak Spaced Retrieval | Past Paper Problem Set | 50 | Completed |
| [CHEM] Organic: Carbonyl Nucleophilic Add.| Oct 15, 2026 17:30 - 18:20 | Week 1 | Thu | Chemistry | Weak Focus | Feynman Technique | 50 | Completed |
| [CHEM] Aldehydes: Grignard Synthesis | Oct 15, 2026 18:30 - 19:20 | Week 1 | Thu | Chemistry | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [PHYS] Kinematics & Projectiles | Oct 15, 2026 19:30 - 20:20 | Week 1 | Thu | Physics | Strong Maintenance | Past Paper Problem Set | 50 | Completed |
| [PHYS] EMI Retrieval: Flux Linkages (+3d)| Oct 16, 2026 17:30 - 18:20 | Week 1 | Fri | Physics | Weak Spaced Retrieval | Past Paper Problem Set | 50 | Completed |
| [CS] 0/1 Knapsack Blind Table Retrieval| Oct 16, 2026 18:30 - 19:20 | Week 1 | Fri | Computer Science | Weak Spaced Retrieval | Code & State Tracing | 50 | Completed |
| [CHEM] Gas Laws & Kinetic Theory | Oct 16, 2026 19:30 - 20:20 | Week 1 | Fri | Chemistry | Strong Maintenance | Spaced Flashcards | 50 | Completed |
| [MATH] Diff Eq: Variable Separable | Oct 17, 2026 09:00 - 09:50 | Week 1 | Sat | Mathematics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [MATH] Diff Eq: Integrating Factors | Oct 17, 2026 10:00 - 10:50 | Week 1 | Sat | Mathematics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [CHEM] Chemical Kinetics: Rate Laws | Oct 17, 2026 11:00 - 11:50 | Week 1 | Sat | Chemistry | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [PHYS] AC: Pure L/C/R Phasors | Oct 17, 2026 14:00 - 14:50 | Week 1 | Sat | Physics | Weak Focus | Feynman Technique | 50 | Completed |
| [PHYS] AC Series LCR Resonance & Q-Factor| Oct 17, 2026 15:00 - 15:50 | Week 1 | Sat | Physics | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [CS] OOP: Classes & Inheritance in Python| Oct 17, 2026 16:00 - 16:50 | Week 1 | Sat | Computer Science | Strong Maintenance | Code & State Tracing | 50 | Completed |
| [CS] SQL Normalization: 1NF to 3NF | Oct 18, 2026 09:00 - 09:50 | Week 1 | Sun | Computer Science | Weak Focus | Past Paper Problem Set | 50 | Completed |
| [CS] SQL: Multi-Table JOINs | Oct 18, 2026 10:00 - 10:50 | Week 1 | Sun | Computer Science | Weak Focus | Code & State Tracing | 50 | Completed |
| [MATH] Matrices & Determinants Speed | Oct 18, 2026 11:00 - 11:50 | Week 1 | Sun | Mathematics | Strong Maintenance | Past Paper Problem Set | 50 | Completed |
| [CHEM] Organic Carbonyls Spaced Retrieval| Oct 18, 2026 14:00 - 14:50 | Week 1 | Sun | Chemistry | Weak Spaced Retrieval | Spaced Flashcards | 50 | Completed |
| [ALL] Week 1 Error Journal Synthesis | Oct 18, 2026 15:00 - 15:50 | Week 1 | Sun | All Subjects | Error Audit | Error Journal Dissection | 50 | Completed |
