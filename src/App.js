import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './page/Home';
import Blog from './page/Blog';
import About from './page/About';
import Classes from './page/Classes';
import Trainers from './page/Trainers';
import Contacts from './page/Contacts';
import Detail from './page/Detail';
import Login from './page/Login'; 
import Rank from './page/Rank';
import Signup from './page/Signup'; 

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Danh sách các route không cần Header và Footer
  const hideHeaderFooterRoutes = ['/login', '/signup'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/class" element={<Classes />} />
          <Route path="/trainer" element={<Trainers />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Đảm bảo có route đăng ký */}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
