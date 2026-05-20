/* ============================================
   The Useful Pages — Shared JavaScript
   ============================================ */

// ── Tool directory ─────────────────────────────────
const TOOLS = {
  text: {
    label: 'Text Tools',
    icon: '✍️',
    tools: [
      { name: 'Word Counter',            url: 'word-counter.html',            desc: 'Words, chars, sentences & reading time' },
      { name: 'Character Counter',       url: 'character-counter.html',       desc: 'Social limits, SMS, meta & username lengths' },
      { name: 'Case Converter',          url: 'case-converter.html',          desc: 'UPPER, lower, Title, camelCase, snake_case' },
      { name: 'Lorem Ipsum Generator',   url: 'lorem-ipsum.html',             desc: 'Customizable placeholder text' },
      { name: 'Text Diff Checker',       url: 'text-diff.html',               desc: 'Side-by-side text comparison' },
      { name: 'Remove Duplicate Lines',  url: 'remove-duplicate-lines.html',  desc: 'Clean duplicate text lines fast' },
      { name: 'Alphabetical Sort',       url: 'alphabetical-sort.html',       desc: 'Sort lines A–Z or Z–A instantly' },
      { name: 'Slug Generator',          url: 'slug-generator.html',          desc: 'URL-friendly slugs from any text' },
      { name: 'Reading Time Calculator', url: 'reading-time.html',            desc: 'Estimate reading & speaking time' },
      { name: 'Sentence Counter',        url: 'sentence-counter.html',        desc: 'Count sentences & average length' },
    ],
  },
  math: {
    label: 'Math & Calculation',
    icon: '🔢',
    tools: [
      { name: 'Percentage Calculator',   url: 'percentage-calculator.html',   desc: 'X% of Y, increase, decrease' },
      { name: 'Age Calculator',          url: 'age-calculator.html',          desc: 'Exact age & next birthday countdown' },
      { name: 'Random Number Generator', url: 'random-number.html',           desc: 'Single or list, no-duplicates option' },
      { name: 'Fraction Calculator',     url: 'fraction-calculator.html',     desc: 'Add, subtract, multiply, divide fractions' },
      { name: 'Square Root Calculator',  url: 'square-root.html',             desc: 'Calculate √ with decimal precision' },
      { name: 'Quadratic Equation Solver',url:'quadratic-solver.html',        desc: 'Solve ax²+bx+c=0 with both roots' },
      { name: 'Standard Deviation',      url: 'standard-deviation.html',      desc: 'Mean, variance, and std deviation' },
      { name: 'Scientific Calculator',   url: 'scientific-calculator.html',   desc: 'Full scientific & trig functions' },
    ],
  },
  datetime: {
    label: 'Date & Time',
    icon: '📅',
    tools: [
      { name: 'Days Between Dates',      url: 'days-between-dates.html',      desc: 'Days, weeks, months between two dates' },
      { name: 'Business Days Calculator',url: 'business-days.html',           desc: 'Working days between dates, skip holidays' },
      { name: 'Date Calculator',         url: 'date-calculator.html',         desc: 'Add or subtract time from any date' },
      { name: 'Days Until Calculator',   url: 'days-until.html',              desc: 'Countdown to any future date' },
      { name: 'Unix Timestamp Converter',url: 'unix-timestamp.html',          desc: 'Timestamp ↔ human-readable date' },
      { name: 'Time Zone Converter',     url: 'timezone-converter.html',      desc: 'Convert between world time zones' },
      { name: 'Meeting Planner',         url: 'timezone-meeting-planner.html',desc: 'Find overlap across 2–4 time zones' },
      { name: 'Countdown Timer',         url: 'countdown-timer.html',         desc: 'Visual countdown to specific date/time' },
      { name: 'Kitchen Timer',           url: 'kitchen-timer.html',           desc: 'Multiple labeled timers with presets' },
    ],
  },
  convert: {
    label: 'Conversion',
    icon: '⚖️',
    tools: [
      { name: 'Unit Converter',          url: 'unit-converter.html',          desc: 'Length, weight, temp, volume, speed' },
      { name: 'Cooking Conversion',      url: 'cooking-conversion.html',      desc: 'Cups, tbsp, tsp, ml, oz and more' },
      { name: 'Base64 Encoder/Decoder',  url: 'base64.html',                  desc: 'Encode and decode Base64 instantly' },
      { name: 'Hex ↔ Decimal',          url: 'hex-decimal.html',             desc: 'Bidirectional hex/decimal conversion' },
      { name: 'Binary/Decimal/Hex/Octal',url: 'binary-decimal.html',         desc: 'Convert between any number bases' },
      { name: 'Height Converter',        url: 'height-converter.html',        desc: 'Feet & inches ↔ centimeters' },
      { name: 'Speed Converter',         url: 'speed-converter.html',         desc: 'MPH ↔ KPH and more speed units' },
    ],
  },
  dev: {
    label: 'Developer Tools',
    icon: '💻',
    tools: [
      { name: 'JSON Formatter',          url: 'json-formatter.html',          desc: 'Beautify, validate, and minify JSON' },
      { name: 'CSV to JSON',             url: 'csv-to-json.html',             desc: 'Convert CSV data to JSON format' },
      { name: 'URL Encoder / Decoder',   url: 'url-encoder.html',             desc: 'Encode or decode URLs and query strings' },
      { name: 'HTML Formatter',          url: 'html-formatter.html',          desc: 'Beautify or minify HTML code' },
      { name: 'JavaScript Minifier',     url: 'js-minifier.html',             desc: 'Minify JS and show size reduction' },
      { name: 'Markdown Previewer',      url: 'markdown-previewer.html',      desc: 'Live side-by-side Markdown preview' },
      { name: 'Cron Expression Helper',  url: 'cron-helper.html',             desc: 'Build & explain cron schedules visually' },
      { name: 'Robots.txt Generator',    url: 'robots-txt-generator.html',    desc: 'Build robots.txt rules with presets' },
      { name: '.htaccess Generator',     url: 'htaccess-generator.html',      desc: 'Redirects, HTTPS, www, security headers' },
      { name: 'Color Picker & Palette',  url: 'color-picker.html',            desc: 'HEX/RGB/HSL values & palettes' },
      { name: 'QR Code Generator',       url: 'qr-generator.html',            desc: 'Text/URL to QR code, download PNG' },
      { name: 'Password Generator',      url: 'password-generator.html',      desc: 'Strong passwords with strength meter' },
      { name: 'UUID Generator',          url: 'uuid-generator.html',          desc: 'Generate v4 UUIDs, bulk option' },
    ],
  },
  games: {
    label: 'Word & Games',
    icon: '🎮',
    tools: [
      { name: 'Word Unscrambler',        url: 'word-unscrambler.html',        desc: 'Find all valid words from letters' },
      { name: 'Scrabble Word Finder',    url: 'scrabble-word-finder.html',    desc: 'Up to 7 letters, wildcards, scoring' },
    ],
  },
  cooking: {
    label: 'Cooking',
    icon: '🍳',
    tools: [
      { name: 'Recipe Scaler',           url: 'recipe-scaler.html',           desc: 'Scale recipe ingredients proportionally' },
      { name: 'Instant Pot Converter',   url: 'instant-pot-converter.html',   desc: 'Slow cooker ↔ Instant Pot times' },
    ],
  },
  health: {
    label: 'Health & Fitness',
    icon: '❤️',
    tools: [
      { name: 'BMI Calculator',          url: 'bmi-calculator.html',          desc: 'Body mass index with WHO classification' },
      { name: 'Calorie Calculator',      url: 'calorie-calculator.html',      desc: 'TDEE, activity level & macros' },
      { name: 'Body Fat Calculator',     url: 'body-fat.html',                desc: 'Navy method body fat percentage' },
      { name: 'Ideal Weight Calculator', url: 'ideal-weight.html',            desc: 'Multiple formulas & healthy range' },
      { name: 'Pregnancy Due Date',      url: 'pregnancy-due-date.html',      desc: 'From LMP, conception, or ultrasound' },
      { name: 'Ovulation Calculator',    url: 'ovulation-calculator.html',    desc: 'Fertile window & best conception days' },
    ],
  },
  finance: {
    label: 'Money Tools',
    icon: '💰',
    tools: [
      { name: 'Loan Payment Calculator', url: 'loan-calculator.html',         desc: 'Monthly payment & total interest' },
      { name: 'Mortgage Calculator',     url: 'mortgage-calculator.html',     desc: 'PITI payments & amortization schedule' },
      { name: 'Sales Tax Calculator',    url: 'sales-tax-calculator.html',    desc: 'Calculate tax, total, or pre-tax price' },
      { name: 'Compound Interest',       url: 'compound-interest.html',       desc: 'Future value with contribution growth' },
      { name: 'Retirement Calculator',   url: 'retirement-calculator.html',   desc: 'Savings needed & growth projection' },
      { name: 'Tip Calculator',          url: 'tip-calculator.html',          desc: 'Tip amount, split bill, per person' },
      { name: 'Hourly to Salary',        url: 'hourly-salary.html',           desc: 'Hourly ↔ annual salary converter' },
      { name: 'Car Payment Calculator',  url: 'car-payment.html',             desc: 'Monthly payment & total loan cost' },
      { name: 'Savings Calculator',      url: 'savings-calculator.html',      desc: 'Future value with regular deposits' },
      { name: 'Debt Payoff Calculator',  url: 'debt-payoff.html',             desc: 'Snowball vs avalanche payoff plans' },
    ],
  },
  business: {
    label: 'Business & Work',
    icon: '💼',
    tools: [
      { name: 'GPA Calculator',          url: 'gpa-calculator.html',          desc: 'Courses, credits & cumulative GPA' },
      { name: 'Business Name Generator', url: 'business-name-generator.html', desc: '20+ name ideas from keywords' },
      { name: 'Invoice Generator',       url: 'invoice-generator.html',       desc: 'Line items, totals, download PDF' },
      { name: 'Time Card Calculator',    url: 'time-card-calculator.html',    desc: 'Clock in/out, breaks, weekly hours' },
      { name: 'Pay Raise Calculator',    url: 'pay-raise-calculator.html',    desc: 'New salary after raise percentage' },
    ],
  },
};

