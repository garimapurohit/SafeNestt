import React, { useState } from "react";
import { FiSidebar } from "react-icons/fi";
import {
  Home as HomeIcon,
  Activity,
  HardDrive,
  Cpu,
  BarChart3,
  Network,
  Settings,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Sidebar Component
const menuItems = [
  { icon: HomeIcon, label: "Overview" },
  {
    icon: HardDrive,
    label: "Cloud Storage",
    link: "http://10.66.66.1:8081",
  },
  {
    icon: Network,
    label: "Media Server",
    link: "http://10.66.66.1:8096",
  },
  { icon: Settings, label: "Settings" },
];

const Sidebar = ({ isExpanded, activeIndex, setActiveIndex }) => {
  return (
    <div
      className={`h-screen fixed left-0 top-0 z-40 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h2
            className={`font-bold text-white transition-all duration-300 overflow-hidden ${
              isExpanded ? "text-5xl text-left" : "text-lg text-center"
            }`}
          >
            SafeNest
          </h2>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 relative">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;
            const content = (
              <div key={index} className="relative group">
                <div
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400"
                  } hover:bg-gray-800/50 hover:text-blue-400`}
                >
                  <item.icon size={20} />
                  <span
                    className={`ml-4 whitespace-nowrap transition-all duration-300 ${
                      !isExpanded ? "opacity-0 w-0 overflow-hidden" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {!isExpanded && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 hidden group-hover:block z-50">
                    <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                      {item.label}
                    </div>
                  </div>
                )}
              </div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                {content}
              </a>
            ) : (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={item.label}
                title={item.label}
                className="w-full text-left"
              >
                {content}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// PieStatCard Component
const PieStatCard = ({ title, used, total, color, unit }) => {
  const data = [
    { name: "Used", value: used },
    { name: "Free", value: total - used },
  ];
  const COLORS = [color, "#4B5563"];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold mb-3 text-center text-gray-100">
        {title}
      </h2>
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

// BarStat Component
const BarStat = ({ title, value, total }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
      <h2 className="text-xl font-semibold mb-3 text-gray-100">{title}</h2>
      <div className="h-4 bg-gray-700 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: "20%" }}
        />
      </div>
      <p className="text-sm text-gray-400">Total: {total}</p>
      <p className="text-sm text-gray-300">{value}</p>
    </div>
  );
};

// Home Dashboard
const Home = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex">
      <Sidebar isExpanded={isExpanded} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <main
        className={`transition-all duration-300 ml-20 ${
          isExpanded ? "md:ml-64" : "ml-20"
        } w-full p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white`}
      >
     <button
  className="mb-6 px-4 py-2 bg-blue-500/10 text-white rounded hover:bg-gray-600 border border-blue-800"
  onClick={() => setIsExpanded(!isExpanded)}
>
  <FiSidebar size={29} />
</button>


        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          System Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PieStatCard title="CPU Usage" used={2} total={100} color="#34D399" unit="%" />
          <PieStatCard title="Memory Usage" used={1.4} total={3.8} color="#FBBF24" unit="GiB" />
          <PieStatCard title="Disk Usage" used={11.0} total={18.2} color="#EC4899" unit="GiB" />
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <h1 className="text-4xl font-bold mb-4 text-blue-300">System Info</h1>
          <ul className="space-y-2 text-xl text-gray-300">
            <li><span className="font-medium text-white">Hostname:</span> swap</li>
            <li><span className="font-medium text-white">Platform:</span> linux x86_64</li>
            <li><span className="font-medium text-white">Distribution:</span> Debian12</li>
            <li><span className="font-medium text-white">Kernel Release:</span> 5.4.0-40-generic</li>
            <li><span className="font-medium text-white">CPU Model:</span> Intel(R) Core(TM) i3-2350M CPU</li>
            <li><span className="font-medium text-white">CPU Core:</span> 4</li>
            <li><span className="font-medium text-white">CPU Speed:</span> 2.30GHz</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
