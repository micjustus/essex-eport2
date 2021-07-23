

class ModuleHeader extends HTMLElement {
  static get observedAttributes() {
    return ["pageTitle", "animation"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "pageTitle")
      this.title = newValue;
    else if (name == "animation")
      this.animate = newValue;
  }

  get title() {
    return this.getAttribute("pageTitle");
  }

  set title(value) {
    this.setAttribute("pagTitle", value);
  }

  get animation(){
    return this.getAttribute("animation");
  }

  set animation(value){
    this.setAttribute("animation", value);
  }

  connectedCallback() {
    var animation = '';
    if (this.animate == "true"){
      animation = 'onmouseenter="mouseenter();" onmouseleave="mouseleave()";';
    }

    this.innerHTML = `
            <section id="header" class="header" >
                <a href="./index.html"><div class="header-back"></div></a>
               
               <h1 id="header-thing"><a data-hover="${this.title}" ${animation} href="./about.html">${this.title}</a></h1>
                
            </section>
    `;
  }
}

customElements.define("module-header", ModuleHeader);
