import React,{useState} from 'react';
import {hot} from 'react-hot-loader';

import JsonDom from './JsonDom';
import OutputBox from './OutputBox';
import DOM_DATA from '../data/dom.json';
import ReactDOM from 'react-dom'



const App = () => {
  const [output,setOutput] = useState([]);
  const [xOutput,setxOutput]= useState(0)
  const [yOutput,setyOutput]= useState(0)
  const [zOutput,setzOutput]= useState(0)
  
  let X = 0
  let Y = 0
  let Z = 0

  let element = null
  let dizi = []
 const handleOver = (e) => {
  
  let classes = []
  element = ReactDOM.findDOMNode(e.target)
  let zindex= element.style.zIndex
  if(zindex === ''){
    setzOutput(0)
  }else(
    setzOutput(zindex)
  )
  
  
 // console.log("elemnt x",element.getBoundingClientRect().left, "elementy",Math.floor(element.getBoundingClientRect().bottom))
 // console.log("mousex " + e.pageX,"mousey " +  e.pageY)
  X = e.pageX - element.getBoundingClientRect().left
  Y = Math.floor(element.getBoundingClientRect().bottom) - e.pageY
 // console.log(X,Y)
  setxOutput(X)
  setyOutput(Y)
 
//console.log(ReactDOM.findDOMNode(e.target).getAttribute("class"))
//classes.push(ReactDOM.findDOMNode(e.target).getAttribute("class"))
classes.push(" ." + ReactDOM.findDOMNode(e.target).getAttribute("class"))
//console.log(classes)

  while (element.getAttribute("class") != null){
   // console.log(  element.getAttribute("class"))
    element=element.parentNode
    //classes.push(element.getAttribute("class"))
    if(element.getAttribute("class") === null ){

    }else{
       classes.push(" ." + element.getAttribute("class"))
      dizi=classes
      
    }
  
   
  }
  setOutput(dizi.reverse())
// console.log(output)
  }

  return(
  
  <div onMouseMove={handleOver} >
    <JsonDom data={DOM_DATA} />
    <OutputBox path={output} x={xOutput} y={yOutput} z={zOutput} />
  </div>
  )}

export default hot(module)(App);
