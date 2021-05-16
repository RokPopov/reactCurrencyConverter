import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './Components/CurrencyRow.js';

const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest';



function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
    <h1>Currency Converter</h1>
    <CurrencyRow />
    <div className="equals">=</div>
    <CurrencyRow />
    </div>
  );
}

export default App;
