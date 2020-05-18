import React from 'react';

function useTime() {
  const [time, setTime] = React.useState(new Date());
  function updateTime() {
    setTime(new Date());
  }
  React.useEffect(() => {
    let interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });
  return time;
}

export default useTime;
