/* ============================================
   The Useful Pages — Shared JavaScript
   ============================================ */

const TOOLS = {
  text: { label: 'Text Tools', icon: '✍️', tools: [
    { name: 'Word Counter', url: 'word-counter.html', desc: 'Words, chars, sentences & reading time' },
    { name: 'Character Counter', url: 'character-counter.html', desc: 'Social limits, SMS, meta & username lengths' },
    { name: 'Case Converter', url: 'case-converter.html', desc: 'UPPER, lower, Title, camelCase, snake_case' },
    { name: 'Lorem Ipsum Generator', url: 'lorem-ipsum.html', desc: 'Customizable placeholder text' },
    { name: 'Text Diff Checker', url: 'text-diff.html', desc: 'Side-by-side text comparison' },
    { name: 'Remove Duplicate Lines', url: 'remove-duplicate-lines.html', desc: 'Clean duplicate text lines fast' },
    { name: 'Alphabetical Sort', url: 'alphabetical-sort.html', desc: 'Sort lines A–Z or Z–A instantly' },
    { name: 'Slug Generator', url: 'slug-generator.html', desc: 'URL-friendly slugs from any text' },
    { name: 'Reading Time Calculator', url: 'reading-time.html', desc: 'Estimate reading & speaking time' },
    { name: 'Sentence Counter', url: 'sentence-counter.html', desc: 'Count sentences & average length' },
  ]},
  math: { label: 'Math & Calculation', icon: '🔢', tools: [
    { name: 'Percentage Calculator', url: 'percentage-calculator.html', desc: 'X% of Y, increase, decrease' },
    { name: 'Age Calculator', url: 'age-calculator.html', desc: 'Exact age & next birthday countdown' },
    { name: 'Random Number Generator', url: 'random-number.html', desc: 'Single or list, no-duplicates option' },
    { name: 'Fraction Calculator', url: 'fraction-calculator.html', desc: 'Add, subtract, multiply, divide fractions' },
    { name: 'Square Root Calculator', url: 'square-root.html', desc: 'Calculate √ with decimal precision' },
    { name: 'Quadratic Equation Solver', url: 'quadratic-solver.html', desc: 'Solve ax²+bx+c=0 with both roots' },
    { name: 'Standard Deviation', url: 'standard-deviation.html', desc: 'Mean, variance, and std deviation' },
    { name: 'Scientific Calculator', url: 'scientific-calculator.html', desc: 'Full scientific & trig functions' },
  ]},
  datetime: { label: 'Date & Time', icon: '📅', tools: [
    { name: 'Days Between Dates', url: 'days-between-dates.html', desc: 'Days, weeks, months between two dates' },
    { name: 'Business Days Calculator', url: 'business-days.html', desc: 'Working days between dates, skip holidays' },
    { name: 'Date Calculator', url: 'date-calculator.html', desc: 'Add or subtract time from any date' },
    { name: 'Days Until Calculator', url: 'days-until.html', desc: 'Countdown to any future date' },
    { name: 'Unix Timestamp Converter', url: 'unix-timestamp.html', desc: 'Timestamp ↔ human-readable date' },
    { name: 'Time Zone Converter', url: 'timezone-converter.html', desc: 'Convert between world time zones' },
    { name: 'Meeting Planner', url: 'timezone-meeting-planner.html', desc: 'Find overlap across 2–4 time zones' },
    { name: 'Countdown Timer', url: 'countdown-timer.html', desc: 'Visual countdown to specific date/time' },
    { name: 'Kitchen Timer', url: 'kitchen-timer.html', desc: 'Multiple labeled timers with presets' },
  ]},
  convert: { label: 'Conversion', icon: '⚖️', tools: [
    { name: 'Unit Converter', url: 'unit-converter.html', desc: 'Length, weight, temp, volume, speed' },
    { name: 'Cooking Conversion', url: 'cooking-conversion.html', desc: 'Cups, tbsp, tsp, ml, oz and more' },
    { name: 'Base64 Encoder/Decoder', url: 'base64.html', desc: 'Encode and decode Base64 instantly' },
    { name: 'Hex ↔ Decimal', url: 'hex-decimal.html', desc: 'Bidirectional hex/decimal conversion' },
    { name: 'Binary/Decimal/Hex/Octal', url: 'binary-decimal.html', desc: 'Convert between any number bases' },
    { name: 'Height Converter', url: 'height-converter.html', desc: 'Feet & inches ↔ centimeters' },
    { name: 'Speed Converter', url: 'speed-converter.html', desc: 'MPH ↔ KPH and more speed units' },
  ]},
  dev: { label: 'Developer Tools', icon: '💻', tools: [
    { name: 'JSON Formatter', url: 'json-formatter.html', desc: 'Beautify, validate, and minify JSON' },
    { name: 'CSV to JSON', url: 'csv-to-json.html', desc: 'Convert CSV data to JSON format' },
    { name: 'URL Encoder / Decoder', url: 'url-encoder.html', desc: 'Encode or decode URLs and query strings' },
    { name: 'HTML Formatter', url: 'html-formatter.html', desc: 'Beautify or minify HTML code' },
    { name: 'JavaScript Minifier', url: 'js-minifier.html', desc: 'Minify JS and show size reduction' },
    { name: 'Markdown Previewer', url: 'markdown-previewer.html', desc: 'Live side-by-side Markdown preview' },
    { name: 'Cron Expression Helper', url: 'cron-helper.html', desc: 'Build & explain cron schedules visually' },
    { name: 'Robots.txt Generator', url: 'robots-txt-generator.html', desc: 'Build robots.txt rules with presets' },
    { name: '.htaccess Generator', url: 'htaccess-generator.html', desc: 'Redirects, HTTPS, www, security headers' },
    { name: 'Color Picker & Palette', url: 'color-picker.html', desc: 'HEX/RGB/HSL values & palettes' },
    { name: 'QR Code Generator', url: 'qr-generator.html', desc: 'Text/URL to QR code, download PNG' },
    { name: 'Password Generator', url: 'password-generator.html', desc: 'Strong passwords with strength meter' },
    { name: 'UUID Generator', url: 'uuid-generator.html', desc: 'Generate v4 UUIDs, bulk option' },
  ]},
  games: { label: 'Word & Games', icon: '🎮', tools: [
    { name: 'Word Unscrambler', url: 'word-unscrambler.html', desc: 'Find all valid words from letters' },
    { name: 'Scrabble Word Finder', url: 'scrabble-word-finder.html', desc: 'Up to 7 letters, wildcards, scoring' },
  ]},
  cooking: { label: 'Cooking', icon: '🍳', tools: [
    { name: 'Recipe Scaler', url: 'recipe-scaler.html', desc: 'Scale recipe ingredients proportionally' },
    { name: 'Instant Pot Converter', url: 'instant-pot-converter.html', desc: 'Slow cooker ↔ Instant Pot times' },
  ]},
  health: { label: 'Health & Fitness', icon: '❤️', tools: [
    { name: 'BMI Calculator', url: 'bmi-calculator.html', desc: 'Body mass index with WHO classification' },
    { name: 'Calorie Calculator', url: 'calorie-calculator.html', desc: 'TDEE, activity level & macros' },
    { name: 'Body Fat Calculator', url: 'body-fat.html', desc: 'Navy method body fat percentage' },
    { name: 'Ideal Weight Calculator', url: 'ideal-weight.html', desc: 'Multiple formulas & healthy range' },
    { name: 'Pregnancy Due Date', url: 'pregnancy-due-date.html', desc: 'From LMP, conception, or ultrasound' },
    { name: 'Ovulation Calculator', url: 'ovulation-calculator.html', desc: 'Fertile window & best conception days' },
  ]},
  finance: { label: 'Money Tools', icon: '💰', tools: [
    { name: 'Loan Payment Calculator', url: 'loan-calculator.html', desc: 'Monthly payment & total interest' },
    { name: 'Mortgage Calculator', url: 'mortgage-calculator.html', desc: 'PITI payments & amortization schedule' },
    { name: 'Sales Tax Calculator', url: 'sales-tax-calculator.html', desc: 'Calculate tax, total, or pre-tax price' },
    { name: 'Compound Interest', url: 'compound-interest.html', desc: 'Future value with contribution growth' },
    { name: 'Retirement Calculator', url: 'retirement-calculator.html', desc: 'Savings needed & growth projection' },
    { name: 'Tip Calculator', url: 'tip-calculator.html', desc: 'Tip amount, split bill, per person' },
    { name: 'Hourly to Salary', url: 'hourly-salary.html', desc: 'Hourly ↔ annual salary converter' },
    { name: 'Car Payment Calculator', url: 'car-payment.html', desc: 'Monthly payment & total loan cost' },
    { name: 'Savings Calculator', url: 'savings-calculator.html', desc: 'Future value with regular deposits' },
    { name: 'Debt Payoff Calculator', url: 'debt-payoff.html', desc: 'Snowball vs avalanche payoff plans' },
  ]},
  business: { label: 'Business & Work', icon: '💼', tools: [
    { name: 'GPA Calculator', url: 'gpa-calculator.html', desc: 'Courses, credits & cumulative GPA' },
    { name: 'Business Name Generator', url: 'business-name-generator.html', desc: '20+ name ideas from keywords' },
    { name: 'Invoice Generator', url: 'invoice-generator.html', desc: 'Line items, totals, download PDF' },
    { name: 'Time Card Calculator', url: 'time-card-calculator.html', desc: 'Clock in/out, breaks, weekly hours' },
    { name: 'Pay Raise Calculator', url: 'pay-raise-calculator.html', desc: 'New salary after raise percentage' },
  ]},
};

