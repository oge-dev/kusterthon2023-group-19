import React from "react";
import "./Layout.css";
import Ellipse from "../../../img/Ellipse.png";
import Ellipse1 from "../../../img/Ellipse-1.png";
import Ellipse2 from "../../../img/Ellipse-2.png";
import Ellipse3 from "../../../img/Ellipse-3.png";
import Logo from "../../../components/logo/logo";

const Layout = ({ children }) => {
  return (
    <div className="authenication-wrapper">
      <Logo />
      <div className="authenication-content">
        <img src={Ellipse} alt="" className="ellipse-one" />
        <img src={Ellipse1} alt="" className="ellipse-two" />
        <img src={Ellipse2} alt="" className="ellipse-three" />
        <img src={Ellipse3} alt="" className="ellipse-four" />
        <div className="Authenication-children">
          {children}
          </div>
      </div>
      {/* https://www.binaryboxtuts.com/reactjs-tutorials/how-to-develop-login-and-registration-in-reactjs-app-using-api/ */}
    </div>
  );
};

export default Layout;
