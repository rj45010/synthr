import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
