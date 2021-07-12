import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

export default class App {
  constructor({
    button, drawer, content, close, jumbotron, navList,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._close = close;
    this._jumbotron = jumbotron;
    this._navList = navList;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      close: this._close,
      items: this._navList,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const pagePath = url.substring(1);
    const display = pagePath === "" || pagePath === "home" ? "flex" : "none";
    this._jumbotron.style.display = display;
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
