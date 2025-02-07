import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Globe, User, LogOut } from 'lucide-react';
import { RootState } from '../store/store';

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="bg-[#00A1C9] shadow-sm px-6 py-4 flex justify-between items-center">
      
      <button className="p-2 hover:bg-[#0091B4] rounded-lg text-white">
        <Menu className="w-6 h-6" />
      </button>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-[#0091B4] rounded-lg text-white">
          <Globe className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2 text-white">
          <User className="w-6 h-6" />
          <span className="text-sm font-medium">{user.name}</span>
        </div>
        <button className="p-2 hover:bg-[#0091B4] rounded-lg text-white">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;