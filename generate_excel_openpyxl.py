"""
CareerPilot AI - Professional Excel Generator
Generates:
1. CareerPilot_AI_WBS_and_Gantt_Chart.xlsx (WBS + 16-Week Gantt Chart)
2. CareerPilot_AI_Risk_Register.xlsx (Risk Register with 5 Major Risks & Matrix)

Group Members:
- Abel Mathew Bose
- K.M. Meenakshi
- Sen Shaji
- Sidharth K.A
"""

import sys

try:
    import openpyxl
    from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
    from openpyxl.utils import get_column_letter
except ImportError:
    print("openpyxl is not installed. Run: pip install openpyxl")
    sys.exit(1)


def create_wbs_and_gantt():
    wb = openpyxl.Workbook()
    
    # -------------------------------------------------------------
    # 1. WBS SHEET
    # -------------------------------------------------------------
    ws_wbs = wb.active
    ws_wbs.title = "WBS_Detailed"
    ws_wbs.views.sheetView[0].showGridLines = True

    # Color Palette (Minimal & Professional Slate Theme)
    c_navy = "0F172A"
    c_slate = "1E293B"
    c_phase_bg = "F1F5F9"
    c_border = "E2E8F0"
    c_completed_bg = "DCFCE7"
    c_completed_fg = "166534"
    c_inprogress_bg = "E0F2FE"
    c_inprogress_fg = "0369A1"
    c_planned_bg = "F1F5F9"
    c_planned_fg = "475569"

    thin_border = Border(
        left=Side(style='thin', color=c_border),
        right=Side(style='thin', color=c_border),
        top=Side(style='thin', color=c_border),
        bottom=Side(style='thin', color=c_border)
    )

    # Title & Metadata
    ws_wbs["A1"] = "CareerPilot AI – Work Breakdown Structure (WBS)"
    ws_wbs["A1"].font = Font(name="Segoe UI", size=16, bold=True, color=c_navy)
    
    ws_wbs["A2"] = "Experiment No.: 03 | Date: 01/08/2026 | Project: Placement Intelligence & Career Readiness Platform"
    ws_wbs["A2"].font = Font(name="Segoe UI", size=9.5, italic=True, color="64748B")
    
    ws_wbs["A3"] = "Team Members: Abel Mathew Bose, K.M. Meenakshi, Sen Shaji, Sidharth K.A"
    ws_wbs["A3"].font = Font(name="Segoe UI", size=9.5, bold=True, color="475569")

    # Column Headers
    headers = [
        "WBS ID", "Phase", "Module", "Work Package", "Description", 
        "Owner", "Start Date", "End Date", "Duration (Days)", "Status", "Progress"
    ]
    for col_idx, h in enumerate(headers, 1):
        cell = ws_wbs.cell(row=5, column=col_idx, value=h)
        cell.font = Font(name="Segoe UI", size=10.5, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_slate, end_color=c_slate, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws_wbs.row_dimensions[5].height = 26

    # WBS Rows Data
    rows_data = [
        # Phase 1
        ("PHASE", "1.0", "Phase 1: Project Initiation & Requirements Engineering"),
        ("TASK", "1.1", "Project Initiation", "Architecture & Scope", "Project Scope & Tech Architecture",
         "Define functional specs, AI pipeline architecture, and placement intelligence scope.",
         "Abel Mathew Bose", "2026-08-01", "2026-08-07", 7, "Completed", 1.0),
        ("TASK", "1.2", "Project Initiation", "User Journeys", "Persona & Journey Mapping",
         "Map student readiness tracks and recruiter shortlisting workflow workflows.",
         "K.M. Meenakshi", "2026-08-05", "2026-08-11", 7, "Completed", 1.0),
        ("TASK", "1.3", "Project Initiation", "Environment Setup", "Dev Environment & Version Control",
         "Configure Git repositories, branches, CI automation, and code standards.",
         "Sen Shaji", "2026-08-08", "2026-08-14", 7, "Completed", 1.0),
        
        # Phase 2
        ("PHASE", "2.0", "Phase 2: UI/UX Design & Frontend Foundation"),
        ("TASK", "2.1", "UI/UX Design", "Design System", "Design Tokens & Responsive Layout",
         "Create CSS design tokens, modern typography, glassmorphism cards, and dark theme.",
         "K.M. Meenakshi", "2026-08-15", "2026-08-22", 8, "Completed", 1.0),
        ("TASK", "2.2", "UI/UX Design", "Landing & Splash", "Splash Loader & Landing Showcase",
         "Build animated paper-plane splash screen, hero section, metrics and feature showcase.",
         "K.M. Meenakshi", "2026-08-20", "2026-08-28", 9, "Completed", 1.0),
        ("TASK", "2.3", "UI/UX Design", "Auth & Access Control", "Dual-Persona Authentication Module",
         "Implement Student/Recruiter login, registration validation, and password eye toggles.",
         "Sidharth K.A", "2026-08-26", "2026-09-04", 10, "Completed", 1.0),

        # Phase 3
        ("PHASE", "3.0", "Phase 3: Student Dashboard & Application Tracking"),
        ("TASK", "3.1", "Student Platform", "Executive Dashboard", "KPI Metrics & Career Readiness Gauge",
         "Interactive stat cards, circular readiness gauge SVG, checklist, and donut breakdown.",
         "K.M. Meenakshi", "2026-09-05", "2026-09-14", 10, "Completed", 1.0),
        ("TASK", "3.2", "Student Platform", "Inactivity Guardian", "Idle Countdown & Alert Engine",
         "Track user activity, trigger inactivity warning banners, and handle auto-pause of AI matching.",
         "Sen Shaji", "2026-09-10", "2026-09-19", 10, "In Progress", 0.90),
        ("TASK", "3.3", "Student Platform", "Application Tracker", "Job Pipeline & Status Workflow",
         "Multi-stage pipeline tracking (Bookmarked, Applied, Interviewing, Offer) with deadlines.",
         "Abel Mathew Bose", "2026-09-15", "2026-09-25", 11, "In Progress", 0.75),

        # Phase 4
        ("PHASE", "4.0", "Phase 4: AI Opportunity Radar & Matching Engine"),
        ("TASK", "4.1", "AI Matching Engine", "Opportunity DB", "Job Profiles & Skill Vectors Schema",
         "Build normalized job profiles, required skill sets, salary ranges, and domain taxonomy.",
         "Sen Shaji", "2026-09-26", "2026-10-04", 9, "In Progress", 0.50),
        ("TASK", "4.2", "AI Matching Engine", "Matching Algorithm", "Cosine Similarity Match Computation",
         "Formulate weighted vector matching between student verified skills and job requirements.",
         "Abel Mathew Bose", "2026-10-02", "2026-10-10", 9, "Planned", 0.0),
        ("TASK", "4.3", "AI Matching Engine", "Opportunity Radar UI", "Radar Visualizer & Match Drawer",
         "Animated radar sweep graphic, filter controls (domain, remote, min match), and breakdown drawer.",
         "Abel Mathew Bose", "2026-10-08", "2026-10-16", 9, "Planned", 0.0),

        # Phase 5
        ("PHASE", "5.0", "Phase 5: Skills Trust Engine & Assessment Pipeline"),
        ("TASK", "5.1", "Trust & Verification", "Skill Builder", "Skill Evidence Validation Engine",
         "Evidence submission interface (GitHub repos, certificate links) and verification engine.",
         "Sidharth K.A", "2026-10-17", "2026-10-25", 9, "Planned", 0.0),
        ("TASK", "5.2", "Trust & Verification", "Missing Evidence Detector", "Skill Gap Analysis & Alert Widget",
         "Detect unverified skills, prompt students with missing proof alerts, and calculate Trust Index.",
         "Sidharth K.A", "2026-10-22", "2026-10-30", 9, "Planned", 0.0),
        ("TASK", "5.3", "Assessment Pipeline", "Checkpoint Quizzes", "Sequential Assessment & Timed Testing",
         "Interactive multi-question assessment modal, live countdown timers, and immediate scoring.",
         "Sen Shaji", "2026-10-28", "2026-11-06", 10, "Planned", 0.0),

        # Phase 6
        ("PHASE", "6.0", "Phase 6: Integration, Testing & Final Deployment"),
        ("TASK", "6.1", "QA & Testing", "End-to-End Testing", "System Validation & Edge Case Testing",
         "Validate user flows, local storage persistence, responsive views, and algorithm accuracy.",
         "Sidharth K.A", "2026-11-07", "2026-11-13", 7, "Planned", 0.0),
        ("TASK", "6.2", "Performance & UX", "Cross-Device Optimization", "Mobile Tuning & Asset Optimization",
         "Fine-tune responsive CSS breakpoints, lazy image rendering, and smooth animations.",
         "K.M. Meenakshi", "2026-11-11", "2026-11-17", 7, "Planned", 0.0),
        ("TASK", "6.3", "Release & Closure", "Project Review", "Production Deployment & Final Deliverables",
         "Publish platform build, compile project documentation, Gantt review, and presentation.",
         "Abel Mathew Bose", "2026-11-15", "2026-11-21", 7, "Planned", 0.0),
    ]

    curr_row = 6
    for item in rows_data:
        ws_wbs.row_dimensions[curr_row].height = 22
        if item[0] == "PHASE":
            ws_wbs.cell(row=curr_row, column=1, value=item[1]).alignment = Alignment(horizontal="center", vertical="center")
            ws_wbs.merge_cells(start_row=curr_row, start_column=2, end_row=curr_row, end_column=11)
            cell = ws_wbs.cell(row=curr_row, column=2, value=item[2])
            cell.font = Font(name="Segoe UI", size=10, bold=True, color=c_navy)
            cell.alignment = Alignment(horizontal="left", vertical="center")
            for c in range(1, 12):
                c_elem = ws_wbs.cell(row=curr_row, column=c)
                c_elem.fill = PatternFill(start_color=c_phase_bg, end_color=c_phase_bg, fill_type="solid")
                c_elem.border = Border(top=Side(style='thin', color="94A3B8"), bottom=Side(style='thin', color="94A3B8"))
        else:
            _, wbs_id, phase, module, wp, desc, owner, start, end, dur, status, prog = item
            ws_wbs.cell(row=curr_row, column=1, value=wbs_id).alignment = Alignment(horizontal="center", vertical="center")
            ws_wbs.cell(row=curr_row, column=2, value=phase).alignment = Alignment(horizontal="left", vertical="center")
            ws_wbs.cell(row=curr_row, column=3, value=module).alignment = Alignment(horizontal="left", vertical="center")
            ws_wbs.cell(row=curr_row, column=4, value=wp).alignment = Alignment(horizontal="left", vertical="center")
            ws_wbs.cell(row=curr_row, column=5, value=desc).alignment = Alignment(horizontal="left", vertical="center")
            ws_wbs.cell(row=curr_row, column=6, value=owner).alignment = Alignment(horizontal="left", vertical="center")
            
            c_start = ws_wbs.cell(row=curr_row, column=7, value=start)
            c_start.alignment = Alignment(horizontal="center", vertical="center")
            
            c_end = ws_wbs.cell(row=curr_row, column=8, value=end)
            c_end.alignment = Alignment(horizontal="center", vertical="center")
            
            c_dur = ws_wbs.cell(row=curr_row, column=9, value=dur)
            c_dur.alignment = Alignment(horizontal="right", vertical="center")
            c_dur.number_format = "#,##0"

            c_status = ws_wbs.cell(row=curr_row, column=10, value=status)
            c_status.alignment = Alignment(horizontal="center", vertical="center")
            c_status.font = Font(name="Segoe UI", size=9, bold=True)
            if status == "Completed":
                c_status.fill = PatternFill(start_color=c_completed_bg, end_color=c_completed_bg, fill_type="solid")
                c_status.font = Font(name="Segoe UI", size=9, bold=True, color=c_completed_fg)
            elif status == "In Progress":
                c_status.fill = PatternFill(start_color=c_inprogress_bg, end_color=c_inprogress_bg, fill_type="solid")
                c_status.font = Font(name="Segoe UI", size=9, bold=True, color=c_inprogress_fg)
            else:
                c_status.fill = PatternFill(start_color=c_planned_bg, end_color=c_planned_bg, fill_type="solid")
                c_status.font = Font(name="Segoe UI", size=9, bold=True, color=c_planned_fg)

            c_prog = ws_wbs.cell(row=curr_row, column=11, value=prog)
            c_prog.alignment = Alignment(horizontal="right", vertical="center")
            c_prog.number_format = "0%"

            for c in range(1, 12):
                ws_wbs.cell(row=curr_row, column=c).border = thin_border
                ws_wbs.cell(row=curr_row, column=c).font = ws_wbs.cell(row=curr_row, column=c).font or Font(name="Segoe UI", size=9.5, color="334155")

        curr_row += 1

    # Column Widths
    col_widths = [10, 20, 22, 26, 36, 18, 13, 13, 15, 14, 12]
    for i, w in enumerate(col_widths, 1):
        ws_wbs.column_dimensions[get_column_letter(i)].width = w

    # -------------------------------------------------------------
    # 2. GANTT CHART SHEET
    # -------------------------------------------------------------
    ws_gantt = wb.create_sheet(title="Gantt_Chart")
    ws_gantt.views.sheetView[0].showGridLines = True

    ws_gantt["A1"] = "CareerPilot AI – Project Scheduling Gantt Chart (16 Weeks)"
    ws_gantt["A1"].font = Font(name="Segoe UI", size=16, bold=True, color=c_navy)

    ws_gantt["A2"] = "Legend: [■ Green] Completed Task  |  [■ Blue] In Progress Task  |  [■ Gray] Planned Task"
    ws_gantt["A2"].font = Font(name="Segoe UI", size=9.5, italic=True, color="475569")

    # Header Top
    ws_gantt.merge_cells("A4:G4")
    ws_gantt["A4"] = "Task Specifications & Assignment"
    ws_gantt["A4"].font = Font(name="Segoe UI", size=10, bold=True, color="FFFFFF")
    ws_gantt["A4"].fill = PatternFill(start_color=c_navy, end_color=c_navy, fill_type="solid")
    ws_gantt["A4"].alignment = Alignment(horizontal="center", vertical="center")

    months = [("August 2026", 8, 11), ("September 2026", 12, 15), ("October 2026", 16, 19), ("November 2026", 20, 23)]
    for m_label, start_c, end_c in months:
        ws_gantt.merge_cells(start_row=4, start_column=start_c, end_row=4, end_column=end_c)
        c = ws_gantt.cell(row=4, column=start_c, value=m_label)
        c.font = Font(name="Segoe UI", size=10, bold=True, color="FFFFFF")
        c.fill = PatternFill(start_color="1E293B", end_color="1E293B", fill_type="solid")
        c.alignment = Alignment(horizontal="center", vertical="center")

    # Headers Row 5
    g_headers = ["ID", "Work Package", "Owner", "Start", "End", "Days", "Status"] + [f"W{i}" for i in range(1, 17)]
    for idx, gh in enumerate(g_headers, 1):
        c = ws_gantt.cell(row=5, column=idx, value=gh)
        c.font = Font(name="Segoe UI", size=9.5, bold=True, color="FFFFFF")
        c.fill = PatternFill(start_color="334155", end_color="334155", fill_type="solid")
        c.alignment = Alignment(horizontal="center", vertical="center")
    ws_gantt.row_dimensions[5].height = 24

    # Gantt Tasks Matrix (Task, Start W, End W, Status, Progress)
    gantt_tasks = [
        ("1.1", "Project Scope & Tech Architecture", "Abel Mathew Bose", "01/08", "07/08", 7, "Completed", 1, 1, "100%"),
        ("1.2", "Persona & Journey Mapping", "K.M. Meenakshi", "05/08", "11/08", 7, "Completed", 1, 2, "100%"),
        ("1.3", "Dev Environment & Version Control", "Sen Shaji", "08/08", "14/08", 7, "Completed", 2, 2, "100%"),
        ("2.1", "Design Tokens & Responsive Layout", "K.M. Meenakshi", "15/08", "22/08", 8, "Completed", 3, 4, "100%"),
        ("2.2", "Splash Loader & Landing Showcase", "K.M. Meenakshi", "20/08", "28/08", 9, "Completed", 3, 4, "100%"),
        ("2.3", "Dual-Persona Authentication Module", "Sidharth K.A", "26/08", "04/09", 10, "Completed", 4, 5, "100%"),
        ("3.1", "KPI Metrics & Career Readiness Gauge", "K.M. Meenakshi", "05/09", "14/09", 10, "Completed", 5, 7, "100%"),
        ("3.2", "Idle Countdown & Alert Engine", "Sen Shaji", "10/09", "19/09", 10, "In Progress", 6, 7, "90%"),
        ("3.3", "Job Pipeline & Status Workflow", "Abel Mathew Bose", "15/09", "25/09", 11, "In Progress", 7, 8, "75%"),
        ("4.1", "Job Profiles & Skill Vectors Schema", "Sen Shaji", "26/09", "04/10", 9, "In Progress", 9, 10, "50%"),
        ("4.2", "Cosine Similarity Match Computation", "Abel Mathew Bose", "02/10", "10/10", 9, "Planned", 10, 11, "0%"),
        ("4.3", "Radar Visualizer & Match Drawer", "Abel Mathew Bose", "08/10", "16/10", 9, "Planned", 10, 11, "0%"),
        ("5.1", "Skill Evidence Validation Engine", "Sidharth K.A", "17/10", "25/10", 9, "Planned", 12, 13, "0%"),
        ("5.2", "Skill Gap Analysis & Alert Widget", "Sidharth K.A", "22/10", "30/10", 9, "Planned", 13, 14, "0%"),
        ("5.3", "Sequential Assessment & Timed Testing", "Sen Shaji", "28/10", "06/11", 10, "Planned", 13, 14, "0%"),
        ("6.1", "System Validation & Edge Case Testing", "Sidharth K.A", "07/11", "13/11", 7, "Planned", 15, 15, "0%"),
        ("6.2", "Mobile Tuning & Asset Optimization", "K.M. Meenakshi", "11/11", "17/11", 7, "Planned", 15, 16, "0%"),
        ("6.3", "Production Deployment & Final Deliverables", "Abel Mathew Bose", "15/11", "21/11", 7, "Planned", 16, 16, "0%"),
    ]

    fill_green = PatternFill(start_color="10B981", end_color="10B981", fill_type="solid")
    fill_blue = PatternFill(start_color="2563EB", end_color="2563EB", fill_type="solid")
    fill_gray = PatternFill(start_color="94A3B8", end_color="94A3B8", fill_type="solid")

    for r_i, task in enumerate(gantt_tasks, 6):
        ws_gantt.row_dimensions[r_i].height = 20
        tid, wp, owner, sdate, edate, days, status, sw, ew, prog = task
        ws_gantt.cell(row=r_i, column=1, value=tid).alignment = Alignment(horizontal="center", vertical="center")
        ws_gantt.cell(row=r_i, column=2, value=wp).alignment = Alignment(horizontal="left", vertical="center")
        ws_gantt.cell(row=r_i, column=3, value=owner).alignment = Alignment(horizontal="left", vertical="center")
        ws_gantt.cell(row=r_i, column=4, value=sdate).alignment = Alignment(horizontal="center", vertical="center")
        ws_gantt.cell(row=r_i, column=5, value=edate).alignment = Alignment(horizontal="center", vertical="center")
        ws_gantt.cell(row=r_i, column=6, value=days).alignment = Alignment(horizontal="right", vertical="center")
        
        c_stat = ws_gantt.cell(row=r_i, column=7, value=status)
        c_stat.alignment = Alignment(horizontal="center", vertical="center")
        c_stat.font = Font(name="Segoe UI", size=8.5, bold=True)
        if status == "Completed":
            c_stat.fill = PatternFill(start_color=c_completed_bg, end_color=c_completed_bg, fill_type="solid")
            c_stat.font = Font(name="Segoe UI", size=8.5, bold=True, color=c_completed_fg)
        elif status == "In Progress":
            c_stat.fill = PatternFill(start_color=c_inprogress_bg, end_color=c_inprogress_bg, fill_type="solid")
            c_stat.font = Font(name="Segoe UI", size=8.5, bold=True, color=c_inprogress_fg)
        else:
            c_stat.fill = PatternFill(start_color=c_planned_bg, end_color=c_planned_bg, fill_type="solid")
            c_stat.font = Font(name="Segoe UI", size=8.5, bold=True, color=c_planned_fg)

        for col in range(1, 8):
            ws_gantt.cell(row=r_i, column=col).border = thin_border
            ws_gantt.cell(row=r_i, column=col).font = ws_gantt.cell(row=r_i, column=col).font or Font(name="Segoe UI", size=9, color="334155")

        # Weeks 1 to 16
        for w_idx in range(1, 17):
            col_target = 7 + w_idx
            cell = ws_gantt.cell(row=r_i, column=col_target)
            cell.border = thin_border
            if sw <= w_idx <= ew:
                cell.value = "■" if w_idx < ew else prog
                cell.alignment = Alignment(horizontal="center", vertical="center")
                cell.font = Font(name="Segoe UI", size=8, bold=True, color="FFFFFF")
                if status == "Completed":
                    cell.fill = fill_green
                elif status == "In Progress":
                    cell.fill = fill_blue
                else:
                    cell.fill = fill_gray

    # Column Widths for Gantt
    ws_gantt.column_dimensions["A"].width = 7
    ws_gantt.column_dimensions["B"].width = 25
    ws_gantt.column_dimensions["C"].width = 18
    ws_gantt.column_dimensions["D"].width = 10
    ws_gantt.column_dimensions["E"].width = 10
    ws_gantt.column_dimensions["F"].width = 8
    ws_gantt.column_dimensions["G"].width = 13
    for i in range(1, 17):
        ws_gantt.column_dimensions[get_column_letter(7 + i)].width = 5.5

    wb.save("CareerPilot_AI_WBS_and_Gantt_Chart.xlsx")
    print("SUCCESS: CareerPilot_AI_WBS_and_Gantt_Chart.xlsx generated successfully.")


def create_risk_register():
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Risk_Register"
    ws.views.sheetView[0].showGridLines = True

    c_navy = "0F172A"
    c_border = "CBD5E1"
    thin_border = Border(
        left=Side(style='thin', color=c_border),
        right=Side(style='thin', color=c_border),
        top=Side(style='thin', color=c_border),
        bottom=Side(style='thin', color=c_border)
    )

    # Title & Metadata
    ws["A1"] = "CareerPilot AI – Project Risk Register & Mitigation Matrix"
    ws["A1"].font = Font(name="Segoe UI", size=16, bold=True, color=c_navy)

    ws["A2"] = "Project: Placement Intelligence & Career Readiness Platform | Experiment No.: 03 | Date: 01/08/2026"
    ws["A2"].font = Font(name="Segoe UI", size=9.5, italic=True, color="64748B")

    ws["A3"] = "Prepared By: Abel Mathew Bose, K.M. Meenakshi, Sen Shaji, Sidharth K.A | Formula: Risk Score = Probability (1-5) x Impact (1-5)"
    ws["A3"].font = Font(name="Segoe UI", size=9.5, bold=True, color="475569")

    # Column Headers
    headers = [
        "Risk ID", "Risk Category", "Risk Description / Event", "Impact Area",
        "Probability (P: 1-5)", "Impact (I: 1-5)", "Risk Score (P x I)",
        "Risk Level", "Mitigation Strategy (Preventative Plan)",
        "Contingency Plan (Action if Triggered)", "Risk Owner", "Status"
    ]
    for col_idx, h in enumerate(headers, 1):
        cell = ws.cell(row=5, column=col_idx, value=h)
        cell.font = Font(name="Segoe UI", size=10, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_navy, end_color=c_navy, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[5].height = 28

    # 5 Major Risks
    risks = [
        ("R-01", "Technical / AI Engine",
         "Cold-Start & Inaccurate Match: Candidates with sparse or unverified initial skill entries receive zero or irrelevant job recommendations from the cosine radar engine.",
         "Opportunity Radar Accuracy & Candidate Trust", 4, 4,
         "Enforce onboarding requirement of at least 3 baseline skills; implement hybrid matching combining domain taxonomy keywords with vector cosine embeddings.",
         "Fallback to role-based exploratory recommendations and trigger missing evidence popups highlighting required skills.",
         "Abel Mathew Bose", "In Mitigation"),

        ("R-02", "Data Integrity & Trust",
         "Profile Evidence Fabrication: Candidates submit non-functional GitHub repositories, broken certificate URLs, or falsified project proofs to inflate their Trust Score.",
         "Skill Trust Index Credibility & Recruiter Confidence", 3, 5,
         "Implement automated repository regex validation, certificate domain whitelisting, and require checkpoint aptitude/technical quizzes before awarding Verified badges.",
         "Flag suspicious evidence with 'Missing Proof' badges; restrict recruiter pipeline visibility to only authenticated verified credentials.",
         "Sidharth K.A", "Monitored"),

        ("R-03", "Performance & Scalability",
         "Client-Side Latency & UI Freezing: Intensive vector calculations and animated radar sweeps cause browser lag and sluggish assessment timer counters on mobile devices.",
         "Assessment Test Flow & User Experience", 3, 3,
         "Debounce radar filter triggers; optimize DOM manipulation; offload vector math into lightweight asynchronous routines; cache precomputed opportunity scores.",
         "Disable radar sweep animations automatically on low-spec client devices; paginate opportunities list into chunks of 10 items.",
         "Sen Shaji", "Mitigated"),

        ("R-04", "Schedule & Milestones",
         "Scope Creep Across Dual Portals: Simultaneous feature expansion across Student Readiness dashboards and Recruiter Shortlisting leads to milestone slippage.",
         "Project Deadlines & Sprint Deliverables", 4, 3,
         "Establish strict milestone boundaries (Phase 1-3 Student Core focus, Phase 4-5 Matching & Trust); isolate recruiter workflows into secondary sprint cycles.",
         "Freeze new non-essential UI features; shift team pairing to unblock critical path assessment and opportunity radar tasks.",
         "K.M. Meenakshi", "Monitored"),

        ("R-05", "User Adoption & Retention",
         "Assessment Test Fatigue: Candidates drop off mid-way through rigorous multi-question timed aptitude assessments, leaving readiness profiles incomplete.",
         "Placement Conversion & Platform Engagement", 3, 4,
         "Structure assessments into bite-sized 5-question micro-checkpoints; implement real-time progress bars, motivational streak counters, and instant readiness unlocks.",
         "Save quiz progress automatically in localStorage; dispatch non-intrusive reminder alerts guiding users to resume incomplete checkpoints.",
         "K.M. Meenakshi", "In Mitigation")
    ]

    fill_critical = PatternFill(start_color="FEE2E2", end_color="FEE2E2", fill_type="solid")
    fill_medium = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid")

    for i, r in enumerate(risks, 6):
        ws.row_dimensions[i].height = 54
        rid, cat, desc, impact_area, prob, imp, mit, cont, owner, stat = r
        
        ws.cell(row=i, column=1, value=rid).alignment = Alignment(horizontal="center", vertical="top")
        ws.cell(row=i, column=2, value=cat).alignment = Alignment(horizontal="left", vertical="top")
        ws.cell(row=i, column=3, value=desc).alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
        ws.cell(row=i, column=4, value=impact_area).alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
        
        c_p = ws.cell(row=i, column=5, value=prob)
        c_p.alignment = Alignment(horizontal="center", vertical="top")
        c_p.font = Font(name="Segoe UI", size=10, bold=True)
        
        c_i = ws.cell(row=i, column=6, value=imp)
        c_i.alignment = Alignment(horizontal="center", vertical="top")
        c_i.font = Font(name="Segoe UI", size=10, bold=True)
        
        # Risk Score Formula: =E{i}*F{i}
        c_score = ws.cell(row=i, column=7, value=f"=E{i}*F{i}")
        c_score.alignment = Alignment(horizontal="center", vertical="top")
        c_score.font = Font(name="Segoe UI", size=10, bold=True)

        score_val = prob * imp
        level_str = f"Critical ({score_val})" if score_val >= 16 else f"High ({score_val})" if score_val >= 10 else f"Medium ({score_val})"
        c_level = ws.cell(row=i, column=8, value=level_str)
        c_level.alignment = Alignment(horizontal="center", vertical="top")
        c_level.font = Font(name="Segoe UI", size=9.5, bold=True, color="991B1B" if score_val >= 10 else "92400E")
        c_level.fill = fill_critical if score_val >= 10 else fill_medium

        ws.cell(row=i, column=9, value=mit).alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
        ws.cell(row=i, column=10, value=cont).alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
        ws.cell(row=i, column=11, value=owner).alignment = Alignment(horizontal="left", vertical="top")
        
        c_st = ws.cell(row=i, column=12, value=stat)
        c_st.alignment = Alignment(horizontal="center", vertical="top")
        c_st.fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        c_st.font = Font(name="Segoe UI", size=9, bold=True, color="1E293B")

        for col in range(1, 13):
            ws.cell(row=i, column=col).border = thin_border
            ws.cell(row=i, column=col).font = ws.cell(row=i, column=col).font or Font(name="Segoe UI", size=9.5, color="334155")

    # Column Widths
    col_widths = [10, 20, 32, 24, 12, 10, 12, 14, 34, 30, 18, 14]
    for idx, w in enumerate(col_widths, 1):
        ws.column_dimensions[get_column_letter(idx)].width = w

    wb.save("CareerPilot_AI_Risk_Register.xlsx")
    print("SUCCESS: CareerPilot_AI_Risk_Register.xlsx generated successfully.")


if __name__ == "__main__":
    create_wbs_and_gantt()
    create_risk_register()
