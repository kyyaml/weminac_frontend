import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

export default function Counts() {
  const [totalPoli, setTotalPoli] = useState(0);
  const [totalLayanan, setTotalLayanan] = useState(0);
  const [totalDokter, setTotalDokter] = useState(0);

  useEffect(() => {
    fetchPoli();
    fetchLayanan();
    fetchDokter();

  }, []);

  const fetchDokter = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dokters'); // URL endpoint Anda
      const data = response.data.data;

      setTotalDokter(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const fetchPoli = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/polis'); // URL endpoint Anda
      const data = response.data.data;

      setTotalPoli(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const fetchLayanan = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/layanans'); // URL endpoint Anda
      const data = response.data.data;

      setTotalLayanan(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <>
<section id="counts" className="counts">
      <div className="container" data-aos="zoom-in">
        <div className="text-center title">
          <h3>Kami Telah Berhasil Membuat</h3>
          <p>
            Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum
            consequatur illo.
          </p>
        </div>
        <div className="row counters position-relative">
          <div className="col-lg-3 col-6 text-center">
          <span>
              <CountUp 
                end={totalDokter}
                duration={10}
              />
            </span>
            <p>Dokter</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              <CountUp 
                end={totalPoli}
                duration={10}
              />
            </span>
            <p>Poli</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
          <span>
              <CountUp 
                start={0}
                end={totalLayanan}
                duration={5}
              />
            </span>
            <p>Layanan</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
          <span>
              <CountUp 
                start={0}
                end={34}
                duration={10}
              />
            </span>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
