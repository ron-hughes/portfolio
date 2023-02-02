import styled from 'styled-components'
import { borderBottom } from 'styled-system';
import './style.css'


const NavBar = styled('ul')`
/* position:fixed;
top:0; */
background-color: #221f1f;
color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
text-align: center;
list-style: none;
height: 320px;
font-size: .8rem;
@media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10px;
}
`

const Navi = styled.div`
display: flex;
flex-direction: column;
background-color: #221f1f;
color: white;
align-items: center;
@media (min-width: 1024px) {

    flex-direction: row;
    height: 50px;

}
`
const Logo = styled.div`
padding: 20px;
border-radius: 50%;
background-color: #0094C6;
width: 5px;
height: 5px;
display: flex;
align-items: center;
justify-content: center
`
const liStyle = {
 borderBottom:'1px solid #ffffff99', padding: '20px'
}


const Nav = () => {
    return (
 <>
        <Navi>
        
            <NavBar> 
                <li style={liStyle}><a href='#projects'>about me</a></li>
                <li style={liStyle}><a href='#skills'>skills</a></li>
                <li style={liStyle}><a href='#about'>projects</a></li>
                <li style={liStyle}>
                <a href="https://resume.creddle.io/resume/1fwtrz9wi8l"> resume</a>
                </li>
             
              
            </NavBar>
        </Navi>
      

    
      
      
      </>
 
      );
}
 
export default Nav;