const TOOL_SEO_CONTENT = {
  'word-counter.html': { about: 'Use this free word counter to count words, characters, sentences, paragraphs, reading time, and speaking time from pasted text. It is useful for essays, blog posts, social captions, emails, scripts, and any writing with a word or character limit.', uses: ['Check word count for school assignments, articles, and blog drafts.', 'Estimate how long a page will take to read or speak out loud.', 'Find repeated words and clean up text before publishing.'] },
  'character-counter.html': { about: 'Use this free character counter to measure text length for social media posts, usernames, meta descriptions, SMS messages, titles, forms, and short snippets. It helps you stay under character limits without guessing.', uses: ['Check social captions, bios, and ad copy before posting.', 'Measure SEO titles and meta descriptions.', 'Compare character counts with and without spaces.'] },
  'case-converter.html': { about: 'Use this free case converter to quickly change text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and other common formats. It is useful for writing cleanup, code naming, headlines, and lists.', uses: ['Convert messy pasted text into readable capitalization.', 'Create URL, code, or spreadsheet-friendly text formats.', 'Fix headings, titles, and labels without retyping.'] },
  'remove-duplicate-lines.html': { about: 'Use this free duplicate line remover to clean repeated lines from lists, notes, exports, keyword lists, email lists, or pasted spreadsheet data. It helps turn messy text into a cleaner unique list.', uses: ['Remove repeated keywords, names, URLs, or email addresses.', 'Clean pasted lists before importing them somewhere else.', 'Keep original order or create a neater list for review.'] },
  'alphabetical-sort.html': { about: 'Use this free alphabetical sort tool to sort lines of text from A to Z or Z to A. It is useful for names, keywords, product lists, notes, spreadsheet exports, and any line-by-line text list.', uses: ['Sort names, titles, or keywords alphabetically.', 'Clean up unordered notes or pasted spreadsheet rows.', 'Prepare lists for easier scanning and comparison.'] },
  'slug-generator.html': { about: 'Use this free slug generator to turn titles, product names, blog ideas, or phrases into clean URL-friendly slugs. It removes clutter and formats text for readable web addresses.', uses: ['Create blog post slugs from article titles.', 'Turn product names into simple URL paths.', 'Clean text into lowercase, hyphen-separated web formats.'] },
  'reading-time.html': { about: 'Use this free reading time calculator to estimate how long text will take to read or speak. It is useful for blog posts, presentations, scripts, emails, newsletters, and course content.', uses: ['Estimate reading time before publishing an article.', 'Plan speaking time for scripts and presentations.', 'Compare short-form and long-form content length.'] },
  'sentence-counter.html': { about: 'Use this free sentence counter to count sentences and review average sentence length. It helps writers check pacing, readability, and structure in drafts, essays, posts, and emails.', uses: ['Check sentence count in essays or articles.', 'Spot overly long or dense writing.', 'Review writing rhythm before publishing.'] },
  'percentage-calculator.html': { about: 'Use this free percentage calculator to find X percent of a number, calculate percentage increase or decrease, work out what percent one number is of another, and reverse percentage values.', uses: ['Calculate discounts, markups, tips, fees, and sales changes.', 'Compare before-and-after values with percentage change.', 'Solve quick percentage questions without setting up formulas.'] },
  'days-between-dates.html': { about: 'Use this free days between dates calculator to count the number of days, weeks, or months between two dates. It is helpful for deadlines, events, billing periods, trips, projects, and planning.', uses: ['Count days until or since an event.', 'Work out project timelines and date gaps.', 'Compare calendar ranges for planning or reporting.'] },
  'business-days.html': { about: 'Use this free business days calculator to count working days between dates while skipping weekends. It is useful for due dates, turnaround times, project schedules, invoices, and work planning.', uses: ['Estimate workdays between two calendar dates.', 'Plan deadlines without counting weekends.', 'Calculate business-day turnaround windows.'] },
  'date-calculator.html': { about: 'Use this free date calculator to add or subtract days, weeks, months, or years from a starting date. It is useful for planning deadlines, renewals, appointments, and project milestones.', uses: ['Add days or weeks to find a future deadline.', 'Subtract time to find a start date.', 'Plan renewals, follow-ups, and milestones.'] },
  'unit-converter.html': { about: 'Use this free unit converter to convert common measurements like length, weight, temperature, volume, area, and speed. It is built for quick everyday conversions without digging through a complicated app.', uses: ['Convert between metric and imperial units.', 'Check measurements for projects, recipes, shipping, or travel.', 'Switch units quickly from one page.'] },
  'base64.html': { about: 'Use this free Base64 encoder and decoder to convert plain text to Base64 or decode Base64 back into readable text. It is useful for developers, testing, troubleshooting, and data formatting.', uses: ['Encode short strings for testing or examples.', 'Decode Base64 text to inspect readable content.', 'Work with web, API, and data formatting tasks.'] },
  'url-encoder.html': { about: 'Use this free URL encoder and decoder to encode special characters for URLs or decode encoded query strings back into readable text. It is useful for links, APIs, redirects, and tracking parameters.', uses: ['Encode spaces and symbols for safe URLs.', 'Decode query strings and tracking links.', 'Troubleshoot links, forms, and API parameters.'] },
  'json-formatter.html': { about: 'Use this free JSON formatter to format, validate, beautify, and minify JSON. It is useful for API responses, configuration files, logs, debugging, and copying structured data into a readable format.', uses: ['Beautify messy JSON so it is easier to read.', 'Check whether JSON is valid before using it.', 'Minify JSON for compact storage or transfer.'] },
  'csv-to-json.html': { about: 'Use this free CSV to JSON converter to turn spreadsheet-style rows into structured JSON. It is useful for imports, prototypes, API payloads, automation workflows, and quick data cleanup.', uses: ['Convert copied spreadsheet data into JSON.', 'Prepare small datasets for testing or automation.', 'Review row-based data in a structured format.'] },
  'password-generator.html': { about: 'Use this free password generator to create strong random passwords with adjustable length and character options. It is useful for new accounts, shared systems, testing, and replacing weak passwords.', uses: ['Generate long passwords for new accounts.', 'Adjust character types for sites with password rules.', 'Create stronger passwords without inventing them yourself.'] },
  'hourly-salary.html': { about: 'Use this free hourly to salary calculator to convert hourly pay into weekly, monthly, and annual estimates, or compare salary back to an hourly rate. It is useful for job offers, budgeting, and planning.', uses: ['Estimate annual pay from an hourly rate.', 'Compare salary offers with hourly work.', 'Plan income based on hours per week.'] }
};

