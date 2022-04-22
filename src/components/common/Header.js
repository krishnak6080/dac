import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./style.scss";
const Header = () => {
  const history = useHistory();
  const auth = sessionStorage.getItem("auth");
  return (
    <header>
      <nav>
        <span class="open-api">Open <span class="api">API</span>Sandbox by</span>
        <img src="" alt="DigitalAPICraft" class="digital-api"/>
        <button type="submit" class="logout-btn">Logout</button>
      </nav>
      {/* <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img
              src="/images/Logo.png"
              className="custom-logo"
              alt="DigitalAPICraft"
            />
          </Link> */}
          {/* {sessionStorage.getItem("auth") && (
            <button
              type="button"
              className="btn btn-danger float-end logout-btn"
              onClick={() => {
                sessionStorage.removeItem("auth");
                history.push("/");
              }}
            >
              Logout
            </button>
          )} */}
          {/* {
            (auth === "true")  &&
            <button
            type="button"
            className="btn btn-danger float-end logout-btn"
            onClick={() => {
              sessionStorage.removeItem("auth");
              history.push("/");
            }}
          >
            <p className="butn">Logout</p>
          </button>

          }
        </div>
      </div> */}
    </header>
  );
};

export default Header;
