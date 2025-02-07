import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Home, User, BarChart2, BookOpen, Mail, ChevronRight } from 'lucide-react';
import { RootState } from '../store/store';
import { setCurrentPath } from '../store/slices/navigationSlice';

const Sidebar: React.FC = () => {
  const currentPath = useSelector((state: RootState) => state.navigation.currentPath);
  const dispatch = useDispatch();

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    {
      path: '/info',
      icon: User,
      label: 'Info',
      subItems: [
        { path: '/info/general', label: 'General' },
        { path: '/info/address-data', label: 'Address data' },
        { path: '/info/configurations', label: 'Configurations' },
      ],
    },
    { path: '/results', icon: BarChart2, label: 'Results' },
    { path: '/enrolling', icon: BookOpen, label: 'Enrolling' },
    { path: '/messages', icon: Mail, label: 'Messages' },
  ];

  return (
    <div className="w-64 bg-[#1C3B40] text-white min-h-screen ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-[#00A1C9] w-96 h-[11.2vh] p-4 ">Progress</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <div key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center p-3 mb-2 rounded-lg transition-colors ${
                currentPath.startsWith(item.path)
                  ? 'bg-[#2A5459] text-white'
                  : 'text-gray-300 hover:bg-[#2A5459]'
              }`}
              onClick={() => dispatch(setCurrentPath(item.path))}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
              {item.subItems && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Link>
            {item.subItems && currentPath.startsWith(item.path) && (
              <div className="ml-4">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={`flex items-center p-2 mb-1 rounded-lg transition-colors ${
                      currentPath === subItem.path
                        ? 'bg-[#2A5459] text-white'
                        : 'text-gray-300 hover:bg-[#2A5459]'
                    }`}
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