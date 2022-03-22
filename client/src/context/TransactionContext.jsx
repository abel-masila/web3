import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from './../utils/constants.js';

export const TranscationContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const transcactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transcactionContract });
};

export const TransactionProvider = ({ children }) => {
  return (
    <TranscationContext.Provider value={{ value: 'test' }}>
      {children}
    </TranscationContext.Provider>
  );
};
