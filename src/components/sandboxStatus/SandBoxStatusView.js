import "./style.scss";
import Sidebar from "../sidebar/SidebarView";
import { useEffect, useState } from "react";

const download_link =
  "https://openapi.sandbox.digitalapicraft.com:8443/openapi-util/utils/download-openapi";

const SandBoxStatusView = props => {
  const fileName = sessionStorage.getItem("fileName");
  const [statusArray, updateArr] = useState([
    { id: 1, task: "Creating API Proxy", subtask: "API Proxy Created", time: 1 }
  ]);
  const [timer, updateTimer] = useState(1000);
  var setTimer;
  useEffect(() => {
    let index = 0;
    setTimer = setInterval(() => {
      updateList(index);
      index += 1;
    }, timer);
  }, []);
  const updateList = index => {
    const statusArray = [
      { id: 1, task: "Applying the Spike Arrest Policy...", time: 1000 },
      { id: 2, task: "Spike Arrest Policy applied", time: 2000 },
      { id: 3, task: "Applying the CORS header Policy...", time: 1000 },
      { id: 4, task: "The CORS header Policy applied", time: 2000 },
      { id: 5, task: "Applying Threat Protection...", time: 1000 },
      { id: 6, task: "Threat Protection is applied", time: 1000 },
      { id: 7, task: "Creating the backend microservices...", time: 3000 },
      { id: 8, task: "Backend microservices created", time: 3000 }
    ];
    updateArr(prevArr => [...prevArr, statusArray[index]]);
    updateTimer(statusArray[index].time);
    if (index === 7) {
      clearInterval(setTimer);
    }
  };

  const renderView = statusArray => {
    return (
      <div>
        {statusArray.map((item, index) => (
          <div key={index} className="tasks">
            <p className="task-status">{item.task}</p>
            {/* <br /> */}
          </div>
        ))}
      </div>
    );
  };
  const conidtionalRender = props => {
    console.log(props);
    if (props.sandBoxStatus) {
      if (props.sandBoxStatus == "") {
        return <p />;
      } 
      else if (props.sandBoxStatus === "Proxy Deployed Successfully") {
        const link = sessionStorage.getItem("link");
        const fileName = sessionStorage.getItem("fileName");
        const finalLink = `${download_link}?link=${link}&name=${fileName}`;
        sessionStorage.setItem("downloadLink", finalLink);
        return (
          <>
            <p>SandBox Creation Completed</p>
            <p>
              You can download from{" "}
              <span>
                <a href={finalLink}>here</a>
              </span>
            </p>
            <button
              type="button"
              className="btn btn-danger  button-style float-end"
              onClick={props.clickHandler}
            >
              {" "}
              Upload Data file{" "}
            </button>
          </>
        );
      } else if (props.sandBoxStatus === "FAILURE") {
        const fileName = sessionStorage.getItem("fileName");
        const finalLink = `${download_link}/${fileName}.json`;
        return (
          <>
            <p>SandBox creation Failed </p>
            {/* <p>You can download from <span><a href={ finalLink }>here</a></span></p> */}
            <button
              type="button"
              className="btn btn-danger  button-style float-end"
              onClick={props.clickHandler}
            >
              {" "}
              Upload Data file{" "}
            </button>
          </>
        );
      }
    }
  };
  return (
    <div className="container">
      <div className="row inner_contianer">
        <div className="col-md-2 col-sm-4 sideview">
          {/* <Sidebar /> */}
        </div>
        <div className="col-md-10  col-sm-8">
          <div class="card">
            <div class="card-header header-style">
            <div className="header-upload"><p>Upload</p></div>
            <div className="header-status"><p>Status</p></div>
            <div className="header-data"><p>Data</p></div>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-md-6">
                  {renderView(statusArray)}
                  {conidtionalRender(props)}
                </div>
                <button type="button" className="download-btn"><p>Download</p></button>
                <div className="col-md-2 meta">
                  <div className="meta-content">
                    <h4>Deployment Details</h4>
                    <p className="app-name">Application Name: {fileName}</p>
                    {/* <p>Cluster Name: usbank-1</p> */}
                    <p className="serv-name">Service Name: dac-mock-sandbox-service</p>
                  </div>
                </div>
                <button type="button" className="next-btn"><p>Next</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandBoxStatusView;
