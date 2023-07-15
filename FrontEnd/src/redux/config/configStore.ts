import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import todosReducer from "../reducers/recipeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

// 2. create store
const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
// 3. export
export default store;
