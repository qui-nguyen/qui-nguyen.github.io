import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';

const HomePage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 relative">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
<Footer/>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;
