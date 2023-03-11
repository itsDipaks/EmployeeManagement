import { EMPLOYEE_GET_LOADING,EMPLOYEE_GET_ERROR,EMPLOYEE_GET_SUCESS } from "./Employee.type";

let initialstate = {
  loading: false,
  error: false,
  employeeData: []
};

export const EmployeeReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case EMPLOYEE_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case EMPLOYEE_GET_SUCESS: {
      return {
        ...state,
        loading: false,
        employeeData:payload
      };
    }
    case EMPLOYEE_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:return state
  }
};
