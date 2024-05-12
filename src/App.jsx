import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFound from './404';
import Layout from './Layout';
import AboutMePage from './pages/AboutMe';
import ProgramePage from './pages/Programe';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import BuyFormular from './components/programe/BuyFormular';
import SuccessPage from './pages/Success';
import AdminPage from './pages/Admin';
import { useData } from './utils/DataContext';
import AdminLoginPage from './pages/AdminLoginPage';
import TestPage from './pages/TestPage';



function App() {

  const { isLoggedIn } = useData();

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout page={<HomePage />}></Layout>} />
          <Route path="/despre-mine" element={<Layout page={<AboutMePage />} />} />
          <Route path="/programe" element={<Layout page={<ProgramePage />} />} />
          <Route path="/programe/:id" element={<Layout page={<BuyFormular />} />} />
          <Route path="/contact" element={<Layout page={<ContactPage />} />} />
          <Route path="/success" element={<Layout page={<SuccessPage />} />} />
          <Route path="/admin" element={<Layout page={(isLoggedIn ? <AdminPage /> : <AdminLoginPage />)} />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;