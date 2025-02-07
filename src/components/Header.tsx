import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from 'lucide-react';
import { RootState } from '../store/store';
import { IoPerson } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";
import { toggleSidebar } from '../store/slices/uiSlice'; // Corrected import

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="bg-[#00A1C9] shadow-sm px-6 py-1 flex justify-between items-center">
      
      <button 
        className="p-2 hover:bg-[#0091B4] rounded-lg text-white"
        onClick={() => dispatch(toggleSidebar())} // Toggle sidebar on click
      >
        <Menu className="w-6 h-6" />
      </button>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-white">
          <IoPerson size='1.5rem' />
          <span className="text-1xl font-medium">{user.name}</span>
        </div>
        <div className='bg-white border-none w-[1px] h-8'></div>
        <button className="p-2 hover:bg-[#0091B4] rounded-lg text-white">
          <RiShutDownLine size='1.5rem' />
        </button>
      </div>
    </header>
  );
};

export default Header;
