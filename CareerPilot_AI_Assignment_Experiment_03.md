# LABORATORY RECORD / ASSIGNMENT REPORT

---

**Course / Subject:** Software Project Management Lab (SPM)  
**Experiment No.:** 03  
**Date of Experiment:** 01/08/2026  
**Date of Submission:** 16/09/2026  
**Project Title:** CareerPilot AI – Placement Intelligence and Career Readiness Platform  

### **Group Members & Roll Details:**
1. **Abel Mathew Bose** – Lead Architect & AI Matching Lead
2. **K.M. Meenakshi** – Project Manager & Frontend / UI/UX Lead
3. **Sen Shaji** – Database & Assessment Engine Engineer
4. **Sidharth K.A** – Skills Trust & Verification QA Lead

---

## 1. AIM
1. To create a structured Work Breakdown Structure (WBS) and prepare a Gantt chart to illustrate project scheduling using Microsoft Excel.
2. To prepare a comprehensive Risk Register listing five major risks with their probability, impact, risk score ($P \times I$), and mitigation plans.

---

## 2. THEORY & PRINCIPLES

### 2.1 Work Breakdown Structure (WBS)
A Work Breakdown Structure (WBS) is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables.
- **The 100% Rule:** The WBS encompasses 100% of the work defined by the project scope and captures all deliverables – internal, external, and interim – in terms of work to be completed, including project management.
- **Work Package:** The lowest level in the WBS that can be scheduled, cost estimated, monitored, and controlled.

### 2.2 Gantt Chart Scheduling
A Gantt chart is a horizontal bar chart used in project management to visually track tasks against time. Each task is represented as a horizontal block spanning its start date to its end date. It provides:
- Visual clarity on overlapping and parallel work packages.
- Immediate distinction between **Completed (100%)**, **In Progress**, and **Planned** tasks.
- Baseline scheduling across the 16-week project lifecycle.

### 2.3 Qualitative Risk Analysis & Scoring
Project Risk Management involves identifying, analyzing, and responding to potential risks.
- **Risk Score Formula:**
  $$\text{Risk Score} = \text{Probability } (1-5) \times \text{Impact } (1-5)$$
- **Severity Categories:**
  - **Critical (16 – 25):** Severe threat; requires immediate executive mitigation and daily monitoring.
  - **High (10 – 15):** High threat; requires targeted preventative strategy and weekly sprint tracking.
  - **Medium (5 – 9):** Moderate threat; requires proactive monitoring and contingency controls.
  - **Low (1 – 4):** Minimal threat; acceptable operational tolerance.

---

## 3. STEPS AND EXCEL IMPLEMENTATION COMMANDS

1. **Workbook Setup:** Open Microsoft Excel and create a new worksheet named `WBS_Detailed`.
2. **Column Configuration:** Create standard columns: `WBS ID`, `Phase`, `Module`, `Work Package`, `Description`, `Owner`, `Start Date`, `End Date`, `Duration (Days)`, `Status`, and `Progress`.
3. **Phase Identification:** Deconstruct the CareerPilot AI engineering lifecycle into 6 major phases:
   - Phase 1: Project Initiation & Requirements Engineering
   - Phase 2: UI/UX Design & Frontend Foundation
   - Phase 3: Student Dashboard & Application Tracking
   - Phase 4: AI Opportunity Radar & Matching Engine
   - Phase 5: Skills Trust Engine & Assessment Pipeline
   - Phase 6: Integration, Testing & Final Deployment
4. **Work Package Division:** Break down each phase into manageable work packages and write comprehensive functional descriptions.
5. **ID Allocation:** Assign unique hierarchical numbering (e.g., 1.1, 1.2 ... 6.3).
6. **Owner Assignment:** Distribute packages evenly across Abel Mathew Bose, K.M. Meenakshi, Sen Shaji, and Sidharth K.A.
7. **Schedule & Duration Formulas:** Enter Start and End Dates. Apply Excel formula for duration:
   ```excel
   =INT(End_Date - Start_Date + 1)
   Example in cell I6: =H6 - G6 + 1
   ```
8. **Weekly Timeline Construction:** Add a secondary sheet `Gantt_Chart` with columns for Weeks 1 through 16 spanning August 1, 2026 to November 21, 2026.
9. **Visual Bar Mapping:** Fill active cells corresponding to task durations. Apply color rules:
   - Completed Tasks: Soft Emerald Green (`#10B981`)
   - In Progress Tasks: Royal Blue (`#2563EB`)
   - Planned Tasks: Slate Gray (`#94A3B8`)
