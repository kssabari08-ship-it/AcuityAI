# 05 — Comparative Analysis Matrix & Engine Evaluation

## 1. Multi-Dimensional Comparison Framework

To rigorously assess whether AI can build realistic, adaptable revision timetables, we evaluated the generated outputs across **8 Key Evaluation Dimensions** on a standardized 1–10 scale:
1. **Feasibility & Time Budget Precision**: Strict adherence to the 22.0 hrs/wk constraint without time leaks or school conflicts.
2. **Weak-Topic Asymmetry**: Ability to maintain the targeted 65% weak / 35% strong topic revision ratio.
3. **Cognitive Science Fidelity**: Implementation of active recall, spaced repetition (1-3-7-14 day intervals), and interleaving.
4. **Physiological Ergonomics**: Consistent 50/10 Pomodoro blocks, meal buffers, and pre-sleep wind-down preservation.
5. **Exam Date Tapering**: Prioritizing immediate exams (Maths Day 29, Physics Day 32) and reducing cognitive load on Day 28.
6. **Active Modality Quality**: Specificity of action-oriented tasks (past papers, Feynman whiteboard, code tracing vs. generic prompts).
7. **Prompt Schema Compliance**: Perfect adherence to markdown table format, column headers, and lack of conversational filler.
8. **Exportability & Automation Readiness**: Ease of parsing into Google Calendar (`.ics`/`.csv`) and Notion databases.

---

## 2. Master Comparative Analysis Table

| Evaluation Criterion | Baseline Prompt (Generic) | OpenAI ChatGPT (GPT-4o Free) | Google Gemini (1.5/2.0 Flash) | Anthropic Claude (3.5 Sonnet) |
|---|:---:|:---:|:---:|:---:|
| **1. Time Budget Precision (22h/wk)** | 2.5 / 10 *(Hallucinated 35+ hrs)* | **9.5 / 10** *(Exactly 22.0 hrs)* | **10.0 / 10** *(Flawless 22.0 hrs)* | **9.6 / 10** *(Exactly 22.0 hrs)* |
| **2. Weak-Topic Ratio (Target: 65%)** | 3.0 / 10 *(Equal 25% split)* | **9.3 / 10** *(68.2% Weak)* | **9.8 / 10** *(66.4% Weak)* | **9.9 / 10** *(65.0% Weak)* |
| **3. Spaced Repetition Cadence** | 1.0 / 10 *(Zero spacing; cramming)*| **9.1 / 10** *(Followed 3 of 4)* | **9.7 / 10** *(Strict 1-3-7-14 across all)*| **9.4 / 10** *(Interleaved with synthesis)*|
| **4. Physiological Ergonomics & Breaks** | 2.0 / 10 *(No breaks; 4h marathons)*| **9.4 / 10** *(Pomodoro 50/10)* | **9.9 / 10** *(Flawless buffers)* | **9.6 / 10** *(Pomodoro 50/10)* |
| **5. Exam Proximity Tapering** | 2.0 / 10 *(No exam date awareness)*| **9.2 / 10** *(75% Math/Phys in W4)*| **9.9 / 10** *(80% Math/Phys in W4 + Day 28 shutdown)*| **9.4 / 10** *(72% Math/Phys in W4)*|
| **6. Active Modality Specificity** | 2.0 / 10 *(Passive: "read chapter")*| **9.7 / 10** *(Highly tactical exam drills)*| **9.5 / 10** *(Crisp diagnostic quizzes)*| **9.8 / 10** *(Superior Feynman/derivation prompts)*|
| **7. Schema & Table Compliance** | 4.0 / 10 *(Disjointed bullet points)*| **9.5 / 10** *(Complete table)* | **9.9 / 10** *(Strict schema match)*| **9.7 / 10** *(Clean table format)* |
| **8. Automation & Export Readiness** | 1.0 / 10 *(Unusable format)* | **9.3 / 10** *(Clean CSV parsing)* | **9.8 / 10** *(Direct ICS regex mapping)* | **9.5 / 10** *(Clean Markdown import)* |
| **COMPOSITE SCORE (OUT OF 80)** | **17.5 / 80 (21.8%)** | **75.0 / 80 (93.7%)** | **78.5 / 80 (98.1%)** | **76.9 / 80 (96.1%)** |
| **FINAL RATING** | **CRITICAL FAILURE** | **EXCELLENT** | **OUTSTANDING (WINNER)** | **SUPERIOR** |

---

## 3. Qualitative Comparative Synthesis

### Google Gemini (1.5 / 2.0 Flash) — The Winning Engine
* **Key Advantages**:
  * **Algorithmic Precision**: Calculated daily and weekly hour budgets with 100% mathematical accuracy without drifting.
  * **Strict Temporal Guardrails**: Flawlessly observed the 17:30 start time, 20:30 cutoff, 150-minute weekend lunch buffers, and Sunday 16:00 recovery valve.
  * **Pre-Exam Tapering**: Correctly recognized that Day 28 precedes the Mathematics exam and enforced a mandatory 12:00 PM cognitive shutdown with only light formula glance, relaxation, and sleep preparation.
* **Minor Limitation**: Slightly less narrative description in the active modality column compared to Claude, but compensates with crisp, unambiguous action tags.

### Anthropic Claude (3.5 Sonnet) — The Pedagogical Specialist
* **Key Advantages**:
  * **Metacognitive Depth**: Best-in-class instructional design for active retrieval. Rather than merely stating "do problems," Claude framed prompts such as: *"Whiteboard Feynman derivation of Lenz's law from conservation of energy principles."*
  * **Synthesis & Conceptual Linkages**: Interleaved dynamic programming recurrence relations with mathematical induction proofs to build cognitive transfer.
* **Minor Limitation**: Slightly more conservative in pre-exam tapering (allocated slightly more time to Chemistry in Week 4 than Gemini).

### OpenAI ChatGPT (GPT-4o) — The Practical Past-Paper Coach
* **Key Advantages**:
  * **High Practicality**: Excellent selection of specific exam question formats (e.g., "5-mark integrating factor differential equations", "0/1 Knapsack pseudocode tracing").
  * **Error Journaling**: Explicitly incorporated dedicated 50-minute audit sessions on Sundays to dissect mistakes from past mock exams.
* **Minor Limitation**: Slightly overweighted weak topics in Week 1 (68.2%), leaving strong topic maintenance slightly constrained.

---

## 4. Final Selection for Implementation & Empirical Trial

**Selected Winning Plan: Google Gemini (Gemini 2.0 / 1.5 Flash)**  
* **Rationale**: Gemini produced the highest composite score (98.1%), zero time leaks, flawless circadian alignment, and the cleanest tabular structure for programmatic transformation into Google Calendar `.ics` events and Notion database records.
* The Google Gemini plan serves as the core master schedule for the **Google Calendar Export**, the **Notion Revision Board**, and the **Week-1 Real-World Empirical Trial**.
