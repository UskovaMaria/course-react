import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SectionTop } from './components/Main/SectionTop';
import { SectionAbout } from './components/Main/SectionAbout';
import { Products } from './components/Main/SectionProducts';
import { SectionCourses } from './components/Main/SectionCourses';
import { SectionTeam } from './components/Main/SectionTeam';
import { SectionFeedback } from './components/Main/SectionFeedback';
import { SectionContacts } from './components/Main/SectionContacts';
import { Header } from './components/Header/Header';
import { CartPopup } from './components/CartPopup';
import { Overlay } from './components/Overlay';

const App = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleCartPopup = () => {
    setIsCartPopupOpen((prev) => !prev);
    setShowOverlay(!showOverlay);
  };

  return (
    <Router>

      <Header toggleCartPopup={toggleCartPopup} />
      <main className="main">
        <Routes>
          <Route path="/" element={<SectionTop />} />
          <Route path="/about" element={<SectionAbout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/courses" element={<SectionCourses />} />
          <Route path="/team" element={<SectionTeam />} />
          <Route path="/feedback" element={<SectionFeedback />} />
          <Route path="/contacts" element={<SectionContacts />} />
        </Routes>
      </main>
      
      <CartPopup isOpen={isCartPopupOpen} onClose={toggleCartPopup} />
      <div className={`container ${isCartPopupOpen ? 'overlay-active' : ''}`}></div>
      <Overlay show={showOverlay} onClick={() => {
        setIsCartPopupOpen(false);
        setShowOverlay(false);
      }} />
    </Router>
  );
}

export default App;
