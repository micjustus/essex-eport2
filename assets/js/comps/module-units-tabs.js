import "./unit-card.js";
import { modules } from "../modules.js";

//this is our class where everything that goes into our element will be
export class ModuleUnitTabs extends HTMLElement {
  _contentArea = "unit-content";
  _lastclicked;

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

  itemClicked(evt) {
    evt.preventDefault();

    if (this._lastclicked === evt.currentTarget) return;

    if (this._lastclicked) this._lastclicked.classList.remove("active");

    this._lastclicked = evt.currentTarget;
    this._lastclicked.classList.add("active");

    var unit = document.createElement("unit-card");
    unit.render(evt.currentTarget.content, "unit-content");
  }

  connectedCallback() {
    var moduleId = this.moduleId;
    var module = modules.find((val) => val.id == moduleId);
    if (!module) {
      return;
    }

    var row = document.createElement("div");

    row.classList.add("row");
    row.classList.add("centered");
    row.classList.add("module-units-header");

    var added = 0;

    module.units.forEach((val, idx) => {
      var elm = document.createElement("div");
      elm.classList.add("card");
      elm.classList.add("small");
      elm.classList.add("text-center");
      elm.classList.add("p-1");
      elm.classList.add("no-aspect");
      elm.classList.add("outlined")
      elm.addEventListener("click", this.itemClicked.bind(this));
      elm.content = val;
      elm.innerHTML = `${val.title}`;

      row.appendChild(elm);

      added += 1;
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
customElements.define("module-unit-tabs", ModuleUnitTabs);
