import CONFIG from "../../globals/config";

const ItemTemplate = (restaurant) => `
        <a href="${`/#/detail/${restaurant.id}`}">
            <article class="post">
                <div class="post__thumbnail">
                    <h2><i class="fas fa-map-marker-alt"></i> Lokasi : ${restaurant.city}</h2>
                    <img class="lazyload" data-src="${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}" alt="${restaurant.name}" />
                </div>
                <div class="post__content">
                    <h2 class="post__rating"><i class="fas fa-star"></i> Rating : ${restaurant.rating}</h2>
                    <h1 class="post__title">${restaurant.name}</h1>
                    <p class="post__description">
                        ${restaurant.description}
                    </p>
                </div>
            </article>
        </a>
  `;

export default ItemTemplate;
