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
      data: [1, 2, 3, 3, 4, 7, 6, 5, 4, 7, 5, 3],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      pointRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
      grace: "5%",
    },
  },
};

const ChartComponent = () => {
  return (
    <div className="relative mx-auto h-[250px] w-full rounded-md border-gray-200 bg-white p-2 shadow">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
