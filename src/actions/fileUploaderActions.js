import axios from "axios";

import {
  GET_APIS,
  UPLOAD_SWAGGER,
  DEPLOY_STATUS,
  CUSTOMIZE_CSV,
  UPDATE_CSV,
  CREATE_CSV,
  DOWNLOAD_SEED
} from "./actionTypes";
import {
  POST_URL,
  LIST_URL,
  DEPLOY_URL,
  CUSTOMIZE_CSV_URL,
  UPDATE_CSV_URL,
  CREATE_CSV_URL,
  DOWNLOAD_SEED_URL
} from "../Services/ApiList/api.dev";

export const getApis = () => {
  return dispatch => {
    axios.get(LIST_URL).then(response => {
      dispatch({
        type: GET_APIS,
        payload: response.data
      });
    });
  };
};

export const uploadSwagger = (fileName, data) => {
  return dispatch => {
    axios
      .post(`${POST_URL}?applicationName=${fileName}&accountName=dac&version=3.0`, data)
      .then(response =>
        dispatch({
          type: UPLOAD_SWAGGER,
          payload: response.data.link
        })
      );
  };
};

export const appDeployment = fileName => {
  return dispatch => {
    axios
      .get(`${DEPLOY_URL}?proxyName=${fileName}&basepath=${fileName}&targeturl=https://api.usergrid.com\&quota\=y`)
      .then(response => {
        dispatch({
          type: DEPLOY_STATUS,
          payload: response.data
        });
      });
  };
};

export const customizeApiDetails = fileName => {
  return dispatch => {
    axios
      // .post(`${CUSTOMIZE_CSV_URL}/${fileName}.json&name=${fileName}`)
      .post(`${CUSTOMIZE_CSV_URL}/rtp.json&name=rtp`)
      .then(response => {
        dispatch({
          type: CUSTOMIZE_CSV,
          payload: response.data
        });
      });
  };
};

export const updateAPI = data => {
  return dispatch => {
    axios.put(UPDATE_CSV_URL, data).then(response => {
      dispatch({
        type: UPDATE_CSV,
        payload: response
      });
    });
  };
};

export const createAPI = data => {
  return dispatch => {
    axios.post(CREATE_CSV_URL, data).then(response => {
      dispatch({
        type: CREATE_CSV,
        payload: response.data.result
      });
    });
  };
};
