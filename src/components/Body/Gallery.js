import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./../style/Gallery.css";
import axios from "./../../axios";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/gallery");
      console.log("result:", req.data);
      setPhotos(req.data);
    }
    fetchData();
  }, []);

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
              style={{ backgroundImage: `url(${photo.imgUrl})` }}
            >
              <span className="photo-name">{photo.name}</span>
            </div>
            {console.log(`name ${photo.name} {photo.url}`)}
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
