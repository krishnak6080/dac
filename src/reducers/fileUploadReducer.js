import {
  GET_APIS,
  UPLOAD_SWAGGER,
  // GET_CRUMBID,
  // POST_JENKIN,
  // JENKIN_JOB,
  DEPLOY_STATUS,
  CUSTOMIZE_CSV,
  UPDATE_CSV,
  CREATE_CSV,
  DOWNLOAD_SEED
} from "../actions/actionTypes";
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SWAGGER:
      return { ...state, swaggerLink: action.payload };
    // case GET_CRUMBID:
    //   return { ...state, crumbid: action.payload };
    case GET_APIS:
      return { ...state, apis: action.payload };
    // case POST_JENKIN:
    //   return { ...state, jenkinStatus: action.payload };
    // case JENKIN_JOB:
    //   return { ...state, jobStatus: action.payload };
    case DEPLOY_STATUS:
      return { ...state, jobFinal: action.payload };

    case CUSTOMIZE_CSV:
      return { ...state, customizeCsv: action.payload };
    case UPDATE_CSV:
      return { ...state, updateCsv: action.payload };
    case CREATE_CSV:
      return { ...state, createCsv: action.payload };
    case DOWNLOAD_SEED:
      return { ...state, downloadSeed: action.payload };

    default:
      return state;
  }
};

export default reducer;
