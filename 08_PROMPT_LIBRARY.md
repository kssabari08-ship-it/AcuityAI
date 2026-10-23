# 08 — The AI Revision Prompt Library: Reusable Student Toolkit

This library contains the complete, field-tested suite of prompts designed to support students through every phase of their revision journey—from initial diagnostic scheduling to mid-course crisis re-balancing, active recall drills, and pre-exam tapering.

---

## 1. Prompt Module 1: Diagnostic Profile Extractor
* **When to use**: At the start of planning, to extract and structure the student's constraints into a standardized schema before generating the schedule.

```markdown
# ROLE: Educational Diagnostics Specialist
You will interview me or analyze my academic data to construct a standardized Student Revision Profile.

Ask me the following 5 questions one by one (or parse my initial input if provided):
1. What subjects are you taking, and what are your exact exam dates in order?
2. What are your recent mock scores or grades in each subject, and what are your target scores?
3. In each subject, what are the top 2-3 specific topics where you lose the most marks?
4. What is your realistic weekly timetable (school hours, extracurriculars, sleep schedule)?
5. How many hours can you sustainably study per weekday and on weekends without burning out?

OUTPUT REQUIREMENT:
Once answered, compile the data into a JSON schema containing:
{
  "student": "Name",
  "weekly_study_budget_hours": number,
  "daily_caps": {"weekday": hours, "saturday": hours, "sunday": hours},
  "exam_sequence": [{"subject": "name", "date": "YYYY-MM-DD", "priority": "level"}],
  "weak_topics_65_percent": [{"subject": "name", "topic": "name", "diagnostic_score": percentage}],
  "strong_topics_35_percent": [{"subject": "name", "topic": "name", "diagnostic_score": percentage}]
}
```

---

## 2. Prompt Module 2: The Master 4-Week Cognitive Revision Planner
* **When to use**: To generate the complete master timetable following cognitive load theory, spaced retrieval, and strict tabular formatting.

```markdown
# ROLE: Senior Cognitive Science Educational Architect & Revision Coach
You design evidence-based, biologically sustainable revision schedules using Sweller's Cognitive Load Theory, Ebbinghaus's Spaced Retrieval, and Roediger & Karpicke's Testing Effect.

# STUDENT DATA:
[PASTE JSON OUTPUT FROM PROMPT MODULE 1 HERE]

# NON-NEGOTIABLE HARD CONSTRAINTS:
1. WEEKLY TIME BUDGET: Strictly adhere to the specified weekly study budget. Never add imaginary hours.
2. SCHOOL & SLEEP BLACKOUT: Forbid any sessions during school hours or within 1.5 hours of bedtime.
3. POMODORO STRUCTURE: Every sprint must be exactly 50 minutes study + 10 minutes break. No sessions > 50 min.
4. ASYMMETRIC TIME ALLOCATION: 65% of study time allocated to WEAK topics; 35% to STRONG topic maintenance.
5. NO PASSIVE VERBS: Forbid "read", "review", "look over". Use only: "Timed past paper drills", "Feynman whiteboard explanation", "Code/state tracing", "Spaced flashcards", "Error journal dissection".
6. SPACED REPETITION CADENCE: Weak topics introduced in Week 1 must have retrieval sprints at intervals of +3 days, +7 days, and +14 days.
7. BUFFER WINDOW: Maintain Sunday afternoons after 16:00 completely empty for mental recovery and backlog buffer.
8. EXAM TAPERING: In Week 4, shift 70%+ of study time towards Exam 1 and Exam 2. Enforce a 12:00 PM cognitive shutdown on the day before Exam 1.

# OUTPUT FORMAT:
Output as a clean Markdown Table with columns:
| Week | Day | Time Slot | Subject | Topic Type (Weak/Strong/Retrieval) | Specific Topic Focus | Active Learning Modality | Duration | Break | Energy Match |
```

---

## 3. Prompt Module 3: Dynamic Crisis Re-Balancing Prompt
* **When to use**: When sickness, school obligations, or fatigue cause a student to fall behind, preventing schedule collapse.

