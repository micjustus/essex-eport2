import { modules } from "./../modules.js";

export class ModuleInfo extends HTMLElement {
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

    var items = mod.outcomes
      .map((val, idx) => {
        return `<li>${val}</li>`;
      })
      .join("");

      var first = 
        `<section class="band-1 p-5">
          <div class="centered content-width mw-80ch">
            <header class="text-center">
            <h2>${mod.title}</h2>
            </header>
            <ul>${items}</ul>
        `;

        // var artefacts = 
        // `<div class="card active text-center full-width no-aspect">
        // <section class="accordion-header expander" aria-expanded="false">
        //   <header>Module Artefacts</header>
        // </section>
        // <section class="accordion-body">ARTS GO HEYAH</section>
        // </div>`;

        // first = first + artefacts;

        first = first + 
      `<div>
        <header class="text-center">
          <h3>Module Documents</h3>
        </header>
        <div class="row" style="column-gap:1em;row-gap:1em; align-items: center;font-size:0.9em;line-height:1.2em;">
        `;

      if (mod.reflections){
        first = first + 
        `<div class="card small active text-center p-1 no-aspect" onclick='loadPdf("Module Reflections", "${mod.reflections}")'>
          <h4>OOIS Reflection</h4>
        </div>`
      }
     
      first = first + 
      `<div class="card small active text-center p-1 no-aspect" data-href="./units.html" onclick="loadPdf('Module 2 Project', '${mod.project}')">
      <h4>Project Reflection</h4>
      </div>`;

      first = first + 
      `<div class="card small active text-center p-1 no-aspect" data-href="./units.html" onclick='openPost(this)'>
      <h4>Unit Reflections</h4>
      </div>`;
     
      first = first + 
      `<div class="card small active text-center p-1 no-aspect" onclick="loadPdf('Module 2 Action Plan', '${mod.actionPlan}')">
        <h4>Action Plan</h4>
      </div>`;

      first = first + 
      `<div class="card small active text-center p-1 no-aspect" onclick="loadPdf('Module 2 Skills Matrix', '${mod.skillsMatrix}')">
        <h4>Skills Matrix</h4>
      </div>`;

      // let activities = [];

      for (let unit of mod.units){

        for (let act of unit.activities){
          
          if (act.activity=="assignment"){
            //activities.push(act);
            if (act.ref == "zip"){
              first = first + 
              `<div class="card small active text-center p-1 no-aspect">
              <a href="${act.href}" download="${act.fileName}"><h4>${act.title}</h4></a>
            </div>`;
              }
            else{
            first = first + 
            `<div class="card small active text-center p-1 no-aspect" onclick="loadPdf('${act.title}', '${act.href}')">
            <h4>${act.title}</h4>
          </div>`;
            }
          }
        }
      }

      // if (activities.length){
      //   first = first + 
      //   `</div>`;

      //   first = first + `<div class="row" style="column-gap:1em;row-gap:1em">`;

      //   for(let act of activities){
      //     first = first + 
      //     `<div class="card small active text-center no-aspect" style="font-size:0.9em;line-height:1.3em;margin: 2em 0;" onclick="loadPdf('${act.title}', '${act.href}')">
      //       <h4>${act.title}</h4>
      //     </div>`;
      //   }
      // }

      first = first + 
      `</div></div></section>`;

      this.innerHTML = first;
  }
}

customElements.define("module-info", ModuleInfo);
