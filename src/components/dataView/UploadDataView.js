import Sidebar from "../sidebar/SidebarView";
import "./style.scss";

const UploadDataView = props => {
  return (
    <div className="container">
      <div className="row inner_contianer">
        <div className="col-md-2 col-sm-4 sideview">
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-8">
          <div class="card">
            <h5 class="card-header header-styler">Upload the seed data</h5>
            <div class="card-body">
              {sessionStorage.getItem("downloadLink") && (
                <div>
                  <h5 className="dropdown-label">
                    You can download the Sandbox from{" "}
                    <span>
                      <a href={sessionStorage.getItem("downloadLink")}>here</a>
                    </span>
                  </h5>
                </div>
              )}
              <div className="dropdown-container">
                <label for="dropdownMenuLink" class="form-label dropdown-label">
                  Please select option for seed data creation
                </label>
                <div class="dropdown place-dropdown">
                  <a
                    class="btn btn-danger dropdown-toggle  button-style"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select an option
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <button
                        class="dropdown-item color-select"
                        name="csv_option"
                        value="auto"
                        onClick={e => {
                          props.setCsvOption(e.target.value);
                        }}
                      >
                        Autogenerate data
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item color-select"
                        name="csv_option"
                        value="customize"
                        onClick={e => {
                          props.setCsvOption(e.target.value);
                        }}
                      >
                        Edit the seed data
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item color-select"
                        name="csv_option"
                        value="upload"
                        onClick={e => {
                          props.setCsvOption(e.target.value);
                        }}
                      >
                        Upload the seed data
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {props.csvOption === "upload" && (
                <form encType="multipart/form-data">
                  {props.errors && (
                    <p className="error-display">{props.errors}</p>
                  )}
                  <div class="mb-3">
                    <label for="formFile" class="form-label upload_label">
                      Please upload the Seed file
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      name="CSVFile"
                      onChange={e => props.setCSVFile(e.target.files[0])}
                    />
                  </div>
                  {props.CSVFile ? (
                    <button
                      type="button"
                      className="btn btn-danger button-style float-end btn-lg"
                      onClick={props.clickHandler}
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-danger button-style float-end btn-lg"
                      onClick={props.clickHandler}
                      disabled
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  )}
                </form>
              )}
              {props.csvOption === "auto" &&
                props.autoStatus === 200 && (
                  <>
                    <h3 className="dropdown-label">
                      {" "}
                      Seed data is generated successfully !!
                    </h3>
                    <h3 className="dropdown-label">
                      You can download the seed data from{" "}
                      <span>
                        <a href={props.seedDownload}>here</a>
                      </span>
                    </h3>
                  </>
                )}
            </div>
          </div>
          <div className="success-message">
            {props.CSVFileSuccess && (
              <h3> Seed data is uploaded .. Thank you!! </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDataView;
