const content = window.SITE_CONTENT;

const state = {
  lang: "en",
  theme: "dark",
};

const $ = (selector) => document.querySelector(selector);
const localized = (value) => {
  if (value === null || value === undefined) return "";
  return typeof value === "object" && ("zh" in value || "en" in value)
    ? value[state.lang] || value.zh || value.en || ""
    : value;
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const isExternal = (url) => /^https?:\/\//.test(url);
const linkAttributes = (url) =>
  isExternal(url) ? 'target="_blank" rel="noreferrer"' : "";

const renderRichText = (entry) => {
  if (!entry.parts) return escapeHtml(localized(entry));

  return entry.parts
    .map((part) => {
      if (part.url) {
        return `<a href="${escapeHtml(part.url)}" ${linkAttributes(part.url)}>${escapeHtml(
          localized(part.label),
        )}</a>`;
      }

      return escapeHtml(localized(part.text));
    })
    .join("");
};

function renderProfile() {
  $("#page-title").innerHTML = `<span class="name-primary">${escapeHtml(
    localized(content.profile.name),
  )}</span><span class="name-divider" aria-hidden="true"> - </span><span class="name-secondary">${escapeHtml(
    localized(content.profile.secondaryName),
  )}</span>`;
  $("#profile-mbti").href = content.profile.mbti.url;
  $("#profile-mbti-label").textContent = localized(content.profile.mbti.label);
  $("#profile-statements").innerHTML = content.profile.statements
    .map((statement) => `<p>${escapeHtml(localized(statement))}</p>`)
    .join("");
  $("#profile-bio").innerHTML = content.profile.bio
    .map((paragraph) => `<p>${renderRichText(paragraph)}</p>`)
    .join("");
  $("#profile-links").innerHTML = content.profile.links
    .map(
      (link) =>
        `<a href="${escapeHtml(link.url)}" ${linkAttributes(link.url)}>${escapeHtml(
          localized(link.label),
        )}<span aria-hidden="true">↗</span></a>`,
    )
    .join("");

  const photo = $("#profile-photo");
  photo.src = content.profile.photo;
  photo.alt = localized(content.profile.photoAlt);
  $("#profile-caption").textContent = localized(content.profile.photoCaption);
}

function renderActivities() {
  $("#activity-list").innerHTML = content.activities
    .map(
      (item) => `
        <article class="activity-item">
          <time>${escapeHtml(item.date)}</time>
          <p>
            <a href="${escapeHtml(item.url)}" ${linkAttributes(item.url)}>${escapeHtml(
              localized(item.highlight),
            )}</a>
            ${escapeHtml(localized(item.text))}
          </p>
        </article>`,
    )
    .join("");
}

function renderMedia(media, index) {
  if (!media) return "";
  const src = escapeHtml(media.src);
  const alt = escapeHtml(localized(media.alt));

  if (media.type === "video") {
    return `
      <video class="publication-media" autoplay muted loop playsinline preload="metadata"
        aria-label="${alt}">
        <source src="${src}" type="video/mp4" />
      </video>`;
  }

  return `<img class="publication-media" src="${src}" alt="${alt}" width="640" height="360" loading="lazy" />`;
}

function renderPublications() {
  $("#publication-list").innerHTML = content.publications
    .map(
      (item, index) => `
        <article class="publication-card">
          <div class="publication-visual">
            ${renderMedia(item.media, index)}
            <span class="media-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="publication-copy">
            ${item.badge ? `<p class="badge">${escapeHtml(localized(item.badge))}</p>` : ""}
            <h3>${escapeHtml(localized(item.title))}</h3>
            <p class="authors">${escapeHtml(localized(item.authors))}</p>
            <p class="venue">${escapeHtml(localized(item.venue))}</p>
            <p class="summary">${escapeHtml(localized(item.summary))}</p>
            <nav class="item-links" aria-label="${escapeHtml(localized(item.title))}">
              ${item.links
                .map(
                  (link) =>
                    `<a href="${escapeHtml(link.url)}" ${linkAttributes(link.url)}>${escapeHtml(
                      localized(link.label),
                    )}<span aria-hidden="true">↗</span></a>`,
                )
                .join("")}
            </nav>
          </div>
        </article>`,
    )
    .join("");
}

function renderTimeline(target, items) {
  $(target).innerHTML = items
    .map((item) => {
      const logos = item.logos ?? [];
      const periodParts = localized(item.period).split(/\s*—\s*/);
      const periodMarkup = periodParts
        .map((part, index) => `${index === 1 ? '<span class="timeline-dash" aria-hidden="true">—</span>' : ""}<span>${escapeHtml(part)}</span>`)
        .join("");
      const organization = escapeHtml(localized(item.organization));
      const organizationMarkup = item.url && item.url !== "#"
        ? `<a href="${escapeHtml(item.url)}" ${linkAttributes(item.url)}>${organization}</a>`
        : organization;
      const logoMarkup = logos.length
        ? `<div class="timeline-logos">
            ${logos
              .map(
                (logo) => `<a class="timeline-logo-link timeline-logo-link--${escapeHtml(logo.variant)}" href="${escapeHtml(
                  logo.url,
                )}" ${linkAttributes(logo.url)} aria-label="${escapeHtml(localized(logo.alt))}">
                    <img class="timeline-logo timeline-logo--${escapeHtml(logo.variant)}" src="${escapeHtml(
                      logo.src,
                    )}" alt="${escapeHtml(localized(logo.alt))}" />
                  </a>`,
              )
              .join("")}
          </div>`
        : "";

      return `
        <article class="timeline-item ${logos.length ? "timeline-item--with-logos" : "timeline-item--plain"}">
          <time>${periodMarkup}</time>
          ${logoMarkup}
          <div class="timeline-content">
            <h3>${organizationMarkup}</h3>
            <p class="timeline-role">${escapeHtml(localized(item.role))}</p>
            ${localized(item.details) ? `<p class="timeline-details">${escapeHtml(localized(item.details))}</p>` : ""}
            ${item.advisors ? `<p class="timeline-details timeline-advisors">${renderRichText(item.advisors)}</p>` : ""}
          </div>
        </article>`;
    })
    .join("");
}

