const transactionsData = [
  {
    type: "liquidation",
    amount: "4.68",
    network: "SEPOLIA",
    status: "Minting syUSD..."
  },
  {
    type: "liquidation",
    amount: "10.25",
    network: "SEPOLIA",
    status: "Liquidating position..."
  },
  {
    type: "swap",
    fromToken: { name: "SEPOLIA", amount: "4.68", symbol: "ETH", label: "From" },
    toToken: { name: "SEPOLIA", amount: "4.68", symbol: "ETH", label: "Collateral" },
    swapText: "Swapping syUSD"
  },
  {
    type: "liquidation",
    amount: "2.50",
    network: "SEPOLIA",
    status: "Liquidating position..."
  },
  {
    type: "swap",
    fromToken: { name: "SEPOLIA", amount: "4.68", symbol: "ETH", label: "From" },
    toToken: { name: "SEPOLIA", amount: "4.68", symbol: "ETH", label: "Collateral" },
    swapText: "Minting syUSDC"
  }
];

export default transactionsData;
