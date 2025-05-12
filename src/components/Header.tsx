import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import styles from "../styles/Components/Header/Header.module.scss"

interface NavItem {
  name: string
  path: string
}

const navItems: NavItem[] = [
  { name: "Обо мне", path: "about" },
  { name: "Биография", path: "biography" },
  { name: "Hard Skills", path: "skills" },
  { name: "Опыт разработки", path: "expirience" },
  { name: "Интервью", path: "questions" },
  { name: "Контакты", path: "contacts" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [navHaveBackground, setNavHaveBackground] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      lastScrollY = currentScrollY

      const scrollPosition = currentScrollY + 80
      let current = ""
      navItems.forEach((item) => {
        const section = document.getElementById(item.path)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            current = item.path
          }
        }
      })

      setActiveSection(current)
      setNavHaveBackground(current !== "about")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.nav} ${navHaveBackground ? styles.navActive : ""}`}
    >
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                smooth
                duration={500}
                offset={-80}
                spy
                className={`${styles.navLink} ${
                  activeSection === item.path ? styles.active : ""
                } ${styles[scrollDirection]}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={toggleMenu} className={styles.burger}>
          ☰
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.open : styles.closed
        }`}
        onClick={toggleMenu}
      >
        <div
          className={styles.closeContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={toggleMenu} className={styles.close}>
            ✕
          </button>
        </div>
        <ul className={styles.mobileList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                smooth
                duration={500}
                offset={-80}
                spy
                onClick={toggleMenu}
                className={`${styles.mobileLink} ${
                  activeSection === item.path ? styles.mobileActive : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
