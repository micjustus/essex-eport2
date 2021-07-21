import "./unit-card.js";
import "./accordion-item.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
class Accordion extends HTMLElement {
  constructor() {
    super();
  }

  get module() {
    return this.getAttribute("module");
  }
  set module(newValue) {
    this.setAttribute("module", newValue);
  }

  connectedCallback() {
    var moduleId = this.module;
    var module = modules.find((val) => val.id == moduleId);
    if (!module) return;

    var ol = document.createElement("ol");

    module.units.forEach((val, idx) => {
      var li = document.createElement("li");

      var elm = document.createElement("accordion-item");
      elm.header = val.description;
      elm.content = val;

      li.appendChild(elm);

      ol.appendChild(li);
    });

    this.appendChild(ol);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-units-accordion", Accordion);