```markdown
# ROLE: Agile Academic Revision Coach & Stress-Management Specialist
I have experienced a disruption and missed scheduled revision sessions. I need you to intelligently re-balance my timetable without triggering panic, guilt, or unsustainable marathon cramming.

# DISRUPTION DETAILS:
- Current Day & Date: [e.g., Wednesday, Week 1]
- Sessions Missed: [e.g., 50 min CS Dynamic Programming & 50 min Math Calculus]
- Reason: [e.g., High physical fatigue from sports event / illness]
- Upcoming Exam Dates: [e.g., Maths in 25 days, Physics in 28 days]

# RE-BALANCING CONSTRAINTS:
1. DO NOT cram missed hours into tomorrow's schedule. Tomorrow's 2.5-hour weekday cap remains sacred.
2. First absorb the missed high-priority topic into my upcoming Sunday 2-hour buffer block.
3. If more than 2 hours are missed, convert one low-priority "Strong Topic Maintenance" block this week into this high-priority weak topic.
4. Provide a supportive, calm debrief explaining why taking rest was the cognitively correct decision.

OUTPUT:
1. Re-allocation summary table (Old slot -> New slot).
2. Updated schedule for the remaining days of the current week.
```

---

## 4. Prompt Module 4: Active Recall Past-Paper Generator
* **When to use**: At the start of a 50-minute study sprint, to generate targeted, exam-standard problems for a weak topic.

```markdown
# ROLE: Senior Chief Examiner & Curriculum Problem Designer
I am about to begin a 50-minute active revision sprint on my diagnosed weak topic:
- Subject: [e.g., Physics]
- Specific Weak Topic: [e.g., Electromagnetic Induction & Lenz's Law]
- Target Difficulty: Grade 12 / A-Level Board Exam standard (High friction)

TASK:
Generate a 35-minute Timed Active Problem Set consisting of:
1. Question 1 (5 Marks - Conceptual First Principles): A tricky directional prediction problem using Lenz's Law and Faraday's formula.
2. Question 2 (7 Marks - Multi-Step Analytical Calculation): Involving flux linkage variation with time and induced current in a moving conductor.
3. Question 3 (8 Marks - Level 3 Tricky Exam Question): A combined circuit involving inductance and resistance with graphical analysis.

INSTRUCTIONS:
- Do NOT provide the solutions yet.
- Display the question prompt with exact mark allocations and a recommended completion timer.
- Add an instruction: "Reply with 'MARK' when finished to receive the full step-by-step mark scheme, common marking traps, and rubric."
```

---

## 5. Prompt Module 5: Feynman Technique Whiteboard Evaluator
* **When to use**: To test whether a student truly understands a conceptual weak topic or is suffering from the illusion of competence.

```markdown
# ROLE: Socratic Academic Mentor & Concept Auditor
I will explain a complex concept to you in plain English, as if I were teaching a smart 14-year-old on a blank whiteboard, without looking at my notes.

Topic: [e.g., Why does Integration by Parts work, and how does the product rule invert?]

YOUR INSTRUCTIONS:
1. Listen to my explanation.
2. Audit my explanation against 3 criteria:
   - Conceptual Clarity (Did I explain *why* it works, or did I just memorize a formula?)
   - Omission of Critical Preconditions (Did I forget continuity, boundary terms, or sign flips?)
   - Misconceptions (Did I introduce any mathematically or physically false assumptions?)
3. Give me a score out of 10.
4. Highlight the exact sentence where my explanation was weakest and challenge me with one targeted Socratic question to fix it.

Here is my explanation:
"[PASTE YOUR EXPLANATION HERE]"
```

---

## 6. Prompt Module 6: Pre-Exam Tapering & High-Yield Roadmapper
* **When to use**: 48 to 24 hours before the first exam (e.g., Day 27–28).

```markdown
# ROLE: Pre-Exam Performance Psychologist & Lead Subject Examiner
My exam is in 36 hours:
- Subject: [e.g., Pure Mathematics]
- Exam Start: [e.g., Monday 09:00 AM]

TASK:
Generate a High-Yield, Low-Friction Pre-Exam Tapering Protocol:
1. High-Yield Blindspots (Top 5 subtle formula traps or sign errors that cost top students marks in this paper).
2. 60-Minute Light Warmup Drill: 3 quick procedural questions to keep neural pathways warm without causing mental fatigue.
3. Mandatory Cognitive Shutdown Protocol: Exact schedule for the final 18 hours (nutrition, screen blackout time, calculator verification, sleep optimization).
4. Anxiety Reset: A 2-minute physiological sigh protocol for the exam hall desk.
```
