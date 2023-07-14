import api from "../axios/api";
import { UserResponse } from "../redux/reducers/userSlice";

interface User {
  email: string | null;
  nickName: string | null;
  imageUrl: string | null;
  profileContent: string | null;
  profileUrl: string | null;
}

interface NewUser {
  email: string;
  password: string;
  nickName: string;
}

interface LoginUser {
  email: string;
  password: string;
}

const addUser = async (newUser: NewUser): Promise<void> => {
  await api.post(`/user`, newUser);
};

const getUser = async (userEmail: string): Promise<UserResponse> => {
  const response = await api.get(`/user/${userEmail}`);
  return response.data;
};

const getUsers = async (): Promise<User[]> => {
  const response = await api.get(`/user`);
  return response.data;
};

const getAuthToken = async (): Promise<string> => {
  const response = await api.get(`/usertoken`);
  return response.data;
};

const userLogin = async (loginUser: LoginUser): Promise<UserResponse> => {
  const response = await api.post(`/user/login`, loginUser);
  return response.data;
};

const userLogOut = async (): Promise<void> => {
  await api.post(`/user/logout`);
};

const updateUser = async (sendData: {
  email: string;
  nickname: string;
}): Promise<void> => {
  await api.patch(`/user/${sendData.email}/nickname`, {
    nickname: sendData.nickname,
  });
};

const deleteUser = async (userEmail: string): Promise<void> => {
  await api.delete(`/user/${userEmail}`);
};

export {
  addUser,
  getUser,
  getUsers,
  getAuthToken,
  updateUser,
  deleteUser,
  userLogin,
  userLogOut,
};
