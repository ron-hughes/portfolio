import React, { useState } from 'react';
import styled from 'styled-components'
import { FaEnvelope, FaGithub, FaLinkedin, FaFreeCodeCamp } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import './style.css'

const HeaderDiv = styled.div`
width:  100%;
background-color: #FCFAFA;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Icons = styled.div`
width:  100%;
background-color: #FCFAFA;
display: flex;
justify-content: space-evenly;
align-items: center;
padding-bottom: 20px;
margin-top: 20px;
position: relative;
pointer-events: auto;

`
const Header = () => {

  const [hoverLinked, setHoverLinked] = useState(false);
  const [hoverGit, setHoverGit] = useState(false);
  const [hoverCamp, setHoverCamp] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);


    return ( 
       <>
        <section id='header'>
      <HeaderDiv>
      
        <div>
        <img
          src='src\assets\ron1.jpg'
          style={{
            width: '200px',
            height: '200px',
            marginTop: '30px',
            borderRadius: '50%',
            borderColor: '#0094C6',
            borderStyle: 'solid',
            borderWidth: '3px',
            boxShadow: '0px 0px 15px #0094C6'
          }}
        ></img></div>
                <div>
   
   <h1 style={{ fontSize: '4rem'}}>

<Typewriter options={{ 
loop: true
}} 
onInit={(typewriter)=> {

typewriter

.typeString('<span style="font-size: 2.2rem">Ron Hughes</span>')

.pauseFor(1000)
.deleteAll()
.typeString('<span style="font-size: 2.2rem">Web Developer</span>')  
.start()
.pauseFor(2000)
}}
/>  
   </h1>
   </div> 
         <Icons >
      <a className='icons' href="https://www.linkedin.com/in/rjh-hughes/">  
      <FaLinkedin  icon='vertical' className={` ${hoverLinked ? "spinner": ""}`}  onMouseEnter={() => setHoverLinked(true)}
      onMouseLeave={() => setHoverLinked(false)} size={50} /> </a>

      <a className='icons' href="https://github.com/ron-hughes/"><FaGithub size={50} className={` ${hoverGit ? "spinner": ""}`}  onMouseEnter={() => setHoverGit(true)}
      onMouseLeave={() => setHoverGit(false)} /></a>
        
      <a className='icons' href="https://www.freecodecamp.org/certification/darthgawd/javascript-algorithms-and-data-structures"><FaFreeCodeCamp size={50} className={` ${hoverCamp ? "spinner": ""}`}  onMouseEnter={() => setHoverCamp(true)}
      onMouseLeave={() => setHoverCamp(false)} /></a>
        
      <a className='icons' href="#contactme"><FaEnvelope size={50} className={` ${hoverEmail ? "spinner": ""}`}  onMouseEnter={() => setHoverEmail(true)}
      onMouseLeave={() => setHoverEmail(false)} /></a>
      </Icons>
      
        </HeaderDiv>

        
    <Icons>  <p>Made with React & Styled Components</p></Icons>
    
      
      </section>
 
    
       </> );
}
 
export default Header;