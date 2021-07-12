/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button, drawer, close, items,
  }) {
    button.addEventListener("click", (event) => {
      // eslint-disable-next-line no-underscore-dangle
      this._toggleDrawer(event, drawer);
    });

    close.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    items.forEach((nav) => {
      nav.addEventListener("click", (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
