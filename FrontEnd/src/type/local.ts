import { TodosState } from "../redux/reducers/todosSlice";
import { UserState } from "../redux/reducers/userSlice";

export interface RootState {
  user: UserState;
  todos: TodosState;
}
