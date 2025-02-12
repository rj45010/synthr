import React from 'react';
import '../css/Header.css';
import Logo from '../assets/logo.PNG';
import TwitterIcon from '../assets/twitter.PNG';
import DiscordIcon from '../assets/discord.PNG';
import MetaMaskIcon from '../assets/metamask.PNG';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-section">
          <a href="/" className="home-link">
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="site-name">SYNTHR</h1>
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
              <span className="label">C-RATIO</span>
              <span className="value">160%</span>
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
              <span className="label">Min</span>
              <span className="value">140%</span>
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
          <span className="account-address">wallet address</span>
          <button className="dropdown">▼</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
