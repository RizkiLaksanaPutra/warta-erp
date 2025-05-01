import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Revenue (Rp)",
      data: [
        10000000, 10000000, 10000000, 10000000, 10000000, 20000000, 22000000,
        21000000, 25000000, 27000000, 30000000, 15000000,
      ],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      pointRadius: 5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: `Revenue per Month in ${new Date().getFullYear()}`,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartComponent = () => {
  return (
    <div className="rounded-2xl bg-white p-2 shadow">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
