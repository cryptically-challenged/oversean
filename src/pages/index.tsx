import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import FooterComponent from "../components/footer";
import SolanaLogo from "./solana.png";
import DocumentLogo from "./document.jpg";
import CollegeLogo from "./college.png";

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
              <button
                onClick={connectWallet}
                type="submit"
                className="btn-submit shadow-solid-curve"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page */}
      <div className="my-10 flex justify-center">
        <div className="flex w-auto">
          <div className="mr-2.5 w-1/2">
            {/* left side */}
            {/* top side */}
            <div className="flex h-1/2 w-full justify-center">
              <div className="h-full w-5/6">
                <div className="color-white mt-20 h-auto text-5xl leading-snug">
                  <span>
                    Securely{" "}
                    <span className="streamline shadow-solid-div">streamline</span>{" "}
                    college <span>applicadtions with blockchain.</span>
                  </span>
                </div>
                <br />
                <br />
                <div className="text-left text-4xl">
                  <span>
                    Giving Overseas Students Access to Higher Education
                    Opportunities with Web3, AI, and NFTs.
                  </span>
                </div>
              </div>
            </div>
            {/* bottom side */}
            <div className="card shadow-solid-curve flex h-1/2 w-full justify-center">
              <div className="h-full w-5/6">
                <div className="heading w-inherit h-auto text-center text-6xl">
                  <span>Our Goals</span>
                </div>
                <br />
                <div className="subtitle h-auto w-full text-4xl">
                  <span></span>
                </div>
                <div className="image h-auto w-full"></div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-2.5 w-1/2">
            <div className="card shadow-solid-div h-screen"></div>
          </div>
        </div>
      </div>
      {/* Information Page */}
      <div className="my-20 flex justify-center">
        <div className="flex h-96 w-5/6 justify-between">
          <div className="card shadow-solid-div h-6/7 w-1/3">
            <div className="mx-2 my-2 block">
              <div className="card shadow-solid-div relative mt-10 box-border h-28 w-28 border-4 p-4">
                <Image
                  className=""
                  src={SolanaLogo}
                  layout="fill"
                  alt="Solana Logo"
                />
              </div>
              <div className="heading mt-4 text-left text-3xl font-bold">
                <span>Create an Account</span>
              </div>
              <div className="explanation mt-4 text-left text-2xl">
                <span>
                  Allow users to register on the platform by creating an account
                  with a solana wallet.
                </span>
              </div>
            </div>
          </div>
          <div className="card shadow-solid-div h-6/7 mr-5 ml-5 w-1/3">
            <div className="mx-2 my-2 block">
              <div className="card shadow-solid-div relative mt-10 box-border h-28 w-28 border-4 p-4">
                <Image
                  className=""
                  src={DocumentLogo}
                  layout="fill"
                  alt="Solana Logo"
                />
              </div>
              <div className="heading mt-4 text-left text-3xl font-bold">
                <span>Upload Documents</span>
              </div>
              <div className="explanation mt-4 text-left text-2xl">
                <span>
                  Enable users to securely store documents on the platform using
                  Arweave's blockchain-based data storage system.
                </span>
              </div>
            </div>
          </div>
          <div className="card shadow-solid-div h-6/7 w-1/3">
            <div className="mx-2 my-2 block">
              <div className="card shadow-solid-div relative mt-10 box-border h-28 w-28 border-4 p-4">
                <Image
                  className=""
                  src={CollegeLogo}
                  layout="fill"
                  alt="Solana Logo"
                />
              </div>
              <div className="heading mt-4 text-left text-3xl font-bold">
                <span>Submit Applications</span>
              </div>
              <div className="explanation mt-4 text-left text-2xl">
                <span>
                  Allow users to easily submit their application documents to
                  universities with a few clicks of a button.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Page */}
      <div className="my-20 flex justify-center">
        <div className="card shadow-solid-curve h-96 w-5/6"></div>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default Home;
