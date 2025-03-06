import axios from "./axios";

const createObituary = async (formData: FormData) => {
  const endpoint = "/obituary";
  const response = await axios.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const getObituary = async (queryParams?: {
  city?: string;
  region?: string;
  id?: string;
  userId?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const endpoint = "/obituary";
    console.log(endpoint, { params: queryParams });
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};

const updateObituary = async (id: string, formData: FormData) => {
  try {
    const endpoint = `/obituary/${id}`;
    const response = await axios.patch(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Error updating obituary:", error);
    throw new Error("Network error or no response");
  }
};

const updateObituaryVisits = async (id: string) => {
  try {
    const endpoint = `/obituary/visits/${id}`;
    const response = await axios.patch(endpoint);
    return response.data;
  } catch (error: unknown) {
    console.error("Error updating obituary visits:", error);
    throw new Error("Network error or no response");
  }
};

const obituaryService = {
  createObituary,
  getObituary,
  updateObituary,
  updateObituaryVisits,
};

export default obituaryService;
