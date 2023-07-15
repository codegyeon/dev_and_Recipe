import axios from "axios";
import {UNAUTH_USER} from "../redux/reducers/userSlice";
import store from "../redux/config/configStore";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_LOCAL_SERVER,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  console.log('인터셉트 실패');
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  if (response.status === 501) {
    console.log('토큰이 존재하지 않습니다')
    store.dispatch(UNAUTH_USER());
  }
  return response;
}, (error) => {
  if (error.response && (error.response.status === 501)) {
    console.log('토큰이 존재하지 않습니다')
    store.dispatch(UNAUTH_USER());
  }
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response && error.response.status === 502 && !originalRequest._retry) {
    console.log('액세스토큰이 유효하지 않습니다.')
    originalRequest._retry = true;
    try {
      const { data } = await instance.get(`${import.meta.env.VITE_APP_LOCAL_SERVER}/refreshToken`);
      localStorage.setItem('token', data.token);
      originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
      return instance(originalRequest);
    } catch (err) {
        console.log('리프레시토큰이 만료되었습니다.')
        store.dispatch(UNAUTH_USER());
      return Promise.reject(err);
    }
  }
  return Promise.reject(error);
});

export default instance;