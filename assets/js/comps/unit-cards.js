import './unit-card.js';
import { modules } from '../modules.js';

//this is our class where everything that goes into our element will be
class UnitCards extends HTMLElement {
  static get observedAttributes() {
    return ["module-id"];
  }

  constructor(){
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "module-id")
      this.moduleId = newValue;
  }

   get moduleId(){ return this.getAttribute("module-id");}
   set moduleId(newValue){ }

  connectedCallback() {

    var moduleId = this.moduleId;
    var module = modules.find(val=> val.id == moduleId);
    if (!module){
      return;
    }

    var row = document.createElement("div");

    var h3 = document.createElement("h3");
    h3.innerText = `Reflective writing for units in ${module.title}`;
    row.appendChild(h3);

    row.classList.add("row");
    row.classList.add("centered");
    row.style.textAlign = "center";
    row.style.width= "90%";
    row.style.gap = "1em";

    module.units.forEach((val, idx) => {
      var elm = document.createElement("div");
      elm.classList.add("card");
      elm.classList.add("small");
      elm.classList.add("left");
      elm.classList.add("nowrap");
      elm.classList.add("active");
      elm.classList.add("p-1");

      elm.style.fontSize= "0.8em";
      elm.style.margin= 0;
      elm.style.height = "120px";
      
      
        elm.setAttribute("onclick", `loadPdf('${val.title}', '${val.writing}')`);
      
      elm.innerHTML = 
      `<div >
        ${val.title} - ${val.description}
      </div>`;

      row.appendChild(elm);
    });

    this.appendChild(row);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-units", UnitCards);
