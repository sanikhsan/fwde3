import RestaurantDataSource from "../data/restaurant-source";

const CreateReview = (body) => {
  const { name, review } = body;
  const reviewContainer = document.querySelector(".review-container");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date().toLocaleDateString("id-ID", options);
  RestaurantDataSource.postReview(body)
    .then((response) => response.json())
    .then((data) => {
      if (!data.error) {
        const newReview = `
            <div class="user__wrapper">
                <div class="user__rounded"><i class="fas fa-user"></i></div>
                <div class="user__info">
                    <h3>${name}</h3>
                    <h4 style="color: #9a9a9a;font-weight: 500;font-size:10px;padding-bottom:10px">${date}</h4>
                    <p>${review}</p>
                </div>
            </div>
        `;
        reviewContainer.innerHTML += newReview;
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

export default CreateReview;
