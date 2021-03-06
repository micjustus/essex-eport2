import { modules } from "../modules.js";
import { initAccordion2} from '../accordion.js';

function buildActivityLink(element) {
  var clickLink = "";

  if (!element.href) {
    return clickLink;
  }

  if (element.ref === "pdf") {
    clickLink = `onclick='loadPdf("${element.title}", "${element.href}")'`;
  } else if (element.ref === "text/xml") {
    clickLink = `onclick='openXml("${element.title}", "${element.href}")'`;
  } else if (element.ref !== "zip") {
  } else {
    clickLink = `data-href='${element.href}' onclick="openContentWithFetch(this, 'image-only')"`;
  }
  return clickLink;
}

function buildActivityList(element) {
  if (!element.items) {
    return "";
  }

  var html =
    `<section>
    <ul class="topics">` +
    element.items
      .map((val) => {
        if (val.lang && val.lang === "xml") {
          return `<li class="snippet" onclick="openXml('${val.title}', '${val.href}')">${val.title}</li>`;
        } else if (val.type && val.type == "image") {
          return `<li class="snippet" onclick="openImage('${val.title}', '${val.href}')">${val.title}</li>`;
        } else {
          return `<li class="snippet" onclick="openScript('${val.title}', '${val.href}')">${val.title}</li>`;
        }
      })
      .join("") +
    `</ul></section>`;

  return html;
}

function buildActivity(element) {
  var first = "";

  if (element.display === "date") {
    first = `<span class="date">(${element.month} ${element.day}) ${element.title}</span>`;
  } else if (element.items) {
    return buildActivityList(element);
  } else {
    first = `${element.title}`;
  }

  var clickLink = buildActivityLink(element);

  if (element.ref == "zip") {
    first = `
        <div>
          ${first}
          <div class="click-more"><p><em>Click to download content</em></p></div>
        </div>`;

    return `<section class="left nowrap card"><a href="${element.href}" alt='' download="${element.filename}">${first}</a></section>`;
  }

  return `<li class="button" ${clickLink}>${first}</li>`;
}

function buildUnitWriting(content) {
  if (!content.writing) return "";

  var writing = `<section class="button" onclick='loadPdf("${content.title} - Launching", "${content.writing}")'>Reflective Writing</section>`;
  return writing;
}

function buildActivities(content) {
  if (!content || !content.activities || !content.activities.length) return "";

  var activities = content.activities
    .filter((val) => val.activity !== "assignment")
    .map((element) => {
      return buildActivity(element);
    }).join("");

  if (!activities) {
    activities = `<section style="text-align:center">No activity data supplied</section>`;
  }

  return `<section><ul>${activities}</ul></section>`;
}

function buildReading(content) {
  var required = "";
  var optional = "";

  if (content.reading) {
    if (content.reading.required && content.reading.required.length) {
      required = content.reading.required
        .map((element) => `<p>${element}</p>`)
        .join("");

      required = `<section class="reading-list"><h4>Required Reading</h4><section>${required}</section></section>`;
    }

    if (content.reading.optional && content.reading.optional.length) {
      optional = content.reading.optional
        .map((element) => `<p>${element}</p>`)
        .join("");

      optional = `<section class="reading-list"><h4>Additional Reading</h4><section>${optional}</section></section>`;
    }
  }

  if (required || optional) {
    return `<section class="button secondary snippet" onclick="openPopupHTMLBase64('Reading Material', '${window.btoa(encodeURIComponent(required))}', '${window.btoa(encodeURIComponent(optional))}')">Reading Material</section>`;
  }
}

function buildOutcomes(content) {
  if (!content.outcomes) {
    return "No outcomes specified";
  }

  return (
    `<ul>
      ${content.outcomes.map((element) => `<li>${element}</li>`).join("")}
    </ul>`
  );
}

export class ModuleUnitSimpleCard extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId", "unitId"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "moduleId") this.moduleId = newValue;

    if (name == "unitId") this.unitId = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  set moduleId(newValue) {}

  get unitId() {
    return this.getAttribute("unitId");
  }

  set unitId(newValue) {}

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    var unit = this.unitId;
    if (unit < 0 || unit > mod.units.length - 1) return;

    var content = mod.units[unit];

    var writing = buildUnitWriting(content);
    var outcomes = buildOutcomes(content);
    var activities = buildActivities(content);
    var reading = buildReading(content);

    const template = `
    <section>
        <header class="unit-header-1 sticky blurred">${content.description}</header>
          <div class="accordion-header expander"><header>Unit outcomes</header></div>
          <section class="accordion-body content-embossed">${outcomes}</section></div>
          <div style="padding: 1em">
            ${writing}
            ${activities}
            ${reading}
          </div>
    </section>`;

    this.innerHTML = template;

    //var showTooltip;
    var div = document.createElement("div");
    div.classList.add("tooltip");
    div.innerHTML = outcomes;

    initAccordion2();

    const  header = this.querySelector(".unit-header-1");
    const parent = header.parentElement;
    const observer = new IntersectionObserver(([e])=> { 
        if (e.boundingClientRect.top < -0.6) {
        header.classList.add("pinned");
     } else
    {
        header.classList.remove("pinned");
    } }, { threshold: [0.9, 1] });
    observer.observe(parent);
  }
}

customElements.define("module-unit-simple-card", ModuleUnitSimpleCard);
