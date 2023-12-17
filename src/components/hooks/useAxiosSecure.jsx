import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosSecure.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access-token");
    console.log("request stopped by interceptors", token);
    config.headers.authorization = `Bearer ${token}`;
    // console.log( config.headers.authorization)
    return config;
  },
  function (error) {
    //Do something with request error
    return Promise.reject(error);
  }
);

//   intercepts 401 and 403 status
axiosSecure.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const status = error.response.status;
    console.log("status error in the interceptor", status);
    if (status === 401 || status === 403) {
      const clearToken = localStorage.removeItem("access-token")
      await clearToken();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
