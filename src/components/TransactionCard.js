import React from "react";
import "../css/TransactionCard.css";
import eth from '../assets/images/gem.svg';
import usdt from '../assets/images/USDT.svg';

const SvgDefs = () => (
  <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0">
    <defs>
      <filter id="round">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>

      <filter id="roundSwap-dot">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
);

const TransactionCard = ({ type, fromToken, toToken, swapText, amount, network, status }) => {
  return (
    <div className="transaction-container">
        {type === "swap" ? (
          <>
            {/* left swap */}
          <div className="swap-card">
            <div className="token-box">
                <div className="token-icon">
                  {/* <img src={eth} alt={fromToken.symbol} className="eth"/> */}
                  <img src={usdt} alt={fromToken.symbol} className="border"/>
                </div>
                <div className="token-name">
                  <img src={eth} alt={fromToken.symbol}/>
                  <span>{fromToken.name}</span>
                </div>
              <div className="token-info">
                <div className="token-amount">{fromToken.amount} {fromToken.symbol}</div>
                <div className="token-label">{fromToken.label}</div>
              </div>
            </div>
            {/* swap bar */}
            <div className="swap-indicator">
              <div className="swap-progress">
                <div className="swap-dot" style={{ filter: "url(#roundSwap-dot)" }}>
                  <div className="loading-container">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="loading-dot" style={{ "--i": i }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="swap-text">{swapText}</div>
            </div>
            {/* right swap */}
            <div className="token-box">
                <div className="token-icon">
                  {/* <img src={eth} alt={toToken.symbol} className="eth"/> */}
                  <img src={usdt} alt={fromToken.symbol} className="border"/>
                </div>
                <div className="token-name">
                  <img src={eth} alt={toToken.symbol} />
                  <span>{toToken.name}</span>
                </div>
              <div className="token-info">
                <div className="token-amount">{toToken.amount} {toToken.symbol}</div>
                <div className="token-label">{toToken.label}</div>
              </div>
            </div>
          </div>
          </>
        ) : (
          <>
            {/* Liquidation card */}
              <div className="liquidation-header">
                <div className="liquidation-details">
                  <div className="liquidation-icon">
                    {/* <img src={eth} alt="ETH" /> */}
                    <img src={usdt} alt="ETH"/>
                  </div>
                  <div className="liquidation-info">
                    <span className="liquidation-amount">{amount} ETH</span>
                    <span className="liquidation-subtext">Collateral</span>
                  </div>
                </div>
                <div className="network-tag">
                  <img src={eth} alt={network}/>
                  <span>{network}</span>
                </div>
              </div>

              <div className="liquidation-progress-container">
                <p className="liquidation-status">{status}</p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
          </>
        )}
    </div>
  );
};

const Transactions = ({ transactions }) => {
  return (
    <>
    <SvgDefs />
      <div className="transaction-grid">
        {transactions.map((tx, index) => (
          <TransactionCard key={index} {...tx} />
        ))}
      </div>
    </>
  );
};

export default Transactions;
