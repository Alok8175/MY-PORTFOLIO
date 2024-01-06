import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllRoutes from './components/AllRoutes.js';
import Projects from './components/Projects.js';

const App = () => {
  return (
    <div className=' bg-siteblack bg-no-repeat bg-cover overflow-hidden'>

      <Routes>
        <Route path='/' exact element={<AllRoutes />} />
        <Route path='/projects' exact element={<Projects />} />
      </Routes>

    </div>
  );
};

export default App;
