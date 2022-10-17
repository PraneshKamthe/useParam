import React from "react";
import { useNavigate } from "react-router";
import "./Common.css";

const Dashboard = (props) => {
  const navigate = useNavigate();

  const handleTransfer = () => {
    if (props.name === undefined || props.name === null || props.name === "") {
      alert("Please Enter the name");
      return;
    } else {
      navigate("/home");
      props.setIsLoggedIn(true);
    }
  };

  return (
    <>
      <h5> Please type your name to login: </h5>
      <div className="css">
        <input
          type="text"
          onChange={(e) => props.setName(e.target.value)}
          placeholder="Your Name"
        />
      </div>
      <div>
        <button onClick={handleTransfer}> Login </button>
      </div>
    </>
  );
};

export default Dashboard;
