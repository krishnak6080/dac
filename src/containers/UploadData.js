import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UploadDataView from "../components/dataView/UploadDataView";
import { SEED_URL, UPLOAD_URL, AUTO_URL } from "../Services/ApiList/api.dev";

const UploadData = () => {
  const [CSVFileSuccess, setCSVFileSuccess] = useState(false);
  const [CSVFile, setCSVFile] = useState("");
  const [errors, setErrors] = useState("");
  const [downloadLink, setDownload] = useState("");
  const [csvOption, setCsvOption] = useState("");
  const [autoStatus, setAutoStatus] = useState("");
  const [seedDownload, setSeedDownload] = useState("");
  const history = useHistory();

  useEffect(() => {
    const authStatus = sessionStorage.getItem("auth");
    if (!authStatus) {
      history.push("/");
    }
    setDownload(sessionStorage.getItem("downloadLink"));
  }, []);

  useEffect(
    () => {
      if (csvOption === "auto") {
        postAuto();
      }
      if (csvOption === "customize") {
        history.push("/customize");
      }
    },
    [csvOption]
  );

  const postAuto = async () => {
    try {
      const fileName = sessionStorage.getItem("fileName");

      const autoResp = await axios.post(
        `${AUTO_URL}?applicationName=${fileName}&accountName=dac`
      );
      setAutoStatus(autoResp.status);
      setSeedDownload(`${SEED_URL}?name=${fileName}`);
    } catch (e) {
      setErrors("Error while autogenerating the file");
    }
  };

  const clickHandler = async () => {
    let formData = new FormData();
    formData.append("file", CSVFile);
    try {
      const uploadResp = await axios.post(UPLOAD_URL, formData);
      setCSVFileSuccess(uploadResp);
    } catch (e) {
      setErrors("Error while uploading file");
    }
  };

  return (
    <UploadDataView
      CSVFileSuccess={CSVFileSuccess}
      CSVFile={CSVFile}
      setCSVFile={setCSVFile}
      clickHandler={clickHandler}
      errors={errors}
      downloadLink={downloadLink}
      setCsvOption={setCsvOption}
      csvOption={csvOption}
      autoStatus={autoStatus}
      seedDownload={seedDownload}
    />
  );
};

export default UploadData;
