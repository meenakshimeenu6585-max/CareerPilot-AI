// CareerPilot AI - Application SPA Routing, Form Validation & Dashboard Interactivity

// Local Database State Mock Data
const DEFAULT_OPPORTUNITIES = [
  {
    id: 'opp-1',
    title: 'Software Developer Intern',
    company: 'Amazon',
    type: 'internship',
    location: 'Remote',
    stipend: '₹45,000 / month',
    eligible: 'B.Tech CS/IT graduating 2026/2027',
    skills: ['JavaScript', 'React', 'Node.js'],
    desc: 'Join the Amazon Prime Video engineering team. You will build highly responsive web applications using React, optimize backend REST services with Node.js, and work on cloud integrations.',
    deadline: 'Sep 15, 2026'
  },
  {
    id: 'opp-2',
    title: 'Data Analyst Intern',
    company: 'Deloitte',
    type: 'internship',
    location: 'Hyderabad, India',
    stipend: '₹30,000 / month',
    eligible: 'All disciplines graduating 2025/2026',
    skills: ['Python', 'SQL', 'Aptitude'],
    desc: 'Collaborate with consulting teams to gather, cleanse, and structure large datasets. Develop predictive queries in SQL, build regression models in Python, and deliver client-facing dashboards.',
    deadline: 'Sep 20, 2026'
  },
  {
    id: 'opp-3',
    title: 'Full Stack Developer',
    company: 'Zoho Corporation',
    type: 'job',
    location: 'Chennai, India',
    stipend: '₹8,00,000 / annum',
    eligible: 'Graduating 2025/2026 with strong CS fundamentals',
    skills: ['JavaScript', 'Node.js', 'SQL'],
    desc: 'Develop responsive client-facing interfaces and write performant server APIs. Write structured SQL migrations, manage deployment scripts, and resolve complex frontend bugs.',
    deadline: 'Sep 25, 2026'
  },
  {
    id: 'opp-4',
    title: 'AI/ML Engineering Intern',
    company: 'Fractal Analytics',
    type: 'internship',
    location: 'Remote',
    stipend: '₹35,000 / month',
    eligible: 'Graduates with Python and statistics backgrounds',
    skills: ['Python', 'Aptitude'],
    desc: 'Work on building text summary models, preprocessing conversational chatbot data, and computing text embeddings using Python. Focus on model efficiency and metrics logging.',
    deadline: 'Sep 10, 2026'
  },
  {
    id: 'opp-5',
    title: 'NextGen AI Hackathon',
    company: 'Microsoft',
    type: 'hackathon',
    location: 'Bangalore, India (Onsite)',
    stipend: '₹5,00,000 Prize Pool',
    eligible: 'Open to all college student teams',
    skills: ['JavaScript', 'Python', 'React'],
    desc: 'Build next-generation productivity tools powered by LLMs and agentic frameworks. Teams will build prototype apps, deploy in Azure, and pitch to industry experts.',
    deadline: 'Oct 05, 2026'
  },
  {
    id: 'opp-6',
    title: 'E-Commerce Admin UI Refactoring',
    company: 'Webpack Open Source',
    type: 'opensource',
    location: 'Remote (GitHub)',
    stipend: 'Stripe Sponsorship Badges',
    eligible: 'Anyone interested in frontend architecture',
    skills: ['JavaScript', 'React', 'UI Design'],
    desc: 'Refactor old class-based components into functional Hooks, implement custom layout loaders, and optimize webpack bundles. Open-source contribution logging is tracked.',
    deadline: 'Oct 15, 2026'
  }
];

const DEFAULT_QUIZ_QUESTIONS = {
  checkpoint1: [
    {
      q: 'A train 120m long passes a telegraph post in 6 seconds. What is the speed of the train in km/h?',
      options: ['72 km/h', '60 km/h', '80 km/h', '90 km/h'],
      correct: 0
    },
    {
      q: 'If coding is represented as "ELFGIP", how is "DECODE" represented?',
      options: ['FGEQFG', 'FGIPFG', 'FGEQGH', 'EFGIEF'],
      correct: 0
    },
    {
      q: 'Find the next number in the series: 3, 6, 12, 21, 33, ?',
      options: ['48', '45', '46', '42'],
      correct: 0
    },
    {
      q: 'All students are creative. Some creative people are developers. Therefore:',
      options: ['Some students might be developers', 'All students are developers', 'All developers are students', 'No student is a developer'],
      correct: 0
    },
    {
      q: 'Simplify: (15 * 8) - (120 / 6) + 45',
      options: ['145', '125', '165', '155'],
      correct: 0
    }
  ],
  checkpoint2: [
    {
      q: '[Variables & Scope] Which of the following describes the difference between "let" and "var" in JavaScript?',
      options: ['let is block-scoped, var is function-scoped', 'let is function-scoped, var is block-scoped', 'let variables can be re-declared, var cannot', 'let variables are hoisted with values, var are not'],
      correct: 0
    },
    {
      q: '[Variables & Types] What is the evaluated output of `typeof NaN` in JavaScript?',
      options: ['"number"', '"nan"', '"undefined"', '"object"'],
      correct: 0
    },
    {
      q: '[Functions & Scope] What is a Closure in JavaScript?',
      options: ['A function bundled with references to its outer lexical environment', 'A method to close browser windows', 'A private class constructor syntax', 'A garbage collector clean-up trigger'],
      correct: 0
    },
    {
      q: '[Logic & Conditionals] In Boolean logic evaluation, what does `Boolean(0 || "" || "CareerPilot")` evaluate to?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 0
    },
    {
      q: '[Algorithms & Data Structures] In Python, which method inserts an item at index 0 of a list `lst` in O(n) algorithmic time?',
      options: ['lst.insert(0, item)', 'lst.append(item)', 'lst.prepend(item)', 'lst.push(0, item)'],
      correct: 0
    }
  ],
  checkpoint3: [
    {
      q: 'What is the primary purpose of React keys?',
      options: ['To identify which items have changed, been added, or removed', 'To apply unique styles to components', 'To bind input components to state', 'To encrypt virtual DOM nodes'],
      correct: 0
    },
    {
      q: 'In SQL, which clause is used to filter group results after aggregation?',
      options: ['HAVING', 'WHERE', 'GROUP BY', 'FILTER'],
      correct: 0
    },
    {
      q: 'What happens when state changes in a React component?',
      options: ['The component and its children are re-rendered', 'The entire page reloads', 'The parent component is re-rendered', 'Nothing, virtual DOM updates independently'],
      correct: 0
    },
    {
      q: 'Which SQL JOIN returns all records when there is a match in either left or right table?',
      options: ['FULL OUTER JOIN', 'LEFT JOIN', 'INNER JOIN', 'CROSS JOIN'],
      correct: 0
    },
    {
      q: 'In React, what is the cleanup function in `useEffect` used for?',
      options: ['To cancel subscriptions or timers when the component unmounts', 'To wipe out local state variables', 'To trigger component re-rendering', 'To force garbage collection'],
      correct: 0
    }
  ]
};

// Global SPA State
let cpState = {
  skills: [],
  applications: [],
  assessments: {},
  badges: [],
  inactivityFlagged: false,
  idleTimeSeconds: 0,
  activeQuiz: null,
  activeQuizAnswers: [],
  quizTimeRemaining: 0,
  quizTimerId: null,
  quizTelemetry: { pasteCount: 0, blurCount: 0, startTime: 0 }
};

let splashCompleted = false;
let splashTimer = null;
let currentAtsFile = null;

// Database Persistence Helpers
function loadStateFromStorage() {
  const skills = localStorage.getItem('cp_skills');
  const apps = localStorage.getItem('cp_apps');
  const assessments = localStorage.getItem('cp_assessments');
  const badges = localStorage.getItem('cp_badges');

  cpState.skills = skills ? JSON.parse(skills) : [
    { name: 'JavaScript', hasProject: false, hasCert: false, assessmentPassed: false, trustScore: 0 },
    { name: 'Aptitude', hasProject: false, hasCert: false, assessmentPassed: false, trustScore: 0 }
  ];
  cpState.applications = apps ? JSON.parse(apps) : [];
  cpState.assessments = assessments ? JSON.parse(assessments) : {
    checkpoint1: { passed: false, score: 0 },
    checkpoint2: { passed: false, score: 0 },
    checkpoint3: { passed: false, score: 0 }
  };
  cpState.badges = badges ? JSON.parse(badges) : [];

  recalculateAllSkillsTrust();
}

