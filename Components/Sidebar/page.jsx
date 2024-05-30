"use client"

import React, { useState } from "react"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  const [active, setActive] = useState("home")

  const handleSetActive = (section) => {
    setActive(section)
  }

  return (
    <div className={styles.sidebar}>
      <a
        href="#home"
        className={active === "home" ? styles.active : ""}
        onClick={() => handleSetActive("home")}
      >
        דף הבית
      </a>
      <a
        href="#sell"
        className={active === "sell" ? styles.active : ""}
        onClick={() => handleSetActive("sell")}
      >
        מכירת דירה
      </a>
      <a
        href="#buy"
        className={active === "buy" ? styles.active : ""}
        onClick={() => handleSetActive("buy")}
      >
        קניית דירה
      </a>
      <a
        href="#services"
        className={active === "services" ? styles.active : ""}
        onClick={() => handleSetActive("services")}
      >
        שירותים
      </a>
      <a
        href="#contact"
        className={active === "contact" ? styles.active : ""}
        onClick={() => handleSetActive("contact")}
      >
        צור קשר
      </a>
      <a
        href="#about"
        className={active === "about" ? styles.active : ""}
        onClick={() => handleSetActive("about")}
      >
        עלינו
      </a>
    </div>
  )
}

export default Sidebar
