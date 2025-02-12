import React from 'react';
import '../css/SwapCard.css';
import eth from '../assets/gem.svg';

const Card = ({ fromToken, toToken, swapText }) => {
  return (
    <div className="swap-container">
      <div className="swap-content">
        {/* Left Token Box */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-icon">
              <img src={eth} alt={fromToken.symbol} className='eth-icon'/>
            </div>
            <div className='token-name'>
              <img src={eth} alt={fromToken.symbol} className='name-icon'/>
              <span>{fromToken.name}</span>
            </div>
          </div>
          <div className='token-info'>
            <div className="token-amount">{fromToken.amount} {fromToken.symbol}</div>
            <div className="token-label">{fromToken.label}</div>
          </div>
        </div>

        {/* Swap Indicator */}
        <div className="swap-indicator">
          <div className="swap-progress">
            <div className="swap-dot"></div>
          </div>
          <div className="swap-text">{swapText}</div>
        </div>

        {/* Right Token Box */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-icon">
              <img src={eth} alt={toToken.symbol} className='eth-icon'/>
            </div>
            <div className='token-name'>
              <img src={eth} alt={toToken.symbol} className='name-icon'/>
              <span>{toToken.name}</span>
            </div>
          </div>
          <div className='token-info'>
            <div className="token-amount">{toToken.amount} {toToken.symbol}</div>
            <div className="token-label">{toToken.label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwapCard = ({ swaps }) => {
  return (
    <div className="swap-grid">
      {swaps.map((swap, index) => (
        <Card key={index} {...swap} />
      ))}
    </div>
  );
};

export default SwapCard;
