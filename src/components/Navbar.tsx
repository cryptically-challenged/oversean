import React, { useEffect, useState } from "react";

export default function Navigationbar() {
  const [disabled1, setDisabled1] = useState<boolean>(true);
  const [disabled2, setDisabled2] = useState<boolean>(true);

  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log("Phantom wallet found!");

      //this is for auto connect
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    } else {
      alert("Solana object not found! Get a Phantom Wallet 👻");
    }
  };
  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };
  //USE EFFECTS
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-5/6">
        <div className="... flex justify-between py-3">
          <div className=""></div>

          <div className="... ml-auto mr-20 flex space-x-12">
            <button className="text-2xl" disabled={disabled1}>
              Placeholder
            </button>
            <button className="text-2xl" disabled={disabled2}>
              Placeholder
            </button>
          </div>

          <div className="">
            <button
              onClick={connectWallet}
              type="submit"
              className="btn-submit shadow-solid-curve bg-yellow"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
