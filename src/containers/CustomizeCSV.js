import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { fileActions } from "../actions";
import DisplayCustomization from "../components/customizeCSV/DisplayCustomization";
import loader from "../assets/images/loader.gif";

import { SEED_URL } from "../Services/ApiList/api.dev";

const CustomizeCSV = () => {
  const [response, setResponse] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotal] = useState(0);
  const [responsePayLoad, setPayload] = useState({
    id: "",
    code: "",
    message: ""
  });
  const [error, setError] = useState({ id: "", message: "" });
  const [updateStatus, setUpdateStatus] = useState("");
  const [seedDownload, setSeedDownload] = useState("");
  const history = useHistory();

  const state = useSelector(state => state);
  const apiDetails = state.fileUploader.customizeCsv;
  const apiUpdate = state.fileUploader.updateCsv;
  const dispatch = useDispatch();
  const { customizeApiDetails, updateAPI, createAPI } = bindActionCreators(
    fileActions,
    dispatch
  );

  useEffect(() => {
    const authStatus = sessionStorage.getItem("auth");
    if (!authStatus) {
      history.push("/");
    }
    const fileName = sessionStorage.getItem("fileName");
    customizeApiDetails(fileName);
  }, []);

  useEffect(
    () => {
      const fileName = sessionStorage.getItem("fileName");
      setSeedDownload(`${SEED_URL}?name=${fileName}`);
      setResponse(apiDetails);
      console.log(response);
    },
    [apiDetails]
  );

  useEffect(
    () => {
      window.scrollTo({
        top: 0,
        left: 0
      });
      setPayload("");
      setUpdateStatus("");
    },
    [pageNo]
  );

  useEffect(
    () => {
      if (response) {
        setTotal(response.sampleResponses.length);
      }
    },
    [response]
  );

  const updateData = async (path, method, pageNo) => {
    const { id, code, message } = responsePayLoad;
    sessionStorage.setItem("pageNo", pageNo);
    const data = {
      id: id,
      method: method,
      path: path,
      code: code,
      //   applicationName: sessionStorage.getItem("fileName"),
      applicationName: "rtp",
      payload: message,
      transactionId: "_default"
    };

    updateAPI(data);
  };

  useEffect(
    () => {
      const fileName = sessionStorage.getItem("fileName");
      customizeApiDetails(fileName);
      //   const newPage = parseInt(sessionStorage.getItem("pageNo"), 10);
      //   setPageNo(newPage);
    },
    [apiUpdate]
  );

  const createNew = async (path, method) => {
    const { id, code, message } = responsePayLoad;
    const data = {
      id: id,
      method: method,
      path: path,
      code: code,
      //   applicationName: sessionStorage.getItem("fileName"),
      applicationName: "rtp",
      payload: message,
      transactionId: Math.floor(Math.random() * 10000000 + 1)
    };
    console.log(data);
    try {
      createAPI(data);
      // console.log(createStatus)
      setUpdateStatus("Success");
    } catch (error) {
      console.log(error);
    }
  };

  const view = response => {
    console.log(response);
    console.log("pageNo", pageNo);
    return (
      <DisplayCustomization
        path={response.sampleResponses[pageNo].path}
        method={response.sampleResponses[pageNo].method}
        codeResponses={response.sampleResponses[pageNo].codeResponses}
        setPageNo={setPageNo}
        pageNo={pageNo}
        totalPage={totalPage}
        setPayload={setPayload}
        updateData={updateData}
        setError={setError}
        error={error}
        createNew={createNew}
        seedDownload={seedDownload}
        updateStatus={updateStatus}
      />
    );
  };

  if (response && response.sampleResponses) {
    // console.log(response)
    return <div>{view(response)}</div>;
  } else {
    return <img style={{ padding: "5rem" }} src={loader} alt="loading" />;
  }
};

export default CustomizeCSV;
