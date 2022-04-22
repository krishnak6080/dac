import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fileActions } from "../actions";
import SandBoxStatusView from "../components/sandboxStatus/SandBoxStatusView";

const SandBoxStatus = () => {
  const initialState = "";
  const [sandBoxStatus, setSandBoxStatus] = useState(initialState);
  const history = useHistory();
  let crumb = "";

  const state = useSelector(state => state);
  const jobFinal = state.fileUploader.jobFinal;
  console.log(state);
  const dispatch = useDispatch();
  const { appDeployment } = bindActionCreators(
    fileActions,
    dispatch
  );

  useEffect(() => {
    const authStatus = sessionStorage.getItem("auth");
    if (!authStatus) {
      history.push("/");
    }
    // crumb = sessionStorage.getItem("crumb");
    const link = sessionStorage.getItem("link");
    const fileName = sessionStorage.getItem("fileName");
    const spikeArrest = sessionStorage.getItem("SpikeArrest");
    const CORSHeader = sessionStorage.getItem("CORSHeader");
    const quotaPolicy = sessionStorage.getItem("QuotePolicy");
    const threatProtection = sessionStorage.getItem("ThreatProtection");
    const faultRules = sessionStorage.getItem("FaultRules");

    // const linkFormData = new FormData();
    // linkFormData.append("link", link);
    // linkFormData.append("name", fileName);
    // linkFormData.append("enableSpikeArrest", spikeArrest);
    // linkFormData.append("enableThreatProtection", threatProtection);
    // linkFormData.append("enableCors", CORSHeader);
    // linkFormData.append("enableFaultRules", faultRules);
    appDeployment(fileName);
  }, []);

  useEffect(
    () => {
      console.log(jobFinal);
      setSandBoxStatus(jobFinal);
      sessionStorage.removeItem("from");
    },
    [jobFinal]
  );

  const clickHandler = () => {
    history.push("/data");
  };

  return (
    <SandBoxStatusView
      sandBoxStatus={sandBoxStatus}
      clickHandler={clickHandler}
    />
  );
};

export default SandBoxStatus;
