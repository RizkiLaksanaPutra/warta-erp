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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: `Revenue per Outlet - ${new Date().getFullYear()}`,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grace: "5%",
      ticks: {
        autoSkip: true,
        maxRotation: 90,
        minRotation: 0,
      },
    },
  },
};

const labels = [
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
];

const data = {
  labels,
  datasets: [
    {
      label: "Warung Nasi",
      data: [10, 12, 8, 15, 9, 11, 13, 14, 12, 10, 9, 13],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.4)",
      tension: 0.4,
    },
    {
      label: "Sambal Dadak 1",
      data: [8, 9, 11, 10, 12, 13, 12, 11, 10, 9, 8, 10],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      tension: 0.4,
    },
    {
      label: "Sambal Dadak 2",
      data: [5, 6, 4, 7, 5, 6, 5, 7, 6, 5, 6, 7],
      borderColor: "rgb(249, 115, 22)",
      backgroundColor: "rgba(249, 115, 22, 0.4)",
      tension: 0.4,
    },
  ],
};

const ChartComponent = () => {
  return (
    <div className="relative mx-auto h-[300px] w-full rounded-md border border-gray-200 bg-white p-4 shadow">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
