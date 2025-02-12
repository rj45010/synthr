import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
