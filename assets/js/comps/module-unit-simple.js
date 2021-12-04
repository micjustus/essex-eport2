import { modules } from "../modules.js";

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
    clickLink = `data-href='${element.href}' onclick="openPost(this, 'image-only')"`;
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

  var writing = `<li class="button" onclick='loadPdf("${content.title} - Launching", "${content.writing}")'>Reflective Writing</li>`;
  return writing;
}

function buildActivities(content) {
  if (!content || !content.activities || !content.activities.length) return "";

  var writing = buildUnitWriting(content);

  var activities = content.activities
    .filter((val, idx, array) => val.activity !== "assignment")
    .map((element, idx) => {
      return buildActivity(element);
    }).join("");

  if (!activities) {
    activities = `<section style="text-align:center">No activity data supplied</section>`;
  }

  return `<section><header class="activities">Activities</header><ul>${writing}${activities}</ul></section>`;
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
    return `<section class="accordion-header expander" aria-expanded="false"><header>Reading Material</header></section><section class="accordion-body">${required} ${optional}</section>`;
  }
}

function buildOutcomes(content) {
  if (!content.outcomes) {
    return "No outcomes specified";
  }

  return (
    `<section>
        <header class="outcomes">Unit Learning Outcomes</header>
        <ul class="left-align">
        ` +
    content.outcomes.map((element) => `<li>${element}</li>`).join("") +
    `
        </ul>
     </section>`
  );
}

export class ModuleUnitSimple extends HTMLElement {
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

    var outcomes = buildOutcomes(content);
    var reading = buildReading(content);
    var activities = buildActivities(content);

    const template = `
        <section>
            <header class="unit-header-1">${content.description}</header>
            ${outcomes}
            <section>${activities}</section>
            ${reading}
        </section>`;

    this.innerHTML = template;
  }
}

customElements.define("module-unit-simple", ModuleUnitSimple);
