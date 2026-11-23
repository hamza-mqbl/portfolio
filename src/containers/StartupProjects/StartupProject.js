import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Branded gradient cover for projects that have no real screenshot — replaces
// the fake/placeholder logo. Carries the project name + hero metric so a
// screenshot-less card still reads as designed and distinct. (Research spec §4G.)
function ProjectCover({name, metric, icon, seed = 0}) {
  const gradients = [
    "linear-gradient(135deg, #1b2440 0%, #2b2156 55%, #63b3ed 140%)",
    "linear-gradient(135deg, #14233a 0%, #123b3a 55%, #38b2ac 140%)",
    "linear-gradient(135deg, #241a3d 0%, #3a1d4d 55%, #7f9cf5 140%)",
    "linear-gradient(135deg, #1f2233 0%, #3a2550 55%, #ed64a6 140%)"
  ];
  return (
    <div className="proj-cover" style={{backgroundImage: gradients[seed % gradients.length]}}>
      <div className="proj-cover__grid" />
      <div className="proj-cover__icon">{icon}</div>
      <div className="proj-cover__text">
        <div className="proj-cover__name">{name}</div>
        {metric && <div className="proj-cover__metric">{metric}</div>}
      </div>
    </div>
  );
}

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win && win.focus();
  }

  function resolveLinkUrl(link) {
    if (link.url) return link.url;
    const ua = navigator.userAgent || navigator.vendor || "";
    if (/android/i.test(ua)) return link.googleUrl || link.appleUrl;
    if (/iPad|iPhone|iPod/i.test(ua)) return link.appleUrl || link.googleUrl;
    return link.appleUrl || link.googleUrl;
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={800} distance="20px">
      <div className="main" id="projects">
        <div>
          <h2 className="skills-heading">{bigProjects.title}</h2>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="proj-grid">
            {bigProjects.projects.map((project, i) => {
              const tags = project.tags || [];
              const shown = tags.slice(0, 5);
              const extra = tags.length - shown.length;
              return (
                <article key={i} className="proj-card">
                  <div className="proj-card__media">
                    {project.image ? (
                      <img
                        loading="lazy"
                        src={project.image}
                        alt={`${project.projectName} preview`}
                      />
                    ) : (
                      <ProjectCover
                        name={project.projectName}
                        metric={project.metric}
                        icon={project.coverIcon || "{ }"}
                        seed={i}
                      />
                    )}
                  </div>

                  <div className="proj-card__body">
                    <h3 className="proj-card__title">{project.projectName}</h3>
                    <p className="proj-card__desc">{project.projectDesc}</p>
                    {project.metric && project.image && (
                      <div className="proj-card__metric">
                        <span className="proj-card__metric-num">{project.metric}</span>
                      </div>
                    )}
                    {shown.length > 0 && (
                      <div className="proj-card__chips">
                        {shown.map((t, j) => (
                          <span key={j} className="proj-chip">
                            {t}
                          </span>
                        ))}
                        {extra > 0 && <span className="proj-chip proj-chip--more">+{extra}</span>}
                      </div>
                    )}
                  </div>

                  {project.footerLink && project.footerLink.length > 0 && (
                    <div className="proj-card__footer">
                      {project.footerLink.map((link, j) => (
                        <button
                          key={j}
                          className="proj-cta"
                          onClick={() => openUrlInNewTab(resolveLinkUrl(link))}
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
