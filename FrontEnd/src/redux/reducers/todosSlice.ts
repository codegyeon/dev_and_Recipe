import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  _id: string;
  id: string;
  title: string;
  content: string;
  done: boolean;
  writerEmail: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TodosState {
  todos: Todo[] | null;
  todo: Todo | null;
  hasMoreTodos: boolean;
  Loading: boolean;
  haveNew: boolean;
  modalOn: boolean;
  viewMode: number;
  viewMethod: number;
  page: number;
  haveWorking: number;
  haveDone: number;
}

const initialState: TodosState = {
  todos: [],
  todo: {
    _id: "",
    id: "",
    title: "",
    content: "",
    done: false,
    writerEmail: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  hasMoreTodos: true,
  Loading: false,
  haveNew: true,
  modalOn: false,
  viewMode: 1,
  viewMethod: 1,
  page: 1,
  haveWorking: 0,
  haveDone: 0,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos: (state: TodosState, action: PayloadAction<Todo[]>) => {
      console.log(state.todos);
      state.todos = action.payload;
    },
    loadTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      if (state.todos) {
        state.todos = state.todos.concat(action.payload);
      }
    },
    loadTodosWorking: (state: TodosState, action: PayloadAction<Todo[]>) => {
      if (state.todos) {
        state.todos = state.todos.concat(action.payload);
      }
      state.hasMoreTodos = action.payload.length === 10;
    },
    loadTodosDone: (state: TodosState, action: PayloadAction<Todo[]>) => {
      if (state.todos) {
        state.todos = state.todos.concat(action.payload);
      }
      state.hasMoreTodos = action.payload.length === 10;
    },
    loadTodosPaging: (
      state: TodosState,
      action: PayloadAction<{ todos: Todo[]; pageNum: number }>
    ) => {
      state.todos = action.payload.todos;
      state.page = action.payload.pageNum;
    },
    loadTodosWorkingPaging: (
      state: TodosState,
      action: PayloadAction<{ todos: Todo[]; pageNum: number }>
    ) => {
      state.todos = action.payload.todos;
      state.page = action.payload.pageNum;
    },
    loadTodosDonePaging: (
      state: TodosState,
      action: PayloadAction<{ todos: Todo[]; pageNum: number }>
    ) => {
      state.todos = action.payload.todos;
      state.page = action.payload.pageNum;
    },
    resetTodos: (state: TodosState) => {
      state.todos = [];
      state.hasMoreTodos = true;
      state.viewMode = 1;
      state.viewMethod = 1;
    },
    TodoAdd: (state: TodosState, action: PayloadAction<Todo>) => {
      if (state.todos) {
        state.todos = state.todos.concat(action.payload);
      }
    },
    TodoDelete: (state: TodosState, action: PayloadAction<string>) => {
      if (state.todos) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    },
    toggleDone: (state: TodosState, action: PayloadAction<string>) => {
      if (state.todos) {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        );
      }
    },
    trueHaveNew: (state: TodosState) => {
      state.haveNew = true;
    },
    falseHaveNew: (state: TodosState) => {
      state.haveNew = false;
    },
    trueLoading: (state: TodosState) => {
      state.Loading = true;
    },
    falseLoading: (state: TodosState) => {
      state.Loading = false;
    },
    trueModal: (state: TodosState, action) => {
      state.modalOn = true;
      state.todo = action.payload;
    },
    falseModal: (state: TodosState) => {
      state.modalOn = false;
      state.todo = null;
    },

    changeContent: (state: TodosState, action) => {
      state.todo = action.payload;
    },
    changeViewMode: (state: TodosState, action: PayloadAction<number>) => {
      state.todos = [];
      state.viewMode = action.payload;
      state.hasMoreTodos = true;
    },
    changeViewMethod: (state: TodosState, action: PayloadAction<number>) => {
      state.todos = [];
      state.viewMethod = action.payload;
      state.hasMoreTodos = true;
    },
    authTodos: (state: TodosState, action: PayloadAction<Todo[]>) => {
      if (state.todos) {
        state.todos = state.todos.concat(action.payload);
      }
    },
  },
});

export const {
  loadTodos,
  trueLoading,
  falseLoading,
  changeContent,
  trueModal,
  falseModal,
  loadTodo,
  loadTodosWorking,
  trueHaveNew,
  falseHaveNew,
  loadTodosDone,
  resetTodos,
  loadTodosWorkingPaging,
  loadTodosDonePaging,
  loadTodosPaging,
  changeViewMethod,
  changeViewMode,
  TodoDelete,
  toggleDone,
  authTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