10. **Risk Register Worksheet:** In a separate file `CareerPilot_AI_Risk_Register.xlsx`, configure columns: `Risk ID`, `Category`, `Description`, `Impact Area`, `Probability (P)`, `Impact (I)`, `Risk Score`, `Level`, `Mitigation Plan`, `Contingency Plan`, `Owner`, and `Status`.
11. **Risk Score Formula:**
    ```excel
    =Probability * Impact
    Example in cell G6: =E6 * F6
    ```

---

## 4. WORK BREAKDOWN STRUCTURE (WBS) TABLE

| WBS ID | Phase | Module | Work Package | Description | Owner | Start Date | End Date | Duration (Days) | Status | Progress |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **1.0** | **Phase 1: Initiation & Requirements** | | | | | | | | | |
| 1.1 | Initiation | Scope | Project Scope & Architecture | Define functional specs, AI pipeline architecture, and placement intelligence scope. | Abel Mathew Bose | 2026-08-01 | 2026-08-07 | 7 | Completed | 100% |
| 1.2 | Initiation | Journeys | Persona & Journey Mapping | Map student readiness tracks and recruiter shortlisting workflow workflows. | K.M. Meenakshi | 2026-08-05 | 2026-08-11 | 7 | Completed | 100% |
| 1.3 | Initiation | Setup | Dev Environment & Git Setup | Configure Git repositories, branch rules, CI automation, and code standards. | Sen Shaji | 2026-08-08 | 2026-08-14 | 7 | Completed | 100% |
| **2.0** | **Phase 2: UI/UX & Frontend** | | | | | | | | | |
| 2.1 | UI/UX | Design System | Design Tokens & Responsive Layout | Create CSS design tokens, typography, glassmorphism cards, and dark theme. | K.M. Meenakshi | 2026-08-15 | 2026-08-22 | 8 | Completed | 100% |
| 2.2 | UI/UX | Landing | Splash Loader & Landing Showcase | Build animated paper-plane splash screen, hero section, metrics and feature showcase. | K.M. Meenakshi | 2026-08-20 | 2026-08-28 | 9 | Completed | 100% |
| 2.3 | UI/UX | Auth | Dual-Persona Auth Module | Implement Student/Recruiter login, registration validation, and password toggles. | Sidharth K.A | 2026-08-26 | 2026-09-04 | 10 | Completed | 100% |
| **3.0** | **Phase 3: Dashboard & Applications** | | | | | | | | | |
| 3.1 | Dashboard | Metrics | KPI Metrics & Readiness Gauge | Interactive stat cards, circular readiness gauge SVG, checklist, and donut breakdown. | K.M. Meenakshi | 2026-09-05 | 2026-09-14 | 10 | Completed | 100% |
| 3.2 | Dashboard | Inactivity | Idle Countdown & Alert Engine | Track idle user activity, trigger warning banners, and pause AI matching. | Sen Shaji | 2026-09-10 | 2026-09-19 | 10 | In Progress | 90% |
| 3.3 | Dashboard | Tracker | Job Pipeline & Status Workflow | Multi-stage pipeline tracking (Bookmarked, Applied, Interviewing, Offer) with deadlines. | Abel Mathew Bose | 2026-09-15 | 2026-09-25 | 11 | In Progress | 75% |
| **4.0** | **Phase 4: AI Matching Engine** | | | | | | | | | |
| 4.1 | AI Matching | Database | Job Profiles & Skill Vectors Schema | Build normalized job profiles, required skill sets, salary ranges, and taxonomy. | Sen Shaji | 2026-09-26 | 2026-10-04 | 9 | In Progress | 50% |
| 4.2 | AI Matching | Engine | Cosine Similarity Match Computation | Formulate weighted vector matching between student verified skills and job requirements. | Abel Mathew Bose | 2026-10-02 | 2026-10-10 | 9 | Planned | 0% |
| 4.3 | AI Matching | Visualizer | Radar Visualizer & Match Drawer | Animated radar sweep graphic, filter controls (domain, remote, min match), and match drawer. | Abel Mathew Bose | 2026-10-08 | 2026-10-16 | 9 | Planned | 0% |
| **5.0** | **Phase 5: Trust & Assessments** | | | | | | | | | |
| 5.1 | Trust Engine | Verification | Skill Evidence Validation Engine | Evidence submission interface (GitHub repos, certificate links) and verification engine. | Sidharth K.A | 2026-10-17 | 2026-10-25 | 9 | Planned | 0% |
| 5.2 | Trust Engine | Gaps | Skill Gap Analysis & Alert Widget | Detect unverified skills, prompt students with missing proof alerts, and calculate Trust Index. | Sidharth K.A | 2026-10-22 | 2026-10-30 | 9 | Planned | 0% |
| 5.3 | Assessments | Quizzes | Sequential Assessment & Timed Testing | Interactive multi-question assessment modal, live countdown timers, and immediate scoring. | Sen Shaji | 2026-10-28 | 2026-11-06 | 10 | Planned | 0% |
| **6.0** | **Phase 6: Testing & Deployment** | | | | | | | | | |
| 6.1 | QA & Testing | Validation | System Validation & Edge Cases | Validate user flows, local storage persistence, responsive views, and algorithm accuracy. | Sidharth K.A | 2026-11-07 | 2026-11-13 | 7 | Planned | 0% |
| 6.2 | Optimization | Responsive | Mobile Tuning & Asset Optimization | Fine-tune responsive CSS breakpoints, lazy image rendering, and smooth animations. | K.M. Meenakshi | 2026-11-11 | 2026-11-17 | 7 | Planned | 0% |
| 6.3 | Release | Closure | Production Deployment & Closure | Publish platform build, compile project documentation, Gantt review, and presentation. | Abel Mathew Bose | 2026-11-15 | 2026-11-21 | 7 | Planned | 0% |

