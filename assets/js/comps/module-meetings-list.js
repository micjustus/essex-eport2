import { modules } from "../modules.js";

export class ModuleMeetingsList extends HTMLElement {
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

    table = `<div class="table-container" role="table" aria-label="Team Meetings">
      <div class="flex-table header" role="rowgroup">
        <div class="flex-row first" role="columnheader">Date</div>
        <div class="flex-row" role="columnheader">Attendees</div>
        <div class="flex-row" role="columnheader">Minutes</div>
      </div>`;

    mod.meetings.forEach((val, idx)=>{
      table = table + 
      `
      <div class="flex-table row" role="rowgroup">
        <div class="flex-row small" role="cell">${val.date}</div>
        <div class="flex-row tags left" role="cell"><ul style="margin:0;text-align:left;">${val.attendees.split(';').map((item)=> '<li>' + item + '</li>' ).join('')}</ul></div>
        <div class="flex-row" role="cell" onclick="loadPdf('Minutes of Meeting', '${val.minutes}')"><img class="centered" src='../assets/css/images/pdf_icon.png' width=32 height=32/></div>
      </div>
      `;
    });

    var text = 
    `
    <section class="accordion-header expander" style="border-radius: 6px" aria-expanded="false">
      <header>Team Meetings</header>
    </section>
    <section class="accordion-body" style="display: none; overflow: hidden;width:100%;">${table}</section>
       `;

       this.classList.add("module-meetings");
       this.innerHTML = text;
  }
}

customElements.define("module-meetings-list", ModuleMeetingsList);
