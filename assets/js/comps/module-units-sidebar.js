import { modules } from "./../modules.js";

export class ModuleUnitsSidebar extends HTMLElement {
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

  static get observedAttributes() {
    return ["moduleId"];
  }

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    var items = mod.units
      .map((elm, idx) => {
        return `<li>${elm.title}</li>`;
      })
      .join("");

    this.innerHTML = 
    `<section style='width: 300px'>
      <ul>${items}</ul>
    </section>`;
  }
}

customElements.define("module-units-sidebar", ModuleUnitsSidebar);
