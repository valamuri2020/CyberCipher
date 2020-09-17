import React from 'react';
import loaderStyle from './loader.module.css'

function Loader (props){
    return(
        <div className = {loaderStyle.backgroundimg}>
            <div>
                <h1 className= {loaderStyle.text}>{props.header}</h1>
                <div className = {loaderStyle.spinner}></div>
            </div>
        </div>

    )
}

export default Loader;