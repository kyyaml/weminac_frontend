import React, { useEffect } from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Counts from "../component/Counts";
import Service from "../component/Poli";
import Cta from "../component/Cta";
import Features from "../component/Service";
import Clients from "../component/Clients";
import Pricing from "../component/Pricing";
import Question from "../component/Question";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Doctors from "../component/Doctors";



function Home() {
  useEffect(() => {
    const toggleBacktotop = () => {
      const backtotop = document.querySelector('.back-to-top');
      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
    };

    toggleBacktotop();

    window.addEventListener('load', toggleBacktotop);
    window.addEventListener('scroll', toggleBacktotop);

    return () => {
      window.removeEventListener('load', toggleBacktotop);
      window.removeEventListener('scroll', toggleBacktotop);
    };
  }, []);

  useEffect (() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }, []);

  useEffect(() => {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');

    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    navbarlinksActive();

    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    return () => {
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  return (
    <div>
      <>
        <Header />
        <Hero />
        <main id="main">
          <Counts />
          <About />
          <Service />
          <Features />
          <Cta />
          <Clients />
          <Doctors />
          <Pricing />
          <Question />
          <Contact />
        </main>
        <Footer />
        
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </>
    </div>
  );
}

export default Home;
