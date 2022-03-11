import React from "react";
import Icon from "../assets/icon-1.svg";

const Metric = ({ data }: any) => {
  return (
    <div className="metric--container">
      <div className="metric__icon--container">
        <img src={data?.icon} alt="" />
      </div>
      <div className="metric__content--container">
        <div>
          <div className="flex">
            <h2 className="metric__content--heading">{data?.heading}</h2>
            {data?.tag ? (
              <span
                style={{
                  background: `${
                    data?.tagType === "increase" ? "#8bc34a" : "#FF6A67"
                  }`,
                }}
                className="tag"
              >
                {data?.tag || ""}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex">
            <p className="metric__content--key">{data?.firstValue}</p>
            <p className="metric__content--value">Yesterday</p>
          </div>
          <div className="flex">
            <p className="metric__content--key2">{data?.secondValue}</p>
            <p className="metric__content--value2">Last friday</p>
          </div>
        </div>
        <div>
          <h2 className="metric__content--heading">{data?.heading2}</h2>
          <h2 className="metric__content--heading">{data?.heading3}</h2>
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