// ── Dark mode ──────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('tup_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('tup_theme', next);
}

initTheme();

// ── Nav injection ──────────────────────────────────
function injectNav(activeUrl) {
  const dropdowns = Object.values(TOOLS).map(cat => {
    const links = cat.tools.map(t =>
      `<a href="${t.url}">${t.name}</a>`
    ).join('');
    return `
      <div class="nav-dropdown">
        <button>${cat.icon} ${cat.label} ▾</button>
        <div class="dropdown-menu">${links}</div>
      </div>`;
  }).join('');

  const html = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">⚡ The Useful Pages</a>
        <div class="nav-links">${dropdowns}</div>
        <div class="nav-right">
          <a href="index.html" style="font-size:0.8125rem;font-weight:600;color:var(--primary);text-decoration:none;padding:0.4rem 0.75rem;border:1.5px solid var(--primary);border-radius:8px;">All Tools</a>
          <button class="theme-toggle" id="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark/light mode">
            <svg class="icon-sun" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <svg class="icon-moon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          </button>
          <button class="hamburger" id="hamburger-btn" aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        ${Object.values(TOOLS).map(cat => `
          <div class="mobile-category">
            <h3>${cat.icon} ${cat.label}</h3>
            ${cat.tools.map(t => `<a href="${t.url}">${t.name}</a>`).join('')}
          </div>
        `).join('')}
      </div>
    </nav>`;

  const el = document.getElementById('site-nav');
  if (el) el.outerHTML = html;
  else document.body.insertAdjacentHTML('afterbegin', html);

  document.getElementById('hamburger-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Dropdown click-to-toggle (supplements CSS :hover for touch/click users)
  document.querySelectorAll('.nav-dropdown > button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const parent = btn.parentElement;
      const isOpen = parent.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) parent.classList.add('open');
    });
  });
  // Close all dropdowns when clicking anywhere else
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  });

  trackRecentlyUsed(activeUrl);
}

// ── Footer injection ───────────────────────────────
function injectFooter() {
  const html = `
    <footer class="site-footer">
      <div class="footer-inner">
        <a href="index.html" class="footer-logo">⚡ The Useful Pages</a>
        <div class="footer-links">
          <a href="index.html">All Tools</a>
          <a href="index.html#text">Text & Writing</a>
          <a href="index.html#math">Math</a>
          <a href="index.html#finance">Financial</a>
          <a href="index.html#health">Health</a>
          <a href="index.html#dev">Developer</a>
        </div>
        <div>
          <div class="footer-copy">Free online utilities — no signup required</div>
          <div class="footer-copy" style="margin-top:0.25rem;">Powered by <a href="https://sassypupstudios.com" style="color:#94a3b8;" target="_blank" rel="noopener">Sassy Pup Studios</a></div>
        </div>
      </div>
    </footer>`;

  const el = document.getElementById('site-footer');
  if (el) el.outerHTML = html;
  else document.body.insertAdjacentHTML('beforeend', html);
}

// ── Recently used tools ────────────────────────────
function trackRecentlyUsed(url) {
  if (!url) return;
  let recent = JSON.parse(localStorage.getItem('tup_recent') || '[]');
  recent = recent.filter(u => u !== url);
  recent.unshift(url);
  recent = recent.slice(0, 8);
  localStorage.setItem('tup_recent', JSON.stringify(recent));
}

function getRecentlyUsed() {
  return JSON.parse(localStorage.getItem('tup_recent') || '[]');
}

function toolByUrl(url) {
  for (const cat of Object.values(TOOLS)) {
    const t = cat.tools.find(t => t.url === url);
    if (t) return t;
  }
  return null;
}

// ── Toast notification ─────────────────────────────
function showToast(msg, duration) {
  duration = duration || 2200;
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), duration);
}

// ── Copy to clipboard ──────────────────────────────
async function copyText(text, msg) {
  msg = msg || '✓ Copied!';
  try {
    await navigator.clipboard.writeText(text);
  } catch (_) {
    const ta = document.createElement('textarea');
    ta.value = text;
    Object.assign(ta.style, { position:'fixed', opacity:'0', top:'0', left:'0' });
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  showToast(msg);
}

// ── Number formatting ──────────────────────────────
function fmtNum(n, decimals) {
  if (decimals === undefined) decimals = 2;
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: decimals });
}
function fmtCurrency(n) {
  return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtPct(n, dec) {
  return Number(n).toFixed(dec === undefined ? 2 : dec) + '%';
}

// ── Related tools helper ───────────────────────────
function relatedToolsHTML(currentUrl, catKey, extra) {
  extra = extra || [];
  const cat = TOOLS[catKey];
  if (!cat) return '';
  const links = [...cat.tools.filter(t => t.url !== currentUrl).slice(0, 4), ...extra.map(u => toolByUrl(u)).filter(Boolean)]
    .slice(0, 6)
    .map(t => `<a href="${t.url}">${t.name}</a>`)
    .join('');
  return `<div class="related-card"><h3>Related Tools</h3><div class="related-links">${links}</div></div>`;
}
