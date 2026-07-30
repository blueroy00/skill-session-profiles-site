import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  DownloadSimple,
  GithubLogo,
  List,
  Moon,
  SlidersHorizontal,
  StackSimple,
  Sun,
  X,
} from "@phosphor-icons/react";
import { copy, type GalleryKey, type Locale } from "./content";

const repositoryUrl = "https://github.com/blueroy00/skill-session-profiles";
const releaseUrl = `${repositoryUrl}/releases/tag/v0.2.1`;
const downloadUrl = `${repositoryUrl}/releases/download/v0.2.1/Skill-Session-Profiles-0.2.1-arm64.dmg`;
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const galleryOrder: GalleryKey[] = ["tasks", "projects", "profiles", "dark"];

function imageFor(locale: Locale, key: GalleryKey) {
  const language = locale === "zh" ? "zh" : "en";
  const name =
    key === "tasks"
      ? "task-configuration"
      : key === "projects"
        ? "project-configuration"
      : key === "profiles"
        ? "profile-editor"
        : "dark-theme";
  return assetUrl(`images/${name}-${language}.png`);
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    return localStorage.getItem("ssp-locale") === "en" ? "en" : "zh";
  });
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("ssp-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [gallery, setGallery] = useState<GalleryKey>("tasks");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    localStorage.setItem("ssp-locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ssp-theme", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  const navItems = [
    { label: t.nav.product, href: "#product" },
    { label: t.nav.workflow, href: "#workflow" },
    { label: t.nav.openSource, href: "#open-source" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        {locale === "zh" ? "跳到主要内容" : "Skip to content"}
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Skill Session Profiles">
          <img src={assetUrl("images/logo.png")} alt="" />
          <span>Skill Session Profiles</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button language-button"
            type="button"
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            aria-label={t.nav.language}
            title={t.nav.language}
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={t.nav.theme}
            title={t.nav.theme}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a className="header-github" href={repositoryUrl}>
            <GithubLogo size={20} weight="fill" />
            <span>{t.nav.github}</span>
          </a>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.menu}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        <nav
          id="mobile-menu"
          className="mobile-nav"
          data-open={menuOpen}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={repositoryUrl} onClick={() => setMenuOpen(false)}>
            {t.nav.github}
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <img
            className="hero-image"
            src={imageFor(locale, theme === "dark" ? "dark" : "tasks")}
            alt={t.hero.imageAlt}
          />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-copy">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={repositoryUrl}>
                <GithubLogo size={20} weight="fill" />
                {t.hero.primary}
              </a>
              <a className="button button-secondary" href={downloadUrl}>
                <DownloadSimple size={20} />
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </section>

        <section className="statement section" id="product">
          <div className="section-inner statement-inner">
            <div className="statement-mark" aria-hidden="true">
              <img src={assetUrl("images/logo.png")} alt="" />
            </div>
            <div>
              <h2>{t.statement.title}</h2>
              <p>{t.statement.body}</p>
            </div>
          </div>
        </section>

        <section className="capability-section section">
          <div className="section-inner capability-list">
            {t.capabilities.map((item, index) => (
              <article className="capability-row" key={item.title}>
                <span className="capability-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Check size={20} weight="bold" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section section" aria-labelledby="gallery-title">
          <div className="section-inner gallery-copy">
            <h2 id="gallery-title">{t.gallery.title}</h2>
            <p>{t.gallery.body}</p>
          </div>
          <div className="gallery-controls section-inner" role="tablist">
            {galleryOrder.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={gallery === key}
                aria-controls="gallery-panel"
                onClick={() => setGallery(key)}
              >
                {t.gallery.tabs[key]}
              </button>
            ))}
          </div>
          <div className="gallery-stage" id="gallery-panel" role="tabpanel">
            <img
              key={`${locale}-${gallery}`}
              src={imageFor(locale, gallery)}
              alt={t.gallery.alts[gallery]}
            />
          </div>
          <p className="gallery-caption section-inner">
            {t.gallery.captions[gallery]}
          </p>
        </section>

        <section className="workflow section" id="workflow">
          <div className="section-inner">
            <h2>{t.workflow.title}</h2>
            <div className="workflow-track">
              {t.workflow.items.map((item, index) => (
                <article key={item.title}>
                  <div className="workflow-icon" aria-hidden="true">
                    {index === 0 ? (
                      <StackSimple size={28} />
                    ) : index === 1 ? (
                      <SlidersHorizontal size={28} />
                    ) : (
                      <Check size={28} />
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="local-section section" id="open-source">
          <div className="section-inner local-layout">
            <div className="local-copy">
              <h2>{t.local.title}</h2>
              <p>{t.local.body}</p>
              <a className="text-link" href={`${repositoryUrl}/tree/main/src`}>
                {t.local.source}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="path-panel">
              <span>{t.local.pathLabel}</span>
              <code>{t.local.path}</code>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-inner faq-layout">
            <h2>{t.faq.title}</h2>
            <div className="faq-list">
              {t.faq.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section">
          <div className="section-inner final-layout">
            <div>
              <h2>{t.final.title}</h2>
              <p>{t.final.body}</p>
            </div>
            <div className="final-actions">
              <a className="button button-light" href={repositoryUrl}>
                <GithubLogo size={20} weight="fill" />
                {t.final.primary}
              </a>
              <a className="button button-outline-light" href={releaseUrl}>
                {t.final.secondary}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <div className="footer-brand">
            <img src={assetUrl("images/logo.png")} alt="" />
            <div>
              <strong>Skill Session Profiles</strong>
              <span>{t.footer.description}</span>
            </div>
          </div>
          <div className="footer-links">
            <a href={repositoryUrl}>GitHub</a>
            <a href={`${repositoryUrl}/blob/main/LICENSE`}>
              {t.footer.license}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
