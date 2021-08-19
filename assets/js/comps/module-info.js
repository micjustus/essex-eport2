import { modules } from "./../modules.js";

export class ModuleInfo extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.moduleId = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  set moduleId(value) {
    this.setAttribute("moduleId", value);
  }

  buildInfoActivites(mod) {
    var first = "";

    for (let unit of mod.units) {
      for (let act of unit.activities) {
        if (act.activity !== "assignment") continue;

        if (act.ref == "zip") {
          first =
            first +
            `<div class="card active text-center p-1 no-aspect">
            <a href="${act.href}" download="${act.fileName}"><h4>${act.title}</h4></a>
          </div>`;
        } else {
          first =
            first +
            `<div class="card active text-center p-1 no-aspect" onclick="loadPdf('${act.title}', '${act.href}')">
          <h4>${act.title}</h4>
        </div>`;
        }
      }
    }

    return first;
  }

  buildInfoExtras(mod) {
    var first = "";

    if (mod.reflections) {
      first =
        first +
        `<div class="card active text-center p-1 no-aspect" onclick='loadPdf("Module Reflections", "${mod.reflections}")'>
          <h4>Module Reflection</h4>
        </div>`;
    }

    if (mod.project) {
      first =
        first +
        `<div class="card active text-center p-1 no-aspect"  onclick="loadPdf('Module Project', '${mod.project}')">
      <h4>Project Reflection</h4>
      </div>`;
    }

    if (mod.actionPlan) {
      first =
        first +
        `<div class="card active text-center p-1 no-aspect" onclick="loadPdf('Module Action Plan', '${mod.actionPlan}')">
        <h4>Action Plan</h4>
      </div>`;
    }

    if (mod.skillsMatrix) {
      first =
        first +
        `<div class="card active text-center p-1 no-aspect" onclick="loadPdf('Module Skills Matrix', '${mod.skillsMatrix}')">
        <h4>Skills Matrix</h4>
      </div>`;
    }

    if (mod.contract) {
      first =
        first +
        `<div class="card active text-center p-1 no-aspect" onclick="loadPdf('SSD Team Contract', '${mod.contract}')">
        <h4>Team Contract</h4>
      </div>`;
    }

    first = first + this.buildInfoActivites(mod);

    if (mod.meetings) {
      first =
        first + `<module-meetings moduleId='${mod.id}'></module-meetings>`;
    }

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

    var first = `<section class="band-1 p-5">
          <div class="centered mw-80ch">
            <header class="text-center">
              <h2>${mod.title}</h2>
            </header>
            <ul>${items}</ul>
          </div>
        `;

    first =
      first +
      `<div class="module-units">
        <header class="text-center color-8">
          <h3>Module Documents</h3>
        </header>
        <div class="row module-unit-docs">
        `;

    first =
      first +
      `<div class="card active text-center p-1 no-aspect" onclick="openModuleUnits(${this.moduleId})">
        <h4>Unit Reflections</h4>
        </div>`;

    first = first + this.buildInfoExtras(mod) + `</div></div></section>`;

    this.innerHTML = first;
  }
}

customElements.define("module-info", ModuleInfo);
