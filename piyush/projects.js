// ============================================================
//  projects.js  —  ALL your project data lives here
//
//  HOW TO ADD A NEW PROJECT:
//  1. Copy one of the objects below
//  2. Give it a unique key (e.g. "myproject")
//  3. Fill in your details
//  4. Link to it anywhere:  case-study.html?project=myproject
//  That's it — no other file needs to change.
// ============================================================

const PROJECTS = {

  // ── PROJECT 1 ──────────────────────────────────────────────
  radhaenterprises: {
    // META
    id:         "radhaenterprises",
    title:      "Radha Enterprises",
    subtitle:   "Digital Catalog & CRM",
    category:   "Industrial E-Catalog",
    emoji:      "🏠",
    year:       "2024",
    status:     "Live",
    liveUrl:    "https://radhaenterprises.co.in",
    githubUrl:  "",

    // HERO
    accentColor: "#c8f03b",   // overrides default accent per project
    bgGradient:  "linear-gradient(135deg, #0d1b2a 0%, #1b2a3d 50%, #0d2a1a 100%)",
    mockupLabel: "LuxStyle Homepage · Desktop Preview",
    mockupUrl:   "image/re2.png",           // optional: real screenshot URL

    // META ROW
    client:   "Radha Enterprises",
    heroTimeline: "8 Weeks",
    role:     "Solo Full-Stack Developer",

    // OVERVIEW
    overview: [
      "Radha Enterprises was operating via a <strong>heavy, 100+ product PDF catalog</strong> that made product discovery a nightmare for clients. Finding a specific hinge or handle meant endless scrolling and manual inquiries.",
      "I engineered a <strong>custom Digital Catalog</strong> with real-time AJAX filtering, allowing clients to sort 100+ hardware items instantly. To manage this, I built a dedicated <strong>PHP-based CRM (Admin Panel)</strong> for the client to update inventory and manage customer testimonials.",
      "The solution also features immersive galleries for <strong>modular kitchens, home interior, and office interior</strong>, bridging the gap between raw hardware sales and finished interior inspiration."
    ],

    // TECH STACK
    stack: ["PHP", "MySQL", "jQuery", "JavaScript", "HTML5", "CSS3", "AJAX"],

    // SERVICES
    services: "Full-stack Development · Database Design\nInventory Management System · UI/UX Design\nCRM/Admin Panel Development",

    // CHALLENGE & SOLUTION
    challenges: [
      "Replacing a static PDF with a dropdown select 100+ products",
      "Building a user-friendly Admin Panel for non-technical staff",
      "Optimizing mobile navigation for high-density product lists",
      "Creating an Amazon-style horizontal category scroll for mobile",
      "Managing complex relationships between hardware parts and product categories"
    ],

    solutions: [
      "Relational database for fast filtering",
      "Custom Admin Panel with CRUD operations for products and reviews",
      "Filtering to update product grids without page reloads",
      "Horizontal overflow containers for sleek mobile navigation",
      "Dynamic lightbox galleries for high-resolution furniture displays"
    ],

    // SCREENS (3 items)
    screens: [
      { label: "Hardware Catalog", emoji: "🛍️", bg: "linear-gradient(135deg,#0d1b2a,#1b3a5c)", span: true, img: "image/re.png" },
      { label: "Home Page - Desktop",      emoji: "👗", bg: "linear-gradient(135deg,#1a2a1a,#2a4a2a)", span: false, img: "image/re2.png" },
      { label: "Home Page - Mobile",          emoji: "🛒", bg: "linear-gradient(135deg,#2a1a0d,#4a2a1a)", span: false, img: "image/re3.png" }
    ],

    // TECH HIGHLIGHT
    highlightTitle: "Live AJAX Search & Mobile Navigation",
    highlightDesc:  "",
    codeLang:  "PHP / jQuery",
    // TECH HIGHLIGHT
    highlightTitle: "AJAX-Powered Hardware Catalog",
    highlightDesc:  "",
    codeLang:  "PHP / jQuery",

    // METRICS (4 items)
    metrics: [
      { value: "150", suffix: "%", label: "Inquiry Growth", delta: "↑ via Style Quiz" },
      { value: "0.8s",suffix: "",  label: "LCP Speed",     delta: "↓ from 4.2s" },
      { value: "4.5m",suffix: "",  label: "Avg. Session",  delta: "↑ Engagement" },
      { value: "100", suffix: "",  label: "SEO Score",     delta: "Lighthouse ✓" }
    ],

    // TIMELINE
    timeline: [
      { weeks: "Week 1–2", title: "Visual Strategy", desc: "Mood-boarding, typography selection (Playfair Display + Inter), and wireframing the 'Project Story' layout." },
      { weeks: "Week 3–5", title: "CMS & Assets", desc: "Setting up Sanity CMS schemas for Projects, Rooms, and Testimonials. Mass asset optimization." },
      { weeks: "Week 6",   title: "Interactions", desc: "Developing the Framer Motion transitions and the interactive 'Style Quiz' lead magnet." },
      { weeks: "Week 8",   title: "SEO & Handoff", desc: "Schema.org markup for local SEO, accessibility audit, and client training on the CMS." }
    ],

    // CLIENT QUOTE
    quote:      "Our website finally matches the quality of our work. They understood exactly what I needed, delivered a beautiful and functional site, and made sure everything was optimized. Great communication throughout, and the project was completed on time and within budget. Highly recommended!",
    quoteName:  "Ajit Sharma",
    quoteRole:  "CEO, Radha Enterprises",
    quoteEmoji: "🤵",

    // NEXT PROJECT (shown at bottom)
    nextProject: "cfhrsw"
  },

  // ── PROJECT 2 ──────────────────────────────────────────────
  cfhrsw: {
    id:         "cfhrsw",
    title:      "CFHRSW",
    subtitle:   "NGO",
    category:   "Non-Profit · Web Portal",
    emoji:      "🤝",
    year:       "2025",
    status:     "Live",
    liveUrl:    "https://cfhrsw.org",
    githubUrl:  "",

    accentColor: "#a7246a",
    bgGradient:  "linear-gradient(135deg, #0a0a1a 0%, #111130 50%, #0a1a2a 100%)",
    mockupLabel: "CFHRSW Official Portal · Responsive Design",
    mockupUrl:   "image/ngo.png",

    client:   "CFHRSW NGO",
    heroTimeline: "10 Weeks",
    role:     "Full-Stack Developer",

    overview: [
      "The existing CFHRSW website was static, outdated, and difficult to manage. The NGO needed a <strong>dynamic, mobile-responsive platform</strong> to handle student registrations, internship applications, and real-time event updates.",
      "I rebuilt the entire ecosystem from scratch using <strong>PHP and MySQL</strong>, featuring a custom CRM that allows admins to manage every piece of content—from blog posts to YouTube event videos—without touching a single line of code.",
      "Key innovations include an <strong>interactive global map</strong> showing interns worldwide and an automated registration system for NIELIT & NCPUL students, significantly reducing manual paperwork for the NGO staff."
    ],

    stack: ["PHP", "MySQL", "jQuery", "DataTables", "Leaflet.js", "Bootstrap", "JavaScript", "SEO Optimization"],

    services: "Full-stack Development · CRM Architecture\nInteractive Mapping · Database Design\nUI/UX Redesign · SEO Strategy",

    challenges: [
      "Converting a static, non-responsive site into a modern dynamic portal",
      "Managing high volumes of NIELIT/NCPUL student registration data",
      "Displaying global intern locations interactively",
      "Allowing non-technical admins to manage video & gallery content",
      "Ensuring fast search and filtering for growing event archives"
    ],
    solutions: [
      "Mobile-first architecture using clean CSS and jQuery",
      "Integrated DataTables with server-side processing for instant search/sort",
      "OpenStreetMap & Leaflet.js integration for 'Interns Around the World'",
      "Custom Admin CRM with CRUD operations and YouTube API modal triggers",
      "Dynamic SEO meta-tag generation for blogs and news pages"
    ],

    screens: [
      { label: "Global Intern Map (Leaflet)", emoji: "🌍", bg: "linear-gradient(135deg,#2c3e50,#34495e)", span: true, img: "image/ngo1.png" },
      { label: "Home Page - Mobile View",         emoji: "🔐", bg: "linear-gradient(135deg,#1e272e,#2f3640)", span: false, img: "image/ngo2.png" },
      { label: "Student Registration Portal", emoji: "📝", bg: "linear-gradient(135deg,#27ae60,#2ecc71)", span: false, img: "image/ngo3.png" }
    ],

    highlightTitle: "Dynamic CRM & Video Modal Engine",
    highlightDesc:  "I developed a custom content management system where admins can upload event details. If a YouTube URL is provided, the frontend automatically generates a <strong>responsive slider card</strong> that triggers a seamless video modal on click.",
    codeFile:  "admin_events.php",
    codeLang:  "PHP / MySQL",
    codeSnippet: `<span class="cm">// Fetch events and check for YouTube media</span>
<span class="kw">$query</span> = <span class="str">"SELECT * FROM events ORDER BY date DESC"</span>;
<span class="kw">$result</span> = <span class="fn">mysqli_query</span>($conn, $query);

<span class="kw">while</span>(<span class="kw">$row</span> = <span class="fn">mysqli_fetch_assoc</span>($result)) {
    <span class="kw">$videoID</span> = <span class="fn">getYouTubeID</span>(<span class="kw">$row</span>[<span class="str">'video_url'</span>]); 
    <span class="kw">echo</span> <span class="str">"&lt;div class='event-card'&gt;
            &lt;img src='uploads/"</span>.<span class="kw">$row</span>[<span class="str">'thumb'</span>].<span class="str">"'&gt;
            &lt;button onclick='openVideo(\\""</span>.<span class="kw">$videoID</span>.<span class="str">"\\")'&gt;View Video&lt;/button&gt;
          &lt;/div&gt;"</span>;
}

<span class="cm">// Initialize DataTable for Admin Search/Sort</span>
$(<span class="str">'#studentTable'</span>).<span class="fn">DataTable</span>({
    responsive: <span class="kw">true</span>,
    pageLength: 10,
    order: [[0, <span class="str">'desc'</span>]]
});`,

    metrics: [
      { value: "100",  suffix: "%", label: "Mobile Responsive", delta: "From Static" },
      { value: "0",    suffix: "",  label: "Paperwork",         delta: "Digital Forms" },
      { value: "24", suffix: "/7", label: "Admin Access", delta: "Real-time CRM" },
      { value: "10",   suffix: "",  label: "Weeks Delivered",   delta: "On schedule ✓"    }
    ],

    timeline: [
      { weeks: "Week 1–4", title: "Structure & UI Design", desc: "Redesigning the Home, About, and Activity pages for mobile responsiveness. Setting up the Leaflet.js map architecture." },
      { weeks: "Week 5–6", title: "Student & Intern Modules", desc: "Developing the Registration Form for NIELIT/NCPUL students and the Internship application system with backend validation." },
      { weeks: "Week 7–8", title: "CRM & Media Engine", desc: "Building the Admin Panel. Implementing DataTables for management and the YouTube modal slider system for the Event Slider." },
      { weeks: "Week 9–10", title: "SEO & Deployment", desc: "Adding Meta tags for blogs/news, optimizing assets for speed, and finalizing the project for live production." }
    ],

    quote:      "The new portal has completely digitized our operations. Managing student registrations and our global intern network is now effortless thanks to the custom admin panel.",
    quoteName:  "Saroj",
    quoteRole:  "Secretary, CFHRSW NGO",
    quoteEmoji: "👩‍💼",

    nextProject: "radhaenterprises"
  },

  // ── PROJECT 3 ──────────────────────────────────────────────
  vertex: {
    id:         "vertex",
    title:      "Vertex Studio",
    subtitle:   "Creative Agency",
    category:   "Agency · WebGL",
    emoji:      "🎯",
    year:       "2024",
    status:     "Live",
    liveUrl:    "https://vertex-studio.example.com",
    githubUrl:  "",

    accentColor: "#ff6b35",
    bgGradient:  "linear-gradient(135deg, #1a0a00 0%, #2a1500 50%, #1a0800 100%)",
    mockupLabel: "Vertex Studio — Award-winning Portfolio",
    mockupUrl:   "",

    client:   "Vertex Creative Studio",
    timeline: "6 Weeks",
    role:     "Creative Developer",

    overview: [
      "Vertex Studio is a boutique creative agency that had outgrown their off-the-shelf Webflow site. They needed something that <strong>looked as good as the work they sell</strong> — cinematic, immersive, and technically impressive.",
      "The brief called for <strong>full-page WebGL transitions</strong>, 3D scroll-driven animations, a custom cursor system, and a case study section that felt more like a magazine than a portfolio.",
      "The site won two industry awards within 3 months of launch and became the agency's most powerful business development tool — closing 4 new clients directly from portfolio views."
    ],

    stack: ["Three.js", "GSAP", "Barba.js", "WebGL GLSL", "Vite", "Node.js", "Contentful"],

    services: "Creative development · WebGL / GSAP\nPage transition system · 3D animation\nCMS integration · Performance tuning",

    challenges: [
      "Smooth WebGL page transitions (no flash/reload feel)",
      "60fps scroll-driven 3D animations across all devices",
      "Custom GLSL shader effects for image distortion",
      "Contentful CMS so non-devs can update case studies",
      "Sub-2s load time despite heavy 3D assets",
      "Accessibility — GSAP reduced-motion support"
    ],
    solutions: [
      "Barba.js + Three.js shared WebGL context across routes",
      "GSAP ScrollTrigger with GPU-composited transforms only",
      "Custom displacement shader with 8 presets",
      "Contentful + typed SDK with ISR revalidation",
      "GLTF Draco compression + progressive texture loading",
      "prefers-reduced-motion hook disabling all motion"
    ],

    screens: [
      { label: "Hero — Cinematic Entry",  emoji: "🎬", bg: "linear-gradient(135deg,#1a0a00,#3a2000)", span: true  },
      { label: "Work Grid — WebGL Cards", emoji: "🖼️", bg: "linear-gradient(135deg,#2a1500,#4a2800)", span: false },
      { label: "Case Study — Magazine",   emoji: "📰", bg: "linear-gradient(135deg,#1a0800,#3a1500)", span: false }
    ],

    highlightTitle: "WebGL Displacement Shader",
    highlightDesc:  "On hover, each work thumbnail distorts using a <strong>custom GLSL displacement shader</strong> that reads a noise texture and warps UV coordinates — giving a liquid, organic feel that no CSS filter can replicate.",
    codeFile:  "displacement.glsl",
    codeLang:  "GLSL",
    codeSnippet: `<span class="cm">// Fragment shader — displacement on hover</span>
<span class="kw">uniform</span> sampler2D uTexture;
<span class="kw">uniform</span> sampler2D uDisplacement;
<span class="kw">uniform float</span> uStrength;
<span class="kw">varying</span> vec2 vUv;

<span class="kw">void</span> <span class="fn">main</span>() {
  vec4 disp = <span class="fn">texture2D</span>(uDisplacement, vUv);
  vec2 distortedUv = vUv + disp.rg * uStrength;

  vec4 color = <span class="fn">texture2D</span>(uTexture, distortedUv);
  <span class="fn">gl_FragColor</span> = color;
}`,

    metrics: [
      { value: "2",   suffix: "",  label: "Awards Won",        delta: "3 months post-launch" },
      { value: "4",   suffix: "",  label: "Clients Acquired",  delta: "Via portfolio views"   },
      { value: "60",  suffix: "+", label: "FPS WebGL",         delta: "All modern devices"    },
      { value: "1.8", suffix: "s", label: "Load Time",         delta: "Despite heavy 3D"      }
    ],

    timeline: [
      { weeks: "Week 1",   title: "Creative Direction",         desc: "Visual direction workshop, moodboard, motion principles. Agreed on editorial magazine aesthetic with cinematic WebGL transitions." },
      { weeks: "Week 2–3", title: "WebGL Foundation",           desc: "Three.js scene setup, Barba.js route integration, shared renderer across pages, base GLSL shader library." },
      { weeks: "Week 4–5", title: "Animations & CMS",           desc: "GSAP ScrollTrigger animations, custom cursor system, Contentful integration with typed content models and live preview." },
      { weeks: "Week 6",   title: "Polish & Performance",       desc: "Asset compression, loading sequence, reduced-motion support, cross-browser QA, staged soft launch to existing clients first." }
    ],

    quote:      "Our agency portfolio won two awards this year, and a huge part of that is 's work. The animations and WebGL effects are unlike anything I've seen from a single developer. He delivered magic.",
    quoteName:  "Priya Sharma",
    quoteRole:  "Creative Director, Vertex Studio",
    quoteEmoji: "🎨",

    nextProject: "nestfind"
  },

  // ── PROJECT 4 ──────────────────────────────────────────────
  nestfind: {
    id:         "nestfind",
    title:      "NestFind",
    subtitle:   "Real Estate Platform",
    category:   "PropTech · Full-Stack",
    emoji:      "🏠",
    year:       "2024",
    status:     "Live",
    liveUrl:    "https://nestfind.example.com",
    githubUrl:  "",

    accentColor: "#4ade80",
    bgGradient:  "linear-gradient(135deg, #001a0a 0%, #002a14 50%, #001a0a 100%)",
    mockupLabel: "NestFind — Property Listings & Map",
    mockupUrl:   "",

    client:   "NestFind Pvt. Ltd.",
    timeline: "12 Weeks",
    role:     "Full-Stack Developer",

    overview: [
      "NestFind is a real estate startup that wanted to compete with 99acres and MagicBricks — the big players — by offering a <strong>radically better search and discovery experience</strong> focused on Jaipur and Rajasthan.",
      "Key differentiators: <strong>AI-powered neighbourhood insights</strong>, virtual property tours built from 360° photos, instant WhatsApp enquiry integration, and a map-first search UI that lets buyers filter by drawing freehand regions.",
      "Launched with 2,400 listings on day one. Within 6 weeks had <strong>12,000 monthly active users</strong> and 340 successful buyer–seller connections facilitated through the platform."
    ],

    stack: ["Next.js", "Mapbox GL", "Node.js", "Express", "MongoDB", "Redis", "AWS S3", "Twilio"],

    services: "Full-stack development · Maps integration\nVirtual tour system · WhatsApp API\nAdmin dashboard · SEO & performance",

    challenges: [
      "Map-first UI with 2,400+ property pins — no lag",
      "Freehand polygon search region drawing on map",
      "360° virtual tour viewer in-browser",
      "WhatsApp Business API for instant enquiries",
      "AI neighbourhood scoring (safety, schools, transit)",
      "Admin panel for agents to list without code"
    ],
    solutions: [
      "Mapbox GL with clustered markers + viewport culling",
      "Mapbox Draw plugin with custom polygon filter logic",
      "Pannellum.js with hotspot system for room linking",
      "Twilio WhatsApp API with template message approval",
      "OpenAI embeddings on locality data + scoring model",
      "Custom CMS dashboard with Cloudinary image pipeline"
    ],

    screens: [
      { label: "Map-First Search",      emoji: "🗺️", bg: "linear-gradient(135deg,#001a0a,#003320)", span: true  },
      { label: "Property Detail + Tour",emoji: "🏡", bg: "linear-gradient(135deg,#002a14,#004428)", span: false },
      { label: "Agent Dashboard",       emoji: "📋", bg: "linear-gradient(135deg,#001a0a,#003320)", span: false }
    ],

    highlightTitle: "Freehand Polygon Search",
    highlightDesc:  "Users draw any shape on the map with a finger or mouse. The polygon coordinates feed into a <strong>MongoDB geospatial query</strong> using <code>$geoWithin</code> — returning only properties inside the drawn region in under 100ms.",
    codeFile:  "polygonSearch.js",
    codeLang:  "JavaScript",
    codeSnippet: `<span class="cm">// Convert drawn polygon → MongoDB geospatial query</span>
<span class="kw">async function</span> <span class="fn">searchByPolygon</span>(coordinates) {
  <span class="kw">const</span> geoPolygon = {
    type: <span class="str">'Polygon'</span>,
    coordinates: [<span class="fn">closeRing</span>(coordinates)]
  };

  <span class="kw">return</span> Property.<span class="fn">find</span>({
    location: {
      <span class="str">$geoWithin</span>: { <span class="str">$geometry</span>: geoPolygon }
    }
  }).<span class="fn">lean</span>().<span class="fn">limit</span>(200);
  <span class="cm">// Returns results in ~80ms for 2,400 listings</span>
}`,

    metrics: [
      { value: "12k",  suffix: "",  label: "Monthly Active Users", delta: "6 weeks post-launch" },
      { value: "340",  suffix: "",  label: "Connections Made",      delta: "Buyer ↔ Seller"      },
      { value: "2.4k", suffix: "",  label: "Listings Day One",     delta: "Zero lag on map"      },
      { value: "80",   suffix: "ms",label: "Polygon Query",        delta: "MongoDB geospatial"   }
    ],

    timeline: [
      { weeks: "Week 1–2",   title: "Research & System Design", desc: "Market analysis of existing platforms, user interviews with 8 buyers and 5 agents. Designed data model and API contract before writing a single UI line." },
      { weeks: "Week 3–5",   title: "Map & Search Engine",      desc: "Mapbox integration, clustering, polygon draw tool, geospatial MongoDB queries, server-side filters (price, BHK, amenities)." },
      { weeks: "Week 6–9",   title: "Listings & Tours",         desc: "Property detail page, Pannellum 360° tour viewer, image pipeline via Cloudinary, WhatsApp enquiry flow via Twilio API." },
      { weeks: "Week 10–12", title: "Agent CMS & Launch",       desc: "Agent dashboard for self-listing, AI neighbourhood scores, SEO (schema markup, sitemap), soft launch to 20 agents then public." }
    ],

    quote:      "NestFind went from idea to 12,000 monthly users in 6 weeks of being live. Piyush built something I didn't think was possible in 12 weeks — the map search alone is better than anything our competitors have.",
    quoteName:  "Arjun Mehta",
    quoteRole:  "Founder, NestFind",
    quoteEmoji: "🏗️",

    nextProject: "finpulse"
  },

  // ── PROJECT 5 ──────────────────────────────────────────────
  finpulse: {
    id:         "finpulse",
    title:      "FinPulse",
    subtitle:   "Personal Finance App",
    category:   "FinTech · PWA",
    emoji:      "💰",
    year:       "2025",
    status:     "Beta",
    liveUrl:    "https://finpulse.example.com",
    githubUrl:  "https://github.com/rivera/finpulse",

    accentColor: "#a78bfa",
    bgGradient:  "linear-gradient(135deg, #0d0a1a 0%, #1a1030 50%, #0d0a1a 100%)",
    mockupLabel: "FinPulse — Personal Finance Dashboard",
    mockupUrl:   "",

    client:   "Personal Project",
    timeline: "5 Weeks",
    role:     "Solo Developer & Designer",

    overview: [
      "FinPulse started as a personal frustration — every finance app I tried was either <strong>too simple to be useful or too complex to enjoy using</strong>. I wanted something that gave me a full financial picture in one glance.",
      "Built as a <strong>Progressive Web App</strong> that works offline, syncs across devices, and uses bank-connection APIs to auto-import transactions — with a focus on beautiful data visualisation and zero financial jargon.",
      "Now in public beta with 800+ users. Monthly active retention sits at <strong>68%</strong> — unusually high for a finance app — because the daily check-in habit is genuinely enjoyable to form."
    ],

    stack: ["React", "PWA", "Plaid API", "Chart.js", "Supabase", "Edge Functions", "Tailwind"],

    services: "Solo product design · Full-stack development\nFintech API integration · PWA engineering\nData visualisation · Offline-first architecture",

    challenges: [
      "Offline-first — works without internet connection",
      "Plaid bank sync with encrypted credential storage",
      "Auto-categorisation of 40+ transaction types",
      "Beautiful charts that make finances feel approachable",
      "PWA install prompt across iOS, Android, Desktop",
      "GDPR compliance + zero third-party analytics"
    ],
    solutions: [
      "Workbox service worker with background sync queue",
      "Supabase Vault for encrypted Plaid tokens at rest",
      "Rule engine + OpenAI fallback for unknown merchants",
      "Chart.js with custom animation presets and themes",
      "Custom install prompt hooks per platform/browser",
      "Self-hosted Plausible analytics, privacy-first"
    ],

    screens: [
      { label: "Finance Overview Dashboard", emoji: "💰", bg: "linear-gradient(135deg,#0d0a1a,#1a1040)", span: true  },
      { label: "Spending Breakdown",         emoji: "🥧", bg: "linear-gradient(135deg,#1a1030,#2a2050)", span: false },
      { label: "Goal Tracker",               emoji: "🎯", bg: "linear-gradient(135deg,#0d0a1a,#1a1040)", span: false }
    ],

    highlightTitle: "Offline-First Sync Architecture",
    highlightDesc:  "Every write goes to an <strong>IndexedDB queue first</strong>, then a Workbox background sync worker flushes to Supabase when connectivity returns — so users never lose data from a dropped connection.",
    codeFile:  "syncWorker.js",
    codeLang:  "JavaScript",
    codeSnippet: `<span class="cm">// Queue writes locally, sync when online</span>
<span class="kw">const</span> bgSync = <span class="kw">new</span> <span class="fn">BackgroundSyncPlugin</span>(<span class="str">'finpulse-queue'</span>, {
  maxRetentionTime: 24 * 60 <span class="cm">// Retry for 24 hours</span>
});

<span class="kw">async function</span> <span class="fn">saveTransaction</span>(tx) {
  <span class="cm">// Always write to IndexedDB first</span>
  <span class="kw">await</span> db.<span class="fn">put</span>(<span class="str">'transactions'</span>, tx);

  <span class="kw">if</span> (navigator.onLine) {
    <span class="kw">await</span> supabase.<span class="fn">from</span>(<span class="str">'transactions'</span>).<span class="fn">upsert</span>(tx);
  } <span class="kw">else</span> {
    <span class="kw">await</span> queue.<span class="fn">pushRequest</span>({ request: syncRequest(tx) });
  }
}`,

    metrics: [
      { value: "800",  suffix: "+", label: "Beta Users",         delta: "No paid marketing"  },
      { value: "68",   suffix: "%", label: "Monthly Retention",  delta: "Industry avg: 20%"  },
      { value: "100",  suffix: "%", label: "Offline Capable",    delta: "PWA + IndexedDB"    },
      { value: "5",    suffix: "",  label: "Weeks to Launch",    delta: "Solo project"       }
    ],

    timeline: [
      { weeks: "Week 1",   title: "Design & Architecture",      desc: "User research (interviewed 12 people about money habits). Designed all screens in Figma. Chose Supabase over Firebase for row-level security." },
      { weeks: "Week 2–3", title: "Core App & Plaid",           desc: "Transaction list, Plaid Link flow, auto-categorisation rule engine, Chart.js visualisations, Supabase real-time subscriptions." },
      { weeks: "Week 4",   title: "PWA & Offline",              desc: "Service worker with Workbox, IndexedDB schema, background sync queue, install prompts, push notifications for budget alerts." },
      { weeks: "Week 5",   title: "Beta Launch",                desc: "Soft launch to 50 friends, iterated on onboarding based on feedback, Product Hunt launch — reached #4 Product of the Day." }
    ],

    quote:      "FinPulse is the first finance app I've actually kept on my home screen for more than a week. The offline mode saved me during a flight — I could still log expenses without any internet. Genuinely impressive solo work.",
    quoteName:  "Rohan Das",
    quoteRole:  "Early Beta User & Product Designer",
    quoteEmoji: "💜",

    nextProject: "luxstyle"  // loops back to first
  }

};

// ── HELPER ──────────────────────────────────────────────────
// Returns a project by ID, or null if not found
function getProject(id) {
  return PROJECTS[id] || null;
}

// Returns ordered list for "all projects" view
function getAllProjects() {
  return Object.values(PROJECTS);
}