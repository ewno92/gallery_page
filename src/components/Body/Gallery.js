import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const Gallery = () => {
  const [photos, setPhotos] = useState([
    {
      name: "firstPerson",
      url:
        "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTE4MDAzNDEwMzY0NDMzOTM0/jessica-alba-299896-1-402.jpg",
    },
    {
      name: "SecondPerson",
      url:
        "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTE4MDAzNDEwMzY0NDMzOTM0/jessica-alba-299896-1-402.jpg",
    },
  ]);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      {Photos.map((photo) => (
        <h1>{Photo.name}</h1>
      ))}
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      ></TinderCard>
    </div>
  );
};

export default Gallery;
