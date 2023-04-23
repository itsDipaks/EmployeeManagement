import { TODO_GET_LOADING,TODO_GET_SUCESS,TODO_GET_ERROR,TODO_DELETE } from "./Todo.type";
let initialstate = {
  LoadTodo: false,
  error: false,
  Todos: [],
  msg:{}

};

export const TodoReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case TODO_GET_LOADING: {
      return {
        ...state,
        LoadTodo: true,
      };
    }
    case TODO_GET_SUCESS: {
      return {
        ...state,
        LoadTodo: false,
        Todos:payload
      };
    }
    case TODO_GET_ERROR: {
      return {
        ...state,
        LoadTodo: false,
      };
    }
    case TODO_DELETE: {
      return {
        ...state,
        LoadTodo: false,
      };
    }
    default:return state
  }
};
