import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 כל הזכויות שמורות לאתר שאל את טל</p>
        <nav className={styles.nav}>
          <a href="#privacy" className={styles.link}>
            מדיניות פרטיות
          </a>
          <a href="#terms" className={styles.link}>
            תנאי שימוש
          </a>
          <a href="#contact" className={styles.link}>
            צור קשר
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
