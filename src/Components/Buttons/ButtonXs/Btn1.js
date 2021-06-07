import React from 'react';

import "./Btn1.css";

const Btn1 = ({texto, onClick}) => {
    return (
        
        <div>
            <button className="o-btn" type="button" id="btn-ini" onClick={onClick}>{texto} </button>
        </div>
  
   
        )}

    export default Btn1;

    