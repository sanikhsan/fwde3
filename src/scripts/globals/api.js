import CONFIG from "./config";

const API = {
  restaurants: `${CONFIG.BASE_URL}/list`,
  restaurant: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  create_review: `${CONFIG.BASE_URL}/review`,
};

export default API;
