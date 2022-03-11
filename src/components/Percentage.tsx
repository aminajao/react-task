import React from "react";
import GreenCircle from "../assets/green-circle.svg";

export const Percentage = () => {
  return (
    <div className="percentage">
      <div>
        <img src={GreenCircle} alt="green icon" />
      </div>
      <div className="percentage_content">
        <h2 className="percentage__heading">Errors: 0,12% </h2>
        <p className="percentage__text">Average: 0,11%</p>
      </div>
    </div>
  );
};
