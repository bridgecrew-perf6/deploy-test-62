import {
  GET_TODOS_FAILURE,
  GET_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DONE_TODO_SUCCESS,
  DONE_TODO_FAILURE,
} from "./actionTypes";

const initialState = {
  todos: [],
  getTodosError: null,
  addTodoError: null,
  deleteTodoError: null,
  doneTodoError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return {...state, todos: action.data, getTodosError: null};
    case GET_TODOS_FAILURE:
      return {...state, getTodosError: action.error};
    case ADD_TODO_SUCCESS:
      return {...state, todos: state.todos.concat(action.data), addTodoError: null};
    case ADD_TODO_FAILURE:
      return {...state, addTodoError: action.error};
    case DELETE_TODO_SUCCESS:
      return {...state, todos: state.todos.filter((todo) => todo.id !== action.id), deleteTodoError: null};
    case DELETE_TODO_FAILURE:
      return {...state, deleteTodoError: action.error}
    case DONE_TODO_SUCCESS:
      return {...state, todos: action.data};
    case DONE_TODO_FAILURE:
      return {...state, doneTodoError: action.error}
    default:
      return {...state}
  }
};

export default reducer;
