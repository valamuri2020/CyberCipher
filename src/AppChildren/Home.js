import React from "react"
import homeStyle from './home.module.css'


function Home(){
    return(
        <div>
            <h1 className = {homeStyle.introHeader}>Cyber Cipher</h1>  
            <h3 className = {homeStyle.subHeader}>Encrypt and Decrypt messages using a Stream Cipher</h3>
        </div>
    )
    
}

export default Home