---

## 5. 16-WEEK GANTT CHART SCHEDULE

**Legend:**  
- `[🟩 100%]` : Completed Task  
- `[🟦 XX%]` : In Progress Task  
- `[⬜ Planned]` : Scheduled Milestone  

| ID | Work Package | Owner | Days | Status | Aug W1 | Aug W2 | Aug W3 | Aug W4 | Sep W5 | Sep W6 | Sep W7 | Sep W8 | Oct W9 | Oct W10 | Oct W11 | Oct W12 | Oct W13 | Nov W14 | Nov W15 | Nov W16 |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.1 | Project Scope & Architecture | Abel | 7 | Completed | 🟩 | | | | | | | | | | | | | | | |
| 1.2 | Persona & Journey Mapping | Meenakshi | 7 | Completed | 🟩 | 🟩 | | | | | | | | | | | | | | |
| 1.3 | Dev Environment & Git Setup | Sen | 7 | Completed | | 🟩 | | | | | | | | | | | | | | |
| 2.1 | Design Tokens & Layout | Meenakshi | 8 | Completed | | | 🟩 | 🟩 | | | | | | | | | | | | |
| 2.2 | Splash Loader & Landing | Meenakshi | 9 | Completed | | | 🟩 | 🟩 | | | | | | | | | | | | |
| 2.3 | Dual-Persona Auth Module | Sidharth | 10 | Completed | | | | 🟩 | 🟩 | | | | | | | | | | |
| 3.1 | KPI Metrics & Readiness Gauge | Meenakshi | 10 | Completed | | | | | 🟩 | 🟩 | 🟩 | | | | | | | | | |
| 3.2 | Idle Countdown Engine | Sen | 10 | In Progress | | | | | | 🟦 | 🟦 | | | | | | | | | |
| 3.3 | Job Pipeline Workflow | Abel | 11 | In Progress | | | | | | | 🟦 | 🟦 | | | | | | | | |
| 4.1 | Job Profiles & Vectors Schema | Sen | 9 | In Progress | | | | | | | | 🟦 | 🟦 | 🟦 | | | | | | |
| 4.2 | Cosine Matching Math | Abel | 9 | Planned | | | | | | | | | | ⬜ | ⬜ | | | | | |
| 4.3 | Radar Visualizer UI | Abel | 9 | Planned | | | | | | | | | | ⬜ | ⬜ | | | | | |
| 5.1 | Skill Evidence Validation | Sidharth | 9 | Planned | | | | | | | | | | | | ⬜ | ⬜ | | | |
| 5.2 | Skill Gap Analysis Widget | Sidharth | 9 | Planned | | | | | | | | | | | | | ⬜ | ⬜ | | |
| 5.3 | Sequential Quizzes | Sen | 10 | Planned | | | | | | | | | | | | | ⬜ | ⬜ | | |
| 6.1 | System Validation & Testing | Sidharth | 7 | Planned | | | | | | | | | | | | | | | ⬜ | |
| 6.2 | Mobile Tuning & Assets | Meenakshi | 7 | Planned | | | | | | | | | | | | | | | ⬜ | ⬜ |
| 6.3 | Production Deployment | Abel | 7 | Planned | | | | | | | | | | | | | | | | ⬜ |

---

## 6. PROJECT RISK REGISTER & MITIGATION STRATEGY

$$\text{Risk Score} = \text{Probability (1–5)} \times \text{Impact (1–5)}$$

