import React from "react";
import ScoreCard from "../components/ScoreCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex gap-4 rounded-lg">
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div>
    </div>
  );
};

export default Dashboard;
