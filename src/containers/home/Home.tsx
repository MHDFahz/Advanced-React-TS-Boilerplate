import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeHeader">Welcome to My Homepage</h1>
      <p className="homeDescription">
        This is a sample home component built using React and styled with CSS.
      </p>
    </div>
  );
};

export default Home;
