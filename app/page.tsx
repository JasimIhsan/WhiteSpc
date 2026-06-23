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
      <main id="top" className="overflow-hidden">
        <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.86fr)] gap-[clamp(28px,5vw,68px)] items-center py-[clamp(34px,5vw,64px)] pt-[clamp(36px,5.7vw,72px)] w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto">
          <div className="max-w-[690px] animate-rise">
            <p className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase">Digital marketing studio</p>
            <h1 className="max-w-[660px] mb-[22px] font-display text-[clamp(3.4rem,6.1vw,5.55rem)] max-[620px]:text-[clamp(3.2rem,18vw,5.5rem)] font-medium tracking-normal leading-[0.95]">Quiet strategy. Campaigns that make noise.</h1>
            <p className="max-w-[570px] mb-7 text-muted text-[clamp(1.02rem,1.7vw,1.22rem)]">
              WhiteSpc builds focused digital marketing systems for brands that need clearer
              positioning, stronger demand, and launch momentum without the clutter.
            </p>
            <div className="flex flex-wrap gap-3 max-[620px]:w-full">
              <a className="inline-flex items-center justify-center min-h-[48px] px-5 py-[13px] border border-ink text-[0.78rem] font-extrabold tracking-[0.09em] uppercase transition-all duration-200 ease-out hover:-translate-y-[2px] bg-ink text-paper max-[620px]:w-full" href="#work">
                View work
              </a>
              <a className="inline-flex items-center justify-center min-h-[48px] px-5 py-[13px] border border-ink text-[0.78rem] font-extrabold tracking-[0.09em] uppercase transition-all duration-200 ease-out hover:-translate-y-[2px] bg-[#f8f7f2]/72 hover:bg-white text-ink max-[620px]:w-full" href="#contact">
                Start a brief
              </a>
            </div>
          </div>

          <div className="relative w-[min(500px,100%)] max-[940px]:w-[min(580px,100%)] ml-auto max-[940px]:mx-auto animate-rise [animation-delay:80ms] before:absolute before:top-[12%] before:-left-[9%] before:w-[35%] before:h-[54%] before:border before:border-line before:content-['']" aria-label="Campaign focus areas">
            <img src="/assets/campaign-board.svg" alt="" className="relative w-full drop-shadow-[0_28px_44px_rgba(34,31,24,0.13)]" />
            <div className="grid grid-cols-3 max-[620px]:grid-cols-1 -mt-2 border border-ink bg-paper">
              <span className="min-w-0 py-3 px-2 border-r max-[620px]:border-r-0 max-[620px]:border-b border-ink text-[0.72rem] font-extrabold tracking-[0.06em] text-center uppercase">Paid search</span>
              <span className="min-w-0 py-3 px-2 border-r max-[620px]:border-r-0 max-[620px]:border-b border-ink text-[0.72rem] font-extrabold tracking-[0.06em] text-center uppercase">SEO content</span>
              <span className="min-w-0 py-3 px-2 text-[0.72rem] font-extrabold tracking-[0.06em] text-center uppercase">Creator ads</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 max-[940px]:grid-cols-1 border-y border-line w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto" aria-label="Studio results">
          <div className="min-h-[148px] py-[30px] px-[clamp(18px,3vw,36px)] border-r max-[940px]:border-r-0 max-[940px]:border-b border-line animate-rise">
            <strong className="block mb-2 font-display text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[0.95]">42%</strong>
            <span className="block max-w-[210px] text-muted">Average lift in qualified leads</span>
          </div>
          <div className="min-h-[148px] py-[30px] px-[clamp(18px,3vw,36px)] border-r max-[940px]:border-r-0 max-[940px]:border-b border-line animate-rise [animation-delay:80ms]">
            <strong className="block mb-2 font-display text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[0.95]">3.1x</strong>
            <span className="block max-w-[210px] text-muted">Median return on paid spend</span>
          </div>
          <div className="min-h-[148px] py-[30px] px-[clamp(18px,3vw,36px)] animate-rise [animation-delay:140ms]">
            <strong className="block mb-2 font-display text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[0.95]">18</strong>
            <span className="block max-w-[210px] text-muted">Launches shipped last year</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.86fr)] gap-[clamp(28px,5vw,68px)] py-[clamp(84px,12vw,150px)] w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto">
          <div className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase animate-rise">What we shape</div>
          <div className="max-w-[820px] animate-rise [animation-delay:80ms]">
            <h2 className="max-w-[760px] font-display text-[clamp(2.4rem,5.7vw,5.7rem)] max-[620px]:text-[clamp(2.2rem,13vw,3.9rem)] font-medium tracking-normal leading-[0.95]">Lean marketing foundations for teams that want useful growth.</h2>
            <p className="max-w-[720px] mt-[22px] text-muted text-[clamp(1rem,1.7vw,1.2rem)]">
              We bring brand, content, paid media, analytics, and conversion work into one
              deliberately small operating system. Every deliverable has a job. Every channel has a
              reason to exist.
            </p>
          </div>
        </section>

        <section className="py-12 w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto" id="work">
          <div className="md:flex md:items-end md:justify-between gap-[28px] mb-[clamp(28px,5vw,54px)] animate-rise">
            <div>
              <p className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase">Selected work</p>
              <h2 className="max-w-[760px] font-display text-[clamp(2.4rem,5.7vw,5.7rem)] max-[620px]:text-[clamp(2.2rem,13vw,3.9rem)] font-medium tracking-normal leading-[0.95]">Recent digital marketing systems</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 max-[940px]:grid-cols-1 gap-[18px]">
            {projects.map((project, i) => (
              <article className={`flex flex-col min-h-[520px] max-[620px]:min-h-0 p-[18px] bg-white/54 border border-line rounded-lg shadow-[0_14px_36px_rgba(38,35,28,0.06)] animate-rise`} style={{ animationDelay: `${i * 80}ms` }} key={project.title}>
                <div className={`relative min-h-[210px] mb-7 overflow-hidden border border-ink rounded-md bg-paper ${project.visual}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <p className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase">{project.type}</p>
                  <h3 className="mb-3 text-[clamp(1.12rem,1.8vw,1.45rem)] leading-[1.18] font-display font-medium">{project.title}</h3>
                  <p className="text-muted">{project.body}</p>
                </div>
                <dl className="grid grid-cols-2 gap-[10px] mt-auto pt-6">
                  {project.stats.map(([label, value]) => (
                    <div className="pt-[14px] border-t border-line" key={label}>
                      <dt className="text-muted text-[0.74rem] font-extrabold tracking-[0.08em] uppercase">{label}</dt>
                      <dd className="mt-1.5 font-display text-[1.8rem] leading-none">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.86fr)] gap-[clamp(28px,5vw,68px)] py-[clamp(84px,12vw,150px)] w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto" id="services">
          <div className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase animate-rise">Services</div>
          <div className="grid gap-[14px]">
            {services.map((service, i) => (
              <article className={`grid grid-cols-[104px_minmax(0,1fr)] max-[620px]:grid-cols-1 gap-[clamp(18px,4vw,36px)] items-center p-[clamp(20px,3vw,34px)] bg-white/42 border border-line rounded-lg animate-rise`} style={{ animationDelay: `${i * 80}ms` }} key={service.title}>
                <img src={service.image} alt="" className="w-[104px] h-[104px] max-[620px]:w-[92px] max-[620px]:h-[92px]" />
                <div>
                  <h3 className="mb-3 text-[clamp(1.12rem,1.8vw,1.45rem)] leading-[1.18] font-display font-medium">{service.title}</h3>
                  <p className="max-w-[720px] mb-0 text-muted">{service.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-[clamp(84px,12vw,150px)] w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto" id="process">
          <div className="md:flex md:items-end md:justify-between gap-[28px] mb-[clamp(28px,5vw,54px)] animate-rise">
            <div>
              <p className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase">Process</p>
              <h2 className="max-w-[760px] font-display text-[clamp(2.4rem,5.7vw,5.7rem)] max-[620px]:text-[clamp(2.2rem,13vw,3.9rem)] font-medium tracking-normal leading-[0.95]">Small team, sharp rhythm</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 max-[940px]:grid-cols-1 border-t border-ink" aria-label="Marketing process">
            <article className="min-h-[260px] py-7 px-[clamp(18px,3vw,34px)] border-r max-[940px]:border-r-0 max-[940px]:border-b border-line animate-rise">
              <span className="inline-block mb-[38px] font-display text-[2rem]">01</span>
              <h3 className="mb-3 text-[clamp(1.12rem,1.8vw,1.45rem)] leading-[1.18] font-display font-medium">Find the signal</h3>
              <p className="text-muted">We audit the market, analytics, funnel behavior, creative library, and sales context.</p>
            </article>
            <article className="min-h-[260px] py-7 px-[clamp(18px,3vw,34px)] border-r max-[940px]:border-r-0 max-[940px]:border-b border-line animate-rise [animation-delay:80ms]">
              <span className="inline-block mb-[38px] font-display text-[2rem]">02</span>
              <h3 className="mb-3 text-[clamp(1.12rem,1.8vw,1.45rem)] leading-[1.18] font-display font-medium">Build the system</h3>
              <p className="text-muted">We define offers, messages, channels, experiments, and the weekly operating cadence.</p>
            </article>
            <article className="min-h-[260px] py-7 px-[clamp(18px,3vw,34px)] animate-rise [animation-delay:140ms]">
              <span className="inline-block mb-[38px] font-display text-[2rem]">03</span>
              <h3 className="mb-3 text-[clamp(1.12rem,1.8vw,1.45rem)] leading-[1.18] font-display font-medium">Learn in public</h3>
              <p className="text-muted">We ship, measure, refine, and keep the work legible for founders and internal teams.</p>
            </article>
          </div>
        </section>

        <section className="relative grid grid-cols-[220px_minmax(0,1fr)] max-[940px]:grid-cols-1 gap-[clamp(26px,5vw,68px)] items-center p-[clamp(38px,7vw,78px)] max-[620px]:py-[30px] max-[620px]:px-[22px] bg-ink text-paper w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto">
          <div className="relative w-[200px] max-[620px]:w-[150px] aspect-square border border-[#f8f7f2]/42 animate-rise quote-illustration" aria-hidden="true">
            <span className="absolute block bg-paper top-[28px] left-[28px] w-[92px] h-[34px]" />
            <span className="absolute block bg-acid right-[28px] bottom-[28px] w-[42px] h-[112px]" />
            <span className="absolute block bg-[#f8f7f2]/60 right-[28px] top-[76px] w-[74px] h-[1px]" />
            <span className="absolute block bg-transparent border border-[#f8f7f2]/70 left-[28px] bottom-[36px] w-[74px] h-[74px] -rotate-9" />
          </div>
          <blockquote className="m-0 max-w-[850px] font-display text-[clamp(2rem,4.7vw,4.8rem)] leading-[1.02] animate-rise [animation-delay:80ms]">
            “WhiteSpc gave our brand a voice, our campaigns a rhythm, and our team a dashboard we
            actually use.”
          </blockquote>
          <p className="col-start-2 max-[940px]:col-auto mb-0 text-paper/68 font-bold animate-rise [animation-delay:140ms]">Founder, venture-backed consumer brand</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.86fr)] gap-[clamp(28px,5vw,68px)] py-[clamp(84px,12vw,150px)] w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto" id="contact">
          <div className="mb-4 text-muted text-[0.74rem] font-extrabold tracking-[0.12em] uppercase animate-rise">Contact</div>
          <div className="max-w-[850px] animate-rise [animation-delay:80ms]">
            <h2 className="font-display text-[clamp(2.4rem,5.7vw,5.7rem)] max-[620px]:text-[clamp(2.2rem,13vw,3.9rem)] font-medium tracking-normal leading-[0.95]">Have a launch, repositioning, or growth sprint in mind?</h2>
            <p className="max-w-[720px] mt-[22px] mb-6 text-muted text-[clamp(1rem,1.7vw,1.2rem)]">
              Send the brief. We will reply with the cleanest next step: audit, workshop, or a
              focused 90-day growth engagement.
            </p>
            <a className="inline-flex items-center justify-center min-h-[48px] px-5 py-[13px] border border-ink text-[0.78rem] font-extrabold tracking-[0.09em] uppercase transition-all duration-200 ease-out hover:-translate-y-[2px] bg-ink text-paper mt-3 max-[620px]:w-full" href="mailto:hello@whitespc.studio">
              hello@whitespc.studio
            </a>
          </div>
        </section>
      </main>

      <footer className="flex justify-between max-[620px]:block gap-5 py-[34px] pb-[44px] text-muted border-t border-line text-[0.86rem] font-bold w-[min(1180px,calc(100%-40px))] max-[940px]:w-[min(100%-28px,760px)] mx-auto">
        <p className="m-0 max-[620px]:mb-3">WhiteSpc © 2026</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
