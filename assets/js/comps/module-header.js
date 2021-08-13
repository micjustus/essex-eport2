

class ModuleHeader extends HTMLElement {
  static get observedAttributes() {
    return ["pageTitle", "animation", "pageBase", "pagePic"];
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
    else if (name == "pagePic")
      this.pic = newValue;
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
    this.setAttribute("pageTitle", value);
  }

  get animation(){
    return this.getAttribute("animation");
  }

  set animation(value){
    this.setAttribute("animation", value);
  }

  get pic(){
    return this.getAttribute("pagePic");
  }

  set pic(value){
    this.setAttribute("pagePic", value);
  }

  connectedCallback() {
    var animation = '';
    if (this.animate == "true"){
      animation = 'onmouseenter="mouseenter();" onmouseleave="mouseleave()";';
    }

    var path = this.base || './';

    var html = 
     `<section id="header" class="header">
        <a href="${path}index.html">
          <div class="header-back"></div>
        </a>
      `;
            
    if (this.pic){
        html = html + 
        `
        <div class="header-with-pic">
          <img src='${this.pic}' class="header-pic"/>
          <h1 id="header-thing"><a data-hover="${this.title}" ${animation} href="${path}about.html">${this.title}</a></h1>
        </div>
        `
    }
    else{
      html = html + `<h1 id="header-thing"><a data-hover="${this.title}" ${animation} href="${path}about.html">${this.title}</a></h1>`;
    }       

    html = html + `</section>`;

    this.innerHTML = html;
  }
}

customElements.define("module-header", ModuleHeader);
