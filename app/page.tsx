import Header from "./ui/Header";

const siteUrl = "https://whitespc.studio";

interface Project {
  type: string;
  title: string;
  body: string;
  visual: string;
  stats: [string, string][];
}

const projects: Project[] = [
  {
    type: "D2C Beauty",
    title: "Launch funnel for a clean skincare line",
    body:
      "Messaging architecture, creator ads, landing pages, and weekly campaign experiments across search and social.",
    visual: "project-visual-a",
    stats: [
      ["CPA", "-31%"],
      ["Email revenue", "+64%"]
    ]
  },
  {
    type: "B2B SaaS",
    title: "Demand engine for an operations platform",
    body:
      "Category narrative, LinkedIn creative, lead magnets, and reporting dashboards for a six-month acquisition push.",
    visual: "project-visual-b",
    stats: [
      ["MQLs", "+118%"],
      ["CAC payback", "5.4 mo"]
    ]
  },
  {
    type: "Hospitality",
    title: "Seasonal campaign for boutique stays",
    body:
      "Search-led content, local partnerships, email segmentation, and a refreshed booking path for higher-value reservations.",
    visual: "project-visual-c",
    stats: [
      ["Bookings", "+47%"],
      ["ROAS", "4.2x"]
    ]
  }
];

interface Service {
  title: string;
  image: string;
  body: string;
}

const services: Service[] = [
  {
    title: "Positioning & strategy",
    image: "/assets/service-strategy.svg",
    body: "Market audits, audience maps, offer framing, channel priorities, and launch plans."
  },
  {
    title: "Content systems",
    image: "/assets/service-content.svg",
    body: "Editorial calendars, landing page copy, email journeys, social creative, and SEO briefs."
  },
  {
    title: "Performance campaigns",
    image: "/assets/service-performance.svg",
    body: "Paid search, paid social, testing plans, creative iterations, attribution, and reporting."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "WhiteSpc",
      url: siteUrl,
      email: "hello@whitespc.studio",
      description:
        "Minimal digital marketing studio for brand strategy, performance campaigns, content systems, and conversion design.",
      slogan: "Quiet strategy. Campaigns that make noise.",
      areaServed: "Worldwide",
      serviceType: [
        "Digital marketing strategy",
        "Performance marketing",
        "Content marketing",
        "Conversion design",
        "SEO strategy"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WhiteSpc",
      publisher: {
        "@id": `${siteUrl}/#business`
      },
      inLanguage: "en-US"
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Digital marketing studio</p>
            <h1>Quiet strategy. Campaigns that make noise.</h1>
            <p className="hero-text">
              WhiteSpc builds focused digital marketing systems for brands that need clearer
              positioning, stronger demand, and launch momentum without the clutter.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View work
              </a>
              <a className="button secondary" href="#contact">
                Start a brief
              </a>
            </div>
          </div>

          <div className="hero-aside reveal" aria-label="Campaign focus areas">
            <img src="/assets/campaign-board.svg" alt="" className="hero-art" />
            <div className="focus-strip">
              <span>Paid search</span>
              <span>SEO content</span>
              <span>Creator ads</span>
            </div>
          </div>
        </section>

        <section className="metrics shell" aria-label="Studio results">
          <div className="metric reveal">
            <strong>42%</strong>
            <span>Average lift in qualified leads</span>
          </div>
          <div className="metric reveal">
            <strong>3.1x</strong>
            <span>Median return on paid spend</span>
          </div>
          <div className="metric reveal">
            <strong>18</strong>
            <span>Launches shipped last year</span>
          </div>
        </section>

        <section className="intro section-grid shell">
          <div className="section-kicker reveal">What we shape</div>
          <div className="intro-copy reveal">
            <h2>Lean marketing foundations for teams that want useful growth.</h2>
            <p>
              We bring brand, content, paid media, analytics, and conversion work into one
              deliberately small operating system. Every deliverable has a job. Every channel has a
              reason to exist.
            </p>
          </div>
        </section>

        <section className="work shell" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Recent digital marketing systems</h2>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className={`project-visual ${project.visual}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                </div>
                <dl>
                  {project.stats.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="services section-grid shell" id="services">
          <div className="section-kicker reveal">Services</div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service reveal" key={service.title}>
                <img src={service.image} alt="" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process shell" id="process">
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>Small team, sharp rhythm</h2>
          </div>
          <div className="process-track" aria-label="Marketing process">
            <article className="process-step reveal">
              <span>01</span>
              <h3>Find the signal</h3>
              <p>We audit the market, analytics, funnel behavior, creative library, and sales context.</p>
            </article>
            <article className="process-step reveal">
              <span>02</span>
              <h3>Build the system</h3>
              <p>We define offers, messages, channels, experiments, and the weekly operating cadence.</p>
            </article>
            <article className="process-step reveal">
              <span>03</span>
              <h3>Learn in public</h3>
              <p>We ship, measure, refine, and keep the work legible for founders and internal teams.</p>
            </article>
          </div>
        </section>

        <section className="quote-band shell">
          <div className="quote-illustration reveal" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <blockquote className="reveal">
            “WhiteSpc gave our brand a voice, our campaigns a rhythm, and our team a dashboard we
            actually use.”
          </blockquote>
          <p className="reveal">Founder, venture-backed consumer brand</p>
        </section>

        <section className="contact section-grid shell" id="contact">
          <div className="section-kicker reveal">Contact</div>
          <div className="contact-panel reveal">
            <h2>Have a launch, repositioning, or growth sprint in mind?</h2>
            <p>
              Send the brief. We will reply with the cleanest next step: audit, workshop, or a
              focused 90-day growth engagement.
            </p>
            <a className="button primary" href="mailto:hello@whitespc.studio">
              hello@whitespc.studio
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <p>WhiteSpc © 2026</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
