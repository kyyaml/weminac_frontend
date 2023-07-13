import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Doctors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dokters`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);
  return (
    <div>
  <section id="doctors" className="doctors section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Dokter</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
      {data.map((item, index) => (
        <div className="col-lg-3 col-md-6 align-items-stretch" key={index}>
          <div className="member" data-aos="fade-up" data-aos-delay={100}>
            <div className="member-img">
              <img src={item.image} className="img-fluid" alt />
              <div className="social">
                <a href={`https://instagram.com/${item.instagram}`}><i className="bi bi-instagram" /></a>
              </div>
            </div>
            <div className="member-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
</div>

  )
}
