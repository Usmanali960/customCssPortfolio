import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Navbar from './components/Navbar';
import Services from './services/Services';
import Projects from './projects/Project';
import Skills from './skills/Skills';
import Footer from './components/Footer';
import Contact from './contact/Contact';
import About from './about/About';
import styles from "@/app/page.module.css"
import Image from 'next/image';
import Link from 'next/link';


function page() {
  return (
    <div>
      <Navbar />
      <section id="home" className={styles.main}>
        <div className={styles.leftSection}>
          <h2 className={styles.mySelf}>Hey, I am</h2>
          <h1 className={styles.mainHeading}>
            Usman
            <br />
            Web Developer
          </h1>
          <h3 className={styles.subHeading}>
            <h4>Web Developer</h4>
            <br className="lg:hidden" />
            <span className={styles.separator}>|</span>
            <br className="lg:hidden" />
            <h4>Based in Pakistan</h4>
          </h3>

          <div className={styles.socialMedia}>
            <p className={styles.iconWrapper}>
              <i className="bx bxl-facebook-circle"></i>
            </p>
            <Link
              href="https://github.com/Usmanali960"
              className={styles.iconWrapper}
            >
              <i className="bx bxl-github"></i>
            </Link>
            <p className={styles.iconWrapper}>
              <i className="bx bxl-instagram-alt"></i>
            </p>
            <Link
              href="https://www.linkedin.com/in/usman-ali-5946592a6/"
              className={styles.iconWrapper}
            >
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </div>

          <button className={styles.downloadButton}>Download CV</button>
        </div>
        <div className={styles.rightSection}>
          <Image
            className={styles.mainPhoto}
            src={"/mainPhoto.jpg"}
            width={200}
            height={200}
            alt="Main"
          />
        </div>
      </section>
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

