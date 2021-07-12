import FavoriteButton from "../../src/scripts/utils/favorite-initiator";
import RestaurantIdb from "../../src/scripts/data/restaurant-idb";

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButton.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurant: RestaurantIdb,
    data: restaurant,
  });
};

export default createFavoriteButtonPresenter;
