import React, { useState } from 'react';
import { Home, FileText, Edit, Globe, Menu, X } from 'lucide-react';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Control sidebar visibility

  const menuItems = [
    { icon: Home, label: 'Dashboard', link: 'https://erp.abdulhajees.in' },
    { icon: Edit, label: 'Add Marks', link: 'https://erp.abdulhajees.in/add-marks' },
    { icon: FileText, label: 'View Marks', link: 'https://erp.abdulhajees.in/view-marks' },
    { icon: Globe, label: 'College Website', link: 'https://mamcet.com' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#3b0082] text-white p-4 shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:w-64`}
      >
        <div className="flex justify-between items-center mb-4">
          {/* Menu Button for Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h2 className="text-lg font-bold">Menu</h2>
        </div>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:text-[#3b0082] transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
