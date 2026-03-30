import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Facilities } from './pages/Facilities';
import { Academics } from './pages/Academics';
import { Faculty } from './pages/Faculty';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="academics" element={<Academics />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
