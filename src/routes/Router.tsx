import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Application from '../views/Application';
import Home from '../views/Home';
import Settings from '../views/Settings';

const Router: React.FC = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/application/:id" element={<Application />} />
    </Routes>
  );
};

export default Router;
