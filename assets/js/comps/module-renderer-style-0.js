import { modules } from "./../modules.js";
import  "./unit-card-renderer.js";

export { MenuSidebar } from "./menu-sidebar.js";
export { ModuleInfo } from "./module-info.js";
export { ModuleHeader } from "./module-header.js";
export { UnitCard, EmptyCard } from "./unit-card.js";

export class ModuleRendererStyle0 extends HTMLElement {
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
    if (!mod) return;

    this.innerHTML = `
		<section id="main">
            <module-info moduleId="${this.moduleId}"></module-info>
            
            <section style="background-color: white">
                <header class="text-center color-8">
                    <h3>Module Units</h3>
                </header>

                <section class="row left">

                    <menu-sidebar id="sidebar" class="sidebar units-block col-2" content-area="unit-content"></menu-sidebar>

                    <div class="unit-content-outer gradient-background stretch">
                        <div id="unit-content" class="unit-content">
                            <unit-card-empty></unit-card-empty>
                        </div>
                    </div>
                    <section></section>
                </section>
            </section>
        </section>`;
  }
}

customElements.define("module-renderer-style-0", ModuleRendererStyle0);



