import Sidebar from "../../containers/Sidebar";
import "./style.scss";
const SwaggerUploaderView = props => {
  return (
    <>
    {/* <Sidebar /> */}
    <div class="body-right">
      <form encType="multipart/form-data">
      <div class="swagger-header">
        <div class="swagger-header-step1"><p>Step 1</p><span>Upload</span></div>
        <div class="swagger-header-step2"><p>Step 2</p><span>Status</span></div>
        <div className="swagger-header-line"></div>
        <div class="swagger-header-step3"><p>Step 3</p><span>Data</span></div>
      </div>
      {props.errors && (
              <p className="error-display">{props.errors}</p>
            )}
      <div class="upload-the-swagger-file">
          <p>Please Upload the Swagger file</p>
            <div class="upload-the-swagger-file-input">
              <div class="choose-file">
                <span class="choose-file-text">Choose file</span>
              </div>
              <div class="no-file">
                <span class="no-file-text">
                <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="swaggerFile"
                    onChange={e => props.setSwaggerFile(e.target.files[0])}
                  /></span>
              </div>
            </div>
        </div>
        <div class="application-name">
            <p>Enter the application name</p>
            {props.nameError && (
                    <p className="error-display">*{props.nameError}</p>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    id="fileName"
                    name="fileName"
                    onChange={e => props.setFileName(e.target.value)}
                    onBlur={e =>
                      props.blurHandler(e.target.name, e.target.value)
                    }
                  />
        </div>
        <div class="select-api">
            <p>Please select API management policy</p>
            
            <input 
              type="checkbox" 
              id="api1" 
              name="api1" 
              class="api1"
              value="true" 
              onChange={e => props.setSpikeArrest(e.target.value)}/>
              <label for="api1" class="api1-text">Spike Arrest</label><br/>
              <input
                  type="checkbox"
                  id="api2"
                  name="api2"
                  value="true"
                  class="api2"
                  onChange={e => props.setCORSHeader(e.target.value)}
                />
              <label for="api2" class="api2-text">CORS Header</label><br/>
              <input
                type="checkbox"
                id="api3"
                name="api3"
                value="true"
                class="api3"
                onChange={e => props.setQuotePolicy(e.target.value)}
              />
              <label for="api3" class="api3-text">Quota Policy</label><br/>
            <input 
              type="checkbox" 
              id="api4" 
              class="api4" 
              name="api4"
              value="true"
              onClick={e => props.setThreatProtection(e.target.value)}/>
              <label for="api4" class="api4-text">Threat Protection</label><br/>
            <input 
              type="checkbox" 
              id="api5" 
              class="api5" 
              value="true"
              onChange={e => props.setFaultRules(e.target.value)}/>
              <label for="api5" class="api5-text">Fault Rules</label><br/>
        </div>
        {props.submitErrors && (
          <p className="error-display">{props.submitErrors}</p>
           )}
           <button type="button" className="cancel-btn">Cancel</button>
            <button
              type="button"
              className="next-btn"
              onClick={props.clickSwaggerHandler}
            >
              <p>Next</p>
              
            </button> 
        </form>
          
    </div>
    
    </>
  );
};

export default SwaggerUploaderView;
