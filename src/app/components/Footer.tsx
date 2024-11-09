import React from 'react';
import styles from "@/app/page.module.css"
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.copyRight}>
        <p className={styles.copyRightText}>
          Copyright 2023 by codehall | all rights reserved
        </p>
      </div>
      <div className={styles.topIcon}>
        <Link href="/" className={styles.topIconLink}>
          <i className="bx bxs-up-arrow-alt"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
