import { TODO_GET_LOADING,TODO_GET_SUCESS,TODO_GET_ERROR,TODO_DELETE } from "./Todo.type";
let initialstate = {
  loading: false,
  error: false,
  Todos: [],
  msg:{}

};

export const TodoReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case TODO_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case TODO_GET_SUCESS: {
      return {
        ...state,
        loading: false,
        Todos:payload
      };
    }
    case TODO_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case TODO_DELETE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:return state
  }
};
