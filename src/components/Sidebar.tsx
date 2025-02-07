import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { RootState } from '../store/store';
import { setCurrentPath } from '../store/slices/navigationSlice';
import { FaChartSimple } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BsFillPersonBadgeFill } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const currentPath = useSelector((state: RootState) => state.navigation.currentPath);
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  const menuItems = [
    { path: '/dashboard', icon: <IoMdHome size='1.5rem' />, label: 'Dashboard' },
    {
      path: '/info',
      icon: <IoPerson size='1.5rem' />,
      label: 'Info',
      subItems: [
        { path: '/info/general', label: 'General' },
        { path: '/info/address-data', label: 'Address data' },
        { path: '/info/configurations', label: 'Configurations' },
      ],
    },
    { path: '/results', icon: <HiOutlineChartSquareBar size='1.5rem' />, label: 'Results' },
    { path: '/enrolling', icon: <BsFillPersonBadgeFill size='1.5rem' />, label: 'Enrolling' },
  ];

  return (
    <div className={`bg-[#1D3A43] text-white min-h-screen transition-all duration-300 ease-in-out
      ${isSidebarOpen ? 'w-64' : 'w-20'} overflow-hidden`}>

      {/* Sidebar Header */}
      <div className="mb-8 flex items-center gap-2 p-2 px-12 bg-[#00A1C9]">
        <FaChartSimple size={24} />
        {isSidebarOpen && <h1 className="text-2xl font-bold">Progress</h1>}
      </div>

      {/* Sidebar Navigation */}
      <nav>
        {menuItems.map((item) => (
          <div key={item.path}>
            {/* Main Menu Item */}
            <Link
              to={item.path}
              className={`flex items-center p-2 mb-2  transition-all duration-200
                ${currentPath.startsWith(item.path) 
                  ? 'bg-[#29444D] text-white border-l-4 border-[#00A1C9]' 
                  : 'text-gray-300 hover:bg-[#29444D] hover:border-l-4 hover:border-[#00A1C9] hover:text-white'}
              `}
              onClick={() => dispatch(setCurrentPath(item.path))}
            >
              {item.icon} {/* Render the icon directly */}
              {isSidebarOpen && <span className="ml-3">{item.label}</span>}
              {item.subItems && isSidebarOpen && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Link>

            {/* Submenu Items */}
            {item.subItems && currentPath.startsWith(item.path) && isSidebarOpen && (
              <div className="ml-4">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={`flex items-center p-2 mb-1 
                                            ${currentPath === subItem.path 
                        ? 'bg-[#29444D] text-white border-l-4 border-[#00A1C9]' 
                        : 'text-gray-300 hover:bg-[#29444D] hover:border-l-4 hover:border-[#00A1C9] hover:text-white'}
                    `}
                    onClick={() => dispatch(setCurrentPath(subItem.path))}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;