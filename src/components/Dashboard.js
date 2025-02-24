import React, { useState } from "react";
import "../css/Dashboard.css";
import HomeIcon from "../assets/images/house.svg";
import MintIcon from "../assets/images/mint.svg";
import SwapIcon from "../assets/images/swap.svg";
import BridgeIcon from "../assets/images/bridge.svg";
import LiquidationIcon from "../assets/images/liquidation.svg";
import FaucetsIcon from "../assets/images/faucet.svg";
import LedgerIcon from "../assets/images/ledger.svg";
import Transactions from "./TransactionCard";
import transactionsData from "./TransactionData";

const sidebarOptions = [
  { id: "home", icon: HomeIcon, label: "Home" },
  { id: "mint", icon: MintIcon, label: "Mint" },
  { id: "swap", icon: SwapIcon, label: "Swap" },
  { id: "bridge", icon: BridgeIcon, label: "Bridge" },
  { id: "liquidation", icon: LiquidationIcon, label: "Liquidation" },
  { id: "faucets", icon: FaucetsIcon, label: "Faucets" }
];

const Dashboard = () => {
  const [activeSidebarTab, setActiveSidebarTab] = useState("home");
  const [activeMainTab, setActiveMainTab] = useState("pending");

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-menu">
          {sidebarOptions.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeSidebarTab === item.id ? "active" : ""}`}
              onClick={() => setActiveSidebarTab(item.id)}
            >
              <img src={item.icon} alt={item.label} className="sidebar-icon" />
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Tabs */}
        <div className="nav-container">
          {/* Ledger Tab */}
          <div
            className={`tab left-side ${activeMainTab === "ledger" ? "active" : ""}`}
            onClick={() => setActiveMainTab("ledger")}
          >
            <img src={LedgerIcon} alt="Ledger" className="icon" />
            <span className="nav-text">Ledger</span>
          </div>
          {/* Pending Tab */}
          <div
            className={`tab right-side ${activeMainTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveMainTab("pending")}
          >
            <img src={MintIcon} alt="Pending" className="dollar-icon" />
            <span className="pending-container">
              <span className="nav-text">Pending</span>
              <div className="pending-badge">
                <span className="badge-text">03</span>
              </div>
            </span>
          </div>
        </div>

        {/* Transaction Grid */}
        <div className="card-grid">
          <Transactions transactions={transactionsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
