export class ModuleHeader extends HTMLElement {
  menu;

  static get observedAttributes() {
    return ["pageTitle", "animation", "pageBase", "pagePic"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "pageTitle") this.title = newValue;
    else if (name == "animation") this.animate = newValue;
    else if (name == "pageBase") this.base = newValue;
    else if (name == "pagePic") this.pic = newValue;
  }

  get base() {
    return this.getAttribute("pageBase");
  }

  get title() {
    return this.getAttribute("pageTitle");
  }

  set base(value) {
    this.setAttribute("pageBase", value);
  }

  set title(value) {
    this.setAttribute("pageTitle", value);
  }

  get animation() {
    return this.getAttribute("animation");
  }

  set animation(value) {
    this.setAttribute("animation", value);
  }

  get pic() {
    return this.getAttribute("pagePic");
  }

  set pic(value) {
    this.setAttribute("pagePic", value);
  }

  get hamburger() {
    return this.menu;
  }

  set hamburger(value) {
    console.log("The burger is served " + value);

    this.menu = value;
    this.menu.afterItemClicked = this.afterItemClicked.bind(this);

    let elm = document.querySelector("#the-burger");
    if (elm) {
      elm.classList.add("hamburger");
      elm.addEventListener("click", this.hamburgerClicked.bind(this));
    }
  }

  afterItemClicked() {
    if (!this.menu) return;

    var elm = this.menu.querySelector(".menu");
    if (elm) elm.style.visibility = "hidden";
  }

  hamburgerClicked() {
    if (!this.menu) return;

    var elm = this.menu.querySelector(".menu");
    if (!elm) return;

    if (elm.style.visibility == "visible") {
      elm.style.visibility = "hidden";
    } else {
      elm.style.visibility = "visible";
    }
  }

  connectedCallback() {
    var animation = "";
    if (this.animate == "true") {
      animation = 'onmouseenter="mouseenter();" onmouseleave="mouseleave()";';
    }

    var path = this.base || "./";

    var hammy = "";

    var html = `<section class="row vcenter align-start header">
        <a class="header-button home visible" href="${path}index.html" title="Navigate to home page"></a>
        <div id='the-burger' class="header-button ${hammy}"><div class="header-hamburger-content"></div></div>
      `;

    if (this.pic) {
      html =
        html +
        `
        <div class="row vcenter centered" >
          <img src='${this.pic}' class="header-pic" alt="Module profile picture"/>
          <h1><a id="header-animate"  data-hover="${this.title}" ${animation} href="${path}about.html">${this.title}</a></h1>
        </div>
        `;
    } else {
      html =
        html +
        `<div class="row vcenter centered header" ><h1 ><a id="header-animate" data-hover="${this.title}" ${animation} href="${path}about.html">${this.title}</a></h1></div>`;
    }

    html =
      html +
      `<div class="null-button"></div><div class="null-button"></div></section>`;

    this.innerHTML = html;

    var elm = document.querySelector(".header-button.hamburger");
    if (elm) {
      elm.addEventListener("click", this.hamburgerClicked.bind(this));
    }
  }
}

customElements.define("module-header", ModuleHeader);
