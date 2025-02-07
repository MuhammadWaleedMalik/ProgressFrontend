import React from 'react';
import { useParams } from 'react-router-dom';

const ResultDetails: React.FC = () => {
  const { programId, courseId } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Course Details</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Course Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Course Code</p>
                <p>PRG1</p>
              </div>
              <div>
                <p className="text-gray-600">Credits</p>
                <p>5 ECTS</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Assessment Results</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left bg-gray-50">
                  <th className="p-2">Assessment</th>
                  <th className="p-2">Weight</th>
                  <th className="p-2">Grade</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Written Exam</td>
                  <td className="p-2">60%</td>
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Project</td>
                  <td className="p-2">40%</td>
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDetails;