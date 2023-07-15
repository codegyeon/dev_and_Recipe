import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LocalStorageKey {
  Token = "token",
}

export interface UserState {
  user: {
    email: string | null;
    nickName: string | null;
    isLogged: boolean;
    token: string | null | undefined;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: boolean;
    imageUrl: string | null;
    profileContent: string | null;
  };
}

export interface UserResponse {
  userResponse: Omit<UserState["user"], "isLogged" | "token"> & {
    profileUrl: string;
  };
  token: string;
}

const initialState: UserState = {
  user: {
    email: null,
    nickName: null,
    isLogged: false,
    token: null,
    logInLoading: false,
    logInDone: false,
    logInError: false,
    imageUrl: null,
    profileContent: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.userResponse.email;
      state.user.nickName = action.payload.userResponse.nickName;
      state.user.profileContent = action.payload.userResponse.profileContent;
      state.user.imageUrl = action.payload.userResponse.profileUrl;
      state.user.token = action.payload.token;
      localStorage.setItem(LocalStorageKey.Token, action.payload.token);
      state.user.isLogged = true;
    },
    LOGOUT_USER: (state: UserState) => {
      state.user.email = null;
      state.user.token = null;
      state.user.isLogged = false;
      state.user.profileContent = null;
      state.user.imageUrl = null;
      state.user.nickName = null;
      localStorage.removeItem(LocalStorageKey.Token);
    },
    LOAD_PROFILE_IMAGE: (state: UserState, action: PayloadAction<string>) => {
      state.user.imageUrl = action.payload;
    },
    AUTH_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.userResponse.email;
      state.user.nickName = action.payload.userResponse.nickName;
      state.user.profileContent = action.payload.userResponse.profileContent;
      state.user.imageUrl = action.payload.userResponse.profileUrl;
      state.user.isLogged = true;
    },
    UNAUTH_USER: (state: UserState) => {
      state.user.email = null;
      state.user.isLogged = false;
      state.user.profileContent = null;
      state.user.imageUrl = null;
      state.user.nickName = null;
      state.user.token = undefined;
      localStorage.removeItem(LocalStorageKey.Token);
    },
  },
});

export const { LOGIN_USER, LOGOUT_USER, AUTH_USER, UNAUTH_USER, LOAD_PROFILE_IMAGE } =
  userSlice.actions;

export default userSlice.reducer;
