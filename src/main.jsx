import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/preloader.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loader />
    <div className="container mx-auto px-6">
      <Navbar />
      <App />
      <Footer/>
    </div>
  </StrictMode>,
)
