
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,SetCount]=useState(0);

  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={()=>SetCount(count+1)}>Click me</button>
    </div>
  )
}

export default App
