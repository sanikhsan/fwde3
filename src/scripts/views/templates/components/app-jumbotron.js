class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="jumbotron">
                  <div class="jumbotron__inner">
                  <h1 class="jumbotron__title">Cari Restaurant</h1>
                  <p class="jumbotron__tagline">Mencari restaurant yang pas untuk teman atau keluarga.</p>
                  </div>
              </div>
          `;
  }
}

customElements.define("app-jumbotron", AppJumbotron);
