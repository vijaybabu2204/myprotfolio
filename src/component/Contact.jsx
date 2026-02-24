import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <h2>Got something in mind? <br />Drop it here</h2>

      <form
        className="contact-form"
        action={`https://formsubmit.co/${personalInfo.email}`}
        method="POST"
      >
        {/* FormSubmit options */}
        <input type="hidden" name="_subject" value="New portfolio message" />
        <input type="hidden" name="_captcha" value="false" />
        {/* optional: redirect to thank-you page */}
        {/* <input type="hidden" name="_next" value="https://your-domain.com/thanks" /> */}

        <div className="contact-row">
          <div className="contact-field">
            <label>Your Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contact-field">
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-field">
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-field full-width">
            <label>A Few Words*</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me briefly about your requirement"
              required
            />
          </div>
        </div>

        <button type="submit" className="contact-button">
          Send Message ✈
        </button>
      </form>
    </section>
  );
};

export default Contact;
