import React, { Component } from "react";
import './About.css';

const About_Information = ({ data }) => {
  if (!data) {
    return <div>Fetching information about user</div>;
  }

  return (
    <div>
      <div className="card">
        <img src="https://media.licdn.com/dms/image/C5103AQFUDEb2cNAa2w/profile-displayphoto-shrink_800_800/0?e=1548288000&amp;v=beta&amp;t=LPDH6FjIzT4jsBaJfN54NIi3p-QfpdRSaKFvlhp-zm4&quot" width="200" height="200"/>
        <div className="card-body">
          <h3 class="card-title">{data.username}</h3>
          <h6>{data.email}</h6>  
          <p class="card-text">Graduate Computer Science Student at University of San Francisco</p>
        </div>
      </div>
    </div>
  );
};

export default About_Information;
