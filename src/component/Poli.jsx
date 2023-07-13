import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Service() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/polis`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);
  return (
    <>
    <section id="poli" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-right">
          <h2>Poli</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
        {data.map((item, index) => (
          <div key={index} className="polibox col-lg-4  col-md-6  align-items-stretch">
            <div className="icon-box " data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className={item.icon} />
              </div>
              <h4>
                {item.title}
              </h4>
              <p>
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
