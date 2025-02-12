import React, { useState } from "react";
import "../css/MainComponent.css";
import MintIcon from '../assets/mint.svg';
import LedgerIcon from '../assets/ledger.svg';
import Transactions from "./TransactionCard";
import transactionsData from "./TransactionData";

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="ledger-container">
      <div className="nav-container">
        {/* Ledger Tab */}
        <div 
          className={`tab left-side ${activeTab === "ledger" ? "active" : ""}`} 
          onClick={() => setActiveTab("ledger")}
        >
          <img src={LedgerIcon} alt="Ledger" className="icon" />
          <span className="nav-text">Ledger</span>
        </div>
        {/* Pending Tab */}
        <div 
          className={`tab right-side ${activeTab === "pending" ? "active" : ""}`} 
          onClick={() => setActiveTab("pending")}
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
  );
};

export default MainComponent;
