// import React from 'react'
// import { ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip } from 'recharts'

// function Chart() {

// const array = [
//     {
//         name:"python",
//         students:12,
//         fees:"7$"
//     },
//     {
//         name:"javascript",
//         students:24,
//         fees:"6$"
//     },
//     {
//         name:"PHP",
//         students:22,
//         fees:"4$"
//     },
//     {
//         name:"Java",
//         students:32,
//         fees:"6$"
//     },
//     {
//         name:"C#",
//         students:12,
//         fees:"6$"
//     },
//     {
//         name:"C",
//         students:23,
//         fees:"4$"
//     },
//     {
//         name:"Ruby",
//         students:12,
//         fees:"5$"
//     }
// ] 
//   return (
//     <>
//     <div className='m-20'>
//     <ResponsiveContainer width= "50%" aspect={3}>
//         <BarChart data = {array}  width={400} height={400}>
//             <XAxis datakey = "name"/>
//             <YAxis datakey = "fees"/>
//             <Tooltip/>
//             <Bar dataKey="students" fill='grey'/>
//         </BarChart>
//     </ResponsiveContainer>
//     </div>
//     </>
//   )
// }

// export default Chart


import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

export default function App() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
