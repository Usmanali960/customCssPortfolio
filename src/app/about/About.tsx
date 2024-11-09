import Image from "next/image";
import styles from "@/app/page.module.css"
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={"/secondMainPhoto.jpg"}
            width={500}
            height={500}
            alt="Personal Photo"
            className={styles.image}
          />
        </div>

        {/* About Text */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            About <span className={styles.highlight}>Me</span>
          </h2>
          <p className={styles.text}>
            Hello! Im <span className={styles.highlight}>Usman Ali</span>, a passionate web developer and designer.
            With a strong background in <span className={styles.highlight}>JavaScript, TypeScript, and modern front-end frameworks</span>,
            I create fast, accessible, and aesthetically pleasing websites.
          </p>

          <p className={styles.text}>
            I love tackling challenges, learning new technologies, and delivering exceptional solutions.
            When I m not coding, you ll find me exploring new design trends or working on personal projects.
          </p>

          <div className="hidden lg:block">
            <div className={styles.buttonContainer}>
              {/* Download Resume Button */}
              <Link
                href="#"
                className={`${styles.button} ${styles.primaryButton}`}
              >
                Download Resume
              </Link>

              {/* Contact Me Button */}
              <Link
                href="#contact"
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="lg:hidden block">
            <div className={styles.mobileButtonContainer}>
              {/* Download Resume Button */}
              <Link
                href="#"
                className={`${styles.button} ${styles.primaryButton}`}
              >
                Resume
              </Link>

              {/* Contact Me Button */}
              <Link
                href="#contact"
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
