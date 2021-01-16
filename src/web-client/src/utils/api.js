import axios from "axios";

const BASE_URL = "https://localhost:5001/api";

export const insertStatement = async (data) => {
  const resp = await axios.post(`${BASE_URL}/statement`, data);
  return resp.data;
};

export async function insertUser(data) {
  const resp = await axios.post(`${BASE_URL}/user`, data);
  return resp.data;
}

export async function getIeRating(userId) {
  const resp = await axios.get(`${BASE_URL}/statement/rating/${userId}`);
  return resp.data;
}
