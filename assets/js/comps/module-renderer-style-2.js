import { modules } from "./../modules.js";

export { ModuleInfo } from "./module-info.js";
export { ModuleHeader } from "./module-header.js";
export { SeminarCards } from "./unit-seminars.js";
export { ModuleMeetingsList } from "./module-meetings-list.js";
export { ModuleUnitTabs } from "./module-units-tabs.js";
export { ModuleUnitRenderer } from "./module-unit-renderer.js";
export { ModuleUnitListRenderer } from "./module-unit-list-renderer.js";

export class ModuleRendererStyle2 extends HTMLElement {
  static get observedAttributes() {
    return ["module-id"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "module-id") this.moduleId = newValue;
  }

  get moduleId() {
    return this.getAttribute("module-id");
  }

  set moduleId(newValue) {}

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) {
      return;
    }

    this.innerHTML = `
      <section id="main" class="row">
        <module-units-sidebar moduleId="${this.moduleId}"></module-units-sidebar>
        
        <section class="row vertical stretch module-units-2" >
          <module-info moduleId="${this.moduleId}"></module-info>
            <header class="text-center color-8">
              <h3>Module Units</h3>
            </header>
      
            <module-unit-list-renderer moduleId=${this.moduleId}></module-unit-list-renderer>
      </section>
		</section>`;
  }
}

customElements.define("module-renderer-style-2", ModuleRendererStyle2);
