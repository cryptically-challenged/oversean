import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import Faq from "../components/faq";
import Image1 from "./d.png";
import Image2 from "./e.png";
import Navigationbar from "../components/Navbar";
import Mainpage from "../components/Mainpage";
import Instructionspage from "../components/Instructions";

const Home: NextPage = () => {
  const [disabled1, setDisabled1] = useState<boolean>(true);
  const [disabled2, setDisabled2] = useState<boolean>(true);
  const [load, setLoad] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

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
    setLoad(true);
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };
  const disconnectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.disconnect();

      setWalletAddress("");
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
  //disconnect solana wallet

  return (
    <div className="h-fill bg-gradient-to-r from-violet-700 to-fuchsia-400">
      <Navigationbar />
      <Mainpage />
      <Instructionspage />
      <Faq />
    </div>
  );
};

export default Home;
