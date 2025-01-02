import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/common/Header';
import Home from './page/Home';
import Footer from './component/common/Footer';
import Blog from './page/Blog';
import About from './page/About';
import Classes from './page/Classes';
import Trainers from './page/Trainers';
import Contacts from './page/Contacts';
import Testimonials from './page/Testimonial';
import Detail from './page/Detail';



const App = () => {
  return (
    <Router>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/class" element={<Classes/>}/>
        <Route path="/trainer" element={<Trainers/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/testmonial" element={<Testimonials/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
