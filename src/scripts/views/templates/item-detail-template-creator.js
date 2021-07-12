import CONFIG from "../../globals/config";

const ItemDetailTemplate = (restaurant) => {
  const { categories, customerReviews } = restaurant;
  const { foods, drinks } = restaurant.menus;

  const renderReviews = () => {
    const reviews = customerReviews
      .map(
        (review) => `
                <div class="user__wrapper">
                    <div class="user__rounded"><i class="fas fa-user"></i></div>
                    <div class="user__info">
                        <h3>${review.name}</h3>
                        <h4 style="color: #9a9a9a;font-weight: 500;font-size:10px;padding-bottom:10px">${review.date}</h4>
                        <p>${review.review}</p>
                    </div>
                </div>
            `,
      )
      .join("");
    return reviews;
  };

  const renderFoods = () => {
    const result = foods
      .map(
        (menu, index) => `
            <li style="display:flex">${index + 1}.<p style="padding-left: 10px;line-height: 0.8rem;">${menu.name}</p></li>
        `,
      )
      .join("");
    return result;
  };

  const renderDrinks = () => {
    const result = drinks
      .map(
        (menu, index) => `
            <li style="display:flex">${index + 1}.<p style="padding-left: 10px;line-height: 0.8rem;">${menu.name}</p></li>
        `,
      )
      .join("");
    return result;
  };

  const renderCategories = () => categories.map((menu) => `<div class="item"><p>${menu.name}</p></div>`).join("\n");

  return `
    <div class="like-wrapper" id="likeButtonContainer"></div>
     <article class="detail-post">
        <h1 class="detail-post__title">${restaurant.name}</h1>
        <div class="detail-post__wrapper">
            <div class="detail-post__thumbnail">
                <h2><i class="fas fa-map-marker-alt"></i> Lokasi : ${restaurant.city}</h2>
                <img class="lazyload" data-src="${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}" alt="${restaurant.name}" />
            </div>
            <div class="detail-post__menu">
                <h2>Menu Makanan</h2>
                <h2 class="detail-post__subtitle">Foods</h2>
                <div class="foods_wrapper">
                    <ul>
                        ${renderFoods()}
                    </ul>
                </div>
                <h2 class="detail-post__subtitle">Drinks</h2>
                <div class="foods_wrapper">
                    <ul>
                        ${renderDrinks()}
                    </ul>
                </div>
                <h2 class="detail-post__subtitle">Address</h2>
                <p>${restaurant.address}</p>
                <h2 class="detail-post__subtitle">Category</h2>
                <View class="category_wrapper">
                    ${renderCategories()}
                </View>
            </div>
        </div>
        <div class="detail-post__content">
            <div>
                <h1 class="detail-post__title">Overview</h1>
                <p class="detail-post__description">${restaurant.description}</p>
            </div>
            <div class="space-vertical">
                <h1 class="detail-post__title">Reviews (${customerReviews.length})</h1>
                <div class="form_review_wrapper">
                  <div class="user__rounded"><i class="fas fa-user"></i></div>
                  <div style="display: flex;justify-content: center;align-content: center;flex-direction: column;margin-left: 10px;">
                      <form id="create-review">
                          <input style="min-width: 44px; min-height: 44px;" type="text" id="fullname" name="fullname" placeholder="Your Name" required>
                          <textarea style="min-width: 44px; min-height: 44px;" id="description" name="description" placeholder="Description" required></textarea>
                          <input style="min-width: 44px; min-height: 44px;" type="submit" value="Submit">
                      </form>
                  </div>
              </div> 
                <div class="review-container">
                  ${renderReviews()}
                </div>
            </div>
        </div>
    </article>
`;
};

export default ItemDetailTemplate;
