import React from 'react'

export default function 
() {
  return (
    <div>
        {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>
      <div>
        <iframe
          style={{ border: 0, width: "100%", height: 350 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.353929357633!2d111.47662759999999!3d-7.857978399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a1c0d015c6ef%3A0xf8feae2e32c7b36c!2sKedai%20Kopi%20Patirtan!5e0!3m2!1sid!2sid!4v1689239002644!5m2!1sid!2sid"
          // src="https://www.google.com/maps/place/Kedai+Kopi+Patirtan/@-7.8579784,111.4766276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e79a1c0d015c6ef:0xf8feae2e32c7b36c!8m2!3d-7.8579784!4d111.4766276!16s%2Fg%2F11s0tvyf9r?entry=ttu"
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="ri-map-pin-line" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="ri-mail-line" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="ri-phone-line" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
    </div>
  )
}
