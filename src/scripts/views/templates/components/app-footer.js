class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
              <footer>
                  <p>Copyright © ${currentYear} - Cari Resto</p>
              </footer>
          `;
  }
}

customElements.define("app-footer", AppFooter);
