import React, { useState } from "react";
import styled from "styled-components";

// Styling
const StyledDiv = styled.div`
  width: 61.8%;
  margin: 0 auto;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
   
  .park-form {
    padding: 30px;
    width:100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    .parks-button{
      margin-top:30px;
    };
`;

export default function ParkForm(props) {
  const [park, setPark] = useState({ title: "", body: "" });

  const handleChanges = e => {
    setPark({ ...park, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewPark(park);
  };

  return (
    <StyledDiv>
      <form onSubmit={submitForm} className="park-form">
        <label htmlFor="title" className="parks-label">
          Title
        </label>
        <input
          className="parks-input"
          name="title"
          onChange={handleChanges}
          value={park.title}
        />
        <label htmlFor="body" className="parks-label">
          Park Info
        </label>
        <textarea
          className="parks-textarea"
          name="body"
          onChange={handleChanges}
          value={park.body}
        />
        <button className="parks-button">Add Park</button>
      </form>
    </StyledDiv>
  );
}
