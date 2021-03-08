import React from "react";
import TinderCard from "react-tinder-card";

const Cards = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["Up", "Down"]}
      >
        <img
          src="https://cdn.pixabay.com/photo/2021/02/01/16/22/flamingo-5971206__340.jpg"
          alt="photo"
        />

        <div className="name">First Last</div>
      </TinderCard>
      <h1>hi</h1>
    </div>
  );
};

export default Cards;
