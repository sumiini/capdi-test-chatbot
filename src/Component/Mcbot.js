import React,{useState} from "react";
import styled from 'styled-components';
import mcimg from './melody.png';
const McbotPlace = styled.div`
  float:right;
  margin-top:30%;
  margin-right:6%;
`;
const Mcbot =()=>{
    
    const [toggleMc,setToggleMc]=useState(false);
    let clickEvent=(e)=>{
        setToggleMc(!toggleMc);
        console.log("hi")
        console.log(toggleMc)
    } 
   
    return(
        
            <McbotPlace>
                <button style={{backgroundColor:"white"}} onClick={(e) => clickEvent(e)}>
                    <img  width="200px" height="200px" src={mcimg}></img>
                </button>
            </McbotPlace>
        
            
    )
    
  
}

export default Mcbot;