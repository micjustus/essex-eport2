  class AccordionItem extends HTMLElement {
    constructor() {
      super();
  
      this.addEventListener("click", this.openOrClose.bind(this))
    }
  
    static get observedAttributes() {
      return ["open"];
    }
    
    connectedCallback() {
      this.innerHTML = 
       `<div class='accordion-header expander' aria-expanded='false'>` + this.header + `</div>
       <div class='accordion-body'></div>`;
    }
  
  }
  
  customElements.define("accordion-item", AccordionItem);
  