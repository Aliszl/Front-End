// Container to switch between login.js and register.js

// import React from "react";

// const Home = () => <h1>Home</h1>;

// export default Home;
import React, { useState } from "react";

import ParkForm from "./park/ParkForm";
import ParksList from "./park/ParksList";

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
      id: Date.now()
    };

    setParks([...parks, newPark]);
  };

  return (
    <div className="Parks">
      <h1>
        <i class="fas fa-parking    "></i>
      </h1>
      {/* we are going to pass a function down as a prop */}
      <ParkForm addNewPark={addNewPark} />
      <ParksList parks={parks} />
    </div>
  );
}
