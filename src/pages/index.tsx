import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
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
    <div className="bg-gradient-to-r from-violet-700 to-fuchsia-400">
      {/* Navigation Bar */}
      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="... flex justify-between py-3">
            <div className=""></div>

            <div className="... ml-auto mr-20 flex space-x-12">
              <button className="text-xl" disabled={disabled1}>
                Placeholder
              </button>
              <button className="text-xl" disabled={disabled2}>
                Placeholder
              </button>
            </div>

            <div className="">
              <button onClick={connectWallet} type="submit" className="btn-submit shadow-solid-curve">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page */}
      <div className="my-10 flex justify-center">
        <div className="flex w-5/6">
          <div className="mr-2.5 w-1/2">
            <div className="h-1/2 w-full"></div>
            <div className="card shadow-solid-curve h-1/2 w-full"></div>
          </div>
          <div className="ml-2.5 w-1/2">
            <div className="card shadow-solid-div h-screen"></div>
          </div>
        </div>
      </div>
      {/* Information Page */}
      <div className="my-20 flex justify-center">
        <div className="flex h-96 w-5/6 justify-between">
          <div className="card shadow-solid-div h-6/7 w-1/3"></div>
          <div className="card shadow-solid-div h-6/7 mr-5 ml-5 w-1/3"></div>
          <div className="card shadow-solid-div h-6/7 w-1/3"></div>
        </div>
      </div>
      {/* Contact Us Page */}
      <div className="mt-20 flex justify-center">
        <div className="card shadow-solid-curve h-96 w-5/6">

        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Home;
