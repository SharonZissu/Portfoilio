import React from "react";

const Carrer = () => {
  return (
    <main className="carrer">
      <div className="carrer__text">
        Playing professional football from a very young age shaped my
        personality and taught me many important lessons, teamwork,
        perseverance, ambition and achieving my goals. The experience I had over
        the years on the court gave me the fundamentals on how to be a leader to
        my teammates and to motivate my self in order to succeed.
      </div>
      <div className='carrer__container-photos'>
        <div className="carrer__special-photo"></div>
        <div className="carrer__photos">
          <img
            className="carrer__photos-photo carrer__photos-photo--1"
            src={require("../../../images/football-pic2.jpg")}
            alt="photo1"
          />
          <img
            className="carrer__photos-photo carrer__photos-photo--2"
            src={require("../../../images/football-pic3.jpg")}
            alt="photo2"
          />

          <img
            className="carrer__photos-photo carrer__photos-photo--3"
            src={require("../../../images/football-pic6.jpg")}
            alt="photo3"
          />
        </div>
      </div>
    </main>
  );
};

export default Carrer;
