import React, { useState } from 'react';

const SimpleHabit = (props) => {

  // State in class components
  // state = {
  //   count: 0,
  // };

  // useState in functional components (useState() API)
  const [count, setCount] = useState(0);

  // Ref in class components
  // const spanRef = React.createRef();

  // useRef in functional components
  const spanRef = useRef(); // make reference only once in the memory

  // member variable(function) in class components
  // const handleIncrement = () => {
  //   setCount({ count: count + 1 });
  // };

  // useCallback() in functional components
  const handleIncrement = useCallback(() => {
    setCount({ count: count + 1 });
  });
  
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;