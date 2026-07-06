import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import WaterSolution from './pages/solutions/Water';
import AgricultureSolution from './pages/solutions/Agriculture';
import FacilitySolution from './pages/solutions/Facility';
import Products from './pages/Products';
import Company from './pages/Company';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import EULA from './pages/legal/EULA';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const key = location.pathname;

  return (
    <main className="flex-1 page-enter" key={key}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/water" element={<WaterSolution />} />
        <Route path="/solutions/agriculture" element={<AgricultureSolution />} />
        <Route path="/solutions/facility" element={<FacilitySolution />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/eula" element={<EULA />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollProgress />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
