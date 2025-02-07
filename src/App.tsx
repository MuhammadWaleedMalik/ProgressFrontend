import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Dashboard from './pages/Dashboard';
import General from './pages/info/General';
import AddressData from './pages/info/AddressData';
import Configurations from './pages/info/Configurations';
import ResultsList from './pages/results/ResultsList';
import ResultDetails from './pages/results/ResultDetails';
import ResultsOverview from './pages/results/ResultsOverview';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <Breadcrumb />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/info/general" element={<General />} />
                <Route path="/info/address-data" element={<AddressData />} />
                <Route path="/info/configurations" element={<Configurations />} />
                <Route path="/results" element={<ResultsList />} />
                <Route path="/results/:programId" element={<ResultsOverview />} />
                <Route path="/results/:programId/:courseId" element={<ResultDetails />} />
                
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;