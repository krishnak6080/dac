import Sidebar from "../../containers/Sidebar";
import EdiText from "react-editext";
import "./style.scss";
const DisplayCustomization = props => {
  // console.log(props)

  const errorDisplay = () => {
    return <p className="error-display">{props.error.message}</p>;
  };
  const listRender = (codeResponses, path, method, pageNo) => {
    if (codeResponses) {
      return codeResponses.map((item, index) => {
        // console.log(codeResponses)
        return (
          <div className="container response-container" key={index}>
            <div>
              <div class="mb-3">
                <label htmlFor="responseCode" class="form-label">
                  Response code:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="responseCode"
                  name="responseCode"
                  value={item.code}
                  readOnly
                />
              </div>
              <div class="mb-3">
                <label htmlFor="responsePayLoad" class="form-label">
                  Response Payload:
                </label>
                <div className="textarea-style">
                  {props.error && props.error.id === index && errorDisplay()}

                  <EdiText
                    type="textarea"
                    showButtonsOnHover
                    inputProps={{
                      className: "textarea",
                      placeholder: "Type your content here",
                      style: {
                        outline: "none",
                        minWidth: "80%"
                      },
                      rows: 10
                    }}
                    className="payloadArea"
                    value={item.message}
                    onSave={v => {
                      try {
                        JSON.parse(v);
                        props.setPayload({
                          id: item.id,
                          code: item.code,
                          message: v
                        });
                        props.setError({ id: "", message: "" });
                      } catch (e) {
                        props.setError({
                          id: index,
                          message: "Please enter JSON data"
                        });
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn-danger button-style float-end"
                onClick={() => props.updateData(path, method, pageNo)}
              >
                Update data
              </button>
            </div>
            {(item.code == "202" || item.code == "200") && (
              <div>
                <button
                  className="btn btn-danger button-style float-end"
                  style={{ marginRight: "20px" }}
                  onClick={() => props.createNew(path, method)}
                >
                  Create new
                </button>
              </div>
            )}
            {props.updateStatus === "Success" &&
              (item.code == "202" || item.code == "200") && (
                <p className="success_msg">
                  Response Payload is added successfully
                </p>
              )}
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="row inner_contianer">
        <div className="col-md-2 col-sm-4 sideview">
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-8">
          <div class="card">
            <h5 class="card-header header-styler">Seed data creation</h5>
            <div class="card-body">
              <div class="mb-3">
                <label for="apiurl" class="form-label">
                  API URL:
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="apiurl"
                  name="apiurl"
                  value={props.path}
                  readOnly
                />
              </div>

              <div class="mb-3">
                <label htmlFor="APImethod" class="form-label">
                  API Method:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="APImethod"
                  name="APImethod"
                  value={props.method}
                  readOnly
                />
              </div>
              <div className="inner-container">
                <h5>Responses</h5>
                {listRender(
                  props.codeResponses,
                  props.path,
                  props.method,
                  props.pageNo
                )}
              </div>
            </div>
            <div className="button-flexbox">
              {props.pageNo >= 1 && (
                <button
                  className="btn btn-danger button-style button-start"
                  onClick={() => {
                    props.setPageNo(pageNo => pageNo - 1);
                  }}
                >
                  <i class="fas fa-angle-left" /> Previous
                </button>
              )}
              {props.pageNo < props.totalPage - 1 && (
                <button
                  className="btn btn-danger button-style button-end"
                  onClick={() => {
                    props.setPageNo(pageNo => pageNo + 1);
                  }}
                >
                  Next <i class="fas fa-angle-right" />
                </button>
              )}
              {props.pageNo == props.totalPage - 1 && (
                <button
                  className="btn btn-danger button-style button-end button-download"
                  onClick={() => (window.location.href = props.seedDownload)}
                >
                  Download the file{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCustomization;
