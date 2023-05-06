import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3333",
});

const getPortfolioById = async (id) => {
  try {
    let response = await api.get(`/portfolio-filter?filter={"id": ${id}}`);
    if (response) response = response?.data[0];
    return response;
  } catch (err) {
    console.log("err", err);
  }
};

export { getPortfolioById };
