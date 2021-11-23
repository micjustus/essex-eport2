import { modules } from "./../modules.js";
import * as accordion from './../accordion.js';

export { ModuleInfo } from './module-info.js';
export { ModuleHeader } from './module-header.js';
export { SeminarCards } from './unit-seminars.js';
export { ModuleMeetingsList } from './module-meetings-list.js';
export { ModuleUnitTabs } from './module-units-tabs.js';
export { ModuleUnitRenderer } from './module-unit-renderer.js';

export class ModuleRendererStyle1 extends HTMLElement {
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
        <section id="main">
          <section>
            <module-info moduleId="${this.moduleId}"></module-info>
          </section>

          <section style="background-color: var(--background);">
            <section>
              <header class="text-center color-8">
                <h3>Module Units</h3>
              </header>

              <module-unit-tabs module-id=${this.moduleId}></module-units-header>
            </section>

            <module-unit-renderer module-id=${this.moduleId}></module-unit-renderer>
          </section>
		</section>`;

    accordion.initAccordion2();
  }
}

customElements.define("module-renderer-style-1", ModuleRendererStyle1);