function saveStateToStorage() {
  localStorage.setItem('cp_skills', JSON.stringify(cpState.skills));
  localStorage.setItem('cp_apps', JSON.stringify(cpState.applications));
  localStorage.setItem('cp_assessments', JSON.stringify(cpState.assessments));
  localStorage.setItem('cp_badges', JSON.stringify(cpState.badges));
}

// Recalculates individual and aggregate trust meter scores
function recalculateAllSkillsTrust() {
  let totalScoreSum = 0;
  cpState.skills.forEach(skill => {
    let score = 0;
    if (skill.hasProject) score += 30;
    if (skill.hasCert) score += 30;
    if (skill.assessmentPassed) score += 40;
    skill.trustScore = score;
    totalScoreSum += score;
  });

  cpState.trustIndex = cpState.skills.length > 0 ? Math.round(totalScoreSum / cpState.skills.length) : 0;
}

// Toast Utility
function showToast(title, message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const iconContainer = toast.querySelector('.toast-icon');
  const titleEl = toast.querySelector('.toast-title');
  const msgEl = toast.querySelector('.toast-msg');

  titleEl.textContent = title;
  msgEl.textContent = message;

  if (type === 'success') {
    iconContainer.className = 'toast-icon success';
    iconContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    `;
    toast.style.borderLeftColor = 'var(--success)';
  } else {
    iconContainer.className = 'toast-icon error';
    iconContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    `;
    toast.style.borderLeftColor = 'var(--danger)';
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Validation helper functions
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Router Logic
function router() {
  const hash = window.location.hash || '#splash';
  const pages = document.querySelectorAll('.page-view');

  if (hash !== '#splash' && splashTimer) {
    clearTimeout(splashTimer);
    splashTimer = null;
    splashCompleted = true;
  }

  let activePageId = 'landing';

  if (hash === '#splash' && !splashCompleted) {
    activePageId = 'splash';
  } else if (hash === '#landing') {
    activePageId = 'landing';
  } else if (hash === '#auth-register' || hash === '#auth-login' || hash === '#auth') {
    activePageId = 'auth';
    toggleAuthView(hash);
  } else if (hash === '#dashboard') {
    activePageId = 'dashboard';
    // Initialize user session loading
    loadStateFromStorage();
    renderDashboardTabs('Dashboard');
  } else {
    activePageId = 'landing';
    window.location.hash = '#landing';
  }

  pages.forEach(page => {
    if (page.id === activePageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  if (activePageId === 'splash') {
    startSplashTimer();
  }
}

// Splash timeout function (2.5 seconds)
function startSplashTimer() {
  if (splashTimer) clearTimeout(splashTimer);
  splashTimer = setTimeout(() => {
    splashCompleted = true;
    window.location.hash = '#landing';
  }, 2500);
}

// Toggle Auth screen between Register and Login forms
function toggleAuthView(hash) {
  const isLogin = hash === '#auth-login';

  // Helper to safely toggle class on an element by ID
  function safeToggle(id, className, force) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle(className, force);
  }

  safeToggle('auth-heading-register', 'hidden', isLogin);
  safeToggle('auth-heading-login', 'hidden', !isLogin);

  safeToggle('group-reg-name', 'hidden', isLogin);
  safeToggle('group-reg-confirm-grad', 'hidden', isLogin);
  safeToggle('group-reg-course-role', 'hidden', isLogin);

  safeToggle('reg-terms-checkbox', 'hidden', isLogin);
  safeToggle('login-remember-checkbox', 'hidden', !isLogin);
  safeToggle('forgot-password-link', 'hidden', !isLogin);

  const submitBtn = document.getElementById('btn-auth-submit');
  const dividerText = document.getElementById('auth-divider-text');

  if (isLogin) {
    if (submitBtn) submitBtn.textContent = 'Sign In';
    if (dividerText) dividerText.textContent = 'or Sign in with Email';
    const googleSpan = document.querySelector('.social-btn-google span');
    const linkedinSpan = document.querySelector('.social-btn-linkedin span');
    if (googleSpan) googleSpan.textContent = 'Sign in with Google';
    if (linkedinSpan) linkedinSpan.textContent = 'Sign in with LinkedIn';
    safeToggle('redirect-to-login', 'hidden', true);
    safeToggle('redirect-to-register', 'hidden', false);
  } else {
    if (submitBtn) submitBtn.textContent = 'Create account';
    if (dividerText) dividerText.textContent = 'or Sign up with Email';
    const googleSpan = document.querySelector('.social-btn-google span');
    const linkedinSpan = document.querySelector('.social-btn-linkedin span');
    if (googleSpan) googleSpan.textContent = 'Sign up with Google';
    if (linkedinSpan) linkedinSpan.textContent = 'Sign up with LinkedIn';
    safeToggle('redirect-to-login', 'hidden', false);
    safeToggle('redirect-to-register', 'hidden', true);
  }
}

// Initialize Password Toggle buttons
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const wrapper = this.closest('.input-wrapper');
      const input = wrapper.querySelector('.form-input');

      if (input.type === 'password') {
        input.type = 'text';
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        `;
      } else {
        input.type = 'password';
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        `;
      }
    });
  });
}

// Validation & submission of forms
function initFormSubmissions() {
  const masterForm = document.getElementById('master-auth-form');
  if (!masterForm) return;

  masterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isLogin = window.location.hash === '#auth-login';
    const email = document.getElementById('reg-emailaddress').value.trim();
    const password = document.getElementById('reg-pass').value;

    if (!email || !isValidEmail(email)) {
      showToast('Error', 'Please enter a valid email address.', 'error');
      return;
    }
    if (!password || password.length < 8) {
      showToast('Error', 'Password must be at least 8 characters long.', 'error');
      return;
    }

    if (isLogin) {
      showToast('Login Successful', 'Welcome back to CareerPilot AI! Loading your profile...', 'success');
      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 1200);
    } else {
      const fullName = document.getElementById('reg-fullname').value.trim();
      const confirmPassword = document.getElementById('reg-conf-pass').value;
      const gradYear = document.getElementById('reg-gradyear').value;
      const course = document.getElementById('reg-course-select').value;
      const role = document.getElementById('reg-role-select').value;
      const agreeTerms = document.getElementById('reg-terms-agree').checked;

      if (!fullName) {
        showToast('Error', 'Full name is required.', 'error');
        return;
      }
      if (password !== confirmPassword) {
        showToast('Error', 'Passwords do not match.', 'error');
        return;
      }
      if (!gradYear || !course || !role) {
        showToast('Error', 'Please fill in all dropdown fields.', 'error');
        return;
      }
      if (!agreeTerms) {
        showToast('Error', 'You must agree to the Terms of Service.', 'error');
        return;
      }

      showToast('Registration Successful', `Account created as a ${role}! Logging you in...`, 'success');
      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 1200);
    }
  });
}

// Social authentication actions
function initSocialRedirection() {
  const socialButtons = document.querySelectorAll('.social-btn');
  socialButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const action = this.textContent.trim();
      showToast('Connecting Services', `Mock-redirecting to authenticate via ${action}...`, 'success');

      setTimeout(() => {
        showToast('OAuth Success', 'Authentication successful! Redirecting to Dashboard...', 'success');
        setTimeout(() => {
          window.location.hash = '#dashboard';
        }, 1000);
      }, 1200);
    });
  });
}

// Landing Page specific click events
function initLandingInteractions() {
  const demoBtn = document.getElementById('watch-demo-btn');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      showToast('Watch Demo', 'Launching product walkthrough video... (Mock Player)', 'success');
    });
  }
}

