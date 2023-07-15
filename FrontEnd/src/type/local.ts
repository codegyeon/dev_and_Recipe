import { TodosState } from "../redux/reducers/recipeSlice";
import { UserState } from "../redux/reducers/userSlice";

export interface RootState {
  user: UserState;
  todos: TodosState;
}
