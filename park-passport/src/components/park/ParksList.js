import React from "react";
import styled from "styled-components";

// Styling
const StyledDiv = styled.div`
  width: 61.8%;
  margin: 0 auto;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  .park {
    margin: 1%;
    padding: 30px;
    width: 30%;
    /* margin-top: 5px; */
    display: flex;

    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;
export default function ParksList({ parks }) {
  return (
    <StyledDiv className="park-list">
      {parks.map(park => (
        <div className="park" key={park.id}>
          <h2>{park.title}</h2>
          {/* <p>{park.id}</p> */}
          <p>{park.body}</p>
        </div>
      ))}
    </StyledDiv>
  );
}
