import React from 'react'

export default function Hero() {
  return (
    <div className="hero-1">
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="../assets/img/herobg1.jpg" className="d-block sliders" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="../assets/img/herobg1.jpg" className="d-block sliders" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="../assets/img/hero-bg.jpg" className="d-block sliders" alt="..." />
      </div>
    </div>
  </div>
  <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <h1>Selamat Datang di Weminac</h1>
          <h2>Edukasi Kesehatan Reproduksi dan Seksual</h2>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </section>
</div>

  )
}
