# 06 — Google Calendar & Notion Board Integration Guide

## 1. Automated Workflow Overview

To bridge the gap between static AI text generation and active student execution, the winning revision schedule was programmatically transformed into two interoperable productivity ecosystems:
1. **Google Calendar (`.ics` / `.csv`)**: For calendar time-blocking, device push notifications, and daily circadian adherence.
2. **Notion Revision Board**: For Kanban-style task execution, active retrieval tracking, and before/after confidence scoring.

```
┌─────────────────────────┐      Automated Parser      ┌─────────────────────────┐
│ Gemini 4-Week Schedule  │ ─────────────────────────> │ calendar_exports/       │
│ Master Markdown Table   │                            │ • revision_events.ics   │
└─────────────────────────┘                            │ • gcal_schedule.csv     │
             │                                         └─────────────────────────┘
             │                                                      │
             ▼                                                      ▼
┌─────────────────────────┐                            ┌─────────────────────────┐
│ notion_templates/       │                            │ Google Calendar         │
│ • Notion Board Template │                            │ Time-Blocked Schedule   │
│ • Database Schema       │                            │ with Pomodoro Alarms    │
└─────────────────────────┘                            └─────────────────────────┘
```

---

## 2. Google Calendar Integration

### Deliverable Files
* [`calendar_exports/revision_planner_events.ics`](file:///d:/project%20DCE/calendar_exports/revision_planner_events.ics): Standard iCalendar format (RFC 5545) compatible with Google Calendar, Apple Calendar, Outlook, and Thunderbird.
* [`calendar_exports/google_calendar_revision_schedule.csv`](file:///d:/project%20DCE/calendar_exports/google_calendar_revision_schedule.csv): Official Google Calendar CSV import format.

### Step-by-Step Google Calendar Import Instructions
1. Open [Google Calendar](https://calendar.google.com/) in your browser.
2. Click the gear icon (**Settings**) in the top right corner $\rightarrow$ Click **Settings**.
3. In the left navigation sidebar, select **Import & Export**.
4. Under "Import":
   * Click **Select file from your computer** $\rightarrow$ choose `google_calendar_revision_schedule.csv` (or `revision_planner_events.ics`).
   * Choose the target calendar (Recommended: Create a dedicated new calendar titled *"AI Exam Revision - Aarav"* to allow 1-click toggling).
   * Click **Import**.
5. All 88 hours of Pomodoro-structured study blocks, complete with subject tags, weak/strong topic labels, active modalities, and 10-minute pre-session reminders, will instantly populate your schedule.

### Sample Event Data Structure
* **Event Title**: `[MATH - WEAK] Definite Integration by Parts (Product Rule)`
* **Time**: `17:30 – 18:20` (50 min)
* **Location**: `Desk / Quiet Study Zone`
* **Description**:
  ```text
  Subject: Mathematics | Priority: High (Exam in 28 Days)
  Category: WEAK TOPIC FOCUS (Asymmetric 65%)
  Topic: Integration by Parts & Definite Integrals
  Active Modality: 5 Timed Past-Paper Integrals + Error Log
  Break Protocol: Mandatory 10-minute break at 18:20 (Step away from screens)
  Energy Alignment: Moderate-High (Early evening)
  ```

---

## 3. Notion Revision Board Architecture

### Deliverable File
* [`notion_templates/Notion_Revision_Board_Template.md`](file:///d:/project%20DCE/notion_templates/Notion_Revision_Board_Template.md): Complete database schema, formula properties, views, and templates.

### Notion Database Schema (`Revision Sprints`)
| Property Name | Property Type | Options / Configuration |
|---|---|---|
| **Session Title** | Title | Name of the revision sprint |
| **Date & Time** | Date | Start time and end time (50-minute block) |
| **Subject** | Select | Mathematics (Blue), Physics (Orange), Comp Sci (Green), Chemistry (Purple) |
| **Topic Classification**| Select | Weak Topic (Red), Weak Retrieval (Yellow), Strong Maintenance (Green), Simulation (Pink) |
| **Active Modality** | Select | Past Paper Drills, Feynman Whiteboard, Code/State Tracing, Spaced Flashcards, Error Journal |
| **Planned Duration** | Number | 50 (minutes) |
| **Status** | Status | Not Started, In Progress, Completed, Rescheduled |
| **Confidence Before** | Select | 1 - Very Low, 2 - Low, 3 - Moderate, 4 - High |
| **Confidence After** | Select | 1 - Very Low, 2 - Low, 3 - Moderate, 4 - High, 5 - Mastered |
| **Error Log Notes** | Text | Specific misconceptions or formulas missed during the session |

### Recommended Notion Views
1. **Active Week Board (Kanban)**: Grouped by `Status`, showing only tasks for the current 7 days.
2. **Subject Matrix View (Gallery)**: Grouped by `Subject` with progress bars showing completion percentage of weak topics.
3. **Master Calendar View**: Monthly / Weekly calendar view mirroring the Google Calendar blocks.
4. **Error Journal Table**: Filtered view showing sessions with notes in `Error Log Notes` for Sunday review.
