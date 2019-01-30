import React, { Component } from "react";
import { Link } from "react-router-dom";

const Profile_Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="col-lg">
          <Link to="/experiences">Experience</Link>
        </div>

        <div className="col-lg">
          <Link to="/education">Education</Link>
        </div>

        <div className="col-lg">
          <Link to="/Technologies">Technologies</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile_Menu;
