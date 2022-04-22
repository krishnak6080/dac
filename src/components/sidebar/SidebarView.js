import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
const SidebarView = props => {
  const history = useHistory();
  const displaySide = ({ apiList, clickHandler }) => {
    console.log(apiList);
    if (apiList) {
      return apiList.map((item, index) => {
        return (
          <div key={index}>
              <p>{item.toUpperCase()}</p>
            <hr/>
          </div>
        );
      });
    }
  };

  const movetoNewSandbox = () =>{
    history.push("/swagger");
  }

  return (
    // <nav class="side-bar">
    //   <div className="sandbox-heading">
    //     <p className="heading">Sandbox Instances</p>
    //     </div>
    //   {displaySide(props)}
    //   <Link className="nav-link side-item" to="/">
    //     Create New Sandbox
    //   </Link>
    // </nav>
    <div class="body-left">
      <div class="sandbox-instance">
        <span class="sandbox-instance-text">Sandbox Instance</span>
      </div>
      <button class="create-sandbox" onClick={movetoNewSandbox}>Create New Sandbox</button>
      <div class="body-left-box">
            {displaySide(props)}
            <p>DEMO</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
            <hr/>
            <p>BAS1234</p>
      </div>
      
      {/* <div class="red-box"></div> */}
    </div>
  );
};

export default React.memo(SidebarView);
