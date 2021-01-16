import React, { useState, useContext,useEffect} from 'react';
import './StateButton.css';
import {Context} from '../store/Store';

export default function AusgabeStore() {

    const [state, dispatch]= useContext(Context);
    const [globalValue, setGlobalValue] = useState("");

      useEffect(() => {
        setGlobalValue(state.posts);
      });
     

    return (
        <div className="div-box component2">
            <p>Zweite Komponente: {globalValue}</p>
        </div>
    )
}