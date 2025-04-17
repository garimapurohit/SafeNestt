import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen p-8 font-sans">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        System Dashboard
      </h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <PieStatCard title="CPU Usage" used={2} total={100} color="#34D399" unit="%" />
        <PieStatCard title="Memory Usage" used={1.4} total={3.8} color="#FBBF24" unit="GiB" />
        <PieStatCard title="Disk Usage" used={11.0} total={18.2} color="#EC4899" unit="GiB" />
      </div>

      {/* Download & Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <BarStat title="DOWNLOAD" value="46 bytes/s" total="95.4 MiB" />
        <BarStat title="UPLOAD" value="66 bytes/s" total="4.3 MiB" />
      </div>

      {/* System Info */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">System Info</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><span className="font-medium text-white">Hostname:</span> swap</li>
          <li><span className="font-medium text-white">Platform:</span> linux x86_64</li>
          <li><span className="font-medium text-white">Distribution:</span> Ubuntu 20.04 LTS</li>
          <li><span className="font-medium text-white">Kernel Release:</span> 5.4.0-40-generic</li>
          <li><span className="font-medium text-white">CPU Model:</span> Intel(R) Core(TM) i3-2350M CPU</li>
          <li><span className="font-medium text-white">CPU Core:</span> 4</li>
          <li><span className="font-medium text-white">CPU Speed:</span> 2.30GHz</li>
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
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold mb-3 text-center text-gray-100">{title}</h2>
      <div className="w-full h-48">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={70}
              innerRadius={40}
              paddingAngle={5}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm font-medium mt-3 text-center text-gray-300">
        {used} {unit} / {total} {unit}
      </p>
    </div>
  );
};

const BarStat = ({ title, value, total }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
      <h2 className="text-xl font-semibold mb-3 text-gray-100">{title}</h2>
      <div className="h-4 bg-gray-700 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: '20%' }}
        />
      </div>
      <p className="text-sm text-gray-400">Total: {total}</p>
      <p className="text-sm text-gray-300">{value}</p>
    </div>
  );
};

export default Home;