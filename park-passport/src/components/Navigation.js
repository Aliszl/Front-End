import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* height: 80px; */
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;

const Navigation = () => {
  return (
    <StyledDiv>
      <div>
        <Link to={`/`}>
          <a href="">Home</a>
        </Link>
      </div>
      <div>
        <Link to={`/Login`}>
          <a href="">Login</a>
        </Link>
      </div>
      <div>
        <Link to={`/register`}>
          <a href="">Register</a>
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Navigation;