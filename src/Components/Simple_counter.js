import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './Simple_counter.css';

function Simple_Counter() {
  
    const [count, setCount] = useState(0);

    const addNum = () => {
        setCount(count+1);
    } 
    
    const subNum = () => {
        setCount(count-1);
    } 
    const resetNum = () => {
        setCount(0);
    }

    return (
    <div className="body">
        <div className="title">
            <h1>Simple Counter</h1>
        </div>
        <div className="counter">
        <h2>{count}</h2>
        </div>
        <div className="button">
            <Button className="plus-button" variant="contained" color="primary" onClick={addNum}>+</Button>            
            <Button className="minus-button" variant="contained" color="primary" onClick={subNum}>-</Button>
        </div>
        <Button className="reset-button"  color="secondary" onClick={resetNum}>Reset</Button>
    </div>
  );
}

export default Simple_Counter;
