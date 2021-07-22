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

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    var items = mod.outcomes
      .map((val, idx) => {
        return `<li>${val}</li>`;
      })
      .join("");

      var first = 
        `<section class="band-1 p-5">
          <div class="centered content-width mw-80ch">
            <header class="text-center">
            <h2>${mod.title}</h2>
            </header>
            <ul>${items}</ul>
        `;

      if (mod.reflections){
        first = first + 
        `<div class="card full-width no-aspect" onclick='loadPdf("Module Reflections", "${mod.reflections}")'>
          <h4>Reflections about ${mod.title}</h4>
        </div>`
      }

      first = first + 
          `</div></section>`;

      this.innerHTML = first;
  }
}

customElements.define("module-info", ModuleInfo);
