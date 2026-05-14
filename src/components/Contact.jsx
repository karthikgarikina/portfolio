export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>
        Got something in mind? <br /> Drop it here
      </h1>

      <form data-aos="fade-right" className="contact-form" action="https://formspree.io/f/mwpnankd" method="post">
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name*" required />
          <input type="email" name="email" placeholder="Email Address*" required />
        </div>

        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone Number*" required />
        </div>

        <div className="form-row">
          <textarea name="message" rows={5} placeholder="A Few Words*" required />
        </div>

        <button type="submit" className="send-btn">
          Send Message <i className="fa-solid fa-paper-plane" />
        </button>
        <input type="hidden" name="_redirect" value="https://yourwebsite.com/thankyou.html" />
      </form>
    </div>
  );
}
