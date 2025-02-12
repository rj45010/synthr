import React from "react";
import "../css/LiquidationCard.css";
import eth from '../assets/gem.svg';

const LiquidationCard = ({ amount, network, status, progress }) => {
  return (
    <div className="liquidation-card">
      {/* Top Section */}
      <div className="liquidation-header">
        {/* Left: ETH Icon & Details */}
        <div className="liquidation-details">
          <div className="liquidation-icon">
            <img src={eth} alt="ETH" />
          </div>
          <div className="liquidation-info">
            <p className="liquidation-amount">{amount} ETH</p>
            <p className="liquidation-subtext">Collateral</p>
          </div>
        </div>

        {/* Right: Network Tag */}
        <div className="network-tag">
          <img src={eth} alt={network} className="network-icon" />
          <span>{network}</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="liquidation-progress-container">
        <p className="liquidation-status">{status}</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

const LiquidCard = ({ liquid }) => {
  return (
    <div className="liquidation-grid">
      {liquid.map((liquidation, index) => (
        <LiquidationCard key={index} {...liquidation} />
      ))}
    </div>
  );
};

export default LiquidCard;
