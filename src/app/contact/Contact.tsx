import React from 'react';
import styles from "@/app/page.module.css"

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>
          Contact <span className={styles.titleHighlight}>Me</span>
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className={styles.contactForm}
        >
          <input type="hidden" name="access_key" value="93a3e4ad-e17c-4a6b-ae7b-1675deb41641" />
          
          {/* Row 1: Full Name and Email Address */}
          <div className={styles.formGrid}>
            <div>
              <label htmlFor="name" className={styles.inputLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className={styles.inputField}
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.inputLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className={styles.inputField}
              />
            </div>
          </div>

          {/* Row 2: Mobile Number and Email Subject */}
          <div className={styles.formGrid}>
            <div>
              <label htmlFor="number" className={styles.inputLabel}>
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="Mobile Number"
                className={styles.inputField}
              />
            </div>
            <div>
              <label htmlFor="subject" className={styles.inputLabel}>
                Email Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Email Subject"
                className={styles.inputField}
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label htmlFor="message" className={styles.inputLabel}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className={`${styles.inputField} ${styles.textAreaField}`}
            />
          </div>

          {/* Submit Button */}
          <div className={styles.submitButtonContainer}>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
