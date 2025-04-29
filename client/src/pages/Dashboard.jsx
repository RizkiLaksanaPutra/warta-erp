import React from "react";
import ScoreCard from "../components/ScoreCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="rounded-lg flex gap-4">
        <ScoreCard />
        <ScoreCard />
      </div>
    </div>
  );
};

export default Dashboard;
