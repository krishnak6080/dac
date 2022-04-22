import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { fileActions } from "../actions";
import SidebarView from "../components/sidebar/SidebarView";

import { DOWNLOAD_URL } from "../Services/ApiList/api.dev";

const Sidebar = () => {
  const [apiList, setApiList] = useState([]);
  const history = useHistory();

  const state = useSelector(state => state);
  const apis = state.fileUploader.apis;
  console.log(state);
  const dispatch = useDispatch();
  const { getApis } = bindActionCreators(fileActions, dispatch);

  useEffect(() => {
    getApis();
  }, []);

  useEffect(
    () => {
      setApiList(apis);
    },
    [apis]
  );

  const clickHandler = selection => {
    console.log(selection);
    const link = "gs://dac-self-service-sandbox/web-spec-uploads";
    const fileName = selection.toLowerCase();
    const finalLink = `${DOWNLOAD_URL}?applicationName=${fileName}&accountName=dac`;
    console.log(finalLink);
    sessionStorage.removeItem("downloadLink");
    sessionStorage.setItem("downloadLink", finalLink);
    sessionStorage.setItem("fileName", fileName);
    sessionStorage.setItem("from", "sideBar");
    history.push("/data");
  };
  return <SidebarView apiList={apiList} clickHandler={clickHandler} />;
};

export default Sidebar;
