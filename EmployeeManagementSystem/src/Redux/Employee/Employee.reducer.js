import { EMPLOYEE_GET_LOADING,EMPLOYEE_GET_ERROR,EMPLOYEE_GET_SUCESS, EMPLOYEE_DELETE } from "./Employee.type";

let initialstate = {
  loading: false,
  error: false,
  employeeData: [],
  msg:{}
 
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
    case EMPLOYEE_DELETE: {
      return {
        ...state,
        loading: false,
        msg:payload
      };
    }
    default:return state
  }
};
