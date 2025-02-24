import React, { useState } from 'react';
import '../css/Sidebar.css';
import HomeIcon from '../assets/images/house.png';
import MintIcon from '../assets/images/mint.png';
import SwapIcon from '../assets/images/swap.png';
import BridgeIcon from '../assets/images/bridge.png';
import LiquidationIcon from '../assets/images/liquidation.png';
import FaucetsIcon from '../assets/images/faucet.png';

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
