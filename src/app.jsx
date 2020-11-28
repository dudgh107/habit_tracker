import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Navbar from './components/navbar';
import SimpleHabit from './components/simpleHabit';


class App extends Component {
  state = {
    habits : [
      {id : 1, name : 'Reading', count : 0},
      {id : 2, name : 'Running', count : 0},
      {id : 3, name : 'Coding', count : 0}
    ]
  }

  handIncrement = (habit) =>{
    
    const habits222 = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count:habit.count +1};
      }else{
        return item;
      }
    });
    this.setState({habits : habits222});
  };

  handDecrement = (habit) =>{
    const habits222 = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count:habit.count -1 < 0 ? 0 : habit.count-1};
      }else{
        return item;
      }
    });
    this.setState({habits : habits222});
  };

  handDelete = (habit) =>{
    const habits222 = [...this.state.habits.filter(item => item.id !== habit.id)];
    this.setState({habits : habits222});
  };

  handAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name:name, count:0}];
    this.setState({habits});
  }

  handReset = () => {
    const habits = this.state.habits.map(item => {
      if(item.count !== 0){
        return {...item, count:0};
      }else{
        return item;
      }
      
    });
    this.setState({habits});
  }
  
  render() {
    console.log("App render실행");
    return (
      <>

        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habitsArr={this.state.habits }
        onIncrement={this.handIncrement}
        onDecrement={this.handDecrement}
        onDelete={this.handDelete}
        onAdd={this.handAdd}
        onReset={this.handReset}
        ></Habits>

        
      </>
      
    );
  }
}

export default App;
