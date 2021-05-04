import React from 'react';

interface DashboardProps {
  user: Record<string, unknown>;
}

function Dashboard({ user }: DashboardProps) {
  return <div className="bg-gray-background"></div>;
}

export default Dashboard;