// ==========================================
// SPA TAB SWITCHING & RENDERING ENGINE
// ==========================================
function renderDashboardTabs(activeTabName) {
  // Hide all panels
  const panels = document.querySelectorAll('.tab-pane-content');
  panels.forEach(panel => panel.classList.add('hidden'));

  // Show selected panel
  let panelId = 'tab-pane-dashboard';
  if (activeTabName === 'Opportunities') panelId = 'tab-pane-opportunities';
  else if (activeTabName === 'Applications') panelId = 'tab-pane-applications';
  else if (activeTabName === 'Assessments') panelId = 'tab-pane-assessments';
  else if (activeTabName === 'Skills & Trust') panelId = 'tab-pane-skills';

  const activePanel = document.getElementById(panelId);
  if (activePanel) activePanel.classList.remove('hidden');

  // Trigger tab-specific loaders
  if (activeTabName === 'Dashboard') {
    updateDashboardUI();
  } else if (activeTabName === 'Opportunities') {
    renderOpportunitiesList();
  } else if (activeTabName === 'Skills & Trust') {
    renderSkillsInventory();
    renderMissingEvidenceDetector();
  } else if (activeTabName === 'Assessments') {
    renderAssessmentsTimeline();
  } else if (activeTabName === 'Applications') {
    renderKanbanBoard();
  }
}

// ==========================================
// FEATURE 1 & 2 & 14: OPPORTUNITIES LIST & RADAR & EMBEDDINGS MATCHING
// ==========================================
function calculateEmbeddingSimilarity(studentSkills, requiredSkills) {
  if (requiredSkills.length === 0) return 0;

  let matchCount = 0;
  requiredSkills.forEach(req => {
    const matchedSkill = cpState.skills.find(s => s.name.toLowerCase() === req.toLowerCase());
    if (matchedSkill) {
      if (matchedSkill.assessmentPassed) matchCount += 1.0;
      else if (matchedSkill.hasProject || matchedSkill.hasCert) matchCount += 0.8;
      else matchCount += 0.5;
    }
  });

  let similarityPct = Math.round((matchCount / requiredSkills.length) * 100);

  if (cpState.inactivityFlagged) {
    similarityPct = Math.max(20, similarityPct - 15);
  }

  return similarityPct;
}

