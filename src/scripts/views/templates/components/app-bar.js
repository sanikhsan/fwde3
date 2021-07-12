class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header class="header">
                  <button id="hamburgerButton" class="header__menu" aria-label="menu">☰</button>
                  <div class="header__logo">
                  <h1 class="header__title">Cari Resto</h1>
                  </div>
                  <nav id="drawer" class="nav">
                  <div class="nav__close"><a id="close" href="#">✘</a></div>
                  <ul class="nav__list">
                      <li class="nav__item"><a href="#/home">Home</a></li>
                      <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                      <li class="nav__item"><a href="https://github.com/sanikhsan">About Us</a></li>
                  </ul>
                  </nav>
              </header>
          `;
  }
}

customElements.define("app-bar", AppBar);
