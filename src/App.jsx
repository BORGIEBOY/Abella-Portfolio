import { useState, useEffect } from 'react'
import './App.css'
import profileImg from './profile.jpg'
import project1Img from './Project1.jpg'
import project2Img from './project2.jpg'
import project3Img from './project3.jpg'
import project4Img from './project4.jpg'

function App() {
  const [activeTab, setActiveTab] = useState('skills')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Smooth scrolling
    const handleClick = (e) => {
      const target = e.target.getAttribute('href')
      if (target && target.startsWith('#') && document.querySelector(target)) {
        e.preventDefault()
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

  useEffect(() => {
    // Skill bar animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.width
          })
        }
      })
    })

    const skillsTab = document.getElementById('skills')
    if (skillsTab) {
      observer.observe(skillsTab)
    }

    return () => {
      if (skillsTab) {
        observer.unobserve(skillsTab)
      }
    }
  }, [activeTab])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
            <li><a href="#portfolio" className="nav-link" onClick={closeMenu}>Work</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">UX Designer</span>
            <h1 className="hero-title">Hi, I'm <span className="gradient-text">Rolly Abella</span></h1>
            <p className="hero-desc">I craft intuitive digital experiences that delight users.</p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-scroll">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-image">
              <img src={profileImg} alt="Rolly Abella" />
            </div>
            <div className="about-content">
              <p>I'm a passionate UX Designer from Western Institute of Technology. I love creating seamless digital experiences and enjoy gaming in my free time to sharpen my problem-solving skills.</p>
              
              <div className="tabs">
                <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => handleTabClick('skills')}>Skills</button>
                <button className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => handleTabClick('experience')}>Experience</button>
                <button className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} onClick={() => handleTabClick('education')}>Education</button>
              </div>
              
              <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`} id="skills">
                <div className="skill-item">
                  <span>UI/UX Design</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="50%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Web Development</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="30%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>App Development</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="15%"></div>
                  </div>
                </div>
              </div>
              
              <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`} id="experience">
                <ul style={{textAlign: 'left', listStyle: 'none'}}>
                  <li style={{marginBottom: '1rem'}}>
                    <span style={{fontWeight: '600', color: 'var(--black)'}}>2024 - Present</span><br />
                    <span>Still doing Projects and no outside experience</span>
                  </li>
                  <li>
                    <span style={{fontWeight: '600', color: 'var(--black)'}}>2023 - 2024</span><br />
                    <span>Doing Projects</span>
                  </li>
                </ul>
              </div>
              
              <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`} id="education">
                <ul style={{textAlign: 'left', listStyle: 'none'}}>
                  <li style={{marginBottom: '1rem'}}>
                    <span style={{fontWeight: '600', color: 'var(--black)'}}>2024 - 2026</span><br />
                    <span>Western Institute of Technology</span>
                  </li>
                  <li>
                    <span style={{fontWeight: '600', color: 'var(--black)'}}>2022 - 2024</span><br />
                    <span>Senior High School(CMCS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-code"></i></div>
              <h3>Web Design</h3>
              <p>Beautiful, responsive websites that engage users and drive results.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
              <h3>UI/UX Design</h3>
              <p>Intuitive interfaces that create seamless user experiences.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>App Design</h3>
              <p>Mobile-first designs optimized for iOS and Android platforms.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src={project1Img} alt="Project 1" />
              <div className="portfolio-overlay">
                <h3>Project 1 FIGMA</h3>
                <p>Shoes Product project</p>
                <a href="#" className="portfolio-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={project2Img} alt="Project 2" />
              <div className="portfolio-overlay">
                <h3>Project2 FIGMA</h3>
                <p>Music Playlist app</p>
                <a href="#" className="portfolio-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={project3Img} alt="Project 3" />
              <div className="portfolio-overlay">
                <h3>Project 3 FIGMA</h3>
                <p>Airpods Product project</p>
                <a href="#" className="portfolio-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={project4Img} alt="Project 4" />
              <div className="portfolio-overlay">
                <h3>Project 4 FIGMA</h3>
                <p>LocAlis Product project</p>
                <a href="#" className="portfolio-link"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-primary">View All Projects</a>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>abellarolly483@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>0977-085-5499</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <a href="mailto:abellarolly483@gmail.com?subject=CV%20Request" className="btn btn-primary">Request CV</a>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App