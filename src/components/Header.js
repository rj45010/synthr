import React from 'react';
import '../css/Header.css';
import Logo from '../assets/images/Synthr Logo.svg';
import Name from '../assets/images/Synthr-White.svg'
import TwitterIcon from '../assets/images/Trazado 1893 2.svg';
import DiscordIcon from '../assets/images/Trazado 1693 1.svg';
import MetaMaskIcon from '../assets/images/metamask 2.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-section">
          <a href="/" className="home-link">
            <img src={Logo} alt="Logo" className="logo" />
            <img src={Name} alt="Name" className="Name" />
          </a>
        </div>

        <div className="info-section">
          <div className="debt-issued">
            <span className="label">DEBT ISSUED</span>
            <strong className="value">$amount</strong>
          </div>
          <div className="divider" />
          <div className="c-ratio">
            <div className="c-ratio-header">
              <span className="c-ratio-label">C-RATIO</span>
              <span className="c-ratio-value">160%</span>
            </div>
            <div className="c-ratio-bar">
              {Array(23).fill(null).map((_, index) => (
                <div
                  key={index}
                  className={`c-ratio-segment ${index < 6 ? 'filled' : ''}`}
                ></div>
              ))}
            </div>
            <div className="c-ratio-footer">
              <span className="c-ratio-label">Min</span>
              <span className="c-ratio-value">140%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <a href="#twitter" className="social-icon">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="#discord" className="social-icon">
          <img src={DiscordIcon} alt="Discord" />
        </a>
        <div className="account">
          <img src={MetaMaskIcon} alt="MetaMask" className="account-icon" />
          <span className="account-address">0x8997...</span>
          <button className="dropdown"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
