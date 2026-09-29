# CareerPilot AI – Placement Intelligence & Career Readiness Platform

[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-blue.svg)](https://github.com/meenakshimeenu6585-max/CareerPilot-AI)
[![Technology](https://img.shields.io/badge/Built%20With-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange.svg)](https://github.com/meenakshimeenu6585-max/CareerPilot-AI)
[![Status](https://img.shields.io/badge/Status-Working%20Capstone%20Prototype-success.svg)](https://github.com/meenakshimeenu6585-max/CareerPilot-AI)

An AI-powered career development, skill verification, and placement intelligence platform engineered to bridge the gap between academic preparation and industry hiring standards.

---

## 📌 Problem Statement

Traditional campus recruitment and career preparation ecosystems suffer from critical systemic bottlenecks:
1. **Unverified Claims & Resume Inflation:** Students list theoretical competencies on resumes without standardized or verifiable evidence of hands-on application.
2. **Fragmented Application Tracking:** Candidates struggle to navigate disparate job portals, resulting in missed deadlines and uncoordinated hiring pipelines.
3. **Absence of Objective Readiness Feedback:** Candidates often receive binary rejection notices without actionable feedback regarding missing skills or competency deficits.
4. **Recruiter Evaluation Fatigue:** Campus recruitment teams spend excessive manual effort screening unqualified or unverified applicants for technical roles.

---

## 🎯 Project Objectives

- **Standardize Skill Credibility:** Implement an evidence-backed **Skill Trust Index** that weights project proof, industry certifications, and proctored technical assessments.
- **Provide Actionable Gap Analysis:** Deliver real-time "Missing Evidence Alerts" and role-specific readiness scores to empower proactive upskilling.
- **Streamline Campus Placement Funnels:** Provide an integrated Opportunity Hub and application pipeline tracker to monitor candidate progress from application to final offer.
- **Ensure Assessment Integrity:** Create a sequential, proctored evaluation pipeline with integrity tracking (tab-switching and clipboard anomaly logging).

---

## 🚀 Key Implemented Features

The current working implementation of **CareerPilot AI** contains the following functional modules:

### 1. Splash Screen & Brand Experience
- Brand introductory loader with animated vector branding.
- Automated client-side route transition into the main landing page.

### 2. Landing Page & Product Showcase
- Modern responsive layout with glassmorphic cards and curated typography.
- Platform value propositions, social proof metrics, and student journey overview.
- Interactive navigation header linking directly to authentication workflows.

### 3. Dual-Persona Authentication System
- Seamless tab toggle between **Student/Job Seeker** and **Recruiter** entry points.
- Full client-side input validation:
  - Email format verification.
  - Password strength verification (minimum 8 characters with letters, numbers, and special characters).
  - Password confirmation matching.
  - Interactive password visibility reveal/mask toggles.
- Contextual toast notifications providing real-time feedback.

### 4. Interactive Student Dashboard
- Personalized greeting and quick-status summary.
- Core KPI metric cards:
  - **Applications Sent**
  - **Opportunities Matched**
  - **Completed Assessments**
  - **Skill Trust Index** (% evidence-backed)
- Inactivity monitoring module tracking idle user sessions.

### 5. Career Readiness Gauge & Onboarding Checklist
- Dynamic circular SVG readiness meter reflecting verified profile completion.
- Interactive onboarding checklist guiding students through profile setup, skill verification, and assessment milestones.

### 6. Opportunities Hub
- Multi-category filtering across **Internships**, **Full-Time Roles**, **Hackathons**, and **Open Source Projects**.
- Rich opportunity cards detailing company details, stipend/salary, location, eligibility criteria, and required skill tags.
- One-click application submission with automated pipeline updates and confirmation toast alerts.

### 7. Application Status Tracker
- Kanban/Funnel tracking across pipeline stages:
  - **Bookmarked**
  - **Applied**
  - **Interviewing**
  - **Offers**
- Application deadline monitors with chronological tracking.

### 8. Assessments & Sequential Checkpoints
- Step-locked sequential assessment checkpoints to ensure foundational mastery before advancing:
  - **Checkpoint 1:** General Aptitude Assessment (Quantitative reasoning, logic, and comprehension)
  - **Checkpoint 2:** Programming Fundamentals (JavaScript, Python scope, closures, and logic)
  - **Checkpoint 3:** Domain Specialist Assessment (React architecture, SQL optimization)
- Interactive quiz modal with automatic scoring, threshold pass/fail validation, and checkpoint unlocking.
- Proctoring & integrity tracking logging tab switches and copy/paste interactions.
- Dynamic issuance and display of **Verified Skill Badges**.

### 9. Skills & Trust Engine
- Evidence-backed **Skill Trust Index** computed dynamically across user skills:
  - Project Evidence: +30%
  - Certified Credential: +30%
  - Assessment Checkpoint: +40%
- Modal dialog for attaching verifiable repository links and certificate proof.
- **Missing Evidence Alerts:** Real-time prompts pointing out missing credentials for in-demand skills.

### 10. AI Career Matching Radar
- Profile vector matching against open opportunities.
- Visual match score calculation highlighting skill synergies and prerequisites.

---

## 🛠️ Technologies Used

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Structure** | HTML5 | Semantic structure with accessible attributes and unique IDs |
| **Styling & Design** | Vanilla CSS3 | Custom design system, CSS variables, glassmorphism, responsive Flexbox/Grid |
| **Application Logic** | JavaScript (ES6+) | Single-Page Application (SPA) hash routing, dynamic state management, reactive DOM manipulation |
| **Data Persistence** | Web Storage API (`localStorage`) | Client-side persistence for user state, applications, skills, badges, and assessment records |
| **Icons & Media** | SVG & PNG Graphics | Lightweight vector illustrations, custom SVG gauges, and status badges |

---

## 📂 Project Architecture

```plaintext
CareerPilot AI/
├── index.html                                  # Main SPA entry point (all views & modals)
├── styles.css                                  # Core design system, tokens, and responsive layout
├── app.js                                      # SPA router, mock state, validation & interactivity
├── .gitignore                                  # Git ignore rules for clean repository state
├── README.md                                   # Comprehensive project documentation
├── assets/                                     # Static vector images and illustrations
│   ├── student-laptop.png
│   └── students-group.png
├── CareerPilot_AI_Assignment_Experiment_03.md  # Software Project Management laboratory record
├── CareerPilot_AI_Assignment_Experiment_03.doc # Formatted project documentation
├── CareerPilot_AI_Assignment_Experiment_03.html# HTML report of SPM Experiment 03
├── CareerPilot_AI_Assignment_Experiment_03.rtf # RTF export of project documentation
├── CareerPilot_AI_Visual_References.html       # Visual design and screen references
├── CareerPilot_AI_WBS.csv                      # Work Breakdown Structure (WBS) data
├── CareerPilot_AI_Gantt_Chart.csv              # Gantt chart scheduling data
├── CareerPilot_AI_WBS_and_Gantt_Chart.xls      # SPM WBS & Gantt chart spreadsheet
├── CareerPilot_AI_Risk_Register.csv            # Project risk assessment matrix
├── CareerPilot_AI_Risk_Register.xls            # Qualitative Risk Register workbook
├── generate_excel_openpyxl.py                  # OpenPyXL automation script for SPM artifacts
└── split_milestone.ps1                         # PowerShell utility script
```

---

## 🚦 How to Run the Project Locally

Because this project is built using native web standards with zero external build dependencies, it can be launched immediately on any operating system:

### Option 1: Direct Browser Launch
1. Clone or download this repository to your local machine.
2. Navigate to the project directory.
3. Double-click `index.html` or right-click and choose **Open With > Google Chrome** (or Edge/Firefox/Brave/Safari).

### Option 2: Local HTTP Server (Recommended)

Using **Python 3**:
```bash
# Navigate to the project directory
cd "CareerPilot AI"

# Start a lightweight local HTTP server
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

Using **VS Code Live Server**:
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 👥 Capstone Project Team

This project is developed as part of the **Software Project Management Lab (SPM) Capstone Curriculum**:

| Member Name | Role & Responsibilities |
| :--- | :--- |
| **Abel Mathew Bose** | Lead Architect & AI Opportunity Matching Lead |
| **K.M. Meenakshi** | Project Manager & Frontend / UI/UX Lead |
| **Sen Shaji** | Database Architecture & Assessment Engine Engineer |
| **Sidharth K.A** | Skills Trust & Verification QA Lead |

---

## 📄 License & Attribution

This repository and its codebase are developed for academic capstone presentation and evaluation purposes. All rights reserved by the project team.
