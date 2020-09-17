import React from 'react';
import finalStyle from './final.module.css'
import $ from 'jquery'

function copy (element) {
    var $temp = $("<input>");
    $("#output").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    /* alert("Copied to Clipboard"); */
}


function Final (props){
    return (
    <div>
        <h1 className={finalStyle.head} id="finalstatement">Your {props.header} is: </h1>
        <h2 className={finalStyle.output} onClick={copy('#output')}>{props.output}</h2>   
         
    </div>
    )
   
}

export default Final;