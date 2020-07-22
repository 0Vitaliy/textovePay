import React from "react";
import Web3 from "web3";

import Layout from "./components/layout";
import { Content } from "./components/content";

function App() {
  const ethEnabled = () => {
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      return true;
    }

    return false;
  };

  if (!ethEnabled()) {
    alert("Please install MetaMask to use this dApp!");
  }

  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default App;
