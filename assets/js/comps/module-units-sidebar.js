import { modules } from "./../modules.js";

export class ModuleUnitsSidebar extends HTMLElement {
  lastClicked;

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

  static get observedAttributes() {
    return ["moduleId"];
  }

  menuItemClicked(itemIndex) { }

  connectedCallback() {
    var mod = modules.find((val, idx) => val.id == this.moduleId);
    if (!mod) return;

    var items = mod.units
      .map((elm, idx) => {
        return `<li><header>${elm.title}</header><p>${elm.description}</p></li>`;
      })
      .join("");

    this.innerHTML = 
    `<section class="menu" style='width: 300px'>
      <ul>${items}</ul>
    </section>`;

    var listItems = document.querySelectorAll("li");
    listItems.forEach((val, idx)=> {
      val.addEventListener("click", (ev) =>{
        if (this.lastClicked){
          this.lastClicked.classList.remove("active");
        }

        val.classList.add("active");
        this.lastClicked = val;

        this.menuItemClicked(idx)
      } );
    })
  }
}

customElements.define("module-units-sidebar", ModuleUnitsSidebar);
