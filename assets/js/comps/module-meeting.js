import { initAccordion2 } from "../accordion.js";
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

    var table  ='';

    table = `<div class="table-container" role="table" aria-label="Meetings">
      <div class="flex-table header" role="rowgroup">
        <div class="flex-row first" role="columnheader">Date</div>
        <div class="flex-row" role="columnheader">Attendees</div>
        <div class="flex-row" role="columnheader">Minutes</div>
      </div>`;

    mod.meetings.forEach((val, idx)=>{
      table = table + 
      `
      <div class="flex-table row" role="rowgroup">
        <div class="flex-row" role="cell">${val.date}</div>
        <div class="flex-row" role="cell">${val.attendees}</div>
        <div class="flex-row" role="cell" onclick="loadPdf('Minutes of Meeting', '${val.minutes}')"><img src='../assets/css/images/pdf_icon.png' width=32 height=32/></div>
      </div>
      `;
    });

    var text = 
    `
    <section class="p-1 accordion-header expander" style="border-radius: 6px" aria-expanded="false">
      <header>Meetings</header>
    </section>
    <section class="accordion-body" style="display: none; overflow: hidden;">${table}</section>
       `;

       

       this.style.display="contents";
       this.innerHTML = text;
  }
}

customElements.define("module-meetings", Meetings);
initAccordion2();
