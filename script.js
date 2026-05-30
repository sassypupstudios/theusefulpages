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
  crafting: { label: 'Crafting & Yarn', icon: '🧶', tools: [
    { name: 'Gauge Calculator', url: 'gauge-calculator.html', desc: 'Convert gauge between needles, hooks, and yarn weights' },
    { name: 'Yarn Yardage Calculator', url: 'yarn-yardage-calculator.html', desc: 'Estimate yarn needed for any project by weight and category' },
    { name: 'Yarn Cost Calculator', url: 'yarn-cost-calculator.html', desc: 'Calculate total yarn cost for a project from price per skein' },
    { name: 'Yarn Weight Converter', url: 'yarn-weight-converter.html', desc: 'Convert between yarn weight categories and fiber types' },
    { name: 'Skein Converter', url: 'skein-converter.html', desc: 'Convert skeins to yards, meters, and grams' },
    { name: 'Grams to Yardage Estimator', url: 'grams-to-yardage-estimator.html', desc: 'Estimate yardage from yarn weight in grams' },
    { name: 'Yardage to Meters Converter', url: 'yardage-to-meters-converter.html', desc: 'Convert yards to meters and meters to yards' },
    { name: 'Stash Yardage Calculator', url: 'stash-yardage-calculator.html', desc: 'Total up your yarn stash yardage by weight category' },
    { name: 'Wraps Per Inch Calculator', url: 'wraps-per-inch-calculator.html', desc: 'Calculate WPI to identify unknown yarn weight' },
    { name: 'Leftover Yarn Project Finder', url: 'leftover-yarn-project-finder.html', desc: 'Find projects that fit your remaining yarn yardage' },
    { name: 'Yarn Held Double Calculator', url: 'yarn-held-double-calculator.html', desc: 'Calculate gauge and yardage when holding yarn doubled' },
    { name: 'Yarn Substitution Helper', url: 'yarn-substitution-helper.html', desc: 'Find yarn substitute matches by weight and fiber' },
    { name: 'Project Cost Calculator', url: 'project-cost-calculator.html', desc: 'Calculate total cost of yarn and supplies for a project' },
    { name: 'Temperature Blanket Planner', url: 'temperature-blanket-planner.html', desc: 'Plan color assignments and yardage for a temperature blanket' },
    { name: 'Row Counter', url: 'row-counter.html', desc: 'Simple browser-based row and stitch counter' },
  ]},
  yarn_ref: { label: 'Yarn & Hook Reference', icon: '📏', tools: [
    { name: 'Yarn Weight Reference', url: 'yarn-weight-reference.html', desc: 'Standard yarn weight categories, plies, and recommended sizes' },
    { name: 'Crochet Hook Size Converter', url: 'crochet-hook-size-converter.html', desc: 'Convert between US, metric, and UK crochet hook sizes' },
    { name: 'Knitting Needle Size Converter', url: 'knitting-needle-size-converter.html', desc: 'Convert between US, metric, and UK knitting needle sizes' },
    { name: 'Hook & Needle Size Converter', url: 'hook-needle-size-converter.html', desc: 'Combined crochet hook and knitting needle size reference' },
    { name: 'Needle Gauge Checker', url: 'needle-gauge-checker.html', desc: 'Identify needle or hook size from gauge measurements' },
    { name: 'Thread Conversion Chart', url: 'thread-conversion-chart.html', desc: 'Convert embroidery thread colors between DMC and Anchor' },
    { name: 'DMC Color Lookup', url: 'dmc-color-lookup.html', desc: 'Look up DMC floss colors by number or name' },
    { name: 'Circular Needle Length Helper', url: 'circular-needle-length-helper.html', desc: 'Choose the right circular needle length for any project' },
  ]},
  pattern_help: { label: 'Pattern Help', icon: '📖', tools: [
    { name: 'Pattern Abbreviation Lookup', url: 'pattern-abbreviation-lookup.html', desc: 'Look up common knitting and crochet abbreviations' },
    { name: 'Pattern Reading Helper', url: 'pattern-reading-helper.html', desc: 'Decode unfamiliar pattern notation and instructions' },
    { name: 'Pattern Bracket Explainer', url: 'pattern-bracket-explainer.html', desc: 'Understand brackets, asterisks, and repeat notation in patterns' },
    { name: 'Pattern Error Checker', url: 'pattern-error-checker.html', desc: 'Spot common math and instruction errors in patterns' },
    { name: 'Pattern Notes Organizer', url: 'pattern-notes-organizer.html', desc: 'Save modifications and notes for any pattern' },
    { name: 'Pattern Center Finder', url: 'pattern-center-finder.html', desc: 'Find the center stitch or row of a pattern' },
    { name: 'Pattern Difficulty Estimator', url: 'pattern-difficulty-estimator.html', desc: 'Estimate pattern difficulty from stitch types and techniques' },
    { name: 'Pattern Rewrite Helper', url: 'pattern-rewrite-helper.html', desc: 'Reformat pattern rows into plain-language instructions' },
    { name: 'Pattern Repeat Calculator', url: 'pattern-repeat-calculator.html', desc: 'Calculate how many stitches to cast on for a pattern repeat' },
    { name: 'Repeat Instruction Explainer', url: 'repeat-instruction-explainer.html', desc: 'Expand repeated pattern rows into full instructions' },
    { name: 'Pattern to Checklist', url: 'written-pattern-to-checklist.html', desc: 'Convert pattern rows into a step-by-step checklist' },
    { name: 'Row-by-Row Pattern Tracker', url: 'row-by-row-pattern-tracker.html', desc: 'Track your progress through a pattern row by row' },
    { name: 'Pattern Size Grading Calculator', url: 'pattern-size-grading-calculator.html', desc: 'Scale a pattern to a different size using gauge math' },
    { name: 'Knitting Abbreviation Dictionary', url: 'knitting-abbreviation-dictionary.html', desc: 'Full dictionary of knitting abbreviations and their meanings' },
    { name: 'Crochet Abbreviation Dictionary', url: 'crochet-abbreviation-dictionary.html', desc: 'Full dictionary of US and UK crochet abbreviations' },
  ]},
  crochet_tools: { label: 'Crochet Tools', icon: '🪝', tools: [
    { name: 'Crochet Gauge Calculator', url: 'crochet-gauge-swatch-calculator.html', desc: 'Convert crochet gauge swatch measurements to project stitch counts' },
    { name: 'Foundation Chain Calculator', url: 'foundation-chain-calculator.html', desc: 'Calculate starting chain count for any crochet project width' },
    { name: 'Crochet Blanket Size Calculator', url: 'crochet-blanket-size-calculator.html', desc: 'Estimate stitch count and yardage for crochet blankets' },
    { name: 'Crochet Blanket Border Calculator', url: 'crochet-blanket-border-calculator.html', desc: 'Calculate stitches needed for a crochet blanket border' },
    { name: 'Crochet Circle Calculator', url: 'crochet-circle-calculator.html', desc: 'Calculate increases for a flat crochet circle' },
    { name: 'Crochet Circle Increase Calculator', url: 'crochet-circle-increase-calculator.html', desc: 'Plan increase rounds for flat crocheted circles' },
    { name: 'Crochet Hat Crown Calculator', url: 'crochet-hat-crown-calculator.html', desc: 'Calculate crown increases for crochet hats' },
    { name: 'Crochet Hexagon Calculator', url: 'crochet-hexagon-calculator.html', desc: 'Calculate stitch counts for crocheted hexagon motifs' },
    { name: 'Crochet Oval Calculator', url: 'crochet-oval-calculator.html', desc: 'Calculate foundation chain and increases for crochet ovals' },
    { name: 'Crochet Stitch Height Reference', url: 'crochet-stitch-height-reference.html', desc: 'Heights of common crochet stitches in chain units' },
    { name: 'Crochet Symbol Lookup', url: 'crochet-symbol-lookup.html', desc: 'Identify crochet chart symbols and their written equivalents' },
    { name: 'C2C Blanket Calculator', url: 'c2c-blanket-calculator.html', desc: 'Calculate rows and yarn for corner-to-corner crochet blankets' },
    { name: 'C2C Graph Size Calculator', url: 'c2c-graph-size-calculator.html', desc: 'Find finished size of a C2C graph at any gauge' },
    { name: 'Filet Crochet Grid Calculator', url: 'filet-crochet-grid-calculator.html', desc: 'Calculate mesh count and finished size for filet crochet' },
    { name: 'Granny Square Blanket Calculator', url: 'granny-square-blanket-calculator.html', desc: 'Calculate how many squares and yarn for a granny square blanket' },
    { name: 'Granny Square Size Calculator', url: 'granny-square-size-calculator.html', desc: 'Estimate finished size of a granny square at any gauge' },
    { name: 'Magic Ring Calculator', url: 'magic-ring-stitch-calculator.html', desc: 'Calculate starting stitches for magic ring crochet projects' },
    { name: 'Amigurumi Part Scaling Calculator', url: 'amigurumi-part-scaling-calculator.html', desc: 'Scale amigurumi body parts proportionally for any size' },
    { name: 'Amigurumi Safety Eye Calculator', url: 'amigurumi-safety-eye-calculator.html', desc: 'Choose the right safety eye size for amigurumi projects' },
    { name: 'Amigurumi Size Estimator', url: 'amigurumi-size-estimator.html', desc: 'Estimate finished amigurumi size from gauge and stitch count' },
    { name: 'Motif Join Calculator', url: 'motif-join-calculator.html', desc: 'Calculate how many motifs to make and join for a blanket' },
    { name: 'US/UK Crochet Stitch Converter', url: 'us-uk-crochet-stitch-converter.html', desc: 'Convert crochet stitch names between US and UK terminology' },
    { name: 'US/UK Crochet Terms Converter', url: 'us-uk-crochet-terms-converter.html', desc: 'Convert full crochet patterns between US and UK terms' },
  ]},
  knitting_tools: { label: 'Knitting Tools', icon: '🧵', tools: [
    { name: 'Knitting Gauge Calculator', url: 'knitting-gauge-swatch-calculator.html', desc: 'Convert knitting gauge swatch measurements to project cast-on counts' },
    { name: 'Cast On Calculator', url: 'cast-on-calculator.html', desc: 'Calculate the correct cast-on count for any finished width' },
    { name: 'Cast On Method Helper', url: 'cast-on-method-helper.html', desc: 'Choose the right cast-on method for any knitting project' },
    { name: 'Knitting Blanket Size Calculator', url: 'knitting-blanket-size-calculator.html', desc: 'Estimate cast-on count and yardage for knitted blankets' },
    { name: 'Knitting Increase/Decrease Calculator', url: 'knitting-increase-decrease-calculator.html', desc: 'Plan evenly spaced increases and decreases across a row' },
    { name: 'Knitting Pattern Repeat Calculator', url: 'knitting-pattern-repeat-calculator.html', desc: 'Find the right cast-on count for a stitch pattern repeat' },
    { name: 'Knitting Row Gauge Calculator', url: 'knitting-row-gauge-calculator.html', desc: 'Convert row gauge to centimeters and inches' },
    { name: 'Knitting Chart Row Counter', url: 'knitting-chart-row-counter.html', desc: 'Track your position in a knitting chart row by row' },
    { name: 'Knitting Chart Symbol Lookup', url: 'knitting-chart-symbol-lookup.html', desc: 'Identify common knitting chart symbols and abbreviations' },
    { name: 'Raglan Increase Calculator', url: 'raglan-increase-calculator.html', desc: 'Calculate raglan increase rates for top-down sweaters' },
    { name: 'Sleeve Decrease Calculator', url: 'sleeve-decrease-calculator.html', desc: 'Plan evenly spaced sleeve decreases from underarm to cuff' },
    { name: 'Yoke Increase Calculator', url: 'yoke-increase-calculator.html', desc: 'Calculate yoke increase rounds for top-down circular knitting' },
    { name: 'Even Increase Calculator', url: 'even-stitch-increase-calculator.html', desc: 'Distribute increases evenly across any number of stitches' },
    { name: 'Even Decrease Calculator', url: 'even-stitch-decrease-calculator.html', desc: 'Distribute decreases evenly across any number of stitches' },
    { name: 'Stitch Multiple Calculator', url: 'stitch-multiple-calculator.html', desc: 'Find cast-on numbers that work with a stitch multiple' },
    { name: 'Heel Turn Calculator', url: 'heel-turn-calculator.html', desc: 'Calculate heel flap and turn stitches for sock knitting' },
    { name: 'Toe Decrease Calculator', url: 'toe-decrease-calculator.html', desc: 'Calculate toe decrease rounds for knitted socks' },
    { name: 'Sock Size Calculator', url: 'sock-size-calculator.html', desc: 'Calculate stitch count and sizing for knitted socks' },
    { name: 'Sock Yarn Calculator', url: 'sock-yarn-calculator.html', desc: 'Estimate yardage needed for knitted socks in any size' },
    { name: 'Hat Size Calculator', url: 'hat-size-calculator.html', desc: 'Calculate cast-on count for knitted hats in any head size' },
    { name: 'Ribbing Calculator', url: 'ribbing-calculator.html', desc: 'Calculate cast-on count for k2p2 and other rib patterns' },
    { name: 'Sweater Yardage Estimator', url: 'sweater-yardage-estimator.html', desc: 'Estimate yarn yardage needed for a hand-knit sweater' },
    { name: 'Shawl Yardage Estimator', url: 'shawl-yardage-estimator.html', desc: 'Estimate yarn needed for triangular and rectangular shawls' },
    { name: 'Scarf Size Calculator', url: 'scarf-size-calculator.html', desc: 'Calculate stitch count and yardage for knitted scarves' },
    { name: 'Knitting Ease Calculator', url: 'knitting-ease-calculator.html', desc: 'Calculate finished garment size from body measurements and ease' },
    { name: 'Sweater Fit Calculator', url: 'sweater-fit-calculator.html', desc: 'Find your recommended sweater size from body measurements' },
    { name: 'Border Stitch Calculator', url: 'border-stitch-calculator.html', desc: 'Calculate stitches for pick-up-and-knit borders and edges' },
  ]},
  sewing: { label: 'Sewing & Quilting', icon: '✂️', tools: [
    { name: 'Fabric Yardage Calculator', url: 'fabric-yardage-calculator.html', desc: 'Calculate fabric needed for sewing projects by dimensions' },
    { name: 'Seam Allowance Calculator', url: 'seam-allowance-calculator.html', desc: 'Add or subtract seam allowances from pattern measurements' },
    { name: 'Hem Allowance Calculator', url: 'hem-allowance-calculator.html', desc: 'Calculate fabric needed for single and double hems' },
    { name: 'Bias Tape Calculator', url: 'bias-tape-calculator.html', desc: 'Calculate fabric square size needed to cut bias tape' },
    { name: 'Buttonhole Spacing Calculator', url: 'buttonhole-spacing-calculator.html', desc: 'Space buttons and buttonholes evenly on any garment length' },
    { name: 'Elastic Length Calculator', url: 'elastic-length-calculator.html', desc: 'Calculate elastic length for waistbands, cuffs, and casings' },
    { name: 'Gather Ratio Calculator', url: 'gather-ratio-calculator.html', desc: 'Calculate fabric width needed for any fullness ratio' },
    { name: 'Circle Skirt Calculator', url: 'circle-skirt-calculator.html', desc: 'Calculate fabric and waist radius for circle and half-circle skirts' },
    { name: 'Curtain Fabric Calculator', url: 'curtain-fabric-calculator.html', desc: 'Calculate fabric needed for curtains and drapes by fullness' },
    { name: 'Tote Bag Fabric Calculator', url: 'tote-bag-fabric-calculator.html', desc: 'Calculate fabric pieces for tote bags of any size' },
    { name: 'Pillow Cover Calculator', url: 'pillow-cover-size-calculator.html', desc: 'Calculate fabric cut size for pillow covers and cushions' },
    { name: 'Quilt Backing Calculator', url: 'quilt-backing-calculator.html', desc: 'Calculate backing fabric needed for any quilt size' },
    { name: 'Quilt Batting Calculator', url: 'quilt-batting-calculator.html', desc: 'Calculate batting needed for any quilt size with seam allowance' },
    { name: 'Quilt Binding Calculator', url: 'quilt-binding-calculator.html', desc: 'Calculate binding strip length and fabric needed for any quilt' },
    { name: 'Quilt Block Size Calculator', url: 'quilt-block-size-calculator.html', desc: 'Calculate finished quilt size from block size and layout' },
    { name: 'Half-Square Triangle Calculator', url: 'half-square-triangle-calculator.html', desc: 'Calculate cut sizes for half-square triangle quilt blocks' },
    { name: 'Flying Geese Calculator', url: 'flying-geese-calculator.html', desc: 'Calculate cut sizes for flying geese quilt blocks' },
    { name: 'Table Runner Calculator', url: 'table-runner-size-calculator.html', desc: 'Calculate fabric needed for table runners of any size' },
    { name: 'Fabric Shrinkage Calculator', url: 'fabric-shrinkage-calculator.html', desc: 'Calculate pre-wash fabric amount to account for shrinkage' },
    { name: 'Zipper Length Helper', url: 'zipper-length-helper.html', desc: 'Find the right zipper length for pockets, bags, and garments' },
  ]},
  embroidery: { label: 'Embroidery & Diamond Painting', icon: '🪡', tools: [
    { name: 'Cross-Stitch Fabric Calculator', url: 'cross-stitch-fabric-size-calculator.html', desc: 'Calculate fabric size needed for a cross-stitch pattern' },
    { name: 'Cross-Stitch Grid Calculator', url: 'cross-stitch-grid-calculator.html', desc: 'Find stitch count from grid dimensions and fabric count' },
    { name: 'Aida Cloth Count Calculator', url: 'aida-cloth-count-calculator.html', desc: 'Compare finished sizes across Aida cloth counts' },
    { name: 'Stitch Count to Size Calculator', url: 'stitch-count-to-size-calculator.html', desc: 'Convert cross-stitch stitch count to finished size in inches and cm' },
    { name: 'Size to Stitch Count Calculator', url: 'size-to-stitch-count-calculator.html', desc: 'Find stitch count needed to fill a finished area on Aida fabric' },
    { name: 'Diamond Painting Size Calculator', url: 'diamond-painting-size-calculator.html', desc: 'Convert between diamond count and finished canvas size' },
    { name: 'Backstitch Length Calculator', url: 'backstitch-length-calculator.html', desc: 'Estimate thread needed for backstitch outlines and details' },
    { name: 'Embroidery Hoop Size Helper', url: 'embroidery-hoop-size-helper.html', desc: 'Choose the right hoop size for any embroidery project' },
    { name: 'Floss Usage Estimator', url: 'floss-usage-estimator.html', desc: 'Estimate embroidery floss needed by area and stitch type' },
    { name: 'Bead Embroidery Count Calculator', url: 'bead-embroidery-count-calculator.html', desc: 'Calculate how many beads you need for an embroidery project' },
    { name: 'Needle Minder Project Tracker', url: 'needle-minder-project-tracker.html', desc: 'Track all your embroidery and needlework projects' },
    { name: 'Floss Inventory Tracker', url: 'floss-inventory-tracker.html', desc: 'Track your embroidery floss collection by color and quantity' },
  ]},
  handmade_biz: { label: 'Handmade Business', icon: '🏷️', tools: [
    { name: 'Handmade Pricing Calculator', url: 'handmade-pricing-calculator.html', desc: 'Calculate a selling price for handmade items from costs and margin' },
    { name: 'Profit Margin Calculator', url: 'handmade-profit-margin-calculator.html', desc: 'Find profit margin and ideal selling price for handmade goods' },
    { name: 'Product Cost Calculator', url: 'product-cost-calculator.html', desc: 'Add up all costs for a handmade product including labor and overhead' },
    { name: 'Retail Markup Calculator', url: 'retail-markup-calculator.html', desc: 'Calculate retail price from wholesale cost using markup percentage' },
    { name: 'Wholesale Price Calculator', url: 'wholesale-price-calculator.html', desc: 'Calculate wholesale pricing from production cost and margin' },
    { name: 'Etsy Fee Calculator', url: 'etsy-fee-calculator.html', desc: 'Calculate Etsy transaction, listing, and payment processing fees' },
    { name: 'Batch Production Calculator', url: 'batch-production-calculator.html', desc: 'Scale up materials, time, and cost for a production batch' },
    { name: 'Time to Make Calculator', url: 'time-to-make-calculator.html', desc: 'Plan how long it takes to produce a set number of handmade items' },
    { name: 'Custom Order Quote Calculator', url: 'custom-order-quote-calculator.html', desc: 'Build a fair price quote for custom handmade orders' },
    { name: 'Craft Inventory Tracker', url: 'craft-inventory-tracker.html', desc: 'Track supplies and finished products with reorder alerts' },
    { name: 'Materials Cost Splitter', url: 'materials-cost-splitter.html', desc: 'Calculate per-item material cost when buying supplies in bulk' },
    { name: 'Shipping Cost Estimator', url: 'shipping-cost-estimator.html', desc: 'Estimate US domestic shipping costs by package weight and size' },
    { name: 'Craft Show Break-Even Calculator', url: 'craft-show-break-even-calculator.html', desc: 'Calculate how much to sell at a craft fair to break even' },
    { name: 'Commission Price Calculator', url: 'commission-price-calculator.html', desc: 'Build a fair price for commissioned handmade work' },
    { name: 'Craft Fair Profit Calculator', url: 'craft-fair-profit-calculator.html', desc: 'Calculate net profit from a craft fair after all costs' },
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
  'hourly-salary.html': { about: 'Use this free hourly to salary calculator to convert hourly pay into weekly, monthly, and annual estimates, or compare salary back to an hourly rate. It is useful for job offers, budgeting, and planning.', uses: ['Estimate annual pay from an hourly rate.', 'Compare salary offers with hourly work.', 'Plan income based on hours per week.'] },
  'age-calculator.html': { about: 'Use this free age calculator to find an exact age in years, months, and days, plus helpful birthday details. It is useful for forms, records, birthdays, age checks, and date-based planning.', uses: ['Find exact age from a birth date.', 'Calculate age on a specific future or past date.', 'Check time until the next birthday.'] },
  'random-number.html': { about: 'Use this free random number generator to create one number or a list of random numbers within a chosen range. It is useful for drawings, classroom activities, testing, games, and quick decisions.', uses: ['Pick a random number from a custom range.', 'Generate lists of random numbers for testing.', 'Create simple raffle, game, or classroom selections.'] },
  'fraction-calculator.html': { about: 'Use this free fraction calculator to add, subtract, multiply, and divide fractions. It helps with homework, cooking math, measurements, construction notes, and everyday fraction problems.', uses: ['Solve fraction addition, subtraction, multiplication, or division.', 'Check homework or measurement calculations.', 'Convert mixed fraction work into simpler answers.'] },
  'square-root.html': { about: 'Use this free square root calculator to calculate square roots with decimal precision. It is useful for math homework, geometry, estimates, construction measurements, and quick number checks.', uses: ['Find the square root of a number quickly.', 'Check decimal approximations for math problems.', 'Use square root values in geometry or measurement work.'] },
  'quadratic-solver.html': { about: 'Use this free quadratic equation solver to solve equations in the form ax² + bx + c = 0. It helps find roots, discriminants, and solutions for algebra and math practice.', uses: ['Solve quadratic equations without manual formula setup.', 'Check algebra homework answers.', 'See real or complex roots depending on the equation.'] },
  'standard-deviation.html': { about: 'Use this free standard deviation calculator to find mean, variance, standard deviation, count, and spread from a set of numbers. It is useful for statistics, data review, schoolwork, and reports.', uses: ['Calculate standard deviation from a list of values.', 'Compare sample and population statistics.', 'Summarize data for homework, analysis, or reporting.'] },
  'scientific-calculator.html': { about: 'Use this free scientific calculator for advanced math functions including powers, roots, trigonometry, logarithms, and common calculator operations. It is built for quick browser-based math work.', uses: ['Run advanced calculations without a physical calculator.', 'Use trig, log, exponent, and root functions.', 'Check math, science, and engineering-style calculations.'] },
  'days-until.html': { about: 'Use this free days until calculator to count down to a future date or event. It is useful for birthdays, deadlines, launches, trips, appointments, holidays, and project planning.', uses: ['Count how many days are left until an event.', 'Track deadlines, launches, or trips.', 'Create quick date countdowns for planning.'] },
  'unix-timestamp.html': { about: 'Use this free Unix timestamp converter to convert timestamps into readable dates and dates back into Unix time. It is useful for developers, logs, databases, APIs, and troubleshooting.', uses: ['Convert Unix timestamps to readable dates.', 'Create timestamps from specific dates and times.', 'Inspect log, API, or database time values.'] },
  'timezone-converter.html': { about: 'Use this free time zone converter to compare times across locations and time zones. It is useful for remote work, meetings, travel, calls, webinars, and coordinating with people in different regions.', uses: ['Convert meeting times between time zones.', 'Check local time for remote contacts.', 'Plan calls, webinars, travel, or deadlines.'] },
  'timezone-meeting-planner.html': { about: 'Use this free meeting planner to find overlapping working hours across multiple time zones. It is useful for remote teams, client calls, online events, interviews, and international scheduling.', uses: ['Find meeting times that work for several time zones.', 'Plan remote team calls without manual comparison.', 'Avoid scheduling calls too early or too late for attendees.'] },
  'countdown-timer.html': { about: 'Use this free countdown timer to count down to a specific date and time. It is useful for events, launches, reminders, study blocks, work sessions, cooking, and simple time tracking.', uses: ['Create a countdown to an event or deadline.', 'Track time remaining for focused work or study.', 'Use a simple timer in the browser.'] },
  'kitchen-timer.html': { about: 'Use this free kitchen timer to run simple labeled timers for cooking, baking, meal prep, chores, or reminders. It is useful when you need quick browser-based timers without an app.', uses: ['Set timers for cooking or baking steps.', 'Run multiple labeled timers while preparing food.', 'Use quick timer presets for everyday tasks.'] },
  'cooking-conversion.html': { about: 'Use this free cooking conversion tool to convert cups, tablespoons, teaspoons, milliliters, ounces, grams, and other common kitchen measurements. It is useful for recipes, baking, and meal prep.', uses: ['Convert recipe measurements between common kitchen units.', 'Adjust liquid and dry ingredient amounts.', 'Check conversions while cooking or baking.'] },
  'hex-decimal.html': { about: 'Use this free hex to decimal converter to convert hexadecimal values to decimal and decimal values back to hex. It is useful for developers, colors, data formats, debugging, and computer science work.', uses: ['Convert hex values into decimal numbers.', 'Convert decimal numbers into hexadecimal format.', 'Check values used in code, color, or data work.'] },
  'binary-decimal.html': { about: 'Use this free binary, decimal, hex, and octal converter to switch between common number bases. It is useful for programming, computer science, networking, electronics, and technical learning.', uses: ['Convert binary numbers to decimal or hex.', 'Check number-base homework or code values.', 'Compare values across binary, decimal, octal, and hexadecimal.'] },
  'height-converter.html': { about: 'Use this free height converter to convert feet and inches to centimeters or centimeters back to feet and inches. It is useful for forms, fitness records, medical notes, travel, and product sizing.', uses: ['Convert height between imperial and metric units.', 'Fill out forms that require a different height format.', 'Compare height measurements quickly.'] },
  'speed-converter.html': { about: 'Use this free speed converter to convert miles per hour, kilometers per hour, meters per second, knots, and other speed units. It is useful for travel, sports, weather, vehicles, and science tasks.', uses: ['Convert MPH to KPH or KPH to MPH.', 'Compare speed units for travel or vehicles.', 'Check speed values for science, weather, or sports.'] },
  'html-formatter.html': { about: 'Use this free HTML formatter to beautify, format, or minify HTML code. It is useful for cleaning pasted markup, reviewing web snippets, debugging layouts, and preparing code for editing.', uses: ['Format messy HTML so it is easier to read.', 'Minify HTML for a smaller output.', 'Review copied page snippets or template code.'] },
  'js-minifier.html': { about: 'Use this free JavaScript minifier to reduce JavaScript size by removing unnecessary whitespace and formatting. It is useful for small scripts, snippets, demos, and quick web performance cleanup.', uses: ['Minify JavaScript snippets before publishing.', 'Compare original and minified size.', 'Clean up small scripts for web projects.'] },
  'markdown-previewer.html': { about: 'Use this free Markdown previewer to write Markdown and see the formatted result side by side. It is useful for README files, notes, documentation, blog drafts, and plain-text writing.', uses: ['Preview README or documentation formatting.', 'Write Markdown notes with a live preview.', 'Check headings, links, lists, and formatting before publishing.'] },
  'lorem-ipsum.html': { about: 'Use this free Lorem Ipsum generator to create placeholder text for designs, mockups, templates, landing pages, wireframes, and content layouts. It helps you fill space while a draft is still being planned.', uses: ['Generate placeholder paragraphs for page mockups.', 'Create filler text for templates and wireframes.', 'Test layouts before final copy is ready.'] },
  'text-diff.html': { about: 'Use this free text diff checker to compare two pieces of text side by side and spot differences. It is useful for drafts, edited copy, code snippets, notes, contracts, and version checks.', uses: ['Compare two versions of a draft or document.', 'Find small edits in copied text.', 'Review changes before replacing old content.'] },
  'cron-helper.html': { about: 'Use this free cron expression helper to build and understand cron schedules for recurring tasks. It is useful for developers, automations, backups, reminders, reports, and scheduled workflows.', uses: ['Build cron expressions for recurring jobs.', 'Understand what an existing cron schedule means.', 'Plan scheduled automations, reports, and backups.'] },
  'robots-txt-generator.html': { about: 'Use this free robots.txt generator to create basic crawler rules for a website. It is useful for SEO setup, test sites, blocking sections, allowing search engines, and adding sitemap references.', uses: ['Create a starter robots.txt file.', 'Add sitemap references for search engines.', 'Set allow or disallow rules for common site sections.'] },
  'htaccess-generator.html': { about: 'Use this free .htaccess generator to create common Apache rules for redirects, HTTPS, www/non-www preference, and basic site behavior. It is useful for webmasters and small website fixes.', uses: ['Create redirect rules without memorizing syntax.', 'Generate HTTPS or www redirect snippets.', 'Build common Apache .htaccess rules for a site.'] },
  'color-picker.html': { about: 'Use this free color picker and palette tool to choose colors and convert between HEX, RGB, and HSL values. It is useful for design, branding, CSS, websites, graphics, and quick color checks.', uses: ['Pick colors for a website or design.', 'Convert HEX, RGB, and HSL color values.', 'Build quick color palettes for visual projects.'] },
  'qr-generator.html': { about: 'Use this free QR code generator to turn text, URLs, or short information into a downloadable QR code. It is useful for flyers, labels, signs, business cards, menus, events, and quick sharing.', uses: ['Create QR codes for links or short text.', 'Download QR codes for print or digital use.', 'Make quick codes for events, signs, labels, or menus.'] },
  'uuid-generator.html': { about: 'Use this free UUID generator to create one or many version 4 UUIDs. It is useful for developers, test data, databases, prototypes, automation workflows, and unique placeholder IDs.', uses: ['Generate unique IDs for test data.', 'Create UUIDs for databases, scripts, or prototypes.', 'Copy one or many IDs quickly.'] },
  'word-unscrambler.html': { about: 'Use this free word unscrambler to find possible words from a set of letters. It is useful for word games, puzzles, spelling practice, brainstorming, and checking possible letter combinations.', uses: ['Find words from scrambled letters.', 'Get ideas for word games and puzzles.', 'Practice spelling and vocabulary combinations.'] },
  'scrabble-word-finder.html': { about: 'Use this free Scrabble word finder to find playable word ideas from letters, including wildcard options and scoring help. It is useful for word games, practice, and checking possible plays.', uses: ['Find possible words from your available letters.', 'Use wildcards when you have blank tiles.', 'Compare word ideas and point values.'] },
  'recipe-scaler.html': { about: 'Use this free recipe scaler to increase or decrease ingredient amounts based on serving size. It is useful for meal prep, baking, family dinners, batch cooking, and adjusting recipes without manual math.', uses: ['Scale a recipe up for more servings.', 'Reduce ingredient amounts for a smaller batch.', 'Adjust measurements for meal prep or baking.'] },
  'instant-pot-converter.html': { about: 'Use this free Instant Pot converter to estimate pressure cooker timing from slow cooker or conventional cooking times. It is useful for adapting recipes and planning faster meals.', uses: ['Convert slow cooker timing to Instant Pot estimates.', 'Adapt recipes for pressure cooking.', 'Plan faster weeknight cooking times.'] },
  'bmi-calculator.html': { about: 'Use this free BMI calculator to estimate body mass index from height and weight. It provides a general reference category and can help with basic health, fitness, or tracking conversations.', uses: ['Calculate BMI from height and weight.', 'Compare results with common BMI categories.', 'Use as a general reference for health or fitness tracking.'] },
  'calorie-calculator.html': { about: 'Use this free calorie calculator to estimate daily calorie needs based on body details, activity level, and goals. It is useful for meal planning, fitness tracking, weight goals, and nutrition estimates.', uses: ['Estimate daily maintenance calories.', 'Compare calorie needs by activity level.', 'Plan calorie targets for general fitness goals.'] },
  'body-fat.html': { about: 'Use this free body fat calculator to estimate body fat percentage using common measurement-based formulas. It is useful for fitness tracking, progress notes, and general body composition estimates.', uses: ['Estimate body fat percentage from measurements.', 'Track changes over time with consistent inputs.', 'Use as a general fitness reference.'] },
  'ideal-weight.html': { about: 'Use this free ideal weight calculator to compare several common healthy-weight formulas and ranges. It is useful for general reference, fitness planning, and understanding different estimate methods.', uses: ['Compare common ideal weight formulas.', 'Review estimated healthy weight ranges.', 'Use as a general planning reference.'] },
  'pregnancy-due-date.html': { about: 'Use this free pregnancy due date calculator to estimate a due date from last menstrual period, conception date, or ultrasound information. It is useful for planning and general reference.', uses: ['Estimate a pregnancy due date.', 'Compare due date methods from different inputs.', 'Plan appointments, milestones, or calendars.'] },
  'ovulation-calculator.html': { about: 'Use this free ovulation calculator to estimate fertile windows and likely ovulation timing based on cycle details. It is useful for general planning, cycle tracking, and calendar estimates.', uses: ['Estimate ovulation and fertile window dates.', 'Plan cycle tracking reminders.', 'Compare timing based on cycle length.'] },
  'loan-calculator.html': { about: 'Use this free loan payment calculator to estimate monthly payments, total interest, and total loan cost from loan amount, interest rate, and term. It is useful for budgeting and comparing loans.', uses: ['Estimate monthly loan payments.', 'Compare different interest rates or loan terms.', 'Review total interest and repayment cost.'] },
  'mortgage-calculator.html': { about: 'Use this free mortgage calculator to estimate monthly house payments, including principal, interest, taxes, insurance, and other common payment factors. It is useful for homebuying research.', uses: ['Estimate monthly mortgage payments.', 'Compare home prices, rates, or down payments.', 'Plan rough housing budget scenarios.'] },
  'sales-tax-calculator.html': { about: 'Use this free sales tax calculator to calculate tax, final price, or pre-tax amount. It is useful for shopping, receipts, invoices, pricing, quotes, and checking totals before purchase.', uses: ['Calculate final price after sales tax.', 'Find tax amount from a subtotal.', 'Reverse-calculate pre-tax price from a total.'] },
  'compound-interest.html': { about: 'Use this free compound interest calculator to estimate future value from starting balance, interest rate, time, and contributions. It is useful for savings, investing, goals, and long-term planning.', uses: ['Estimate savings growth over time.', 'Compare contribution amounts or interest rates.', 'Plan long-term financial goals.'] },
  'retirement-calculator.html': { about: 'Use this free retirement calculator to estimate retirement savings growth and future planning numbers. It is useful for rough projections, contribution planning, and comparing different savings scenarios.', uses: ['Estimate retirement savings over time.', 'Compare contribution and growth assumptions.', 'Plan rough long-term savings goals.'] },
  'tip-calculator.html': { about: 'Use this free tip calculator to calculate tip amounts, bill totals, and per-person splits. It is useful for restaurants, delivery, group meals, travel, and quick shared expense math.', uses: ['Calculate a tip from a bill amount.', 'Split a bill between multiple people.', 'Compare different tip percentages quickly.'] },
  'car-payment.html': { about: 'Use this free car payment calculator to estimate monthly auto loan payments, interest, and total cost based on vehicle price, down payment, rate, and loan term.', uses: ['Estimate monthly vehicle payments.', 'Compare loan terms and down payment options.', 'Review rough total cost before buying a car.'] },
  'savings-calculator.html': { about: 'Use this free savings calculator to estimate future savings based on starting balance, deposits, interest rate, and time. It is useful for emergency funds, goals, purchases, and planning.', uses: ['Estimate savings growth over time.', 'Plan recurring deposits toward a goal.', 'Compare timelines for reaching a target amount.'] },
  'debt-payoff.html': { about: 'Use this free debt payoff calculator to compare repayment timelines, interest, and payoff strategies. It is useful for credit cards, loans, budgeting, and planning a path out of debt.', uses: ['Estimate how long debt payoff may take.', 'Compare payment amounts and interest costs.', 'Plan debt snowball or avalanche style strategies.'] },
  'gpa-calculator.html': { about: 'Use this free GPA calculator to estimate grade point average from courses, grades, and credits. It is useful for students, planning semesters, checking class outcomes, and comparing grade scenarios.', uses: ['Calculate GPA from grades and credits.', 'Test what-if grade scenarios.', 'Plan semester or cumulative GPA goals.'] },
  'business-name-generator.html': { about: 'Use this free business name generator to create name ideas from keywords, styles, and themes. It is useful for brainstorming brands, side projects, products, shops, services, and online businesses.', uses: ['Generate business name ideas from keywords.', 'Brainstorm brand names for a new project.', 'Compare name styles before choosing a direction.'] },
  'invoice-generator.html': { about: 'Use this free invoice generator to create a simple invoice with line items, totals, and business details. It is useful for freelancers, small businesses, service providers, and quick billing.', uses: ['Create simple invoices for clients.', 'Add line items, quantities, and prices.', 'Prepare clean billing details quickly.'] },
  'time-card-calculator.html': { about: 'Use this free time card calculator to total work hours from clock-in and clock-out times, including breaks. It is useful for timesheets, payroll checks, freelance work, and weekly hour tracking.', uses: ['Calculate total hours worked from shifts.', 'Account for breaks and multiple work periods.', 'Review weekly time before payroll or invoicing.'] },
  'pay-raise-calculator.html': { about: 'Use this free pay raise calculator to estimate new pay after a percentage or dollar raise. It is useful for job offers, reviews, salary planning, hourly pay changes, and budgeting.', uses: ['Calculate new salary after a raise.', 'Convert raise percentages into dollar amounts.', 'Compare hourly or annual pay changes.'] }
};

function initTheme(){const saved=localStorage.getItem('tup_theme');const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',saved||(prefersDark?'dark':'light'));}
function toggleTheme(){const current=document.documentElement.getAttribute('data-theme');const next=current==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',next);localStorage.setItem('tup_theme',next);}
initTheme();

function injectNav(activeUrl){
  const megaCols=Object.values(TOOLS).map(cat=>`<div class="mega-col"><div class="mega-col-heading">${cat.icon} ${cat.label}</div>${cat.tools.map(t=>`<a href="${t.url}">${t.name}</a>`).join('')}</div>`).join('');
  const mobileCategories=Object.values(TOOLS).map(cat=>`<div class="mobile-category"><h3>${cat.icon} ${cat.label}</h3>${cat.tools.map(t=>`<a href="${t.url}">${t.name}</a>`).join('')}</div>`).join('');
  const html=`<nav class="site-nav"><div class="nav-inner"><a href="index.html" class="nav-logo">⚡ The Useful Pages</a><div class="nav-right"><a href="about.html" class="nav-link">About</a><button class="nav-all-tools-btn" id="all-tools-btn" aria-expanded="false" aria-controls="mega-menu">All Tools <span class="caret">▼</span></button><button class="theme-toggle" id="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark/light mode"><svg class="icon-sun" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg><svg class="icon-moon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg></button><button class="hamburger" id="hamburger-btn" aria-label="Menu"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button></div></div><div class="mega-menu" id="mega-menu"><div class="mega-menu-inner">${megaCols}</div></div><div class="mobile-menu" id="mobile-menu">${mobileCategories}</div></nav>`;
  const el=document.getElementById('site-nav'); if(el) el.outerHTML=html; else document.body.insertAdjacentHTML('afterbegin',html);
  const allToolsBtn=document.getElementById('all-tools-btn'); const megaMenu=document.getElementById('mega-menu');
  if(allToolsBtn&&megaMenu){allToolsBtn.addEventListener('click',e=>{e.stopPropagation();const isOpen=megaMenu.classList.contains('open');megaMenu.classList.toggle('open',!isOpen);allToolsBtn.classList.toggle('open',!isOpen);allToolsBtn.setAttribute('aria-expanded',String(!isOpen));});document.addEventListener('click',()=>{megaMenu.classList.remove('open');allToolsBtn.classList.remove('open');allToolsBtn.setAttribute('aria-expanded','false');});document.addEventListener('keydown',e=>{if(e.key==='Escape'){megaMenu.classList.remove('open');allToolsBtn.classList.remove('open');allToolsBtn.setAttribute('aria-expanded','false');}});megaMenu.addEventListener('click',e=>e.stopPropagation());}
  const hamburger=document.getElementById('hamburger-btn'); if(hamburger) hamburger.addEventListener('click',e=>{e.stopPropagation();document.getElementById('mobile-menu').classList.toggle('open');});
  const themeBtn=document.getElementById('theme-toggle-btn'); if(themeBtn) themeBtn.addEventListener('click',toggleTheme);
  trackRecentlyUsed(activeUrl); enhanceToolPage(); removePlaceholderAdSlots();
}

function injectFooter(){const html=`<footer class="site-footer"><div class="footer-inner"><a href="index.html" class="footer-logo">⚡ The Useful Pages</a><div class="footer-links"><a href="index.html">All Tools</a><a href="index.html#text">Text & Writing</a><a href="index.html#math">Math</a><a href="index.html#finance">Financial</a><a href="index.html#health">Health</a><a href="index.html#dev">Developer</a><a href="about.html">About</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a></div><div><div class="footer-copy">Free online utilities — no signup required</div><div class="footer-copy" style="margin-top:0.25rem;">Powered by <a href="https://sassypupstudios.com" style="color:#94a3b8;" target="_blank" rel="noopener">Sassy Pup Studios</a></div></div></div></footer>`;const el=document.getElementById('site-footer'); if(el) el.outerHTML=html; else document.body.insertAdjacentHTML('beforeend',html); showCookieNotice();}

function showCookieNotice(){
  if(localStorage.getItem('tup_cookie_notice_ack')==='true') return;
  if(document.getElementById('cookieNotice')) return;
  const notice=document.createElement('div');
  notice.id='cookieNotice';
  notice.style.cssText='position:fixed;left:1rem;right:1rem;bottom:1rem;max-width:860px;margin:0 auto;background:var(--bg-secondary,#fff);color:var(--text,#111);border:1px solid var(--border,#ddd);border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.18);padding:1rem;z-index:9999;font-size:.9rem;line-height:1.55;';
  notice.innerHTML='<p style="margin:0 0 .75rem;">The Useful Pages uses cookies or similar technologies for site preferences, analytics, ads, and basic site functionality. Many tools run in your browser.</p><div style="display:flex;gap:.75rem;align-items:center;justify-content:space-between;flex-wrap:wrap;"><div><a href="privacy.html">Privacy Policy</a> \xb7 <a href="terms.html">Terms of Use</a></div><button id="cookieNoticeAccept" type="button" style="background:#236A77;color:#fff;border:none;padding:.5rem 1rem;cursor:pointer;border-radius:6px;">Got it</button></div>';
  document.body.appendChild(notice);
  const btn=document.getElementById('cookieNoticeAccept');
  if(btn){btn.addEventListener('click',function(){localStorage.setItem('tup_cookie_notice_ack','true');notice.remove();});}
}

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
