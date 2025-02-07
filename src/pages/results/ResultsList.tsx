import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

const ResultsList: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Results for {user.name}</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <Link to="/results/fontys" className="text-lg text-blue-500 hover:underline cursor-pointer block">
              Fontys University of Applied Sciences (4 results, no new)
            </Link>
          </div>
          
          <div>
            <Link to="/results/fontys/29VPI20" className="text-blue-500 hover:underline cursor-pointer block pl-4">
              Programme 29VPI20: Propaedeutic Phase (Programme requirements are not met yet, 0 / 60 ECTS)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsList;