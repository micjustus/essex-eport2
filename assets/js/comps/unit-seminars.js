import "./unit-card.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
class SeminarCards extends HTMLElement {
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

    var h3 = document.createElement("h3");
    h3.innerText = `Seminar activity for all units in ${module.title}`;
    row.appendChild(h3);

    row.classList.add("row");
    row.classList.add("centered");
    row.style.textAlign = "center";
    row.style.width = "90%";
    row.style.gap = "1em";

    var added = 0;

    let seminars= []

    module.units.forEach((val, idx)=>{
        val.activities.forEach((act)=>{
            if (act.type == "seminar")
                seminars.push(act);
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
      elm.classList.add("active");
      elm.classList.add("p-1");

      elm.style.fontSize = "0.8em";
      elm.style.margin = 0;
      elm.style.height = "120px";

      elm.setAttribute("onclick", `loadPdf('${val.title}', '${val.href}')`);

      elm.innerHTML = `
        <ul class="dates">
            <li class="dates">
                <span class="date clear">${val.month || ''} <strong>${val.day || ''}</strong></span>
                <h4>${val.title}</h4>
                <p>${val.description || ""}</p>
            </li>
        </ul>`;

      row.appendChild(elm);

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

    this.appendChild(row);
  }
}

// this is where we "inject" our custom element into our HTML file
customElements.define("module-seminars", SeminarCards);
