import { useEffect, useState } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    'home',
    'about',
    'skills',
    'experience',
    'education',
    'projects',
    'contact',
  ]

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home'

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMobileMenu = () => {
    const menu = document.getElementById('navbarNav')

    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={closeMobileMenu}
        >
          Malik Asad
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar