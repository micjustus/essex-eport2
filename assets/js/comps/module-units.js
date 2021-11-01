import "./unit-card.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
class UnitCards extends HTMLElement {
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

    var row = document.createElement("div");

    var h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.innerText = `Reflective writing for units in ${module.title}`;
    row.appendChild(h3);

    row.classList.add("row");
    row.classList.add("centered");
    row.style.textAlign = "center";
    row.style.width = "90%";
    row.style.gap = "1em";

    var added = 0;

    module.units.forEach((val, idx) => {
      if (!val.writing) return;

      fetch(`${val.writing}`, { method: "HEAD" }).then((res) => {
        if (res.ok) {
          var elm = document.createElement("div");
          elm.classList.add("card");
          elm.classList.add("small");
          elm.classList.add("left");
          elm.classList.add("nowrap");
          elm.classList.add("p-1");

          elm.setAttribute(
            "onclick",
            `loadPdf('${val.title}', '${val.writing}')`
          );

          elm.innerHTML = `<div>${val.title} - ${val.description}</div>`;

          row.appendChild(elm);

          added += 1;
        }
      });
    });

    setTimeout(() => {
      if (added <= 0) {
        var elm2 = document.createElement("div");
        elm2.style.fontStyle = "italic";

        elm2.innerText =
          "The future is still unwritten. Only the passage of time shall manifest content.";

        row.appendChild(elm2);
      }
    }, 200);

    this.appendChild(row);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-units", UnitCards);
