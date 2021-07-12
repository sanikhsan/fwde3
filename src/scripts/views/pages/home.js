import RestaurantDataSource from "../../data/restaurant-source";
import ItemTemplate from "../templates/item-template-creator";
import Spinner from "../templates/spinner-template-creator";
import Skeleton from "../templates/skeleton-template-creator";

const Home = {
  async render() {
    return `
        <section class="content">
          <div class="explore">
            <h1 class="explore__label">Cari Restoran</h1>
            <div id="loading"></div>
            <div class="posts">
              ${Skeleton(18)}
            </div>
          </div>
        </section>
    `;
  },

  async afterRender() {
    const postsContainer = document.querySelector(".posts");
    const loading = document.querySelector("#loading");
    loading.innerHTML = Spinner();
    try {
      const response = await RestaurantDataSource.getRestaurants();
      const { restaurants } = response;
      postsContainer.innerHTML = "";
      restaurants.forEach((restaurant) => {
        postsContainer.innerHTML += ItemTemplate(restaurant);
      });
      loading.innerHTML = "";
    } catch (error) {
      loading.innerHTML = "";
      console.log("An error has accured at ::", error);
    }
  },
};

export default Home;
