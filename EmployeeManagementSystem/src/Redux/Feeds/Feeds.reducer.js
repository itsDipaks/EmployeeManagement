import { FEEDS_GET_LOADING,FEEDS_GET_SUCESS,FEEDS_GET_ERROR,FEEDS_DELETE } from "./Feeds.type";
let initialstate = {
  loading: false,
  error: false,
  FeedsData: [],
  msg:{}

};

export const FeedsReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case FEEDS_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FEEDS_GET_SUCESS: {
      // console.log(payload)
      return {
        ...state,
        loading: false,
        FeedsData:payload
      };
    }
    case FEEDS_GET_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case FEEDS_DELETE: {
      return {
        ...state,
        loading: false,
        // msg:payload
      };
    }
    default:return state
  }
};