function initTheme(){const saved=localStorage.getItem('tup_theme');const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',saved||(prefersDark?'dark':'light'));}
function toggleTheme(){const current=document.documentElement.getAttribute('data-theme');const next=current==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);localStorage.setItem('tup_theme',next);}
initTheme();

function injectNav(activeUrl){
  const megaCols=Object.values(TOOLS).map(cat=>`<div class="mega-col"><div class="mega-col-heading">${cat.icon} ${cat.label}</div>${cat.tools.map(t=>`<a href="${t.url}">${t.name}</a>`).join('')}</div>`).join('');
  const mobileCategories=Object.values(TOOLS).map(cat=>`<div class="mobile-category"><h3>${cat.icon} ${cat.label}</h3>${cat.tools.map(t=>`<a href="${t.url}">${t.name}</a>`).join('')}</div>`).join('');
  const html=`<nav class="site-nav"><div class="nav-inner"><a href="index.html" class="nav-logo">⚡ The Useful Pages</a><div class="nav-right"><button class="nav-all-tools-btn" id="all-tools-btn" aria-expanded="false" aria-controls="mega-menu">All Tools <span class="caret">▼</span></button><button class="theme-toggle" id="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark/light mode"><svg class="icon-sun" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg><svg class="icon-moon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg></button><button class="hamburger" id="hamburger-btn" aria-label="Menu"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button></div></div><div class="mega-menu" id="mega-menu"><div class="mega-menu-inner">${megaCols}</div></div><div class="mobile-menu" id="mobile-menu">${mobileCategories}</div></nav>`;
  const el=document.getElementById('site-nav'); if(el) el.outerHTML=html; else document.body.insertAdjacentHTML('afterbegin',html);
  const allToolsBtn=document.getElementById('all-tools-btn'); const megaMenu=document.getElementById('mega-menu');
  if(allToolsBtn&&megaMenu){allToolsBtn.addEventListener('click',e=>{e.stopPropagation();const isOpen=megaMenu.classList.contains('open');megaMenu.classList.toggle('open',!isOpen);allToolsBtn.classList.toggle('open',!isOpen);allToolsBtn.setAttribute('aria-expanded',String(!isOpen));});document.addEventListener('click',()=>{megaMenu.classList.remove('open');allToolsBtn.classList.remove('open');allToolsBtn.setAttribute('aria-expanded','false');});document.addEventListener('keydown',e=>{if(e.key==='Escape'){megaMenu.classList.remove('open');allToolsBtn.classList.remove('open');allToolsBtn.setAttribute('aria-expanded','false');}});megaMenu.addEventListener('click',e=>e.stopPropagation());}
  const hamburger=document.getElementById('hamburger-btn'); if(hamburger) hamburger.addEventListener('click',e=>{e.stopPropagation();document.getElementById('mobile-menu').classList.toggle('open');});
  const themeBtn=document.getElementById('theme-toggle-btn'); if(themeBtn) themeBtn.addEventListener('click',toggleTheme);
  trackRecentlyUsed(activeUrl); enhanceToolPage(); removePlaceholderAdSlots();
}

