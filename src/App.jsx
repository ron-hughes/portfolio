import './App.css'
import React from 'react';
import Nav from '../src/components/Nav'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {


  return (
    <div className="App">
     <Nav />
     <Header />
     <About /> 
     <Projects />

     <Skills />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
