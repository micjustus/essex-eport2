import "./unit-card.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
export class UnitCards extends HTMLElement {
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

  set moduleId(newValue) { }

  connectedCallback() {
    var moduleId = this.moduleId;
    var module = modules.find((val) => val.id == moduleId);
    if (!module) {
      return;
    }

    var header = document.createElement("header");
    header.innerText = `Reflective writing for ${module.title}`;

    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("centered");
    row.classList.add("module-units-list");
    row.appendChild(header);

    var units = document.createElement("div");
    units.style.gap = "1em";
    units.classList.add("row");

    var added = 0;

    module.units.forEach((val, idx) => {
      if (!val.writing) return;

      var elm = document.createElement("div");
      elm.classList.add("card");
      elm.classList.add("small");
      elm.classList.add("left");
      elm.classList.add("nowrap");

      elm.setAttribute(
        "onclick",
        `loadPdf('${val.title}', '${val.writing}')`
      );

      elm.innerHTML = `<div><h4>${val.title}</h4>${val.description}</div>`;

      units.appendChild(elm);

      added += 1;
    });

    setTimeout(() => {
      if (added <= 0) {
        var elm2 = document.createElement("div");
        elm2.style.fontStyle = "italic";

        elm2.innerText =
          "The future is still unwritten. Only the passage of time shall manifest content.";

        units.appendChild(elm2);
      }
    }, 200);

    row.appendChild(units);

    this.appendChild(row);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-units", UnitCards);
