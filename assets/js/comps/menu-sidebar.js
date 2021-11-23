export class MenuSidebar extends HTMLElement {
  _items = [];
  _contentArea = "";
  _contentTemplate = "";
  _lastclicked;

  constructor() {
    super();
  }

  get contentTemplate() {
    return this._contentTemplate;
  }
  set contentTemplate(value) {
    this._contentTemplate = value;
  }

  get contentArea() {
    return this._contentArea;
  }
  set contentArea(value) {
    this._contentArea = value;
  }

  get items() {
    return this._items;
  }
  set items(value) {
    if (value != this._items) {
      this._items = value;
      this.render();
    }
  }

  static get observedAttributes() {
    return ["content-area", "content-template"];
  }

  itemClicked(evt) {
    evt.preventDefault();

    if (this._lastclicked === evt.srcElement) return;

    if (this._lastclicked) this._lastclicked.classList.remove("active");

    this._lastclicked = evt.srcElement;
    this._lastclicked.classList.add("active");

    var unit = document.createElement("unit-card");
    unit.render(evt.srcElement.content, this.contentArea);
  }

  render() {
    if (!this.items || !this.items.length) return;

    var div = document.createElement("div");

    var ol = document.createElement("ol");

    this.items.forEach((val, idx) => {
      var li = document.createElement("li");
      li.addEventListener("click", this.itemClicked.bind(this));
      li.content = val;
      li.innerText = val.description;

      ol.appendChild(li);
    });

    div.appendChild(ol);
    this.appendChild(div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "content-area") {
      this.contentArea = newValue;
    } else if (name === "content-template") {
      this.contentTemplate = newValue;
    }
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("menu-sidebar", MenuSidebar);
