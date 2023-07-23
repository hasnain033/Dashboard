import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const Barwidget = ({ userData }) => {
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
      style={{
        width: `${20 * userData.width}rem`,
        height: `${20 * userData.height}rem`,
      }}
      ref={divRef}
    >
      <BarChart width={divWidth} height={divHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Barwidget;
