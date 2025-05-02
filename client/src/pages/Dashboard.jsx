import React from "react";
import ScoreCard from "../components/ScoreCard";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-2xl font-semibold sm:text-left">
        Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <ScoreCard
          title="Revenue"
          value="Rp 100.000.000"
          percentage="+36%"
          positive={true}
        />
        <ScoreCard
          title="Expenses"
          value="Rp 60.000.000"
          percentage="-15%"
          positive={false}
        />
        <ScoreCard
          title="Profit"
          value="40.000.000"
          percentage="+10%"
          positive={true}
        />
        <ScoreCard
          title="Transaction"
          value="152"
          percentage="+5%"
          positive={true}
        />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <LineChart />
        <LineChart />
        <LineChart />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
