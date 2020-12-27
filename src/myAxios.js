import axios from "axios";

const instance = axios.create({
  headers: {"Content-type": "application/json"}
});

instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token');
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});


instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        localStorage.removeItem('token');
		    window.location.reload();
    } else {
        return Promise.reject(error);
    }
});

export default instance
