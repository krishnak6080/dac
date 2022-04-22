import "./style.scss";

const HomeView = props => {
  return (
    <div className="container">
      <div className="login">
        <h3 className="login-heading">Please Login</h3>
        {props.error && <p className="error">{props.error}</p>}
        <form>
          <div className="mb-3">
            <label for="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="Please enter the user name"
              onChange={e => props.setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Please enter the password"
              onChange={e => props.setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger float-end submit-btn"
            onClick={props.clickHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeView;
