import React from 'react'

export default function CurrencyRow(props) {
    

  return (
    <div>
      <input type="number" className="input"/>
      <select value={props.selectedCurrency}>
        {props.currencyOptions.map((opt,i)=> (
          <option key={i} value={opt}>{opt}</option>
        ))}        
      </select>
    </div>
  )
}
