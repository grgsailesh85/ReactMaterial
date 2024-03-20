import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  //declare a state variable named 'currentTime' and  a function named 'setCurrentTime' to update its value and initial state of currentTime is set to the current date and time obtained using the 'new Date()' constructor.
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // updates the state varaible 'currentTime'  with the current date and time
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimerComponent;
