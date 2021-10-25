import { UnitCard } from "./unit-card.js";
import "./../posts.js";
import * as accordion from "./../accordion.js";

var lastRenderElm;

function buildUnitWriting(content) {
  if (!content.writing) return "";

  var writing = `
      <section class="left nowrap card" onclick='loadPdf("${content.title} - Launching", "${content.writing}")'>
        <h4>Reflective Writing</h4>
        <p>
          Thoughts, findings or additional research related to <strong>${content.title}</strong>.
        </p>
        <div class="click-more">
          <p><em>Click to read more</em></p>
        </div>
      </section>
      `;

  return writing;
}

function buildActivityLink(element) {
  var clickLink = "";
  if (!element.href) {
    return clickLink;
  }

  if (element.ref === "pdf") {
    clickLink = `onclick='loadPdf("${element.title}", "${element.href}")'`;
  } 
  else if (element.ref === "text/xml") {
    clickLink = `onclick='openXml("${element.title}", "${element.href}")'`;
  } 
  else if (element.ref !== "zip") {
  } 
  else {
    clickLink = `data-href='${element.href}' onclick="openPost(this, 'image-only')"`;
  }
  return clickLink;
}

function buildActivityList(element){
  if (!element.items)
    {
      return "";
    }

  var html = `<section>
  <ul class="topics">` + 
  
  element.items.map((val) => {
    if (val.lang && val.lang === "xml"){
      return `<li class="snippet" onclick="openXml('${val.title}', '${val.href}')">${val.title}</li>`
    }
    else if (val.type && val.type == "image")
    {
        return `<li class="snippet" onclick="openImage('${val.title}', '${val.href}')">${val.title}</li>`
    }
    else
    {
      return `<li class="snippet" onclick="openScript('${val.title}', '${val.href}')">${val.title}</li>`
    }
  }).join("")

  + `</ul></section>`;

  return html;
}

function buildActivity(element) {
  var first = "";

  if (element.display === "date") {
    first = `
      <ul class="dates">
          <li class="dates">
              <span class="date">${element.month} <strong>${element.day}</strong></span>
              <h4>${element.title}</h4>
              <p>${element.description || ""}</p>
          </li>
      </ul>
      `;
  } 
  else if (element.items) 
  {
    return buildActivityList(element);
  }
  else 
  {
    first = `
      <h4>${element.title}</h4>
      <p>${element.description || ""}</p>
      `;
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

  first = `
      <div>
        ${first}
        <div class="click-more"><p><em>Click to read more</em></p></div>
      </div>`;

  return `<section class="left nowrap card" ${clickLink}>${first}</section>`;
}

function buildActivities(content) {
  if (!content || !content.activities || !content.activities.length) return "";

  console.log("buildActivities");
  
  var writing = buildUnitWriting(content);
  var activities = "";

  nonactivities = content.activities.filter((val, idx, array)=> val.type !== "assignment");

  content.nonactivities.forEach((element, idx) => {
    activities = activities + buildActivity(element);
  });

  if (activities) {
    return `<section><header class="activities">Activities</header><div class="row gap-1 left">${writing}${activities}</row></section>`;
  }
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

UnitCard.prototype.render = function (content, targetSite) {
  if (!content) return;

  var tgt = document.getElementById(targetSite);
  if (!tgt) return;

  if (lastRenderElm) {
    tgt.removeChild(lastRenderElm);
    accordion.closeAccordion(lastRenderElm);
  }

  var outcomes = buildOutcomes(content);
  var reading = buildReading(content);
  var activities = buildActivities(content);

  const template = `
    <header class="unit-header">${content.description}</header>
    ${outcomes}
    <section>${activities}</section>${reading}`;

  var div = document.createElement("div");
  div.innerHTML = template;

  tgt.textContent = "";
  tgt.appendChild(div);

  lastRenderElm = div;

  accordion.initAccordion2(lastRenderElm);
};
