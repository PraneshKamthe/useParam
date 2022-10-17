import React from "react";
import { useNavigate } from "react-router";
import "./Common.css";

const Home = (props) => {
  const navigate = useNavigate();

  const handleAbout = () => {
    const ID = 1;
    navigate(`/about/${ID}`);
  };
  const handleContact = () => {
    const ID = 2;
    navigate(`/contact/${ID}`);
  };
  const handleDashboard = () => {
    navigate(`/`);
    props.setIsLoggedIn(false);
  };

  return (
    <>
      <div display="none">
        <h1> Hi {props.name} </h1>
      </div>
      <div className="css" display="block">
        <button type="about" onClick={handleAbout}>
          {" "}
          About{" "}
        </button>
      </div>
      <div className="css">
        <button type="contact" onClick={handleContact}>
          {" "}
          Contact{" "}
        </button>
      </div>
      <div>
        <button type="dashboard" onClick={handleDashboard}>
          {" "}
          Go To Dashboard{" "}
        </button>
      </div>
    </>
  );
};

export default Home;
