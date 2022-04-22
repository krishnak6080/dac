import { Route, BrowserRouter } from "react-router-dom";
import uploadSwagger from "./containers/UploadSwagger";
import SandBoxStatus from "./containers/SandBoxStatus";
import UploadData from "./containers/UploadData";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./containers/HomePage";
import CustomizeCSV from "./containers/CustomizeCSV";
const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/swagger" component={uploadSwagger} />
      <Route path="/status" component={SandBoxStatus} />
      {/* <Route path="/data" component={UploadData} /> */}
      {/* <Route path="/customize" component={CustomizeCSV} />  */}
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
