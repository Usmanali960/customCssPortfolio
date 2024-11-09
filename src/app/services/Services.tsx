import React from 'react';
import styles from "@/app/page.module.css"


const Services: React.FC = () => {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.container}>
                <h2 className="text-4xl font-bold mb-6">
                    Transform your business <span className={styles.highlight}>With our services</span>
                </h2>
                <p className="text-gray-600 font-medium mb-8">
                    We offer a variety of services to help grow and elevate your business.
                </p>
                <button className={styles.button}>
                    Book a call →
                </button>

                {/* Grid View */}
                <div className={styles.grid}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <i className="bx bx-laptop" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">
                            Build scalable websites with modern frameworks and tools.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <i className="bx bxs-palette" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
                        <p className="text-gray-600">
                            Design beautiful, user-friendly interfaces with attention to detail.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <i className="bx bxs-rocket" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">SEO Optimization</h3>
                        <p className="text-gray-600">
                            Boost visibility and rank higher on search engines with SEO strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;