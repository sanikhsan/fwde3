import RestaurantDataSource from "../../data/restaurant-source";
import ItemDetailTemplate from "../templates/item-detail-template-creator";
import UrlParser from "../../routes/url-parser";
import RestaurantIdb from "../../data/restaurant-idb";
import FavoriteButton from "../../utils/favorite-initiator";
import CreateReview from "../../utils/create-review";

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#restaurant");
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const response = await RestaurantDataSource.getRestaurantById(url.id);
      const { restaurant } = response;
      restaurantContainer.innerHTML = ItemDetailTemplate(restaurant);
      await FavoriteButton.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurant: RestaurantIdb,
        data: restaurant,
      });
    } catch (error) {
      console.log("An error has accured at ::", error);
    }

    const formReview = document.querySelector("#create-review");
    const fullnameEl = document.querySelector("#fullname");
    const descriptionEl = document.querySelector("#description");
    formReview.addEventListener("submit", (e) => {
      e.preventDefault();
      const body = {
        id: url.id,
        name: fullnameEl.value,
        review: descriptionEl.value,
      };
      CreateReview(body);
      fullnameEl.value = "";
      descriptionEl.value = "";
    });
  },
};

export default Detail;
