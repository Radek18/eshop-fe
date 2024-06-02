import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/products";

export const createProduct = (product) =>
  axios.post(REST_API_BASE_URL, product);

export const getAllProducts = () => axios.get(REST_API_BASE_URL);

export const getProduct = (productId) =>
  axios.get(REST_API_BASE_URL + "/" + productId);

export const updateProduct = (productId, product) =>
  axios.put(REST_API_BASE_URL + "/" + productId, product);

export const partialUpdateProduct = (productId, product) =>
  axios.patch(REST_API_BASE_URL + "/" + productId);

export const deleteProduct = (productId) =>
  axios.delete(REST_API_BASE_URL + "/" + productId);

export const deleteProductsNotForSale = () => axios.delete(REST_API_BASE_URL);
