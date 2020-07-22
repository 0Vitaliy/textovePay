import React from "react";

import "./style.css";

export const IndexesItem = ({ item }) => {
  return (
    <div className="indexItemBlock">
      <h3>{item.name}</h3>
      <div className="usdPriceInCents">
        ${item.usdCapitalization} / {item.usdPriceInCents} ETH
      </div>
      <div className="capitalizationAndPercentageChange">
        <span className="ethPriceInWei">${item.ethPriceInWei} </span>
        <span className="percentageChange">+{item.percentageChange}%</span>
      </div>
    </div>
  );
};
