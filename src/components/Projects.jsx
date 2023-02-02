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
@media (min-width: 1024px) {
  /* flex-direction: row; */
}
`


const DivStyle = styled.div`
  background-color: #2194d6;
  padding: 10px;
  border-radius: 20px;
  display: flex;  
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
box-shadow: 0 10px 10px -5px;
@media (min-width: 1024px) {
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 280px;
  word-wrap: break-word;
  border-style: solid;
  border-width: 2px;
  border-color: whitesmoke;
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
      <section id="projects">



        <ProjectsDiv>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0094C6" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,106.7C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

          <h1 style={{ fontSize: '3rem', color: '#0094C6', marginTop: '1px' }}> Projects </h1>
          <h2 style={{ color: 'whitesmoke', fontStyle: 'italic' }}>I love to code</h2>


          <DivP>
            <DivStyle>

              <div> 
           <img id="imgproj" src="https://i.ibb.co/Sm2d6MF/3.png" />
                 </div>
              <div> <h1 style={{ fontSize: '2.0rem', color: '#fbfaf6', marginBottom: '0.2em' }}>Flip The Coin</h1> </div>

      <a href="https://github.com/ron-hughes/coin-flip-server-side">Github Site</a>
"Flip The Coin" is a server-side application. Built using Node.js, Express & MongoDB

            </DivStyle>
            <DivStyle>

              <div><img id='imgproj' src="https://i.ibb.co/3dYRw8S/2.png" alt="2"/ > </div>
              <div> <h1 style={{ fontSize: '2.0rem', color: '#fbfaf6', marginBottom: '0.2em' }}>
                Portfolio
                </h1> </div>
                <a href="https://ronhughes.dev">Live Site</a>
This portfolio is built using React, Styled Compnents and JavaScript
            </DivStyle>
            <DivStyle>

              <div><img id='imgproj'src='https://i.ibb.co/0hcjpHq/1.png' /> </div>
              <div> <h1 style={{ fontSize: '2.0rem', color: '#fbfaf6', marginBottom: '0.2em' }}>DarkMagick</h1> </div>
             <a href="https://darkmagick.netlify.app/">Live Site</a>

                A cryptocurrency website built with HTML and CSS using 8-bit <br />
                graphics. 
            </DivStyle>

          </DivP>





        </ProjectsDiv>
      </section>

    </>);
}

export default Projects;