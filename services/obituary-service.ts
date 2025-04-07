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

//memory
const getMemory = async (queryParams?: { id?: string }) => {
  try {
    const endpoint = "/obituary/memory";
    console.log(endpoint, { params: queryParams });
    const response = await axios.get(endpoint, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching obituaries:", error);
    throw new Error("Network error or no response");
  }
};

const getFunerals = async (queryParams?: {
  city?: string;
  region?: string;
  id?: string;
  startDate?: string;
  endDate?: string;
}) => {
  try {
    const endpoint = "/obituary/funerals";
    console.log(endpoint, queryParams);
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
//add sorrow book
const createSorrowBook = async (id: string, data: any) => {
  try {
    const endpoint = `/sorrow-book/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

// add dedication
const createDedication = async (id: string, data: any) => {
  try {
    const endpoint = `/dedication/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

//add photo
const addPhoto = async (id: string, formData: FormData) => {
  try {
    const endpoint = `/photo/${id}`;
    const response = await axios.post(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Error updating obituary:", error);
    throw new Error("Network error or no response");
  }
};

// add condolence
const createCondolence = async (id: string, data: any) => {
  try {
    const endpoint = `/condolence/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

// burn candle
const burnCandle = async (id: string, data: any) => {
  try {
    const endpoint = `/candle/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};
//fetch pending posts
const fetchPendingPosts = async () => {
  try {
    const endpoint = `/obituary/pending-data`;
    const response = await axios.get(endpoint);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};
//change post status
const changePostStatus = async (data: any) => {
  try {
    const endpoint = `/post`;
    const response = await axios.post(endpoint, data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};

////change post status
const assignKeeper = async (data: any) => {
  try {
    const endpoint = `/keeper/`;
    const response = await axios.post(endpoint, data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response;
    } else {
      console.error("Network error:", error);
      throw new Error("Network error or no response");
    }
  }
};
//add report
const addReport = async (id: string, data: any) => {
  try {
    const endpoint = `/report/${id}`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error submitting report:", error);
    throw new Error("Network error or no response");
  }
};
const obituaryService = {
  createObituary,
  getObituary,
  getMemory,
  getFunerals,
  updateObituary,
  updateObituaryVisits,
  createSorrowBook,
  createDedication,
  addPhoto,
  createCondolence,
  burnCandle,
  fetchPendingPosts,
  changePostStatus,
  assignKeeper,
  addReport,
};

export default obituaryService;
