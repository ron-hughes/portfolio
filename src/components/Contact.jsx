import React from 'react';
import styled from 'styled-components'
import './style.css'
import { CgScreen, CgServer, CgToolbox } from 'react-icons/cg';
import { VscTools } from 'react-icons/vsc';

const ProjectsDiv = styled.div`
width: 100%;
background-color: #221f1f;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
/* margin-top: 100px; */
@media (min-width: 1024px) {
  /* flex-direction: row; */
}
`


const DivStyle = styled.div`
  background-color: #1c2226;
  padding: 10px;
  border-radius: 20px;
  display: flex;  
  color: whitesmoke;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  width: 400px;
@media (min-width: 1024px) {
min-width: 700px;
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

const Projects = () => {
  return (
    <>
      <section id="contactme">



        <ProjectsDiv>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCFAFA" fill-opacity="1" d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,138.7C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <h1 style={{ fontSize: '3rem', color: '#0094C6' }}> Contact Me </h1>
          <h2 style={{ color: 'whitesmoke', fontStyle: 'italic' }}>I'd love to hear from you</h2>


          <DivP>
            <DivStyle>

      {/* I am open to any new opportunities that come my way. Please contact me if you have any inquiries! <br /><br />
      <a href="mailto:ron@ronhughes.dev">ron@ronhughes.dev</a><br /> <br />
      Phone: 203-293-0333 */}
<form method= "POST" name="contact" netlify>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"/>
      </div>
      <button type="submit">Submit</button>
    </form>

            </DivStyle>
       

          </DivP>





        </ProjectsDiv>
      </section>

    </>);
}

export default Projects;