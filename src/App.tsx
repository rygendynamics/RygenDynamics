import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import LabsPage from './pages/LabsPage';


import ContactPage from './pages/ContactPage';

import CareersPage from './pages/CareersPage';
import ATLPage from './pages/ATLPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/programs" element={<LabsPage />} />


          <Route path="/careers" element={<CareersPage />} />
          <Route path="/atl" element={<ATLPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
