import { modules } from "../modules.js";
import { initAccordion2 } from '../accordion.js';

function buildActivityLink(element) {
  var clickLink = "";

  if (!element.href) {
    return clickLink;
  }

  if (!element.href) return "";

  if (element.ref === "pdf") {
    clickLink = `onclick='loadPdf("${element.title}", "${element.href}")'`;
  } else if (element.ref === "text/xml") {
    clickLink = `onclick='openXml("${element.title}", "${element.href}")'`;
  } else if (element.ref !== "zip") {
  } else {
    clickLink = `data-href='${element.href}' onclick="openContentwithFetch(this, 'image-only')"`;
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

  if (element.display) {
    var parts = element.display.split(';');

    if (parts.length == 1){
      if (element.display === "date") {
        first = `<span class="date podcast">(${element.month} ${element.day}) ${element.title}</span>`;
      }
      else if (element.display === "team") {
        first = `<span class="team-icon">${element.title}</span>`;
      }
      else if (element.display == "tutor"){
        first = `<span class="tutor-icon">${element.title}</span>`;
      }
      else if (element.display == "seminar"){
        first = `<span class="seminar-icon">${element.title}</span>`;
      }
      else {
        first = `<span>${element.title}</span>`;
      }
    }
    else{
      var span = document.createElement("span");
      if (parts.includes("date")){
        span.classList.add("date");
        span.innerText = `(${element.month} ${element.day}) ${element.title}`;
      }
      if (parts.includes("team")){
        span.classList.add("team-icon");
      }

      first = span.outerHTML;
    }
  }
  else if (element.items) {
    return buildActivityList(element);
  } else {
    first = `${element.title}`;
  }

  var clickLink = buildActivityLink(element);

  if (element.ref == "zip") {
    first = `<div>${first}<div class="click-more"><p><em>Click to download content</em></p></div></div>`;

    return `<section class="left nowrap card"><a href="${element.href}" alt='' download="${element.filename}">${first}</a></section>`;
  }

  if (!clickLink) return "";

  var css = 
    element.type == "discussion" ? "a-discussion" :
    element.type == "reflection" ? "a-reflection" : 
    element.type == "assignment" ? "a-assignment" :
    element.type == "codio" ? "a-codio" : 
    element.type == "activity" ? "a-activity" : 
    element.type == "seminar" ? "a-seminar" :
    element.type == "team" ? "a-team" :
    element.type == "effort" ? "a-effort" :
    "";

  return `<div class="activity ${css}" ${clickLink}>${first}</div>`;
}

function buildUnitWriting(content) {
  if (!content.writing) return "";

  var writing = `<section class="button pre-think-icon" onclick='loadPdf("${content.title} - Launching", "${content.writing}")'>Unit Reflections</section>`;
  return writing;
}

function buildActivities(content) {
  if (!content) return "";

  if (!content.activities) content.activities = [];

  var activities = content.activities
    .filter((val) => val.activity !== "assignment")
    .map((element) => {
      return buildActivity(element);
    }).join("");

  if (!activities) {
    return `<section class="activities-box" style="text-align:left"><header>Activities</header><section>No activity data.</section></section>`;
  }

  return `<section class="activities-box"><header>Activities</header><div class="activities-child">${activities}</div></section>`;
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
    return `<section class="activities-box"><header>Unit Reading</header><section class="activity snippet book" onclick="openPopupHTMLBase64('Reading Material', '${window.btoa(encodeURIComponent(required))}', '${window.btoa(encodeURIComponent(optional))}')">Reading Material</section></section>`;
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

export class ModuleUnitSimplePage extends HTMLElement {
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

  set moduleId(newValue) { }

  get unitId() {
    return this.getAttribute("unitId");
  }

  set unitId(newValue) { }

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
        <header class="unit-header-1">${parseInt(this.unitId) + 1}. ${content.description}</header>
        
        <section class="activities-box">
            <header>Unit outcomes</header>
            <div class="activities-child">
              ${outcomes}
            </div>
        </section>
          
        <div class="unit-page-content">
          <div class="activity-section">
            ${activities}
            ${reading}
          </div>
        </div>

        <footer>
          ${writing}
        </footer>
    </section>`;

    this.innerHTML = template;

    initAccordion2();
  }
}

customElements.define("module-unit-simple-page", ModuleUnitSimplePage);
