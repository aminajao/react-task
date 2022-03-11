import React from "react";
import { Percentage } from "./Percentage";

// const errorCode = {0: 1256, 1:}
const Container = () => {
  return (
    <div className="dashboard__container">
      <h1>Main metrics</h1>
      <div>
        <button>Last hour</button>
        <button>Today</button>
        <button>Yesterday</button>
        <button>Last 3 days</button>
      </div>
      <div className="percentage_container">
        <Percentage />
        <Percentage />
        <Percentage />
      </div>
      {/* <div style={{width: `${}`}}> */}

      {/* </div>   */}
    </div>
  );
};

export default Container;
