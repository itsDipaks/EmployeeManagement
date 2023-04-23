import { FEEDS_GET_LOADING,FEEDS_GET_SUCESS,FEEDS_GET_ERROR,FEEDS_DELETE } from "./Feeds.type";
let initialstate = {
  LoadFeed: false,
  error: false,
  FeedsData: [],
  msg:{}

};

export const FeedsReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case FEEDS_GET_LOADING: {
      return {
        ...state,
        LoadFeed: true,
      };
    }
    case FEEDS_GET_SUCESS: {
      return {
        ...state,
        LoadFeed: false,
        FeedsData:payload
      };
    }
    case FEEDS_GET_ERROR: {
      return {
        ...state,
        LoadFeed: false,
      };
    }
    case FEEDS_DELETE: {
      return {
        ...state,
        LoadFeed: false,
        // msg:payload
      };
    }
    default:return state
  }
};
