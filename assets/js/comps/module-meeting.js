import { modules } from "../modules.js";

export class Meetings extends HTMLElement {
  static get observedAttributes() {
    return ["moduleId"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.moduleId = newValue;
  }

  get moduleId() {
    return this.getAttribute("moduleId");
  }

  set moduleId(value) {
    this.setAttribute("moduleId", value);
  }

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    if (!mod.meetings) return;

    var div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("nowrap");
  

    var col1 = document.createElement("div");
    col1.classList.add("row");
    col1.classList.add("cols");
    col1.style.width="30%";
    col1.innerText = "Date";

    var col2 = document.createElement("div");
    col2.classList.add("row");
    col2.classList.add("cols");
    col2.innerText = "Attendees";

    var col3 = document.createElement("div");
    col3.classList.add("row");
    col3.classList.add("cols");
    col3.style.width="70%";
    col3.innerText= "Outcomes";

    div.append(col1, col2, col3);

    mod.meetings.forEach((val, idx)=> {
        var p1 = document.createElement("p");
        p1.innerText = val.date;
        col1.append(p1);

        var p2 = document.createElement("p");
        p2.innerText = val.attendees;
        col2.append(p2);

        var p3 = document.createElement("p");
        p3.innerText = val.outcomes;
        col3.append(p3);

    });

    this.appendChild(div);
  }
}

customElements.define("module-meetings", Meetings);
