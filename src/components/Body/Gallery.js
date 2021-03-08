import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./../style/Gallery.css";
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
        "https://c8.alamy.com/comp/P1KE01/photoshop-vector-icon-isolated-on-transparent-background-photoshop-logo-concept-P1KE01.jpg",
    },
  ]);
  const onSwipe = (direction) => {
    // console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    // console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="Gallery">
      <div className="cardContainer">
        {photos.map((photo) => (
          <TinderCard
            key={photo.name}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              className="img"
              style={{ backgroundImage: `url(${photo.url})` }}
            >
              <span className="photo-name">{photo.name}</span>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
