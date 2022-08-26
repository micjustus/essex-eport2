import "./unit-card.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
export class SeminarCards extends HTMLElement {
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
    var moduleId = this.moduleId;
    var module = modules.find((val) => val.id == moduleId);
    if (!module) {
      return;
    }

    var row = document.createElement("div");

    row.classList.add("row");
    row.classList.add("centered");
    row.classList.add("module-units-list");

    
    var h3 = document.createElement("header");
    h3.innerText = `Seminar activity for all units in ${module.title}`;

    row.appendChild(h3);

    var div = document.createElement("div");
    div.classList.add("row");
    div.style.gap = "1em";

    row.appendChild(div)
    
    var added = 0;

    let seminars = [];

    module.units.forEach((val, idx) => {
      val.activities.forEach((act) => {
        if (act.type == "seminar") seminars.push(act);
      });
    });

    seminars.forEach((val, idx) => {
      if (!val.href) {
        return;
      }

      var elm = document.createElement("div");
      elm.classList.add("card");
      elm.classList.add("small");
      elm.classList.add("left");
      elm.classList.add("nowrap");

      elm.setAttribute("onclick", `loadPdf('${val.title}', '${val.href}')`);

      elm.innerHTML = `
        <ul class="dates">
            <li class="dates">
                <span class="date clear">${val.month || ""} <strong>${
        val.day || ""
      }</strong></span>
                <h4>${val.title}</h4>
            </li>
        </ul>`;

      div.appendChild(elm);

      added += 1;
    });

    setTimeout(() => {
      if (added <= 0) {
        var elm2 = document.createElement("div");
        elm2.style.fontStyle = "italic";

        elm2.innerText =
          "The future is yet unspoken. Only the passage of time shall manifest seminars of content.";

        row.appendChild(elm2);
      }
    }, 200);

    this.innerHTML = row.outerHTML
    //this.appendChild(row);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-seminars", SeminarCards);
