import { apiClient } from "./api"
import type { Product } from "./type"

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get("/api/products")
  return response.data.data
}