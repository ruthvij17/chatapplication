import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Footer from "../Components/FooterComponent";
import ProfileComponent from "../Components/ProfileComponent";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div className="flex flex-row">
        <NavbarComponent />
        <Component {...props} />
        <div className="flex flex-col">
          <ProfileComponent />
          <Footer />
        </div>
      </div>
    );
  };

export default DefaultLayout;
