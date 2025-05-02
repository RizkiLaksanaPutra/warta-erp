import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Warung Nasi", "Sambal Dadak 1", "Sambal Dadak 2"],
  datasets: [
    {
      label: "# of Votes",
      data: [12000000, 150000000, 240000000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="relative mx-auto h-[250px] w-full rounded-md border-gray-200 bg-white p-2 shadow">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
