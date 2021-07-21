import './unit-card.js';
import { modules } from '../modules.js';

//this is our class where everything that goes into our element will be
class UnitCards extends HTMLElement {
  constructor(){
    super();
  }

  get moduleId(){ return this.getAttribute("moduleId");}
  set moduleId(newValue){ this.setAttribute("moduleId", newValue);}

  connectedCallback() {

    var moduleId = this.moduleId;
    var module = modules.find(val=> val.id == moduleId);
    if (!module)
      return;

    module.units.forEach((val, idx) => {
      var elm = document.createElement("unit-card");
      elm.title = val.title;
      elm.description = val.description;

      this.appendChild(elm);
    });
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-units", UnitCards);
