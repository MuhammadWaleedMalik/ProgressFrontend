import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './Dashboard.css';



const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-[20px] text-[#827f77] font-bold mb-6">WELCOME {user.firstName.toUpperCase()}</h1>
      
      <div id='dashboard-box1'>
        <h2 className="text-lg font-semibold mb-4">Fontys Information and Communication Technology:</h2>
        <p className="text-gray-600">Welcome at FH ICT website for study results and enrolments</p>
      </div>

      
    </div>
  );
};

export default Dashboard;