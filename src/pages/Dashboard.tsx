import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">WELCOME {user.firstName.toUpperCase()}</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Fontys Information and Communication Technology:</h2>
        <p className="text-gray-600">Welcome at FH ICT website for study results and enrolments</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Propaedeutic Phase</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-right">0 / 60 ECTS</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;