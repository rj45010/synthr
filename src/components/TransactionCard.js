import React from "react";
import "../css/TransactionCard.css";
import eth from '../assets/gem.svg';

const TransactionCard = ({ type, fromToken, toToken, swapText, amount, network, status }) => {
  return (
    <div className="transaction-container">
      <div className="transaction-content">
        {type === "swap" ? (
          <>
            {/* left swap */}
            <div className="token-box">
              <div className="token-header">
                <div className="token-icon">
                  <img src={eth} alt={fromToken.symbol} className="eth-icon" />
                </div>
                <div className="token-name">
                  <img src={eth} alt={fromToken.symbol} className="name-icon" />
                  <span>{fromToken.name}</span>
                </div>
              </div>
              <div className="token-info">
                <div className="token-amount">{fromToken.amount} {fromToken.symbol}</div>
                <div className="token-label">{fromToken.label}</div>
              </div>
            </div>
            {/* swap bar */}
            <div className="swap-indicator">
              <div className="swap-progress">
                <div className="swap-dot"></div>
              </div>
              <div className="swap-text">{swapText}</div>
            </div>
            {/* right swap */}
            <div className="token-box">
              <div className="token-header">
                <div className="token-icon">
                  <img src={eth} alt={toToken.symbol} className="eth-icon" />
                </div>
                <div className="token-name">
                  <img src={eth} alt={toToken.symbol} className="name-icon" />
                  <span>{toToken.name}</span>
                </div>
              </div>
              <div className="token-info">
                <div className="token-amount">{toToken.amount} {toToken.symbol}</div>
                <div className="token-label">{toToken.label}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Liquidation card */}
            <div className="liquidation-grid">
            <div className="liquidation-header">
              <div className="liquidation-details">
                <div className="liquidation-icon">
                  <img src={eth} alt="ETH" />
                </div>
                <div className="liquidation-info">
                  <p className="liquidation-amount">{amount} ETH</p>
                  <p className="liquidation-subtext">Collateral</p>
                </div>
              </div>
              <div className="network-tag">
                <img src={eth} alt={network} className="network-icon" />
                <span>{network}</span>
              </div>
            </div>

            <div className="liquidation-progress-container">
              <p className="liquidation-status">{status}</p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Transactions = ({ transactions }) => {
  return (
    <div className="transaction-grid">
      {transactions.map((tx, index) => (
        <TransactionCard key={index} {...tx} />
      ))}
    </div>
  );
};

export default Transactions;
