

class ModuleHeader extends HTMLElement {
  static get observedAttributes() {
    return ["pageTitle", "animation", "pageBase"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "pageTitle")
      this.title = newValue;
    else if (name == "animation")
      this.animate = newValue;
    else if (name == "pageBase")
      this.base = newValue;
  }

  get base(){
    return this.getAttribute("pageBase");
  }

  get title() {
    return this.getAttribute("pageTitle");
  }

  set base(value){
    this.setAttribute("pageBase", value);
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

    var path = this.base || './';

    this.innerHTML = `
            <section id="header" class="header" >
                <a href="${path}index.html"><div class="header-back"></div></a>
               
               <h1 id="header-thing"><a data-hover="${this.title}" ${animation} href="${path}about.html">${this.title}</a></h1>
                
            </section>
    `;
  }
}

customElements.define("module-header", ModuleHeader);
