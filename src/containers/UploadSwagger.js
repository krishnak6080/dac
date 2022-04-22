import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { fileActions } from "../actions";
import SwaggerView from "../components/swaggerpage/SwaggerView";

const UploadSwagger = () => {
  const initialState = "";
  const [swaggerFile, setSwaggerFile] = useState(initialState);
  const [fileName, setFileName] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [nameError, setNameError] = useState(initialState);
  const [submitErrors, setSubmitErrors] = useState(initialState);
  const [spikeArrest, setSpikeArrest] = useState(false);
  const [CORSHeader, setCORSHeader] = useState(false);
  const [quotePolicy, setQuotePolicy] = useState(false);
  const [threatProtection, setThreatProtection] = useState(false);
  const [faultRules, setFaultRules] = useState(false);
  const history = useHistory();

  const state = useSelector(state => state);
  // const posts = useSelector(state => state.file[0]);
  // console.log(state);
  const dispatch = useDispatch();
  const { uploadSwagger, getCrumbId } = bindActionCreators(
    fileActions,
    dispatch
  );

  useEffect(
    () => {
      // console.log(swaggerFile);
      setSubmitErrors(initialState);
      setErrors(initialState);
    },
    [swaggerFile, fileName]
  );

  useEffect(() => {
    const authStatus = sessionStorage.getItem("auth");
    if (!authStatus) {
      history.push("/");
    }
  }, []);
  const blurHandler = (name, value) => {
    const regx = new RegExp("^[a-zA-Z0-9_-]*$");
    if (!regx.test(value)) {
      setNameError("Please enter an alphanumeric value");
    } else {
      setNameError(initialState);
    }
  };

  const clickSwaggerHandler = async () => {
    // console.log(fileName, swaggerFile);
    if (!fileName || !swaggerFile) {
      setSubmitErrors("Please fill in all the fields");
    } else {
      try {
        let data = new FormData();
        data.append("file", swaggerFile, fileName);
        uploadSwagger(fileName, data);
        // getCrumbId();
        sessionStorage.setItem("fileName", fileName);
        sessionStorage.setItem("SpikeArrest", spikeArrest);
        sessionStorage.setItem("CORSHeader", CORSHeader);
        sessionStorage.setItem("QuotePolicy", quotePolicy);
        sessionStorage.setItem("ThreatProtection", threatProtection);
        sessionStorage.setItem("FaultRules", faultRules);
        history.push("/status");
      } catch (e) {
        setErrors("Error while uploading file");
      }
    }
  };

  return (
    <SwaggerView
      setSwaggerFile={setSwaggerFile}
      setFileName={setFileName}
      setSpikeArrest={setSpikeArrest}
      setCORSHeader={setCORSHeader}
      setQuotePolicy={setQuotePolicy}
      setThreatProtection={setThreatProtection}
      setFaultRules={setFaultRules}
      blurHandler={blurHandler}
      clickSwaggerHandler={clickSwaggerHandler}
      nameError={nameError}
      submitErrors={submitErrors}
      errors={errors}
    />
  );
};

export default UploadSwagger;
