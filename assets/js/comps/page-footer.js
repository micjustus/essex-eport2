class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section id="footer">
			<div class="container">
				<header>
					<h2>Contact</h2>
				</header>

				<div class="row col-12 left ">
					<section>
						<div class="row col-gap-3">
							<div>
								<h3>Address</h3>
								<p>
									Newbury<br />
									United Kingdom
								</p>
							</div>
							<div>
								<h3>Mail</h3>
								<p><a href="#">micjustus@gmail.com</a></p>
							</div>
							<div>
								<h3>Phone</h3>
								<p>(800) 000-0000</p>
							</div>
						</div>
					</section>

					<div class="col-12">
						<!-- Copyright -->
						<div id="copyright">
							<ul class="links">
								<li>&copy; Michael Justus. All rights reserved.</li>
								<li>Design adapted from: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>`;
  }
}

customElements.define("page-footer", PageFooter);
