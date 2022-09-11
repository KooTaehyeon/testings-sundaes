import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SummaryForm from './pages/summary/SummaryForm';
import Options from './pages/entry/Options';
function App() {
  return (
    <div className='App'>
      <SummaryForm />
      <Options />
    </div>
  );
}

export default App;
