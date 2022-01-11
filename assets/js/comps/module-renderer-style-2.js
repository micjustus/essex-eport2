import { modules } from "./../modules.js";
import { ModuleUnitsSidebar } from "./module-units-sidebar.js";
import { ModuleHeader } from "./module-header.js";

export { ModuleInfo } from "./module-info.js";
export { SeminarCards } from "./unit-seminars.js";
export { ModuleMeetingsList } from "./module-meetings-list.js";
export { ModuleUnitTabs } from "./module-units-tabs.js";
export { ModuleUnitRenderer } from "./module-unit-renderer.js";
export { ModuleUnitListRenderer } from "./module-unit-list-renderer.js";

export class ModuleRendererStyle2 extends HTMLElement {
  static get observedAttributes() {
    return ["module-id", "image"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "module-id") this.moduleId = newValue;
    if (name == "image") this.image = newValue;
  }

  get image(){
    return this.getAttribute("image");
  }

  get moduleId() {
    return this.getAttribute("module-id");
  }

  set image(newValue){}
  set moduleId(newValue){}

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) {
      return;
    }

    this.innerHTML = `
      <section id="main" class="row">
        <module-units-sidebar moduleId="${this.moduleId}" ></module-units-sidebar>
        
        <section class="row vertical stretch module-units-2" >
          <module-info moduleId="${this.moduleId}" image="${this.image}"></module-info>

          <header class="text-center">
            <h3>Module Units</h3>
          </header>
  
          <section class="module-units-texture">
            <section class="module-units-3">
              <module-unit-list-renderer moduleId=${this.moduleId} style="pages"></module-unit-list-renderer>
            </section>
          </section>
      </section>
		</section>`;

    var header = document.querySelector("module-header");
    header.hamburger = document.querySelector("module-units-sidebar");
    
    ModuleUnitsSidebar.prototype.menuItemClicked = function(index) {
      var elm = document.querySelector(`module-unit-simple-card[unitid='${index}'], module-unit-simple-page[unitid='${index}']`);
      if (elm){
        if (this.lastCard) this.lastCard.classList.remove("active");
        this.lastCard = elm;
        elm.classList.add("active");
        elm.scrollIntoView({ behavior: "smooth", block: 'start' });
      }
    };
  }
}

customElements.define("module-renderer-style-2", ModuleRendererStyle2);
