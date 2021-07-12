/* eslint-disable no-undef */
import RestaurantIdb from "../src/scripts/data/restaurant-idb";
import createFavoriteButtonPresenter from "./helpers/createFavoriteButtonPresenter";

const addFavoriteContainer = () => {
  document.body.innerHTML = "<div class=\"like-wrapper\" id=\"likeButtonContainer\"></div>";
};

describe("Like Restaurant", () => {
  beforeEach(() => {
    addFavoriteContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector("[aria-label=\"like this restaurant\"]")).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector("[aria-label=\"unlike this restaurant\"]")).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await RestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    RestaurantIdb.deleteRestaurant(1);
  });

  it("should not like restaurant again when its already liked", async () => {
    await createFavoriteButtonPresenter({ id: 1 });

    await RestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await RestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    RestaurantIdb.deleteRestaurant(1);
  });

  it("should not like restaurant when it has no id", async () => {
    await createFavoriteButtonPresenter({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
