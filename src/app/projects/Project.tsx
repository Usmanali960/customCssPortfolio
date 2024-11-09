import Image from "next/image";
import firstImage from "@/app/assets/premium_photo-1681487746049-c39357159f69.avif";
import secondImage from "@/app/assets/photo-1505769542637-a892c7381a3e.avif";
import thirdImage from "@/app/assets/photo-1434030216411-0b793f4b4173.avif";
import styles from "@/app/page.module.css"
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitle}>
          My<span className={styles.projectsTitleSpan}> Projects</span>
        </h1>

        <div className={styles.projectCards}>
          {/* Project Card 1 */}
          <div className={styles.projectCard}>
            <Image
              src={firstImage}
              alt="Project 1"
              className={styles.projectCardImage}
            />
            <div className={styles.projectCardContent}>
              <h3 className={styles.projectCardTitle}>Project 1: Password Generator</h3>
              <p className={styles.projectCardDescription}>
                A password Generator app with HTML, CSS, and JavaScript.
              </p>
              <div className={styles.projectLinks}>
                <Link
                  href="https://github.com/Usmanali960/passwordGenerator.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub Repo
                </Link>
                <Link
                  href="https://glittery-piroshki-53eb84.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectLink} ${styles.projectLinkLive}`}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className={styles.projectCard}>
            <Image
              src={secondImage}
              alt="Project 2"
              className={styles.projectCardImage}
            />
            <div className={styles.projectCardContent}>
              <h3 className={styles.projectCardTitle}>Project 2: Bubble Game</h3>
              <p className={styles.projectCardDescription}>
                A Bubble game using JavaScript to test JavaScript skills.
              </p>
              <div className={styles.projectLinks}>
                <Link
                  href="https://github.com/Usmanali960/myBubbleGame.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub Repo
                </Link>
                <Link
                  href="https://merry-taffy-709135.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectLink} ${styles.projectLinkLive}`}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className={styles.projectCard}>
            <Image
              src={thirdImage}
              alt="Project 3"
              className={styles.projectCardImage}
            />
            <div className={styles.projectCardContent}>
              <h3 className={styles.projectCardTitle}>Project 3: Quiz app</h3>
              <p className={styles.projectCardDescription}>
                A basic Todo-app developed with HTML, CSS and JavaScript.
              </p>
              <div className={styles.projectLinks}>
                <Link
                  href="https://github.com/Usmanali960/myQuizApp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub Repo
                </Link>
                <Link
                  href="https://unrivaled-longma-20fd08.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectLink} ${styles.projectLinkLive}`}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
