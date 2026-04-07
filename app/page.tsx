const services = [
  {
    title: "Technical SEO Audits",
    description:
      "Find and fix the issues blocking rankings, from indexation problems to weak site structure and page speed.",
  },
  {
    title: "On-Page SEO",
    description:
      "Improve metadata, headings, internal linking, and page intent so your content matches what searchers want.",
  },
  {
    title: "Content Strategy",
    description:
      "Create a plan for high-intent pages and articles that bring in relevant visitors and build topical authority.",
  },
  {
    title: "Local SEO",
    description:
      "Boost your visibility in your area with stronger local signals, optimized listings, and location-focused pages.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit and research",
    description:
      "We review your website, competitors, keywords, and technical setup to identify the strongest growth opportunities.",
  },
  {
    number: "02",
    title: "Prioritize actions",
    description:
      "You get a practical roadmap focused on the fixes and content opportunities most likely to move results.",
  },
  {
    number: "03",
    title: "Optimize and grow",
    description:
      "We improve the right pages, strengthen your content, and track performance so progress stays visible.",
  },
];

const highlights = [
  {
    title: "Technical SEO",
    description: "Fix crawl, speed, and indexing issues",
  },
  {
    title: "Content Strategy",
    description: "Target high-intent keywords that convert",
  },
  {
    title: "Local SEO",
    description: "Show up in maps and local search results",
  },
];

const benefits = [
  "Rank higher for important keywords",
  "Improve site health and crawlability",
  "Turn organic traffic into enquiries",
];

const stats = [
  {
    value: "3x",
    description:
      "More organic traffic opportunities through focused keyword targeting",
  },
  {
    value: "90 days",
    description:
      "To build stronger SEO foundations and unlock compounding momentum",
  },
  {
    value: "100%",
    description:
      "Customized recommendations based on your site, niche, and goals",
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <a className="brand" href="#top">
            Spark SEO
          </a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="heroContent" id="top">
          <div className="heroCopy">
            <p className="eyebrow">SEO services for ambitious brands</p>
            <h1>Get found by the people already searching for what you offer.</h1>
            <p className="lead">
              Spark SEO helps businesses grow with strategic SEO that improves
              rankings, attracts qualified traffic, and turns search visibility
              into real leads.
            </p>

            <div className="heroActions">
              <a className="button buttonPrimary" href="#contact">
                Book a Free SEO Call
              </a>
              <a className="button buttonSecondary" href="#services">
                See Services
              </a>
            </div>

            <ul className="heroMetrics">
              {highlights.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="heroCard">
            <p className="cardLabel">What you can expect</p>
            <h2>Clear strategy. Better rankings. Measurable growth.</h2>
            <div className="cardGrid">
              {stats.map((item) => (
                <div key={item.value}>
                  <span className="stat">{item.value}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </header>

      <section className="section trustBar" aria-label="Client benefits">
        {benefits.map((benefit) => (
          <p key={benefit}>{benefit}</p>
        ))}
      </section>

      <section className="section" id="services">
        <div className="sectionHeading">
          <p className="eyebrow">Services</p>
          <h2>SEO support built around visibility, authority, and conversion.</h2>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="results">
        <div className="sectionHeading">
          <p className="eyebrow">Process</p>
          <h2>A simple SEO process that keeps momentum moving.</h2>
        </div>

        <div className="processGrid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial">
        <blockquote>
          "The difference with good SEO is simple: your ideal clients stop
          scrolling past you and start finding you first."
        </blockquote>
      </section>

      <section className="section ctaWrap" id="contact">
        <div className="cta">
          <div>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Ready to grow your organic traffic?</h2>
            <p>
              Whether you need a full SEO strategy, a technical audit, or
              support improving rankings for key pages, Spark SEO can help you
              build a plan that fits your business.
            </p>
          </div>

          <div className="contactActions">
            <a className="button buttonPrimary" href="tel:7799049801">
              Call 7799049801
            </a>
            <p className="contactNote">Business name: Spark SEO</p>
          </div>
        </div>
      </section>
    </main>
  );
}
