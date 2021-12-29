import { modules } from "./../modules.js";
import * as accordion from './../accordion.js';

function hasUnitReflections(moduleId){
  var module = modules.find((val) => val.id == moduleId);
  if (!module) {
    return false;
  }

  var count = 0;
  module.units.forEach((val, idx) => {
    if (val.writing) {
       count += 1;
    };
  });

  return count > 0;
}

function hasSeminars(moduleId){
    var module = modules.find((val) => val.id == moduleId);
    if (!module) {
      return false;
    }

    var count = 0;
    module.units.forEach((val, idx) => {
      val.activities.forEach((act) => {
        if (act.type == "seminar") count += 1;
      });
    });

    return count > 0;
}


export class ModuleInfo extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId", "image"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "moduleId") this.moduleId = newValue;
    if (name == "image") this.image = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  set moduleId(value) {
    this.setAttribute("moduleId", value);
  }

  get image(){
    return this.getAttribute("image");
  }

  set image(value){
    this.setAttribute("image", value);
  }

  buildInfoActivites(mod) {
    var first ="";


    for (let unit of mod.units) {
      for (let act of unit.activities) {
        if (act.activity !== "assignment") continue;

        if (act.ref == "zip") {
          first =
            first +
            `<div class="card highlight text-center p-1 no-aspect">
            <a href="${act.href}" download="${act.filename}"><h4>${act.title}</h4></a>`;
            
            first = first + `</div>`;
        } else {
          first =
            first +
            `<div class="card highlight text-center p-1 no-aspect" onclick="loadPdf('${act.title}', '${act.href}')">
          <h4>${act.title}</h4>
          `;

          first = first + `</div>`;
        }

        
      }
    }

    if (mod.meetings) {
      first =
        first + `<module-meetings-list moduleId='${mod.id}'></module-meetings-list>`;
    }

    if (first){
        first=  "<section class='assignment'><h4 class='assignment-header'>Assignment</h4><section class='row module-unit-docs'>" + first + "</section></section>";
    }

    return first;
  }

  buildInfoExtras(mod) {
    var first = "";

    if (mod.reflections) {
      first =
        first +
        `<div class="card highlight text-center p-1 no-aspect" onclick='loadPdf("Module Reflection", "${mod.reflections}")'>
          <h4>Module Reflection</h4>
        </div>`;
    }

    if (mod.project) {
      first =
        first +
        `<div class="card highlight text-center p-1 no-aspect"  onclick="loadPdf('Project Reflection', '${mod.project}')">
      <h4>Project Evaluation</h4>
      </div>`;
    }

    if (mod.actionPlan) {
      first =
        first +
        `<div class="card highlight text-center p-1 no-aspect" onclick="loadPdf('Module Action Plan', '${mod.actionPlan}')">
        <h4>Action Plan</h4>
      </div>`;
    }

    if (mod.skillsMatrix) {
      first =
        first +
        `<div class="card highlight text-center p-1 no-aspect" onclick="loadPdf('Module Skills Matrix', '${mod.skillsMatrix}')">
        <h4>Skills Matrix</h4>
      </div>`;
    }

    first = first + this.buildInfoActivites(mod);

   
    return first;
  }

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    var items = mod.outcomes
      .map((val, idx) => {
        return `<li>${val}</li>`;
      })
      .join("");

    var first = "";

    if (mod.renderAdditional){
      first = mod.renderAdditional();
    }
    else{
      first = `<section class="band-1" style="padding:3em 0">`;

      if (this.image){
        first = first + `<img src='${this.image}' class="module-image"/>`;
      }

      first = first + `
            <div class="centered mw-80ch">
              <header class="text-center">
                <h2>${mod.title}</h2>
              </header>
              <ul>${items}</ul>
          `;
    }

    first =
      first +
      `
        <section class="accordion-header expander centered" style="border-radius: 6px" aria-expanded="false">
            <header class="text-center color-8 centered" >
              Module Documents
            </header>
      </section>
            <section class="accordion-body module-units">
              
                <div class="row module-unit-docs">
        `;

    if (hasUnitReflections(this.moduleId)){
      first =
        first +
        `<div class="card highlight text-center p-1 no-aspect" onclick="openModuleUnits(${this.moduleId})">
          <h4>Unit Reflections</h4>
        </div>`;
    }
        
        if (hasSeminars(this.moduleId))
        {
          first = first + 
          `<div class="card highlight text-center p-1 no-aspect" onclick="openModuleSeminars(${this.moduleId})">
            <h4>Unit Seminars</h4>
          </div>`;
        }

    first = first + this.buildInfoExtras(mod) + `</div></section></div>`;

    this.innerHTML = first;

    accordion.initAccordion2();
  }
}

customElements.define("module-info", ModuleInfo);
