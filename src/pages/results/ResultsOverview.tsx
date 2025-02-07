import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Printer } from 'lucide-react';

const ResultsOverview: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">List of results of {user.name} ({user.studentNumber})</h1>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Last updated on 07/02/2025 18:07:34
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
          <p>No rights can be obtained from this information.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">COURSE CODE</th>
                <th className="px-4 py-2 text-left">TITLE</th>
                <th className="px-4 py-2 text-left">SCORE</th>
                <th className="px-4 py-2 text-left">DATE</th>
                <th className="px-4 py-2 text-left">RESULT</th>
                <th className="px-4 py-2 text-left">ECTS</th>
                <th className="px-4 py-2 text-left">REMARK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Orientation on ICT</td>
                <td className="px-4 py-2">U</td>
                <td className="px-4 py-2">27/01/2025</td>
                <td className="px-4 py-2">U</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">U</td>
                <td className="px-4 py-2">03/07/2023</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">U</td>
                <td className="px-4 py-2">30/01/2023</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29NEGADV</td>
                <td className="px-4 py-2">Negative study advice</td>
                <td className="px-4 py-2">F</td>
                <td className="px-4 py-2">31/01/2025</td>
                <td className="px-4 py-2">F</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t flex justify-between items-center">
          <div>Achieved work load 0 ECTS</div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            <Printer className="w-4 h-4" />
            print
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;