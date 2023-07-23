import React from "react";
import Linewidget from "../../Charts/LineChart/lineChart";
import Barwidget from "../../Charts/BarChart/barChart";
import Piewidget from "../../Charts/PieChart/pieChart";

const Renderchart = ({ userData }) => {
  return (
    <>
      {userData.type === "line" && <Linewidget userData={userData} />}
      {userData.type === "bar" && <Barwidget userData={userData} />}
      {userData.type === "pie" && <Piewidget userData={userData} />}
    </>
  );
};

export default Renderchart;