function renderText() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = localized(content.site.title);
  $("#activities-title").textContent = localized(content.site.sections.activities);
  $("#publications-title").textContent = localized(content.site.sections.publications);
  $("#education-title").textContent = localized(content.site.sections.education);
  $("#experience-title").textContent = localized(content.site.sections.experience);
  $("#contact-title").textContent = localized(content.site.sections.contact);
  $("#publications-note").textContent = localized(content.site.publicationsNote);
  $("#footer-copyright").textContent = localized(content.footer.copyright);
  $("#footer-update").textContent = localized(content.footer.updated);
  $("#language-toggle").textContent = state.lang === "zh" ? "EN" : "中";
  $("#language-toggle").setAttribute(
    "aria-label",
    state.lang === "zh" ? "Switch to English" : "切换到中文",
  );

  $("#contact-description").textContent = localized(content.contact.description);
  $("#contact-privacy").textContent = localized(content.contact.privacy);
  $("#name-label").textContent = localized(content.contact.fields.name.label);
  $("#visitor-name").placeholder = localized(content.contact.fields.name.placeholder);
  $("#message-label").textContent = localized(content.contact.fields.message.label);
  $("#visitor-message").placeholder = localized(content.contact.fields.message.placeholder);
  $("#message-submit").textContent = localized(content.contact.submit);
  $("#message-subject").value = localized(content.contact.subject);
}

function render() {
  renderText();
  renderProfile();
  renderActivities();
  renderPublications();
  renderTimeline("#education-list", content.education);
  renderTimeline("#experience-list", content.experience);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#theme-toggle").setAttribute(
    "aria-label",
    state.theme === "dark" ? "切换到明亮模式" : "切换到深色模式",
  );
  $("#theme-toggle span").textContent = state.theme === "dark" ? "☀" : "☾";
}

$("#language-toggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  render();
});

$("#theme-toggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
});

applyTheme();
render();

const messageForm = $("#message-form");
const submitButton = $("#message-submit");
const formStatus = $("#form-status");

function setFormStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.dataset.type = type;
}

messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!messageForm.reportValidity()) return;

  const endpoint = content.contact.endpoint.trim();
  if (!endpoint || endpoint.includes("your-form-id") || endpoint.includes("你的表单ID")) {
    setFormStatus(localized(content.contact.setup), "setup");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = localized(content.contact.sending);
  setFormStatus("");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(messageForm),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`Submission failed: ${response.status}`);

    messageForm.reset();
    setFormStatus(localized(content.contact.success), "success");
  } catch (error) {
    console.error(error);
    setFormStatus(localized(content.contact.error), "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = localized(content.contact.submit);
  }
});
