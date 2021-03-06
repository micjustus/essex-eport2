export class UnitCard extends HTMLElement {
  constructor() {
    super();
  }
 
  render(content, template) {
    console.log("Default unit-card render method"); 
  }
}

export class EmptyCard extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    var tgt = document.getElementById("unit-content");
    if (!tgt) return;
  
    const template = `
              <header class="unit-header">NO CONTENT SELECTED</header>
              <section class="nothing-here">
                <div>Please select a unit to display its content here. <br/><br/>Oh! This empty space sure is lonely. If only these unfulfilled pixels had reason to blink with life...
                 <br/><sub>
                 Hint! The answers you seek to all your questions lie just to the left.  
                </sub>
                 </div>
              </section>
          `;
  
    var div = document.createElement("div");
    div.innerHTML = template;
  
    tgt.appendChild(div);
  }
}
customElements.define("unit-card", UnitCard);
customElements.define("unit-card-empty", EmptyCard);
UnitCard.prototype.render = function(content, template) { console.log("'render' function not overriden for this instance.");}
