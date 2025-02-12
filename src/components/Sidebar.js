import React, { useState } from 'react';
import '../css/Sidebar.css';
import HomeIcon from '../assets/house.svg';
import MintIcon from '../assets/mint.svg';
import SwapIcon from '../assets/swap.svg';
import BridgeIcon from '../assets/bridge.svg';
import LiquidationIcon from '../assets/liquidation.svg';
import FaucetsIcon from '../assets/faucet.svg';

const sidebarOptions = [
  { id: "home", icon: HomeIcon, label: "Home" },
  { id: "mint", icon: MintIcon, label: "Mint" },
  { id: "swap", icon: SwapIcon, label: "Swap" },
  { id: "bridge", icon: BridgeIcon, label: "Bridge" },
  { id: "liquidation", icon: LiquidationIcon, label: "Liquidation" },
  { id: "faucets", icon: FaucetsIcon, label: "Faucets" }
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {sidebarOptions.map((item) => (
          <button 
            key={item.id} 
            className={`sidebar-item ${activeTab === item.id ? "active" : ""}`} 
            onClick={() => setActiveTab(item.id)}
          >
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
