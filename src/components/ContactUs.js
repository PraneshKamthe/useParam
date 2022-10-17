import React from "react";
import { useNavigate, useParams } from "react-router";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1> Contact Us {id}</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        {" "}
        Go to Home{" "}
      </button>
    </>
  );
};

export default Home;
