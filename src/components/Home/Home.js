import React from 'react'
import './Home.css';
import { useState } from 'react';
import Logo from '../Assets/Logo.svg'
import Work from '../Assets/Work.svg'
import World from '../Assets/World.svg'
import Share from '../Assets/Share.svg'
import Screen from '../Assets/Screen.svg'
import My_code from '../Assets/My_code.svg'
import Design from '../Assets/Design.svg'
import Investor from '../Assets/Investor.svg'
import Mobile from '../Assets/Mobile.svg'
import My_app from '../Assets/My_app.svg'
import Card from '../Assets/Card.png'
import Settings from '../Assets/Settings.png'
import Sent from '../Assets/Sent.png'
import Credit from '../Assets/Credit.png'
import cryptocurrency from '../Assets/cryptocurrency.png'
import television from '../Assets/television.png'
import webpage from '../Assets/webpage.png'
import streaming from '../Assets/streaming.png'
import notification from '../Assets/notification.png'

const Home = () => {

  const services = [
    { name: 'Airtime Topup', icon: Credit },
    { name: 'Cable TV Subscription', icon: television },
    { name: 'Meter Token', icon: cryptocurrency },
    { name: 'Data Bundle', icon: notification },
    { name: 'Education', icon: webpage },
    { name: 'Streaming Platform', icon: streaming },
  ];

  const features = [
    {
      title: 'Easy to use',
      description: 'Aidapay lets you pay utility bills such as electricity, TV subscriptions, internet data bundles and more directly from the comfort of your phone.',
      icon: Sent // Replace this with the actual icon path
    },
    {
      title: 'Reliability',
      description: 'With several years of experience and engineers, we have optimized our platform for reliability and dependability.',
      icon: Settings // Replace this with the actual icon path
    },
    {
      title: 'Secure payment',
      description: '24/7 secure & simple way to pay bills',
      icon: Card // Replace this with the actual icon path
    }
  ];


  const Dropdown = ({ title, children }) => {
    const [hoveredItem, setHoveredItem] = React.useState(null);
  
    const handleMouseOver = (id) => {
      setHoveredItem(id);
    };
  
    const handleMouseOut = () => {
      setHoveredItem(null);
    };
  
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-button">{title}</a>
        <ul className="dropdown-content">
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              className={hoveredItem === index ? 'hover' : ''}
            >
              {child}
            </li>
          ))}
        </ul>
      </li>
    );
  };
  
  const DropdownItem = ({ href, children }) => {
    return (
      <a href={href} className="dropdown-item">
        {children}
      </a>
    );
  };

    return (
        <div>
             <div className="App">
             <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src={Logo} alt="AidaPay Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li>
            <Dropdown title="Services">
                <DropdownItem href="#">Agent Registration</DropdownItem>
                <DropdownItem href="#">Agent Login</DropdownItem>
                <DropdownItem href="#">Agent Dashboard</DropdownItem>
              </Dropdown>
              </li>
            <li>
            <Dropdown title="Become An Agent">
                <DropdownItem href="#">Agent Registration</DropdownItem>
                <DropdownItem href="#">Agent Login</DropdownItem>
                <DropdownItem href="#">Agent Dashboard</DropdownItem>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Developers">
                <DropdownItem href="#">API Documentation</DropdownItem>
                <DropdownItem href="#">Developer Portal</DropdownItem>
                <DropdownItem href="#">SDK Downloads</DropdownItem>
              </Dropdown>
            </li>

            <li><a href="#">Contact</a></li>

          </ul>
          <div className="auth-buttons">
            <a href="#" className="login">Login</a>
            <a href="#" className="register">Register</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Pay Bills With Ease</h1>
          <p>Electricity bill | Cable subscription | recharge cards | Data bundle | and more...</p>
          <div className="hero-buttons">
            <a href="#" className="btn primary">Get Started</a>
            <a href="#" className="btn secondary">Download App</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Mobile} alt="Mobile Mockup" />
        </div>
      </section>
    </div>

    <div className="Utility">
      <section className="hero_utility">
        <div className="hero-image_utility">
          <img src={Screen} alt="Mobile Mockup" className="mobile-image" width={800} height={400} />
        </div>
        <div className="hero-content_utility">
          <h1>Pay utility bills</h1>
          <p>Money transfer and bill payments can be even easier using our app.</p>
          <a href="#" className="btn download-btn">
            <i className="fas fa-download"></i> Download Aidapay App
          </a>
        </div>
      </section>
    </div>

    <div className="services">
      <h2>Using Aidapay Is Easy.</h2>
      <p className="subtitle">Our Services</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper">
              <img src={service.icon} alt={`${service.name} icon`} />
            </div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="why-aidapay-section">
    <div className="aidapay-illustration">
        <img src={Investor} alt="Illustration" /> {/* Replace with actual image */}
      </div>
      <div className="why-aidapay-content">
        <h2>Why Aidapay?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon">
                <img src={feature.icon} alt={`${feature.title} icon`} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="how-it-works-container">
            <h2 className="how-it-works-title">How it works.</h2>
            <div className="cards-container">
                <div className="card">
                    <div className="card-number">01</div>
                    <h3>Register</h3>
                    <p>Register an account for <span>free</span> to get started. Creating an account is easy and secure.</p>
                    <button className="app-button">Download App</button>
                </div>
                <div className="card">
                    <div className="card-number">02</div>
                    <h3>Fund wallet</h3>
                    <p>Fund your wallet OR make payment directly from your debit card or bank account.</p>
                    <button className="app-button">Deposit</button>
                </div>
                <div className="card">
                    <div className="card-number">03</div>
                    <h3>Good to go</h3>
                    <p>Paying bills, buy airtime, data subscription & fund transfer from the comfort of your device.</p>
                    <button className="app-button">Download App</button>
                </div>
            </div>

              {/* Adding circle and arrow design at the bottom */}
              <div className="circle-container">
                <div className="circle">
                    <div className="circle-arrow"></div>
                </div>
            </div>
        </div>



        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="path_to_your_logo" alt="Aidapay Logo" />
                    </div>
                    <p>Aidapay is a product of Veqi LTD business <span>RC1974322</span></p>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Airtime Topup</li>
                            <li>Cable TV Subscription</li>
                            <li>Meter Token</li>
                            <li>Data Bundle</li>
                            <li>Education</li>
                            <li>Streaming Platform</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li>Web Developer's API</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <p>Coming soon......</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright ©2024 All rights reserved</p>
            </div>
        </footer>

</div>


    )
}

export default Home
