import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white border-b px-6 py-2 flex items-center text-sm">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
          <span className="text-gray-600">{formatSegment(segment)}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;