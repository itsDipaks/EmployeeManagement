import { EMPLOYEE_GET_LOADING,EMPLOYEE_GET_ERROR,EMPLOYEE_GET_SUCESS, EMPLOYEE_DELETE } from "./Employee.type";

let initialstate = {
  Loademployee: false,
  error: false,
  employeeData : [],
  msg:{}
};

export const EmployeeReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case EMPLOYEE_GET_LOADING: {
      return {
        ...state,
        Loademployee: true,
      };
    }
    case EMPLOYEE_GET_SUCESS: {
      
      return {
        ...state,
        Loademployee: false,
        employeeData:payload
      };
    }
    case EMPLOYEE_GET_ERROR: {
      return {
        ...state,
        Loademployee: false,
      };
    }
    case EMPLOYEE_DELETE: {
      return {
        ...state,
        Loademployee: false,
        msg:payload
      };
    }
    default:return state
  }
};
