import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <PieStatCard title="CPU Usage" used={2} total={100} color="#34D399" unit="%" />
        <PieStatCard title="Memory Usage" used={1.4} total={3.8} color="#FBBF24" unit="GiB" />
        <PieStatCard title="Disk Usage" used={11.0} total={18.2} color="#EC4899" unit="GiB" />
      </div>

      {/* Download & Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <BarStat title="DOWNLOAD" value="46 bytes/s" total="95.4 MiB" />
        <BarStat title="UPLOAD" value="66 bytes/s" total="4.3 MiB" />
      </div>

      {/* System Info */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">System Info</h2>
        <ul className="space-y-1 text-sm">
          <li>Hostname: swap</li>
          <li>Platform: linux x86_64</li>
          <li>Distribution: Ubuntu 20.04 LTS</li>
          <li>Kernel Release: 5.4.0-40-generic</li>
          <li>CPU Model: Intel(R) Core(TM) i3-2350M CPU</li>
          <li>CPU Core: 4</li>
          <li>CPU Speed: 2.30GHz</li>
        </ul>
      </div>
    </div>
  );
};

const PieStatCard = ({ title, used, total, color, unit }) => {
  const data = [
    { name: 'Used', value: used },
    { name: 'Free', value: total - used },
  ];
  const COLORS = [color, '#4B5563'];

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="w-full h-40">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={60}
              innerRadius={30}
              paddingAngle={5}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm font-medium mt-2">
        {used} {unit} / {total} {unit}
      </p>
    </div>
  );
};

const BarStat = ({ title, value, total }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="h-3 bg-gray-700 rounded-full mb-2">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: '20%' }} />
      </div>
      <p className="text-sm">Total: {total}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default Dashboard;
