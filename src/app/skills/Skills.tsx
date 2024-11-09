import React from 'react';
import styles from "@/app/page.module.css"

const Skills: React.FC = () => {
  // Skill proficiency data
  const skills = [
    { name: 'HTML', proficiency: 95, iconColor: "orange", color: 'orange', icon: 'bxl-html5' },
    { name: 'CSS', proficiency: 90, iconColor: "blue", color: 'blue', icon: 'bxl-css3' },
    { name: 'JavaScript', proficiency: 85, iconColor: "yellow", color: 'yellow', icon: 'bxl-javascript' },
    { name: 'TypeScript', proficiency: 80, iconColor: "purple", color: 'purple', icon: 'bxl-typescript' },
    { name: 'Tailwind CSS', proficiency: 80, iconColor: "teal", color: 'teal', icon: 'bxl-tailwind-css' },
    { name: 'Next.js', proficiency: 60, color: 'black', icon: 'bxl-react' },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h1 className={styles.skillsTitle}>
          My<span className={styles.skillsTitleSpan}> Skills</span>
        </h1>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div className={styles.skillCard} key={skill.name}>
              <div className={styles.skillCardHeader}>
                <span className={`${styles.skillCardIcon}`}>
                  <i className={`bx ${skill.icon} ${skill.iconColor}`} style={{ color: `${skill.iconColor}` }}/>
                  <h1 className={styles.skillCardName}>{skill.name}</h1>
                </span>
              </div>

              <div className={styles.skillProgressWrapper}>
                <div className={styles.tooltip}>
                  {skill.proficiency}% Proficiency
                </div>

                <div className={styles.skillProgressBar}>
                  <div
                    className={`${styles.skillProgress}`}
                    style={{ width: `${skill.proficiency}%`,background: `${skill.color}` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
