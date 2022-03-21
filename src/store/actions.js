import axiosApi from "../axiosApi";
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DONE_TODO_SUCCESS,
  DONE_TODO_FAILURE
} from "./actionTypes";

const getTodosSuccess = (data) => {
  return {type: GET_TODOS_SUCCESS, data}
};
const getTodosFailure = (error) => {
  return {type: GET_TODOS_FAILURE, error}
};

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.get("/todos");
      dispatch(getTodosSuccess(response.data.data))
    } catch (e) {
      dispatch(getTodosFailure(e));
    }
  }
};

const addTodoSuccess = (data) => {
  return {type: ADD_TODO_SUCCESS, data};
};

const addTodoFailure = (error) => {
  return {type: ADD_TODO_FAILURE, error};
};

export const addTodo = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post("/todos", data);
      dispatch(addTodoSuccess({...data, done: false, id: response.data.todoId}));
    } catch (e) {
      dispatch(addTodoFailure(e));
    }
  }
};

const deleteTodoSuccess = (id) => {
  return {type: DELETE_TODO_SUCCESS, id};
};

const deleteTodoFailure = (error) => {
  return {type: DELETE_TODO_FAILURE, error};
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axiosApi.delete("/todos/" + id);
      dispatch(deleteTodoSuccess(id));
    } catch (e) {
      dispatch(deleteTodoFailure(e));
    }
  }
};

const doneTodoSuccess = (data) => {
  return {type: DELETE_TODO_SUCCESS, data};
};
const doneTodoFailure = (error) => {
  return {type: DELETE_TODO_FAILURE, error};
};

export const doneTodo = (id, body, data) => {
  return async (dispatch) => {
    try {
      await axiosApi.patch("/todos/" + id, body);
      dispatch(doneTodoSuccess(data));
    } catch (e) {
      dispatch(doneTodoFailure(e));
    }
  }
};
