import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm.js';
import axios from 'axios';
import Chart from './Chart.js'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activities: ['food', 'vacation', 'bills', 'activity'],
      newExpense: {
        category: 'bills',
        expense: '',
        cost: 0
      },
      allExpenses: {
        food: [],
        vacation: [],
        bills: [],
        activities: []
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/expense')
    .then((res) => {
      const allNewExpenses = this.state.allExpenses;
      for (let i = 0; i < res.data.length; i++) {
        allNewExpenses[res.data[i].name].push([res.data[i].expense, res.data[i].cost]);
      }
      this.setState({allExpenses: allNewExpenses});
    })
  }

  formUpdate(e) {
    const expenses = this.state.newExpense;
    expenses[e.target.id] = e.target.value;
    this.setState({newExpense: expenses})
  }

  formSubmit() {
    console.log('sending post')
    axios.post('http://localhost:3000/expense', {body: this.state.newExpense})
  }

  render() {
    return (
      <div>
        <ExpenseForm activities = { this.state.activities } 
                    formUpdate = { this.formUpdate.bind(this) } 
                    formSubmit = { this.formSubmit.bind(this) } />
        <Chart allExpenses = {this.state.allExpenses} />
      </div>
    )
  }
}