| Risk ID | Category | Risk Description / Event | Impact Area | P | I | Risk Score | Severity Level | Mitigation Strategy (Preventative Plan) | Contingency Plan (Action if Triggered) | Risk Owner | Status |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- | :--- | :---: |
| **R-01** | Technical / AI Engine | **Cold-Start & Inaccurate Match:** Candidates with sparse initial skill entries receive zero or irrelevant recommendations from the cosine radar engine. | Matching Accuracy & Student Trust | 4 | 4 | **16** | **Critical** | Enforce onboarding checklist requiring at least 3 baseline skills; implement hybrid keyword and vector cosine matching fallbacks. | Fallback to domain-based broad recommendations and display missing evidence badges to guide profile enrichment. | Abel Mathew Bose | In Mitigation |
| **R-02** | Data Integrity & Trust | **Profile Evidence Fabrication:** Candidates submit broken GitHub repositories, falsified certificate URLs, or duplicate project proofs to inflate Trust Score. | Trust Index & Recruiter Confidence | 3 | 5 | **15** | **High** | Implement automated repo regex checks, certificate domain whitelisting, and mandatory checkpoint testing before awarding Verified badges. | Flag suspicious evidence with "Missing Proof" badges; restrict recruiter pipeline visibility to only authenticated credentials. | Sidharth K.A | Monitored |
| **R-03** | Performance & Scalability | **Client-Side Latency & UI Freezing:** Intensive vector calculations and animated radar sweeps cause browser lag and timer delays on mobile devices. | Assessment Flow & User Experience | 3 | 3 | **9** | **Medium** | Debounce radar filter triggers; optimize DOM manipulation; offload vector math into lightweight asynchronous routines; cache precomputed opportunity scores. | Disable radar sweep animations automatically on low-spec client devices; paginate opportunities list into chunks of 10 items. | Sen Shaji | Mitigated |
| **R-04** | Schedule & Milestones | **Scope Creep Across Dual Portals:** Simultaneous feature expansion across Student Readiness dashboards and Recruiter Shortlisting leads to milestone slippage. | Project Deadlines & Deliverables | 4 | 3 | **12** | **High** | Establish strict milestone boundaries (Phase 1-3 Student Core focus, Phase 4-5 Matching & Trust); isolate recruiter workflows into secondary sprint cycles. | Freeze new non-essential UI features; shift team pairing to unblock critical path assessment and opportunity radar tasks. | K.M. Meenakshi | Monitored |
| **R-05** | User Adoption & Retention | **Assessment Test Fatigue:** Candidates drop off mid-way through rigorous multi-question timed aptitude assessments, leaving readiness profiles incomplete. | Placement Conversion & Adoption | 3 | 4 | **12** | **High** | Structure assessments into bite-sized 5-question micro-checkpoints; implement real-time progress bars, motivational streak counters, and instant readiness unlocks. | Save quiz progress automatically in `localStorage`; dispatch non-intrusive reminder alerts guiding users to resume incomplete checkpoints. | K.M. Meenakshi | In Mitigation |

---

## 7. RESULTS AND DISCUSSION

1. **WBS Completeness:** The total project was decomposed into 6 phases and 15 self-contained work packages, ensuring 100% scope coverage without redundancy.
2. **Workload Distribution:** Project ownership was balanced across the 4 members:
   - **Abel Mathew Bose:** Architecture, Application Pipeline, AI Match Computation, Production Deployment.
   - **K.M. Meenakshi:** User Journeys, Design System, Splash/Landing UI, Dashboard KPIs, Mobile UX Optimization.
   - **Sen Shaji:** Dev Environment, Inactivity Guardian Engine, Opportunity Database, Timed Assessment Quizzes.
   - **Sidharth K.A:** Authentication Module, Skill Builder Engine, Missing Evidence Detector, End-to-End System Testing.
3. **Risk Exposure:** Four out of five identified risks were rated Medium to Critical ($Score \ge 9$). Preventative mitigation strategies and automated fallback contingencies were defined to safeguard project deadlines and platform integrity.

---

## 8. CONCLUSION
The Work Breakdown Structure, 16-week Gantt chart schedule, and 5-point Risk Register for **CareerPilot AI** were successfully developed following academic and professional engineering principles. The schedule provides a clear roadmap from initial architecture to final deployment, and the risk mitigation matrix ensures system dependability.

---

### **Student Signatures:**
1. Abel Mathew Bose: ___________________________
2. K.M. Meenakshi: ___________________________
3. Sen Shaji: ___________________________
4. Sidharth K.A: ___________________________

**Faculty Signature & Evaluation:** ___________________________  
**Date:** ____ / ____ / 2026
