import React from "react";

export default function ParksList({ parks }) {
  return (
    <div className="park-list">
      {parks.map(park => (
        <div className="park" key={park.id}>
          <h2>{park.title}</h2>
          <p>{park.body}</p>
        </div>
      ))}
    </div>
  );
}
