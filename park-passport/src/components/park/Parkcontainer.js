import React, { useState } from "react";

import ParkForm from "./ParkForm";
import ParksList from "./ParksList";
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
`;

export default function Parks() {
  const [parks, setParks] = useState([
    {
      id: 1,
      title: "Coldham's Common",
      body:
        "A large open shared use space with wild meadow, sports pitches and woodland.  Fully off lead"
    }
  ]);

  const addNewPark = park => {
    const newPark = {
      ...park,
      id: Date.now();
    };

    setParks([...parks, newPark]);
  };

  return (
    <StyledDiv className="Parks">
      <h1>Parks</h1>
      {/* we are going to pass a function down as a prop */}
      <ParkForm addNewPark={addNewPark} />
      <ParksList parks={parks} />
    </StyledDiv>
  );
}
