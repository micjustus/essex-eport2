class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
	  this.innerHTML = `
	  <div class="row footer container">
	  <div>
		  <h3>Address</h3>
		  <p>Newbury, United Kingdom<br /></p>
	  </div>
	  <div>
		  <h3>Mail</h3>
		  <a href="#">micjustus@gmail.com</a>
	  </div>
	  <div>
		  <ul class="links">
			  <li>&copy; Michael Justus. All rights reserved.</li>
		  </ul>
	  </div>
  </div>`;
  }
}

customElements.define("page-footer", PageFooter);
