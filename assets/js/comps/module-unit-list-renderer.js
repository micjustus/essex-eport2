import { modules } from "../modules.js";

export { ModuleUnitSimple } from "./module-unit-simple.js";
import { ModuleUnitsSidebar } from "./module-units-sidebar.js";

export class ModuleUnitListRenderer extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "moduleId") this.moduleId = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  set moduleId(newValue) {}

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    this.innerHTML = 
    `<section class="centered mw-80ch">
        ${mod.units.map((elm, idx) => { return `<module-unit-simple moduleId=${this.moduleId} unitId=${idx}></module-unit-simple>`; }).join("") }
    </section>`;

    ModuleUnitsSidebar.prototype.menuItemClicked = function(index) {
      var elm = document.querySelector(`module-unit-simple[unitid='${index}']`);
      if (elm){
        if (this.lastCard) this.lastCard.classList.remove("active");
        this.lastCard = elm;
        elm.classList.add("active");
        elm.scrollIntoView({ behavior: "smooth", block: 'center' });
      }
    };
  }
}

customElements.define("module-unit-list-renderer", ModuleUnitListRenderer);
