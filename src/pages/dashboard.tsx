import React from 'react';
import Header from '../components/header';

interface DashboardProps {
  user: Record<string, unknown>;
}

function Dashboard({ user }: DashboardProps) {
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"></div>
    </div>
  );
}

export default Dashboard;
