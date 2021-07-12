/* eslint-disable no-undef */
import RestaurantIdb from "../src/scripts/data/restaurant-idb";
import createFavoriteButtonPresenter from "./helpers/createFavoriteButtonPresenter";

const addFavoriteContainer = () => {
  document.body.innerHTML = "<div class=\"like-wrapper\" id=\"likeButtonContainer\"></div>";
};

describe("Unlike Restaurant", () => {
  beforeEach(async () => {
    addFavoriteContainer();
    await RestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector("[aria-label=\"unlike this restaurant\"]")).toBeTruthy();
  });

  it("should not display unlike widget when the restaurant has been liked", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector("[aria-label=\"like this restaurant\"]")).toBeFalsy();
  });

  it("should be able to remove recently unliked restaurant from the list", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    document.querySelector("[aria-label=\"unlike this restaurant\"]").dispatchEvent(new Event("click"));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    await RestaurantIdb.deleteRestaurant(1);
    document.querySelector("[aria-label=\"unlike this restaurant\"]").dispatchEvent(new Event("click"));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
