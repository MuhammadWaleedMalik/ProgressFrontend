import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './Dashboard.css';

import { IoIosArrowForward } from "react-icons/io";


const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-[20px] text-[#827f77] font-bold mb-6">WELCOME {user.firstName.toUpperCase()}</h1>
      
      <div id='dashboard-box1'>
        <h2 className="text-lg font-semibold mb-4">Fontys Information and Communication Technology:</h2>
        <p className="text-gray-600">Welcome at FH ICT website for study results and enrolments</p>
      </div>

      <div  id='dashboard-box2'>
        <h2 className="text-lg  text-[#827f77] font-semibold mb-4">Propaedeutic Phase</h2>
     
        <div id='dashboard-input'>

            <input type="text" />
            <p className="text-right">0 / 60 ECTS</p>

            <p className='text-right text-blue-500' >  View</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;