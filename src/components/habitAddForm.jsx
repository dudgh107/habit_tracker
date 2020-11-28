import React, {memo} from 'react';

const HabitAddForm = memo(props => {

  const fromRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = event => {
      event.preventDefault();
      const name = inputRef.current.value;
      console.log("name=");
      name && props.onAdd(name);
      fromRef.current.reset();
  };
    

  return (
    <div>
      <form ref={fromRef} className="add-form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="add-input" placeholder="Hibit"/>
        <button className="add-button">Add</button>
      </form>
    </div>
  ); 
});
  

export default HabitAddForm;
