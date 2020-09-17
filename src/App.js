import React, {useState} from 'react';
//Components
import Home from './AppChildren/Home'
import $ from 'jquery'
import Loader from "./AppChildren/Loader"
import webshare from './AppChildren/Webshare'
import Final from './AppChildren/Final'
//Styling
import AppStyle from './App.module.css'

function App () {
  const [inputBoxText, setInputBoxText] = useState('');
  const [outputMessage, setOutputMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [input, setInput] = useState('');
  const [shift, setShift] = useState('');
  const [output, setOutput] = useState('');

    const transitionPage1 = () => {
      $(".Home").fadeOut(375, ()=>{
        $("#EnterMessage").show();
    });
      $("#initialPage").fadeOut(375); 
    }
    const handleClickDecrypt = () => {
      setInputBoxText('Code');
      setOutputMessage('Message');
      setLoadingMessage('Decrypting...');
      transitionPage1();
    }

    const handleClickEncrypt = () => {
      setInputBoxText('Message');
      setOutputMessage('Code');
      setLoadingMessage('Encrypting...');
      transitionPage1();
    }

    const InputToLoader = () => {
      $("#EnterMessage").fadeOut(375, ()=>{
        $("#Loader").show();
      });
      setTimeout(()=>{
        $("#Loader").hide();
        $("#Final").show();
      },2000);
      
      loadingMessage === 'Encrypting' ? setOutput(goencrypt(input, shift)) : setOutput(godecrypt(input, shift));
    }

    const getText = (event) => {
      setInput(event.target.value);
    }
    const getShift = (event) => {
      setShift(event.target.value);
    }

    const goencrypt = (input, shift) => {
        var solved = '';
        for (let i=0; i < input.length; i++){
            var asciiNum = input[i].charCodeAt()
            if ((asciiNum + shift) > 90){
              solved += String.fromCharCode(asciiNum + shift - 26);
            }
            else {
                solved += String.fromCharCode(asciiNum + shift);
            }
        }
        return solved;
      } 
    
    const godecrypt = (input, shift) => {
        var solved = '';
          for (let i=0; i < input.length; i++){
              var asciiNum = input[i].charCodeAt()
              if ((asciiNum - shift) < 65){
                solved += String.fromCharCode(asciiNum - shift + 26);
              }
              
              else {
                  solved += String.fromCharCode(asciiNum - shift);
              }
          }
          return solved;
      }
    const displayNone = {display: "none"};
    
      return(
      <div id = 'parent' >
        
        <div id = "initialPage"><Home/></div>
          <div className = {AppStyle.buttonWrapper}>
            <div className = "Home">
              <button className = {AppStyle.btnEncrypt} onClick={handleClickEncrypt}>Encrypt</button>
            </div>
            <div className = "Home">
              <button className = {AppStyle.btnDecrypt} onClick={handleClickDecrypt}>Decrypt</button>
            </div>  
        </div>
        
        
        <div id = "EnterMessage" style = {displayNone} >
          <div className = {AppStyle.inputWrapper}>
              <input onChange = {getText}  id = 'input' className = {AppStyle.text} type="text" placeholder = {`Enter ${inputBoxText}`}/>
              <input onChange = {getShift} id = 'shift'className = {AppStyle.number} type="text" min = '1' placeholder = 'Number > 0'/>
          </div>
            <button onClick = {InputToLoader} className = {AppStyle.btnSubmit} id= "btn-submit"><b>Submit</b></button>
        </div>
        
        <div id = "Loader" style = {displayNone} >
          <Loader header = {loadingMessage}/>
        </div>

        <div id="Final" style = {displayNone}>
          <Final header = {outputMessage} output = {output} />
          <button onClick={()=>{window.location.reload(false)}} className = {AppStyle.btnHome}><b>Return Home</b></button>
          <button className = {AppStyle.btnShare} onClick={webshare}><b>Share</b></button>
        </div>
      
      
      </div>
      
  )
} 
export default App;
