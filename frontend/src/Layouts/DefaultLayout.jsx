import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Footer from "../Components/FooterComponent";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavbarComponent />
        <Component {...props} />
        <Footer></Footer>
      </div>
    );
  };

export default DefaultLayout;
