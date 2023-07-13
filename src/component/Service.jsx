import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Features() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/layanans`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);
  return (
    <>
    <section id="service" className="features">
      <div className="container">
        <div className="row">
        <div className="section-title" data-aos="fade-right">
          <h2>Layanan</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {data.map((item, index) => (
          <div className="col-lg-4 order-2 order-lg-1" key={index}>
            <div className="icon-box mt-5 mt-lg-0" data-aos="fade-right" data-aos-delay="100">
              <i className={item.icon} />
              <h4 className='p-2'>{item.title}</h4>
              <p className='p-2'>
              {item.desc}
              </p>
            </div>
          </div>
            ))}
            
        </div>
      </div>
    </section>
    </>
  )
}
