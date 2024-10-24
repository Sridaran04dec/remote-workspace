import { Route, Routes } from "react-router-dom";
import Workspace from "../Workspace";
import Sidebar from "../common/sidebar";
import Header from "../common/header";
import Footer from "../common/footer";

export const Auth = () => {
  return (
    <div className="">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="">
          <Routes>
            <Route path="/" element={<Workspace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};
