import React, { useState } from "react";
import {
  Home,
  Activity,
  HardDrive,
  Cpu,
  BarChart3,
  Network,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Overview" },
  { icon: Cpu, label: "CPU" },
  { icon: BarChart3, label: "Memory" },
  { icon: HardDrive, label: "Storage" },
  { icon: Network, label: "Network" },
  { icon: Activity, label: "Processes" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = ({ isExpanded }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              isExpanded ? "text-xl text-left" : "text-lg text-center"
            }`}
          >
            System
          </h2>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 relative">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="relative group">
                <button
                  onClick={() => setActiveIndex(index)}
                  aria-label={item.label}
                  title={item.label}
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
                </button>

                {/* Tooltip when collapsed */}
                {!isExpanded && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 hidden group-hover:block z-50">
                    <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                      {item.label}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
