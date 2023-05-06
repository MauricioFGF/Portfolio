import axios from "axios";

console.log();
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3333",
});

api.defaults.headers.common["api-key"] = import.meta.env.VITE_API_KEY;

const bodyInfo = {
  dataSource: import.meta.env.VITE_DATA_SOURCE,
  database: import.meta.env.VITE_DATABASE,
  collection: import.meta.env.VITE_COLLECTION,
  filter: {},
};

const getPortfolioById = async (id) => {
  let data = bodyInfo;
  data.filter = { id };
  data = JSON.stringify(data);

  console.log("data", data);
  try {
    const response = await api.post("/action/find", data);
    return response;
  } catch (err) {
    console.log("err", err);
  }
};

export { getPortfolioById };
