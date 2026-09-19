import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Pharmacy from '@/pages/Pharmacy';
import Shop from '@/pages/Shop';
// About.tsx and Careers.tsx are temporarily unrouted — see the note at
// the top of each file. Re-add the import and <Route> below to bring
// a page back.
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
