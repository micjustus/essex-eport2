import { modules } from "../modules.js";

export { ModuleUnitSimpleCard } from "./module-unit-simple-card.js";
export { ModuleUnitSimplePage } from "./module-unit-simple-page.js";

export class ModuleUnitListRenderer extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId", "style"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "moduleId") this.moduleId = newValue;
    if (name == "style") this.style = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  get style() {
    return this.getAttribute("style");
  }

  set moduleId(newValue) {}

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    if (this.style == "pages"){
      this.innerHTML = 
      `<section class="centered mw-120ch">
          ${mod.units.map((elm, idx) => { return `<module-unit-simple-page moduleId=${this.moduleId} unitId=${idx}></module-unit-simple-page>`; }).join("") }
      </section>`;

    }
    else {
      this.innerHTML = 
      `<section class="centered mw-80ch">
          ${mod.units.map((elm, idx) => { return `<module-unit-simple-card moduleId=${this.moduleId} unitId=${idx}></module-unit-simple-card>`; }).join("") }
      </section>`;
    }
  }
}

customElements.define("module-unit-list-renderer", ModuleUnitListRenderer);
