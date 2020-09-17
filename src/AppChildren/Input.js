import React from 'react';
import inputStyle from './input.module.css'
    
    function Input(props){
 
        return(
            
        <div className = {inputStyle.inputWrapper}>
            <input id = 'input' className = {inputStyle.text} type="text" placeholder = {props.placeholder}/>
            <input id = 'shift'className = {inputStyle.number} type="number" min = '1' placeholder = 'Number > 0'/>
        </div>
        )}


export default Input;

