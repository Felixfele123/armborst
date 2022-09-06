import React, {useState } from 'react';


const TopBar = () => {
  const [counter, setCounter] = useState(1);
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => {
        setCounter(counter + 1)
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const secToTimer = (sec) => {
        var sec_num = parseInt(sec, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds
  }
  return (
    <span>
        {secToTimer(counter)}      
    </span>
  );
}

export default TopBar