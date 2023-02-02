import React from 'react';
import styled from 'styled-components'
import './style.css'

const AboutDiv = styled.div`
width: 100%;
background-color: #0094C6;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media (min-width: 1024px) {


}
`
const DivStyle = styled.div`
  background-color: #221f1f;
  line-height: 2em;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #ffffff;
  max-width: 270px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 10px 10px -5px;
@media (min-width: 1024px) {
 max-width: 500px;
  height: auto;
  overflow: auto;
}
`

const DivStyleOne = styled.div`
  background-color: #fdf3f3;
  line-height: 2em;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #221f1f;
  max-width: 270px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
flex-direction: column;
align-items: center;
justify-content: flex-start;
box-shadow: 0 10px 10px -5px;
@media (min-width: 1024px) {
 max-width: 500px;
  height: auto;
  overflow: auto;
}
`


const DivP = styled.div`
  @media (min-width: 1024px) {
    margin-top: 10px;
    display :flex;
    justify-content: space-evenly ;
    width: 100%;
  flex-direction: row;
}
`

const About = () => {
    return ( 
       <>
       <section id="about">
      
       <AboutDiv>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCFAFA" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,186.7C672,203,768,213,864,208C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <h1 style={{ fontSize: '3rem', color: 'whitesmoke', marginTop: '10px'}}> About Me </h1>
       <h2 style={{ fontStyle: 'italic'}}>The Dev, The Guy</h2>

    <DivP>
    <DivStyle> <h3 style={{ color: 'whitesmoke', fontSize: '2rem'}}>The Dev</h3>   <p style={{ fontSize: '1.3rem', color: 'whitesmoke', marginTop: '10px'}}>
   
      Hello!, I'm Ron and im a web developer who enjoys tackling complex issues with simple solutions. I love to learn and i have a passion for helping people by using my skills with technology. <br />  <br />
      One of my favorite things about coding is the ability to collaborate with other people to create something cool. Im an idea guy, I always have some new idea in my head and its awesome to be able to include someone else in that creative process. 
    </p>
   
    </DivStyle>
    <DivStyleOne> <h3 style={{ color: 'black', fontSize: '2rem'}}>The Guy</h3> 
    
    <p style={{ fontSize: '1.3rem', color: 'black', marginTop: '10px', textIndent: '0.2em'}}>
 I also have 2 beautiful daughters and with my wife we currently resides in South Carolina. Some of my other interests are: reading, meditating, watching movies, riding bike, traveling, playing with my kids.
    
  </p>
 
  </DivStyleOne>
    </DivP>
      </AboutDiv>
      </section>
    
       </> );
}
 
export default About;