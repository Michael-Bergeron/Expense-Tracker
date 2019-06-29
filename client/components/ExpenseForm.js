import React from 'react';

const ExpenseForm = (props) => {
  return (
    <div>
      <div className = "col s12 row">
        <input id = "expense" type="text" className = "input-field col s2" 
            placeholder = "name of expense" 
            onChange = {(e) => props.formUpdate(e)} />
        <div className = "col s1"></div>
        <input id = "cost" type="text" className = "input-field col s3" 
            placeholder = "Cost of activity"
            onChange = {(e) => props.formUpdate(e)} />
       </div>
       <div className = "col s12 row">
        <select id = "category" onChange = {(e) => props.formUpdate(e)} className = 'btn col s2'>
          <option value="bills">Bills</option>
          <option value="food">Food</option>
          <option value="vacation">Vacation</option>
          <option value="activities">Activities</option>
        </select>
      </div>
      <div className = "row"></div>
      <button className = "btn red" onClick = {props.formSubmit}>Submit New Expense</button>
    </div>
  )
}
 
export default ExpenseForm;