import React, { useState } from 'react';
import Button from '@mui/material/Button';


const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Button onClick={()=>setCount(count+1)}>+</Button>
      <Button onClick={()=>setCount(0)}>reset</Button>
    </div>
  );
};

export default State;
