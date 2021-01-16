import React, { useState, useContext,useEffect} from 'react';
import './StateButton.css';
import {Context} from '../store/Store';

type CustomValue = any;

interface Props {
    titleName: CustomValue;
  }
  

export default function StateButtonHook(props:Props) {
    const [count, toAdd] = useState(0);
    const [state, dispatch]= useContext(Context);

   const onChangeConfig = () => {
        dispatch({type: 'SET_GLOBALVALUE', payload: count});
    };

    return (
        <div className="div-box component1">
            <h3>{props.titleName}</h3>
            <button onClick={() => toAdd(count + 1)}>Click Mich</button>
            <button onClick={onChangeConfig}>Send to Store</button>
            <p>Counter: {count}</p>
        </div>
    )
}