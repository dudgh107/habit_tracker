import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }


    state = {
        count: 0,
    };

    handIncrement = () =>{
      this.props.onIncrement(this.props.habit);
    };

    handDecrement = () =>{
      this.props.onDecrement(this.props.habit);
    };

    handDelete = () =>{
      this.props.onDelete(this.props.habit);
    };

    render() {
      console.log("hibit render실행");
      const { name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handDelete}>
                    <i className="fas fa-trash"></i>
                </button>
          </li>
        );
    }
}

export default Habit;