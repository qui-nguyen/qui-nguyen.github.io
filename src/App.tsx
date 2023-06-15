import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, ButtonContact } from './components';

const HomePage = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [scrollY])

  const onScroll = () => {
    setScrollY(window.scrollY);
    (scrollY > 300 && ((window.innerHeight + scrollY) <= document.body.offsetHeight - 100)) ? setDisplay(true) : setDisplay(false);
  };

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
      {/* <div className="relative z-0"> */}
        <Footer />
      {/* </div> */}
      {display && <ButtonContact />}
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
