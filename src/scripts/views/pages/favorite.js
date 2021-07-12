import RestaurantIdb from "../../data/restaurant-idb";
import ItemTemplate from "../templates/item-template-creator";
import Spinner from "../templates/spinner-template-creator";

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
                <h1 class="explore__label">Restoran Favoritku</h1>
                <div id="loading"></div>
                <div class="posts"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    const postsContainer = document.querySelector(".posts");
    loading.innerHTML = Spinner();

    try {
      const restaurants = await RestaurantIdb.getAllRestaurants();
      if (restaurants.length < 1) {
        postsContainer.classList.add("empty-wrapper");
        postsContainer.innerHTML = `
                <div class="favorite-empty"></div>
                <p>Kamu tidak memiliki restoran favorit!</p>
            `;
        loading.style.display = "none";
      }
      restaurants.forEach((restaurant) => {
        postsContainer.innerHTML += ItemTemplate(restaurant);
      });
      loading.style.display = "none";
    } catch (error) {
      loading.style.display = "none";
      console.log("An error has accured at ::", error);
    }
  },
};

export default Favorite;
