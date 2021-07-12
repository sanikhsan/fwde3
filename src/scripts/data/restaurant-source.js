import API from "../globals/api";
import CONFIG from "../globals/config";

class RestaurantDataSource {
  static async getRestaurants() {
    const response = await fetch(API.restaurants);
    return response.json();
  }

  static async getRestaurantById(id) {
    const response = await fetch(API.restaurant(id));
    return response.json();
  }

  static async postReview(data) {
    const response = await fetch(API.create_review, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": CONFIG.API_KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}

export default RestaurantDataSource;