function renderOpportunitiesList() {
  const searchInput = document.getElementById('opp-search-input');
  const typeFilter = document.querySelector('.filter-type-tabs .active')?.dataset.type || 'all';
  const matchSlider = document.getElementById('opp-match-slider');
  const matchSliderVal = document.getElementById('opp-match-slider-val');

  const keyword = searchInput ? searchInput.value.toLowerCase() : '';
  const minMatch = matchSlider ? parseInt(matchSlider.value) : 40;

  if (matchSliderVal && matchSlider) {
    matchSliderVal.textContent = `${matchSlider.value}%`;
  }

  const container = document.getElementById('opp-listings-container');
  if (!container) return;
  container.innerHTML = '';

  const evaluatedOpps = DEFAULT_OPPORTUNITIES.map(opp => {
    const similarity = calculateEmbeddingSimilarity(cpState.skills, opp.skills);
    return { ...opp, similarity };
  }).filter(opp => {
    const matchesKeyword = opp.title.toLowerCase().includes(keyword) ||
      opp.company.toLowerCase().includes(keyword) ||
      opp.skills.some(s => s.toLowerCase().includes(keyword));
    const matchesType = typeFilter === 'all' || opp.type === typeFilter;
    const matchesMatch = opp.similarity >= minMatch;

    return matchesKeyword && matchesType && matchesMatch;
  }).sort((a, b) => b.similarity - a.similarity);

  if (evaluatedOpps.length === 0) {
    container.innerHTML = `
      <div style="background:#FFF; padding:32px; text-align:center; border-radius:var(--radius-md); border:1px solid var(--border); color:var(--text-muted);">
        No matching opportunities found. Try adjusting your slider threshold or adding more skills.
      </div>
    `;
    return;
  }

  evaluatedOpps.forEach(opp => {
    const logoEmoji = opp.type === 'job' ? '🏢' : opp.type === 'internship' ? '💼' : opp.type === 'hackathon' ? '🏆' : '💻';
    const matchClass = opp.similarity >= 80 ? 'match-high' : opp.similarity >= 50 ? 'match-medium' : 'match-low';

    const card = document.createElement('div');
    card.className = 'opportunity-card';
    card.dataset.id = opp.id;
    card.innerHTML = `
      <div style="display:flex; gap:16px; align-items:center;">
        <div class="opp-logo-emoji" style="background:${opp.type === 'job' ? 'var(--yellow-light)' : opp.type === 'internship' ? 'var(--primary-light)' : 'var(--purple-light)'}">${logoEmoji}</div>
        <div>
          <h5 style="font-weight:700; color:var(--text-main); font-size:0.95rem;">${opp.title}</h5>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">${opp.company} • <span style="font-size:0.75rem">${opp.location}</span></p>
        </div>
      </div>
      <div style="text-align:right; display:flex; flex-direction:column; align-items:end; gap:6px;">
        <span class="badge-tag-match ${matchClass}">${opp.similarity}% Match</span>
        <span style="font-size:0.7rem; color:var(--text-light);">Deadline: ${opp.deadline}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      document.querySelectorAll('.opportunity-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      loadOpportunityDetails(opp.id);
    });

    container.appendChild(card);
  });
}

function loadOpportunityDetails(oppId) {
  const opp = DEFAULT_OPPORTUNITIES.find(o => o.id === oppId);
  if (!opp) return;

  const similarity = calculateEmbeddingSimilarity(cpState.skills, opp.skills);

  document.getElementById('opp-details-card').classList.remove('hidden');
  document.getElementById('detail-title').textContent = opp.title;
  document.getElementById('detail-company').textContent = opp.company;
  document.getElementById('detail-type').textContent = opp.type.toUpperCase();
  document.getElementById('detail-location').textContent = opp.location;
  document.getElementById('detail-stipend').textContent = opp.stipend;
  document.getElementById('detail-eligible').textContent = opp.eligible;
  document.getElementById('detail-desc').textContent = opp.desc;

  document.getElementById('radar-empty-state').classList.add('hidden');
  document.getElementById('radar-active-state').classList.remove('hidden');

  document.getElementById('radar-job-name').textContent = `${opp.title} Fit`;
  document.getElementById('radar-match-score').textContent = `${similarity}% AI Match`;
  document.getElementById('similarity-progress-fill').style.width = `${similarity}%`;

  const matchedContainer = document.getElementById('radar-matched-skills-list');
  const missingContainer = document.getElementById('radar-missing-skills-list');
  matchedContainer.innerHTML = '';
  missingContainer.innerHTML = '';

  let hasUnverifiedMatches = false;

  opp.skills.forEach(skillName => {
    const studentSkill = cpState.skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    if (studentSkill) {
      const tag = document.createElement('span');
      tag.className = 'badge-tag-new';
      tag.style.background = 'var(--success-light)';
      tag.style.color = 'var(--success)';
      tag.style.fontSize = '0.7rem';
      tag.textContent = skillName;
      matchedContainer.appendChild(tag);
      if (!studentSkill.assessmentPassed && !studentSkill.hasProject && !studentSkill.hasCert) {
        hasUnverifiedMatches = true;
      }
    } else {
      const tag = document.createElement('span');
      tag.className = 'badge-tag-new';
      tag.style.background = 'var(--danger-light)';
      tag.style.color = 'var(--danger)';
      tag.style.fontSize = '0.7rem';
      tag.textContent = skillName;
      missingContainer.appendChild(tag);
    }
  });

  document.getElementById('radar-gap-alert-tip').classList.toggle('hidden', !hasUnverifiedMatches);

  const bookmarkBtn = document.getElementById('btn-opp-bookmark');
  const applyBtn = document.getElementById('btn-opp-apply');

  const isBookmarked = cpState.applications.some(a => a.opportunityId === opp.id && a.stage === 'bookmarked');
  const isApplied = cpState.applications.some(a => a.opportunityId === opp.id && a.stage === 'applied');

  bookmarkBtn.textContent = isBookmarked ? '★ Bookmarked' : 'Bookmark';
  applyBtn.textContent = isApplied ? '✓ Applied' : 'Apply Now';

  bookmarkBtn.onclick = () => toggleBookmark(opp.id);
  applyBtn.onclick = () => applyToOpportunity(opp.id);
}

// ==========================================
// FEATURE 3: BOOKMARK & APPLICATION PIPELINE
// ==========================================
function toggleBookmark(oppId) {
  const index = cpState.applications.findIndex(a => a.opportunityId === oppId && a.stage === 'bookmarked');
  const opp = DEFAULT_OPPORTUNITIES.find(o => o.id === oppId);

  if (index > -1) {
    cpState.applications.splice(index, 1);
    showToast('Bookmark Removed', `Removed "${opp.title}" from saved list.`, 'success');
  } else {
    cpState.applications.push({
      id: 'app-' + Date.now(),
      opportunityId: oppId,
      title: opp.title,
      company: opp.company,
      stage: 'bookmarked',
      date: new Date().toLocaleDateString()
    });
    showToast('Bookmark Saved', `Added "${opp.title}" to saved list.`, 'success');
  }
  saveStateToStorage();
  loadOpportunityDetails(oppId);
}

function applyToOpportunity(oppId) {
  const existingApp = cpState.applications.find(a => a.opportunityId === oppId);
  const opp = DEFAULT_OPPORTUNITIES.find(o => o.id === oppId);

  if (existingApp) {
    if (existingApp.stage === 'applied') {
      showToast('Already Applied', 'You have already submitted an application for this role.', 'error');
      return;
    }
    existingApp.stage = 'applied';
    existingApp.date = new Date().toLocaleDateString();
  } else {
    cpState.applications.push({
      id: 'app-' + Date.now(),
      opportunityId: oppId,
      title: opp.title,
      company: opp.company,
      stage: 'applied',
      date: new Date().toLocaleDateString()
    });
  }

  showToast('Application Submitted', `Applied to ${opp.title} at ${opp.company}! Card added to tracker.`, 'success');
  saveStateToStorage();
  loadOpportunityDetails(oppId);
}

function renderKanbanBoard() {
  const stages = ['bookmarked', 'applied', 'interviewing', 'offer', 'rejected'];

  stages.forEach(stage => {
    const container = document.getElementById(`kanban-cards-${stage}`);
    const countEl = document.getElementById(`count-kanban-${stage}`);
    if (!container) return;
    container.innerHTML = '';

    const stageApps = cpState.applications.filter(a => a.stage === stage);
    if (countEl) countEl.textContent = stageApps.length;

    if (stageApps.length === 0) {
      container.innerHTML = `<div style="text-align:center; color:var(--text-light); font-size:0.75rem; padding:20px; border:1px dashed var(--border); border-radius:var(--radius-sm)">Empty stage</div>`;
      return;
    }

    stageApps.forEach(app => {
      const card = document.createElement('div');
      card.className = 'kanban-card';

      let nextStageBtnHtml = '';
      if (stage === 'bookmarked') nextStageBtnHtml = `<button class="btn-card-nav" onclick="moveAppStage('${app.id}', 'applied')">Apply ➔</button>`;
      else if (stage === 'applied') nextStageBtnHtml = `<button class="btn-card-nav" onclick="moveAppStage('${app.id}', 'interviewing')">Interview ➔</button>`;
      else if (stage === 'interviewing') nextStageBtnHtml = `<button class="btn-card-nav" onclick="moveAppStage('${app.id}', 'offer')">Offer ➔</button>`;

      card.innerHTML = `
        <span class="kanban-card-company">${app.company}</span>
        <span class="kanban-card-title">${app.title}</span>
        <div class="kanban-card-actions">
          <button class="btn-card-delete" onclick="deleteAppCard('${app.id}')">🗑️</button>
          ${nextStageBtnHtml}
        </div>
      `;
      container.appendChild(card);
    });
  });
}

function moveAppStage(appId, newStage) {
  const app = cpState.applications.find(a => a.id === appId);
  if (app) {
    app.stage = newStage;
    app.date = new Date().toLocaleDateString();
    showToast('Stage Updated', `Moved application to ${newStage.toUpperCase()}.`, 'success');
    saveStateToStorage();
    renderKanbanBoard();
  }
}

function deleteAppCard(appId) {
  const idx = cpState.applications.findIndex(a => a.id === appId);
  if (idx > -1) {
    cpState.applications.splice(idx, 1);
    showToast('Application Deleted', 'Removed card from tracker pipeline.', 'success');
    saveStateToStorage();
    renderKanbanBoard();
  }
}

// ==========================================
// FEATURE 4 & 10 & 11 & 12 & 13: SKILLS MANAGEMENT & TRUST METER & GAP ANALYSIS
// ==========================================
function renderSkillsInventory() {
  const container = document.getElementById('skills-list-tbody');
  if (!container) return;
  container.innerHTML = '';

  const overallGauge = document.getElementById('overall-trust-gauge');
  const overallPercentage = document.getElementById('overall-trust-percentage');
  const overallStatus = document.getElementById('overall-trust-status');

  if (overallGauge && overallPercentage && overallStatus) {
    overallGauge.setAttribute('stroke-dasharray', `${cpState.trustIndex}, 100`);
    overallPercentage.textContent = `${cpState.trustIndex}%`;
    overallStatus.textContent = cpState.trustIndex >= 80 ? 'Elite Trust' : cpState.trustIndex >= 50 ? 'Strong Trust' : 'Low Verification';
  }

  cpState.skills.forEach(skill => {
    const row = document.createElement('tr');

    let statusClass = 'status-unverified';
    let statusText = 'No Evidence';
    if (skill.assessmentPassed) {
      statusClass = 'status-verified';
      statusText = 'Verified';
    } else if (skill.hasProject || skill.hasCert) {
      statusClass = 'status-pending';
      statusText = 'Pending Check';
    }

    let evidenceHtml = '<span style="color:var(--text-light); font-size:0.75rem">No proof uploaded</span>';
    if (skill.hasProject || skill.hasCert) {
      evidenceHtml = '<div style="display:flex; flex-direction:column; gap:4px;">';
      if (skill.hasProject) {
        evidenceHtml += `<a href="#" class="evidence-tag" onclick="showToast('Loading Codebase', 'Opening mock github repository verification link...', 'success'); return false;">💻 GitHub Repo</a>`;
      }
      if (skill.hasCert) {
        evidenceHtml += `<a href="#" class="evidence-tag" onclick="showToast('Loading Certificate', 'Opening external certification credentials API...', 'success'); return false;">📜 Certificate</a>`;
      }
      evidenceHtml += '</div>';
    }

    row.innerHTML = `
      <td style="padding:12px 8px; font-weight:700;">${skill.name}</td>
      <td style="padding:12px 8px;"><span class="badge-status ${statusClass}">${statusText}</span></td>
      <td style="padding:12px 8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="flex:1; width:80px; height:8px; background:#E2E8F0; border-radius:10px; overflow:hidden;">
            <div style="height:100%; background:var(--primary); width:${skill.trustScore}%"></div>
          </div>
          <span style="font-weight:700; font-size:0.75rem">${skill.trustScore}%</span>
        </div>
      </td>
      <td style="padding:12px 8px;">${evidenceHtml}</td>
      <td style="padding:12px 8px; text-align:right; white-space:nowrap;">
        <button class="btn-icon" onclick="openEvidenceUploader('${skill.name}')" title="Upload Evidence">➕</button>
        <button class="btn-icon" onclick="deleteSkill('${skill.name}')" title="Delete Skill" style="color:var(--danger)">🗑️</button>
      </td>
    `;
    container.appendChild(row);
  });
}

function openEvidenceUploader(skillName) {
  const link = prompt(`Enter GitHub Repository or Certification URL to verify your "${skillName}" skill:`, 'https://github.com/my-project');
  if (link === null) return;

  if (!link.startsWith('http')) {
    showToast('Invalid Evidence', 'Please enter a valid URL scheme starting with http/https.', 'error');
    return;
  }

  const skill = cpState.skills.find(s => s.name === skillName);
  if (skill) {
    if (link.includes('github.com')) {
      skill.hasProject = true;
    } else {
      skill.hasCert = true;
    }
    recalculateAllSkillsTrust();
    saveStateToStorage();
    renderSkillsInventory();
    renderMissingEvidenceDetector();
    showToast('Evidence Attached', `Successfully linked validation credentials to "${skillName}". Trust meter updated!`, 'success');
  }
}

function deleteSkill(skillName) {
  const idx = cpState.skills.findIndex(s => s.name === skillName);
  if (idx > -1) {
    cpState.skills.splice(idx, 1);
    recalculateAllSkillsTrust();
    saveStateToStorage();
    renderSkillsInventory();
    renderMissingEvidenceDetector();
    showToast('Skill Removed', `Deleted "${skillName}" from profile.`, 'success');
  }
}

function renderMissingEvidenceDetector() {
  const alertContainer = document.getElementById('skills-evidence-alerts');
  if (!alertContainer) return;
  alertContainer.innerHTML = '';

  const missingSkills = cpState.skills.filter(s => !s.hasProject && !s.hasCert && !s.assessmentPassed);

  if (missingSkills.length === 0) {
    alertContainer.innerHTML = `
      <div style="background:var(--success-light); border:1px solid rgba(16,185,129,0.2); padding:16px; border-radius:var(--radius-md); text-align:center; color:#065F46; font-size:0.8rem;">
        🎉 Clean Scan! All profile skills are backed by verified evidence or testing.
      </div>
    `;
    return;
  }

  missingSkills.forEach(skill => {
    const alertBox = document.createElement('div');
    alertBox.style = 'background:var(--warning-light); border:1px solid rgba(245,158,11,0.25); border-radius:var(--radius-sm); padding:10px; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;';
    alertBox.innerHTML = `
      <div>
        <strong>${skill.name}</strong> has no linked evidence. Matching similarity priority is reduced.
      </div>
      <button class="btn-banner-action" onclick="openEvidenceUploader('${skill.name}')" style="padding:4px 8px; font-size:0.7rem; background:var(--warning); color:#FFF;">Fix</button>
    `;
    alertContainer.appendChild(alertBox);
  });
}

function runSkillGapAnalysis() {
  const targetRole = document.getElementById('gap-role-target').value;
  const panel = document.getElementById('gap-results-panel');
  const compScoreEl = document.getElementById('gap-compatibility-score');
  const matchedContainer = document.getElementById('gap-matched-tags');
  const missingContainer = document.getElementById('gap-missing-tags');
  const learningDesc = document.getElementById('gap-learning-path-desc');

  panel.classList.remove('hidden');

  let requiredSkills = [];
  if (targetRole === 'Frontend Developer') {
    requiredSkills = ['JavaScript', 'React', 'UI Design'];
  } else if (targetRole === 'Data Scientist') {
    requiredSkills = ['Python', 'SQL', 'Aptitude'];
  } else {
    requiredSkills = ['JavaScript', 'Node.js', 'SQL'];
  }

  matchedContainer.innerHTML = '';
  missingContainer.innerHTML = '';

  let matchCount = 0;
  let missingSkills = [];

  requiredSkills.forEach(req => {
    const hasSkill = cpState.skills.find(s => s.name.toLowerCase() === req.toLowerCase());
    if (hasSkill) {
      matchCount++;
      const tag = document.createElement('span');
      tag.className = 'badge-tag-new';
      tag.style = 'background:var(--success-light); color:var(--success); font-size:0.7rem';
      tag.textContent = req;
      matchedContainer.appendChild(tag);
    } else {
      missingSkills.push(req);
      const tag = document.createElement('span');
      tag.className = 'badge-tag-new';
      tag.style = 'background:var(--danger-light); color:var(--danger); font-size:0.7rem';
      tag.textContent = req;
      missingContainer.appendChild(tag);
    }
  });

  const compatibility = Math.round((matchCount / requiredSkills.length) * 100);
  compScoreEl.textContent = `${compatibility}%`;

  if (missingSkills.length === 0) {
    learningDesc.innerHTML = '🌟 <strong>Perfect Match!</strong> You have all required skills. Take assessments to earn badges and stand out to recruiters.';
  } else {
    learningDesc.innerHTML = `⚠️ <strong>Gaps Detected:</strong> Add <strong>${missingSkills.join(', ')}</strong> to your profile. We recommend completing the sequential <strong>Checkpoint Assessment</strong> for these domains.`;
  }

  showToast('AI Scan Completed', `Gap analysis generated for target role: ${targetRole}`, 'success');
}

// ==========================================
// FEATURE 5 & 6 & 7 & 8 & 9: ASSESSMENT QUIZ ENGINE & CHECKPOINTS ROADMAP
// ==========================================
function renderAssessmentsTimeline() {
  const badgeGallery = document.getElementById('badges-earned-gallery');
  if (badgeGallery) {
    badgeGallery.innerHTML = '';
    if (cpState.badges.length === 0) {
      badgeGallery.innerHTML = `<span style="font-size:0.8rem; color:var(--text-light)">No skill badges earned yet. Complete assessments to verify skills.</span>`;
    } else {
      cpState.badges.forEach(badge => {
        const item = document.createElement('div');
        item.className = 'badge-item';
        item.innerHTML = `
          <div class="badge-graphic gold">🏆</div>
          <span class="badge-title">${badge}</span>
        `;
        badgeGallery.appendChild(item);
      });
    }
  }

  const chk1Passed = cpState.assessments.checkpoint1?.passed;
  const chk2Passed = cpState.assessments.checkpoint2?.passed;
  const chk3Passed = cpState.assessments.checkpoint3?.passed;

  // 1. General Aptitude Assessment (Independent - no checkpoint dependency)
  const node1 = document.getElementById('node-chk-1');
  const status1 = document.getElementById('status-chk-1');
  const btn1 = node1 ? node1.querySelector('.btn-start-quiz-trigger') : null;

  if (node1 && status1 && btn1) {
    node1.classList.remove('locked');
    node1.classList.add('unlocked');
    status1.textContent = chk1Passed ? 'Passed (★)' : 'Available';
    status1.style.background = chk1Passed ? 'var(--success-light)' : 'var(--success-light)';
    status1.style.color = 'var(--success)';
    btn1.disabled = false;
    btn1.className = 'btn-get-started btn-start-quiz-trigger';
    btn1.textContent = chk1Passed ? 'Retake Assessment' : 'Start Aptitude Test';
  }

  // 2. Programming Assessment (Independent - NOT locked based on Aptitude; uses Integrity Checkpoint)
  const node2 = document.getElementById('node-chk-2');
  const status2 = document.getElementById('status-chk-2');
  const btn2 = node2 ? node2.querySelector('.btn-start-quiz-trigger') : null;

  if (node2 && status2 && btn2) {
    node2.classList.remove('locked');
    node2.classList.add('unlocked');
    status2.textContent = chk2Passed ? 'Passed (★)' : 'Available • Integrity Checkpoint';
    status2.style.background = chk2Passed ? 'var(--success-light)' : 'var(--primary-light)';
    status2.style.color = chk2Passed ? 'var(--success)' : 'var(--primary)';
    btn2.disabled = false;
    btn2.className = 'btn-get-started btn-start-quiz-trigger';
    btn2.textContent = chk2Passed ? 'Retake Assessment' : 'Start Programming Test';
  }

  // 3. Domain Specialist Assessment (Independent - NOT locked based on other assessments)
  const node3 = document.getElementById('node-chk-3');
  const status3 = document.getElementById('status-chk-3');
  const btn3 = node3 ? node3.querySelector('.btn-start-quiz-trigger') : null;

  if (node3 && status3 && btn3) {
    node3.classList.remove('locked');
    node3.classList.add('unlocked');
    status3.textContent = chk3Passed ? 'Passed (★)' : 'Available';
    status3.style.background = chk3Passed ? 'var(--success-light)' : 'var(--purple-light)';
    status3.style.color = chk3Passed ? 'var(--success)' : 'var(--purple)';
    btn3.disabled = false;
    btn3.className = 'btn-get-started btn-start-quiz-trigger';
    btn3.textContent = chk3Passed ? 'Retake Assessment' : 'Start Domain Test';
  }
}

function launchQuiz(checkpointNum) {
  cpState.activeQuiz = checkpointNum;
  cpState.activeQuizAnswers = [];
  cpState.quizTimeRemaining = 300;
  cpState.quizTelemetry = { pasteCount: 0, blurCount: 0, startTime: Date.now() };

  const titleMap = {
    1: 'General Aptitude Assessment (Independent)',
    2: 'Programming Assessment: Functions, Variables, Logic & Algorithms',
    3: 'Domain Specialist Assessment (React/SQL)'
  };
  document.getElementById('quiz-display-title').textContent = titleMap[checkpointNum];
  document.getElementById('quiz-overlay-panel').classList.remove('hidden');
  document.getElementById('quiz-blur-warning').classList.add('hidden');

  // Configure telemetry banner: ONLY Programming Assessment uses the integrity checkpoint mechanism
  const badgeEl = document.getElementById('quiz-telemetry-badge');
  if (badgeEl) {
    if (checkpointNum === 2) {
      badgeEl.textContent = '🔒 INTEGRITY CHECKPOINT: ANTI-COPY/PASTE ACTIVE';
      badgeEl.style.background = 'var(--danger-light)';
      badgeEl.style.color = 'var(--danger)';
    } else {
      badgeEl.textContent = '📝 INDEPENDENT ASSESSMENT MODE';
      badgeEl.style.background = 'var(--success-light)';
      badgeEl.style.color = 'var(--success)';
    }
  }

  loadQuizQuestion(0);

  if (cpState.quizTimerId) clearInterval(cpState.quizTimerId);
  cpState.quizTimerId = setInterval(() => {
    cpState.quizTimeRemaining--;
    const mins = Math.floor(cpState.quizTimeRemaining / 60);
    const secs = cpState.quizTimeRemaining % 60;
    document.getElementById('quiz-countdown-timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

    if (cpState.quizTimeRemaining <= 0) {
      clearInterval(cpState.quizTimerId);
      submitQuizResults();
      showToast('Time Expired', 'Assessment time ended. Submitting answers automatically...', 'error');
    }
  }, 1000);
}

function loadQuizQuestion(questionIdx) {
  const quizKey = cpState.activeQuiz === 1 ? 'checkpoint1' : cpState.activeQuiz === 2 ? 'checkpoint2' : 'checkpoint3';
  const questions = DEFAULT_QUIZ_QUESTIONS[quizKey];

  if (questionIdx >= questions.length) {
    submitQuizResults();
    return;
  }

  const qData = questions[questionIdx];
  const viewport = document.getElementById('quiz-questions-viewport');
  viewport.innerHTML = '';

  const qTitle = document.createElement('h6');
  qTitle.style = 'font-weight:700; color:var(--text-main); font-size:0.95rem; margin-bottom:16px;';
  qTitle.textContent = `${questionIdx + 1}. ${qData.q}`;
  viewport.appendChild(qTitle);

  qData.options.forEach((opt, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.onclick = () => {
      viewport.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cpState.activeQuizAnswers[questionIdx] = optIdx;
    };
    viewport.appendChild(btn);
  });

  const progressText = document.getElementById('quiz-progress-text');
  progressText.textContent = `Question ${questionIdx + 1} of ${questions.length}`;

  const nextBtn = document.getElementById('btn-quiz-submit-next');
  nextBtn.textContent = questionIdx === questions.length - 1 ? 'Finish Test ➔' : 'Next Question ➔';
  nextBtn.onclick = () => {
    if (cpState.activeQuizAnswers[questionIdx] === undefined) {
      showToast('Select Option', 'Please choose an option before continuing.', 'error');
      return;
    }
    loadQuizQuestion(questionIdx + 1);
  };
}

function submitQuizResults() {
  clearInterval(cpState.quizTimerId);
  document.getElementById('quiz-overlay-panel').classList.add('hidden');

  const isProgrammingCheckpoint = cpState.activeQuiz === 2;
  const quizKey = cpState.activeQuiz === 1 ? 'checkpoint1' : cpState.activeQuiz === 2 ? 'checkpoint2' : 'checkpoint3';
  const questions = DEFAULT_QUIZ_QUESTIONS[quizKey];

  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (cpState.activeQuizAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);
  const timeTakenSec = Math.round((Date.now() - cpState.quizTelemetry.startTime) / 1000);
  const mins = Math.floor(timeTakenSec / 60);
  const secs = timeTakenSec % 60;
  const timeStr = `${mins}m ${secs}s`;

  const isPass = percentage >= 60;
  let checkpointLabel = 'checkpoint1';
  let badgeName = '';
  let skillNameToVerify = '';

  if (cpState.activeQuiz === 1) {
    checkpointLabel = 'checkpoint1';
    badgeName = 'Verified Aptitude Pro';
    skillNameToVerify = 'Aptitude';
  } else if (cpState.activeQuiz === 2) {
    checkpointLabel = 'checkpoint2';
    badgeName = 'Verified Programming Specialist';
    skillNameToVerify = 'JavaScript';
  } else {
    checkpointLabel = 'checkpoint3';
    badgeName = 'Verified Domain Specialist';
    skillNameToVerify = 'React';
  }

  if (isPass) {
    cpState.assessments[checkpointLabel] = { passed: true, score: percentage };
    if (!cpState.badges.includes(badgeName)) {
      cpState.badges.push(badgeName);
    }
    const skill = cpState.skills.find(s => s.name === skillNameToVerify);
    if (skill) {
      skill.assessmentPassed = true;
    } else {
      cpState.skills.push({ name: skillNameToVerify, hasProject: false, hasCert: false, assessmentPassed: true, trustScore: 40 });
    }
    recalculateAllSkillsTrust();
  }

  saveStateToStorage();

  document.getElementById('report-overlay-panel').classList.remove('hidden');
  document.getElementById('report-emoticon').textContent = isPass ? '🎉' : '❌';
  document.getElementById('report-title-result').textContent = isPass ? 'Assessment Passed!' : 'Assessment Failed';
  document.getElementById('report-subtitle-text').textContent = isPass ? `Congratulations! You unlocked the "${badgeName}" badge.` : 'Scores below 60% do not qualify for verified badges. Please study and retake.';

  document.getElementById('report-check-name').textContent = document.getElementById('quiz-display-title').textContent;
  document.getElementById('report-final-score').textContent = `${percentage}% (${isPass ? 'Pass' : 'Fail'})`;
  document.getElementById('report-final-score').style.color = isPass ? 'var(--success)' : 'var(--danger)';
  document.getElementById('report-time-taken').textContent = timeStr;

  const telemetrySection = document.getElementById('telemetry-integrity-container');
  if (telemetrySection) {
    if (isProgrammingCheckpoint) {
      telemetrySection.style.display = 'block';
      document.getElementById('telemetry-paste-count').textContent = cpState.quizTelemetry.pasteCount;
      document.getElementById('telemetry-blur-count').textContent = cpState.quizTelemetry.blurCount;

      const verdictEl = document.getElementById('telemetry-verdict');
      if (cpState.quizTelemetry.pasteCount > 0 || cpState.quizTelemetry.blurCount > 1) {
        verdictEl.textContent = 'Flagged: Abnormal inputs detected (Copy/paste or Tab blur)';
        verdictEl.style.color = 'var(--warning)';
      } else {
        verdictEl.textContent = 'Trusted Submission (Zero Malpractice Detected)';
        verdictEl.style.color = 'var(--success)';
      }
    } else {
      telemetrySection.style.display = 'none';
    }
  }
}

// ==========================================
// FEATURE 15: INACTIVITY MONITORING & FLAG
// ==========================================
function resetInactivityTimer() {
  cpState.idleTimeSeconds = 0;
  if (cpState.inactivityFlagged) {
    cpState.inactivityFlagged = false;
    document.getElementById('inactivity-flagged-banner').classList.add('hidden');
    showToast('Activity Resumed', 'Inactivity flag lifted. Custom AI matching profiles restored.', 'success');
    saveStateToStorage();
    updateDashboardUI();
  }
}

function initInactivityTracker() {
  ['mousemove', 'mousedown', 'keydown', 'scroll', 'click'].forEach(evt => {
    document.addEventListener(evt, resetInactivityTimer, { passive: true });
  });

  setInterval(() => {
    cpState.idleTimeSeconds++;

    const warningBanner = document.getElementById('inactivity-warning-banner');
    const flaggedBanner = document.getElementById('inactivity-flagged-banner');

    if (cpState.idleTimeSeconds >= 120 && cpState.idleTimeSeconds < 180) {
      if (warningBanner && warningBanner.classList.contains('hidden')) {
        warningBanner.classList.remove('hidden');
      }
      const countdown = document.getElementById('inactivity-countdown');
      if (countdown) {
        countdown.textContent = 180 - cpState.idleTimeSeconds;
      }
    } else if (cpState.idleTimeSeconds >= 180) {
      if (warningBanner) warningBanner.classList.add('hidden');
      if (flaggedBanner && !cpState.inactivityFlagged) {
        cpState.inactivityFlagged = true;
        flaggedBanner.classList.remove('hidden');
        showToast('Inactivity Flagged', 'Your profile is inactive. AI matching priority temporarily lowered.', 'error');
        saveStateToStorage();
        updateDashboardUI();
      }
    } else {
      if (warningBanner) warningBanner.classList.add('hidden');
    }
  }, 1000);
}

// ==========================================
// STUDENT WORKFLOW INTEGRATIONS & DOM BINDINGS
// ==========================================
function updateDashboardUI() {
  const totalApps = cpState.applications.length;
  const bookmarkedCount = cpState.applications.filter(a => a.stage === 'bookmarked').length;
  const appliedCount = cpState.applications.filter(a => a.stage === 'applied').length;
  const interviewingCount = cpState.applications.filter(a => a.stage === 'interviewing').length;
  const offersCount = cpState.applications.filter(a => a.stage === 'offer').length;

  document.getElementById('stat-apps-sent').textContent = totalApps;
  document.getElementById('legend-bookmarked').textContent = bookmarkedCount;
  document.getElementById('legend-applied').textContent = appliedCount;
  document.getElementById('legend-interviewing').textContent = interviewingCount;
  document.getElementById('legend-offers').textContent = offersCount;
  document.getElementById('donut-total-val').textContent = totalApps;

  const donutSegBookmarked = document.getElementById('donut-seg-bookmarked');
  const donutSegApplied = document.getElementById('donut-seg-applied');
  const donutSegInterviewing = document.getElementById('donut-seg-interviewing');
  const donutSegOffers = document.getElementById('donut-seg-offers');

  if (totalApps > 0) {
    const bookmarkedPct = (bookmarkedCount / totalApps) * 100;
    const appliedPct = (appliedCount / totalApps) * 100;
    const interviewingPct = (interviewingCount / totalApps) * 100;
    const offersPct = (offersCount / totalApps) * 100;

    donutSegBookmarked.setAttribute('stroke-dasharray', `${bookmarkedPct} ${100 - bookmarkedPct}`);
    donutSegApplied.setAttribute('stroke-dasharray', `${appliedPct} ${100 - appliedPct}`);
    donutSegInterviewing.setAttribute('stroke-dasharray', `${interviewingPct} ${100 - interviewingPct}`);
    donutSegOffers.setAttribute('stroke-dasharray', `${offersPct} ${100 - offersPct}`);
  } else {
    donutSegBookmarked.setAttribute('stroke-dasharray', '0 100');
    donutSegApplied.setAttribute('stroke-dasharray', '0 100');
    donutSegInterviewing.setAttribute('stroke-dasharray', '0 100');
    donutSegOffers.setAttribute('stroke-dasharray', '0 100');
  }

  const matchingOpps = DEFAULT_OPPORTUNITIES.map(opp => {
    return calculateEmbeddingSimilarity(cpState.skills, opp.skills);
  }).filter(score => score >= 50).length;
  document.getElementById('stat-active-opps').textContent = matchingOpps;

  let assessmentsDone = 0;
  if (cpState.assessments.checkpoint1?.passed) assessmentsDone++;
  if (cpState.assessments.checkpoint2?.passed) assessmentsDone++;
  if (cpState.assessments.checkpoint3?.passed) assessmentsDone++;
  document.getElementById('stat-assessments-completed').textContent = assessmentsDone;

  document.getElementById('stat-trust-index').textContent = `${cpState.trustIndex}%`;

  let readinessScore = 30;
  const hasSkillBadge = cpState.skills.length >= 2;
  const passedAnyAssessment = cpState.assessments.checkpoint1?.passed || cpState.assessments.checkpoint2?.passed || cpState.assessments.checkpoint3?.passed;

  document.getElementById('readiness-chk-skill').className = hasSkillBadge ? 'checklist-item done' : 'checklist-item';
  document.getElementById('readiness-chk-skill').querySelector('.check-box-icon').textContent = hasSkillBadge ? '✔️' : '';
  if (hasSkillBadge) readinessScore += 35;

  document.getElementById('readiness-chk-assess').className = passedAnyAssessment ? 'checklist-item done' : 'checklist-item';
  document.getElementById('readiness-chk-assess').querySelector('.check-box-icon').textContent = passedAnyAssessment ? '✔️' : '';
  if (passedAnyAssessment) readinessScore += 35;

  const readinessFill = document.getElementById('readiness-gauge-fill');
  const readinessPct = document.getElementById('readiness-gauge-pct');
  const readinessStatus = document.getElementById('readiness-gauge-status');

  if (readinessFill && readinessPct && readinessStatus) {
    readinessFill.setAttribute('stroke-dasharray', `${readinessScore}, 100`);
    readinessPct.textContent = `${readinessScore}%`;
    readinessStatus.textContent = readinessScore >= 90 ? 'Excellent' : readinessScore >= 60 ? 'Good' : 'Fair';
  }

  const deadlinesList = document.getElementById('dashboard-deadlines-list');
  if (deadlinesList) {
    deadlinesList.innerHTML = '';
    const activeOpps = DEFAULT_OPPORTUNITIES.slice(0, 3);
    activeOpps.forEach(opp => {
      const item = document.createElement('div');
      item.className = 'deadline-item';
      item.innerHTML = `
        <div class="deadline-icon-wrapper bg-blue-tint text-primary" style="background:var(--primary-light)">📅</div>
        <div class="deadline-meta">
          <h6 style="font-weight:700;">${opp.title}</h6>
          <p style="font-size:0.75rem">${opp.company}</p>
        </div>
        <div class="deadline-date-flag">
          <span class="date text-danger" style="font-size:0.75rem">${opp.deadline}</span>
        </div>
      `;
      deadlinesList.appendChild(item);
    });
  }

  let highestSimilarity = 0;
  DEFAULT_OPPORTUNITIES.forEach(opp => {
    const similarity = calculateEmbeddingSimilarity(cpState.skills, opp.skills);
    if (similarity > highestSimilarity) highestSimilarity = similarity;
  });
  document.getElementById('radar-highest-match').textContent = `${highestSimilarity}%`;
  document.getElementById('radar-preview-desc').textContent = highestSimilarity >= 80 ? 'Perfect fit role matching found!' : 'Pass assessments to boost matching indices.';

  const missingEvContainer = document.getElementById('dashboard-missing-evidence-list');
  if (missingEvContainer) {
    missingEvContainer.innerHTML = '';
    const missingSkills = cpState.skills.filter(s => !s.hasProject && !s.hasCert && !s.assessmentPassed);

    if (missingSkills.length === 0) {
      missingEvContainer.innerHTML = `<span style="font-size:0.8rem; color:var(--text-light); text-align:center; display:block; padding:32px 0;">🎉 Clean profile trust meter! All clear.</span>`;
    } else {
      missingSkills.forEach(skill => {
        const item = document.createElement('div');
        item.style = 'background:var(--warning-light); border:1px solid rgba(245,158,11,0.15); padding:8px 12px; border-radius:4px; font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center;';
        item.innerHTML = `
          <span>Missing proof for <strong>${skill.name}</strong></span>
          <button class="btn-banner-action" onclick="renderDashboardTabs('Skills & Trust')" style="padding:4px 8px; font-size:0.7rem; background:var(--warning)">Fix</button>
        `;
        missingEvContainer.appendChild(item);
      });
    }
  }
}

function initDashboardInteractions() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      menuItems.forEach(m => m.classList.remove('active'));
      this.classList.add('active');

      const tabName = this.querySelector('span').textContent;
      renderDashboardTabs(tabName);
    });
  });

  const upgradeBtn = document.getElementById('btn-upgrade-pro');
  if (upgradeBtn) {
    upgradeBtn.addEventListener('click', () => {
      showToast('Upgrade to Pro', 'Premium features checkout initialized! Thank you.', 'success');
    });
  }

  const bellBtn = document.querySelector('.btn-header-bell');
  if (bellBtn) {
    bellBtn.addEventListener('click', function () {
      const badge = this.querySelector('.bell-badge');
      if (badge) {
        badge.remove();
        showToast('Notifications Cleaned', 'Marked all recent application status alerts as read.', 'success');
      } else {
        showToast('Notifications', 'Your placement application pipeline is up to date.', 'success');
      }
    });
  }

  const btnToSkills = document.getElementById('btn-dashboard-to-skills');
  if (btnToSkills) btnToSkills.addEventListener('click', () => { document.getElementById('menu-skillbuilder')?.click(); });

  const btnToApps = document.getElementById('btn-dashboard-to-apps');
  if (btnToApps) btnToApps.addEventListener('click', () => { document.getElementById('menu-applications')?.click(); });

  const btnToRadar = document.getElementById('btn-dashboard-to-radar');
  if (btnToRadar) btnToRadar.addEventListener('click', () => { document.getElementById('menu-opportunities')?.click(); });

  const btnFixEvidence = document.getElementById('btn-dashboard-fix-evidence');
  if (btnFixEvidence) btnFixEvidence.addEventListener('click', () => { document.getElementById('menu-skillbuilder')?.click(); });

  const matchSlider = document.getElementById('opp-match-slider');
  if (matchSlider) {
    matchSlider.addEventListener('input', () => {
      document.getElementById('opp-match-slider-val').textContent = `${matchSlider.value}%`;
      renderOpportunitiesList();
    });
  }

  const resetFilterBtn = document.getElementById('btn-reset-filters');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      document.getElementById('opp-search-input').value = '';
      document.getElementById('opp-match-slider').value = 40;
      document.querySelector('.filter-type-tabs .filter-tab.active').classList.remove('active');
      document.querySelector('.filter-type-tabs .filter-tab[data-type="all"]').classList.add('active');
      renderOpportunitiesList();
      showToast('Filters Reset', 'Cleared search keywords and matching criteria.', 'success');
    });
  }

  const searchInput = document.getElementById('opp-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', renderOpportunitiesList);
  }

  const typeTabs = document.querySelectorAll('.filter-type-tabs .filter-tab');
  typeTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      typeTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderOpportunitiesList();
    });
  });

  const addSkillForm = document.getElementById('add-skill-form');
  if (addSkillForm) {
    addSkillForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('skill-selector').value;
      if (!val) return;

      const exists = cpState.skills.find(s => s.name === val);
      if (exists) {
        showToast('Duplicate Skill', `"${val}" is already registered on your profile.`, 'error');
        return;
      }

      cpState.skills.push({ name: val, hasProject: false, hasCert: false, assessmentPassed: false, trustScore: 0 });
      recalculateAllSkillsTrust();
      saveStateToStorage();
      renderSkillsInventory();
      renderMissingEvidenceDetector();
      showToast('Skill Added', `Added "${val}" to your profile. Attach project or certification evidence to raise validation index!`, 'success');
    });
  }

  const runGapBtn = document.getElementById('btn-run-gap-analysis');
  if (runGapBtn) {
    runGapBtn.addEventListener('click', runSkillGapAnalysis);
  }

  // Sequential quiz launch timeline binding
  document.querySelectorAll('.btn-start-quiz-trigger').forEach(btn => {
    btn.addEventListener('click', function () {
      const chkId = parseInt(this.dataset.checkpoint);
      launchQuiz(chkId);
    });
  });

  window.addEventListener('blur', () => {
    if (cpState.activeQuiz) {
      cpState.quizTelemetry.blurCount++;
      document.getElementById('quiz-blur-warning').classList.remove('hidden');
      showToast('Integrity Alert', 'Tab switch detected! Telemetry log records window state activity.', 'error');
    }
  });

  const quizViewport = document.getElementById('quiz-questions-viewport');
  if (quizViewport) {
    ['copy', 'paste', 'cut'].forEach(evtType => {
      quizViewport.addEventListener(evtType, (e) => {
        if (cpState.activeQuiz) {
          e.preventDefault();
          cpState.quizTelemetry.pasteCount++;
          showToast('Clipboard Alert', 'Copy-paste actions are strictly disabled during verification checks.', 'error');
        }
      });
    });
  }

  const closeReportBtn = document.getElementById('btn-close-report');
  if (closeReportBtn) {
    closeReportBtn.onclick = () => {
      document.getElementById('report-overlay-panel').classList.add('hidden');
      renderDashboardTabs('Dashboard');
    };
  }

  const manualAppForm = document.getElementById('manual-app-form');
  if (manualAppForm) {
    manualAppForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('manual-app-title').value.trim();
      const company = document.getElementById('manual-app-company').value.trim();
      const stage = document.getElementById('manual-app-stage').value;

      cpState.applications.push({
        id: 'app-' + Date.now(),
        opportunityId: 'custom',
        title: title,
        company: company,
        stage: stage,
        date: new Date().toLocaleDateString()
      });

      saveStateToStorage();
      renderKanbanBoard();

      document.getElementById('manual-app-title').value = '';
      document.getElementById('manual-app-company').value = '';
      showToast('Card Added', `Registered application tracker for ${title} at ${company}.`, 'success');
    });
  }

  const resumeBtn = document.getElementById('btn-resume-activity');
  if (resumeBtn) resumeBtn.onclick = resetInactivityTimer;

  const resumeFlaggedBtn = document.getElementById('btn-resume-activity-flagged');
  if (resumeFlaggedBtn) resumeFlaggedBtn.onclick = resetInactivityTimer;

  const dragzone = document.getElementById('ats-dropzone');
  const fileInput = document.getElementById('ats-file-input');
  const checkBtn = document.getElementById('btn-check-ats-score');

  if (dragzone && fileInput && checkBtn) {
    dragzone.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(eventName => {
      dragzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dragzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dragzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dragzone.classList.remove('dragover');
      }, false);
    });

    dragzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length > 0) {
        handleAtsFileSelect(files[0]);
      }
    });

    fileInput.addEventListener('change', function () {
      if (this.files.length > 0) {
        handleAtsFileSelect(this.files[0]);
      }
    });

    checkBtn.addEventListener('click', () => {
      if (!currentAtsFile) {
        showToast('Select File', 'Please select or drag in a resume file first.', 'error');
        return;
      }

      checkBtn.disabled = true;
      checkBtn.textContent = 'Scanning Resume...';

      setTimeout(() => {
        document.getElementById('ats-score-container').classList.remove('hidden');
        const randomScore = Math.floor(Math.random() * 19) + 78;
        document.getElementById('ats-score-text').textContent = `${randomScore}/100`;
        document.getElementById('ats-score-fill').style.width = `${randomScore}%`;

        const verdictEl = document.getElementById('ats-score-verdict');
        if (randomScore >= 88) {
          verdictEl.textContent = 'Excellent! Your resume matches recruiters standards perfectly.';
        } else {
          verdictEl.textContent = 'Good — keywords are solid, consider adding more active verbs.';
        }

        checkBtn.disabled = false;
        checkBtn.textContent = 'Recalculate ATS Score ➔';
        showToast('Scan Completed', `Resume matching score generated: ${randomScore}%`, 'success');
      }, 1500);
    });
  }

  const templateItems = document.querySelectorAll('.template-item');
  templateItems.forEach(item => {
    item.addEventListener('click', function () {
      templateItems.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const selected = this.querySelector('span').textContent;
      showToast('Template Selected', `Active template: ${selected}`, 'success');
    });
  });

  const generateResumeBtn = document.getElementById('btn-generate-resume-trigger');
  const roleInput = document.getElementById('res-generator-role');
  if (generateResumeBtn && roleInput) {
    generateResumeBtn.addEventListener('click', () => {
      const roleText = roleInput.value.trim();
      const activeTemplate = document.querySelector('.template-item.active span').textContent;

      if (!roleText) {
        showToast('Error', 'Please enter a target Role / Job Title.', 'error');
        return;
      }

      generateResumeBtn.disabled = true;
      generateResumeBtn.textContent = 'Generating PDF...';

      setTimeout(() => {
        showToast('Download Started', `Resume for "${roleText}" generated using "${activeTemplate}" template. Downloading PDF...`, 'success');
        generateResumeBtn.disabled = false;
        generateResumeBtn.textContent = 'Generate Resume ➔';
      }, 1500);
    });
  }
}

function handleAtsFileSelect(file) {
  if (file.size > 5 * 1024 * 1024) {
    showToast('File Too Large', 'Please select a file smaller than 5MB.', 'error');
    return;
  }

  currentAtsFile = file;
  const dropzoneTitle = document.querySelector('#ats-dropzone h6');
  const dropzoneHint = document.querySelector('#ats-dropzone .upload-hint');

  dropzoneTitle.textContent = `File Loaded: ${file.name}`;
  dropzoneHint.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to check`;
  showToast('File Selected', `Ready to scan: ${file.name}`, 'success');
}

// DOM Initialization binds
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);

  if (!window.location.hash) {
    window.location.hash = '#splash';
  } else {
    splashCompleted = true;
    router();
  }

  router();

  // Load interactions
  initPasswordToggles();
  initFormSubmissions();
  initSocialRedirection();
  initLandingInteractions();
  initDashboardInteractions();
  initInactivityTracker();
});
