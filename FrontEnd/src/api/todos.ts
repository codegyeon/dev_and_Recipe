import api from "../axios/api";

interface Todo {
  title:string;
  content:string;
  done: boolean;
  id: string;
  writerEmail:string|null;
}

interface SendData{
  id:string|undefined;
  content:string|undefined;
}

//todos
const addTodo = async (newTodo:Todo) => {
  await api.post(`/todos`, newTodo);
};

const getTodos = async () => {
  const response = await api.get(`/todos`);
  return response.data;
};

const getTodo = async (todoId:string) => {
  const response = await api.get(`/todos/todo/${todoId}`);
  return response.data;
};

const getTodosWorking = async (page:number) => {
  const response = await api.post(`/todos/working/infinite`, {page:page});
  return response.data;
};

const getTodosDone = async(page:number) => {
  const response = await api.post(`/todos/done/infinite`,{page:page});
  return response.data;
};

const getTodosWorkingPaging = async (page:number) => {
  const response = await api.post(`/todos/working/pagination`, {page:page});
  return response.data;
};

const getTodosDonePaging = async (page:number) => {
  const response = await api.post(`/todos/done/pagination`,{page:page});
  return response.data;
};

const updateDoneTodo = async (todo:Todo) => {
  const response = await api.patch(`/todos/${todo.id}/done`, {done: !(todo.done)});
  return response.data;
};

const updateTodo = async (sendData:SendData) => {
  const response = await api.patch(`/todos/${sendData.id}/content`, {content: sendData.content});
  return response.data;
};

const deleteTodo = async (todoId:string) => {
  const response = await api.delete(`/todos/${todoId}`);
  return response.data;
};


export {getTodos,getTodo, addTodo, updateTodo, updateDoneTodo, deleteTodo ,getTodosDone ,getTodosWorking ,getTodosWorkingPaging ,getTodosDonePaging};