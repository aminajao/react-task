import React from "react";
import Icon from "../assets/icon-1.svg";

const Metric = () => {
  return (
    <div className="metric--container">
      <div className="metric__icon--container">
        <img src={Icon} alt="" />
      </div>
      <div className="metric__content--container">
        <div>
          <div className="flex">
            <h2 className="metric__content--heading">Searches</h2>
            <span className="tag">+5%</span>
          </div>
          <div className="flex">
            <p className="metric__content--key">29 380</p>
            <p className="metric__content--value">Yesterday</p>
          </div>
          <div className="flex">
            <p className="metric__content--key2">27 985</p>
            <p className="metric__content--value2">Last friday</p>
          </div>
        </div>
        <div>
          <h2 className="metric__content--heading">Mobile traffic: 100%</h2>
          <h2 className="metric__content--heading">Web traffic: 100%</h2>
          <p className="text__secondary">
            You get 100% traffic on mobile and desktop devices.
          </p>
          <div className="metric__help--container">
            <p>Help: </p>
            <span> Searches, Pessimisation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metric;
