import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import React from "react";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Linewidget = ({ userData }) => {
  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
        setDivHeight(divRef.current.offsetHeight);
      }
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="col-12"
      style={{
        width: `${20 * userData.width}rem`,
        height: `${20 * userData.height}rem`,
      }}
      ref={divRef}
    >
      <LineChart width={divWidth} height={divHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Linewidget;
