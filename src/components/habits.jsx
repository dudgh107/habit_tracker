import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  
    componentDidUpdate(){
      
    }

    handIncrement = (habit) =>{
      this.props.onIncrement(habit)
    };

    handDecrement = (habit) =>{
      this.props.onDecrement(habit)
    };

    handDelete = (habit) =>{
      this.props.onDelete(habit)
    };

    handleAdd = name => {
      this.props.onAdd(name);
    }

    render() {
      console.log("Habits render실행");
        return (
          <>
            <HabitAddForm onAdd={this.handleAdd}/>
            <ul>
            {this.props.habitsArr.map(habit => (
                <Habit 
                  key={habit.id} 
                  habit={habit} 
                  onIncrement={this.handIncrement}
                  onDecrement={this.handDecrement}
                  onDelete={this.handDelete}
                
                />
            ))}
          </ul>
          <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
          </>
          
        );
    }
}

export default Habits;