function injectFooter(){const html=`<footer class="site-footer"><div class="footer-inner"><a href="index.html" class="footer-logo">⚡ The Useful Pages</a><div class="footer-links"><a href="index.html">All Tools</a><a href="index.html#text">Text & Writing</a><a href="index.html#math">Math</a><a href="index.html#finance">Financial</a><a href="index.html#health">Health</a><a href="index.html#dev">Developer</a></div><div><div class="footer-copy">Free online utilities — no signup required</div><div class="footer-copy" style="margin-top:0.25rem;">Powered by <a href="https://sassypupstudios.com" style="color:#94a3b8;" target="_blank" rel="noopener">Sassy Pup Studios</a></div></div></div></footer>`;const el=document.getElementById('site-footer'); if(el) el.outerHTML=html; else document.body.insertAdjacentHTML('beforeend',html);}

function trackRecentlyUsed(url){if(!url)return;let recent=JSON.parse(localStorage.getItem('tup_recent')||'[]');recent=recent.filter(u=>u!==url);recent.unshift(url);recent=recent.slice(0,8);localStorage.setItem('tup_recent',JSON.stringify(recent));}
function getRecentlyUsed(){return JSON.parse(localStorage.getItem('tup_recent')||'[]');}
function toolByUrl(url){for(const cat of Object.values(TOOLS)){const t=cat.tools.find(t=>t.url===url);if(t)return t;}return null;}
function toolInfoByUrl(url){for(const [catKey,cat] of Object.entries(TOOLS)){const tool=cat.tools.find(t=>t.url===url);if(tool)return{tool,catKey,cat};}return null;}
function showToast(msg,duration){duration=duration||2200;let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('show');clearTimeout(t._tid);t._tid=setTimeout(()=>t.classList.remove('show'),duration);}
async function copyText(text,msg){msg=msg||'✓ Copied!';try{await navigator.clipboard.writeText(text);}catch(_){const ta=document.createElement('textarea');ta.value=text;Object.assign(ta.style,{position:'fixed',opacity:'0',top:'0',left:'0'});document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);}showToast(msg);}
function fmtNum(n,decimals){if(decimals===undefined)decimals=2;return Number(n).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:decimals});}
function fmtCurrency(n){return '$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fmtPct(n,dec){return Number(n).toFixed(dec===undefined?2:dec)+'%';}
function relatedToolsHTML(currentUrl,catKey,extra){extra=extra||[];const cat=TOOLS[catKey];if(!cat)return'';const links=[...cat.tools.filter(t=>t.url!==currentUrl).slice(0,4),...extra.map(u=>toolByUrl(u)).filter(Boolean)].slice(0,6).map(t=>`<a href="${t.url}">${t.name}</a>`).join('');return `<div class="related-card"><h3>Related Tools</h3><div class="related-links">${links}</div></div>`;}
function removePlaceholderAdSlots(){document.querySelectorAll('.adsbygoogle[data-ad-slot="YYYYYYYYYY"]').forEach(ad=>{const wrap=ad.closest('.ad-container');if(wrap)wrap.remove();else ad.remove();});}
function addJsonLd(id,data){if(document.getElementById(id))return;const script=document.createElement('script');script.type='application/ld+json';script.id=id;script.textContent=JSON.stringify(data);document.head.appendChild(script);}

function enhanceToolPage(){
  const path=(location.pathname.split('/').pop()||'index.html'); if(path==='index.html')return;
  const info=toolInfoByUrl(path); const main=document.querySelector('.tool-main'); if(!info||!main||document.getElementById('tool-seo-support'))return;
  const {tool,cat}=info; const custom=TOOL_SEO_CONTENT[path]; const toolUrl=`https://theusefulpages.com/${tool.url}`; const categoryUrl=`https://theusefulpages.com/#${Object.keys(TOOLS).find(k=>TOOLS[k]===cat)||''}`;
  if(!document.querySelector('meta[name="description"]')){const meta=document.createElement('meta');meta.name='description';meta.content=`Use the free ${tool.name} from The Useful Pages. ${tool.desc}. No signup required.`;document.head.appendChild(meta);} if(!document.querySelector('link[rel="canonical"]')){const link=document.createElement('link');link.rel='canonical';link.href=toolUrl;document.head.appendChild(link);}
  addJsonLd('tool-breadcrumb-schema',{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"The Useful Pages","item":"https://theusefulpages.com/"},{"@type":"ListItem","position":2,"name":cat.label,"item":categoryUrl},{"@type":"ListItem","position":3,"name":tool.name,"item":toolUrl}]});
  addJsonLd('tool-faq-schema',{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":`Is the ${tool.name} free?`,"acceptedAnswer":{"@type":"Answer","text":`Yes. The ${tool.name} is free to use and does not require an account.`}},{"@type":"Question","name":`What can I use the ${tool.name} for?`,"acceptedAnswer":{"@type":"Answer","text":custom&&custom.uses?custom.uses.join(' '):`You can use it for ${tool.desc.toLowerCase()} and related everyday tasks.`}},{"@type":"Question","name":"Is my data private?","acceptedAnswer":{"@type":"Answer","text":"Most tools run in your browser, so the information you enter stays on your device unless a tool clearly says otherwise."}}]});
  const related=cat.tools.filter(t=>t.url!==tool.url).slice(0,4).map(t=>`<a href="${t.url}">${t.name}</a>`).join(''); const uses=custom&&custom.uses?`<h3 style="font-size:0.95rem;margin:1rem 0 0.5rem;">Common uses</h3><ul style="margin:0;padding-left:1.25rem;color:var(--text-muted);font-size:0.9rem;line-height:1.7;">${custom.uses.map(u=>`<li>${u}</li>`).join('')}</ul>`:'';
  const block=document.createElement('section'); block.id='tool-seo-support'; block.className='instructions-card'; block.innerHTML=`<h2 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;">About this ${tool.name}</h2><p style="margin:0 0 0.75rem;color:var(--text-muted);font-size:0.9rem;">${custom&&custom.about?custom.about:`This free ${tool.name} helps with ${tool.desc.toLowerCase()}. It is built for quick everyday use: open the page, enter what you need, get the result, and move on.`}</p><p style="margin:0;color:var(--text-muted);font-size:0.9rem;">No signup is required, and the tool is designed to work on phones, tablets, laptops, and desktop browsers.</p>${uses}${related?`<div class="related-links" style="margin-top:1rem;"><strong style="font-size:0.82rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;margin-right:0.25rem;">More ${cat.label}:</strong>${related}</div>`:''}`;
  const firstRelated=main.querySelector('.related-card'); const firstInstructions=main.querySelector('.instructions-card'); if(firstRelated) firstRelated.parentNode.insertBefore(block,firstRelated); else if(firstInstructions) firstInstructions.insertAdjacentElement('afterend',block); else main.appendChild(block);
}

document.addEventListener('DOMContentLoaded',()=>{removePlaceholderAdSlots();enhanceToolPage();});
