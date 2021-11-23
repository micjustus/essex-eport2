import { modules } from "./../modules.js";

export { ModuleInfo } from './module-info.js';
export { ModuleHeader } from './module-header.js';
export { SeminarCards } from './unit-seminars.js';
export { Meetings } from './module-meeting.js';
export { ModuleUnitTabs } from './module-units-tabs.js';
export { ModuleUnitRenderer } from './module-unit-renderer.js';

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
  }
}

customElements.define("module-renderer-style-2", ModuleRendererStyle2);
