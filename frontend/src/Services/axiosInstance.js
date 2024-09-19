import axios from "axios";

const refreshToken = async () => {
  try {
    await axiosInstance.get("/refresh_token")
  } catch (err) {
    console.log(err)
  }

};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});


axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response;
  },
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (error.response.data.message === "JSON web token is expired. try again") {
          await refreshToken();
          return axiosInstance(originalRequest);
        }
        
      }
    } catch (err) {
      return Promise.reject(err);
    }

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use((config) => {

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default axiosInstance;

