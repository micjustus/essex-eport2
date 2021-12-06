import { modules } from "../modules.js";

export class ModuleUnitRenderer extends HTMLElement {

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
        if (mod && mod.renderContent){
                this.innerHTML = mod.renderContent();
                return;
        }
    
        this.innerHTML = `
        <section class="row left" style="background-color: var(--background);">
            <div class="unit-content-outer gradient-background centered stretch">
                <div id="unit-content" class="unit-content">
                    <unit-card-empty></unit-card-empty>
                </div>
            </div>
            <section></section>
        </section>`;
      }
    }
    
    customElements.define("module-unit-renderer", ModuleUnitRenderer);
