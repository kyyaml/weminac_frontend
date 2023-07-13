import React, { useEffect, useState } from 'react'

export default function Header() {

  const [navbarMobile, setNavbarMobile] = useState(false);

  useEffect(() => {
    const handleMobileNavToggle = () => {
      const navbar = document.querySelector('#navbar');
      setNavbarMobile(!navbarMobile);
      navbar.classList.toggle('navbar-mobile');
      document.querySelector('.mobile-nav-toggle').classList.toggle('bi-list');
      document.querySelector('.mobile-nav-toggle').classList.toggle('bi-x');
    };

    const handleDropdownClick = (e) => {
      const navbar = document.querySelector('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle('dropdown-active');
      }
    };

    const handleScrolltoClick = (e) => {
      if (document.querySelector(e.target.hash)) {
        e.preventDefault();
        const navbar = document.querySelector('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          const navbarToggle = document.querySelector('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(e.target.hash);
      }
    };

    const handleLoad = () => {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    };

    const scrollto = (hash) => {
      if (document.querySelector(hash)) {
        const navbar = document.querySelector('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          const navbarToggle = document.querySelector('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        const element = document.querySelector(hash);
        const offset = navbar.offsetHeight;
        const elementPos = element.offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', (e) => {
      if (e.target.matches('.mobile-nav-toggle')) {
        handleMobileNavToggle(e);
      }
      if (e.target.matches('.navbar .dropdown > a')) {
        handleDropdownClick(e);
      }
      if (e.target.matches('.scrollto')) {
        handleScrolltoClick(e);
      }
    });

    window.addEventListener('load', handleLoad);

    return () => {
      document.removeEventListener('click', handleMobileNavToggle);
      document.removeEventListener('click', handleDropdownClick);
      document.removeEventListener('click', handleScrolltoClick);
      window.removeEventListener('load', handleLoad);
    };
  }, [navbarMobile]);

  

  return (
    <>
    <header id="header" className="fixed-top me-lg-0 p-0">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-9 d-flex align-items-center justify-content-lg-between ">
          <h1 className="logo me-auto me-lg-0">
            <a href="">
              <img
                src="assets/img/logo.png"
                className=""
                alt=""
              />
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0 ">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Beranda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Tentang
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#poli">
                  Poli
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#pricing">
                  Harga
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#service">
                  Layanan
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Kontak
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
          <a href="#about" className="get-started-btn scrollto">
            Daftar Online
          </a>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}