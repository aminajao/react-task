import React from "react";
import { Percentage } from "./Percentage";
import Main from "./Main";
import Icon1 from "../assets/icon-1.svg";
import Icon2 from "../assets/icon-2.svg";
import Icon3 from "../assets/icon-3.svg";

const data = [
  {
    id: 1,
    tag: "+5%",
    tagType: "increase",
    icon: Icon1,
    heading: "Searches",
    firstValue: 29380,
    secondValue: 27985,
    heading2: "Mobile traffic: 100%",
    heading3: "Web traffic: 100%",
    text: "You get 100% traffic on mobile and desktop devices.",
  },
  {
    id: 2,
    tag: "-13%",
    tagType: "decrease",
    icon: Icon2,
    heading: "Clicks",
    firstValue: 243,
    secondValue: 280,
    heading2: "CTR: 0,04%",
    text: "Conversion from searches  to clicks on all devices.",
  },
  {
    id: 3,
    icon: Icon3,
    heading: "Sales",
    firstValue: 24,
    secondValue: 24,
    heading2: "STR: 6.2%",
    heading3: "Avg. Check: 8 903₽",
    text: "Conversion from cliks  to bookings on all devices.",
  },
];

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
      <div className="metrics">
        {data?.map((eachData) => {
          return <Main data={eachData} />;
        })}
      </div>
    </div>
  );
};

export default Container;
