import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Chart.js Bar Chart",
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
  "Ayam Bakar",
  "Nila Goreng",
  "Ayam Goreng",
  "Lele Goreng",
  "Tahu",
  "Sate Usus",
];

const data = {
  labels,
  datasets: [
    {
      label: "Jumlah Terjual",
      data: [82, 42, 23, 45, 25, 60],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="relative mx-auto flex h-[300px] w-full justify-center rounded-md border border-gray-200 bg-white p-2 shadow sm:col-span-2">
      <Bar options={options} data={data} className="h-full" />
    </div>
  );
};

export default BarChart;
