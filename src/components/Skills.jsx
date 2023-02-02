import React from 'react';
import styled from 'styled-components'
import { alignSelf } from 'styled-system';
import { CgScreen, CgServer, CgToolbox } from 'react-icons/cg';
import { VscTools } from 'react-icons/vsc';



const SkillsDiv = styled.div`
width: 100%;
background-color: #FCFAFA;;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-around; */
color: black;
@media (min-width: 1024px) {
  
}
`

const DivStyle = styled.div`
  background-color: #221f1f;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  margin-top: 20px;
  max-width: 250px;
flex-direction: column;
align-items: center;
/* justify-content: space-around; */
/* justify-content: center; */
/* margin-bottom: 20px; */
box-shadow: 0 10px 10px -5px;
width: 300px;
@media (min-width: 1024px) {
  width: 250px;
  height: 280px;
}
`
const DivP = styled.div`
  @media (min-width: 1024px) {
    display :flex;
    justify-content: space-evenly ;
    width: 100%;
  flex-direction: row;
}
`


const Skills = () => {
    return ( 
       <>
       
       <section id="skills">
        <SkillsDiv>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#221f1f" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,122.7C672,117,768,171,864,192C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#221f1f" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,160C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
       <h1 style={{ fontSize: '3rem'}}>Skills</h1>
        <h2 style={{ fontStyle: 'italic', color: '#0094C6'} }>I am a serial learner</h2>
       <DivP>
        <DivStyle>
        <CgScreen size={70} style={{ color: '#0094C6', marginBottom: '3em' }}  />          
<h1 style={{ fontSize: '2.0rem', color: '#fbfaf6' , marginBottom: '0.5em'}}>Frontend</h1>
<span style={{color: '#fbfaf6', fontWeight: 'bold'}}> 
{'>'} React,
JavaScript/ES6,
HTML5,
CSS/SASS,
Bootstrap,
State Management
</span>
</DivStyle>
<DivStyle>
<CgServer size={70} style={{ color: '#0094C6', marginBottom: '3em' }}  />          
<h1 style={{ fontSize: '2.0rem', color: '#fbfaf6', marginBottom: '0.5em'}}>Backend</h1>
<span style={{color: '#fbfaf6', fontWeight: 'bold'}}> 
{'>'} Node.js,
REST API,
Express,
Firebase,
MongoDB,
SQL
</span>
</DivStyle>
<DivStyle>
<VscTools size={70} style={{ color: '#0094C6', marginBottom: '3em' }}  />          
<h1 style={{ fontSize: '2.0rem', color: '#fbfaf6' , marginBottom: '0.5em'}}>Tools</h1>
<span style={{color: '#fbfaf6', fontWeight: 'bold'}}>   
{'>'} NPM,
Github,
VSCode,
Insomnia,
Jest,
Vite,
Netlify
</span>

        </DivStyle>
     </DivP>

      </SkillsDiv>
    
      </section>
    
       </>


 );
}
 
export default Skills;