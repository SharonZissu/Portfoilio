import React from "react";

const Home = () => {
  return (
    <main className="home">
      <p className="home__content">
        Hello, I'm Sharon.
        <br />
        <b>
          I'm looking for my first position as a Front End / Full Stack Web
          Developer.
        </b>
        <br />
        Highly motivated to succeed and wishing to enter the Hi-Tech industry.
        <br />
        With a Bachelor's degree in compuer science. <br />
        Intuitive, deductive and self-tahght with attention to details and
        accuracy. Excellent communication skills and interpersonal relations.
      </p>
      <img
        src={require("../../../images/sharon-pic-profile.jpg")}
        alt="Profile"
        className="home__photo"
      />
    </main>
  );
};

export default Home;
