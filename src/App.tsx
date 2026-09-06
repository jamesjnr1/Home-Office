import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Pharmacy from '@/pages/Pharmacy';
import About from '@/pages/About';
import Doctors from '@/pages/Doctors';
import Resources from '@/pages/Resources';
import ArticleDetail from '@/pages/ArticleDetail';
import Contact from '@/pages/Contact';
import BookAppointment from '@/pages/BookAppointment';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:articleId" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
