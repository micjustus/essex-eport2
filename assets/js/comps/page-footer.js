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
		  <a href="mailto:micjustus@outlook.com">micjustus@outlook.com</a>
	  </div>
	  <div>
	  	<h3>Who dunnit?</h3>
			  &copy; Michael Justus. All rights reserved.
		
	  </div>
  </div>`;
  }
}

customElements.define("page-footer", PageFooter);
