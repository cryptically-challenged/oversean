import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SolanaLogo from "./solana.png";
import DocumentLogo from "./document.jpg";
import CollegeLogo from "./college.png";
import Faq from "../components/faq";
import Image1 from "./d.png";
import Image2 from "./e.png"

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
      {/* Main Page */}
      <div className="my-10 flex h-auto justify-center">
        <div className="flex w-5/6">
          <div className="mr-2.5 w-1/2">
            {/* left side */}
            {/* top side */}
            <div className="flex h-auto w-full justify-center">
              <div className="h-full w-5/6">
                <div className="color-white mt-20 h-auto text-6xl leading-snug">
                  <span>
                    Securely{" "}
                    <span className="streamline shadow-solid-div">
                      STREAMLINE
                    </span>{" "}
                    college <span>applicadtions with blockchain.</span>
                  </span>
                </div>
                <br />
                <div className="mb-10 text-left text-4xl">
                  <span>
                    Giving Overseas Students Access to Higher Education
                    Opportunities with Web3, AI, and NFTs.
                  </span>
                </div>
              </div>
            </div>
            {/* bottom side */}
            <div className="card shadow-solid-curve flex h-auto w-full justify-center">
              <div className="h-full w-5/6">
                <div className="heading w-inherit h-auto text-center text-6xl">
                  <span>Our Goals</span>
                </div>
                <br />
                <div className="subtitle h-auto w-fit text-4xl">
                  <span>
                    A decentralized application to simplify and secure the
                    college application process for international students,
                    powered by web3, AI, and NFTs.
                  </span>
                </div>
                <div className="imgdiv mt-5 mb-5">
                <Image
                  src={Image2}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-2.5 w-1/2">
            <div className="card shadow-solid-div h-auto">
              <div className="imagediv h-full w-full">
                <Image
                  src={Image1}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="pointsovercentralizeddiv w-6/7 mt-10 h-3/5">
              <div className="px-4 py-2">
                <span className="streamline-adv shadow-solid-div">
                  Advantages Over Centralized Systems
                </span>
              </div>
              <div className="px-4 py-2">
                <ul className="my-5">
                  <li className="text-body-color mb-4 flex text-4xl">
                    <span className="text-primary mr-2 flex items-center rounded-full text-base">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
                      </svg>
                    </span>
                    Increased security: Documents are securely saved and
                    encrypted on Arweave&apos;s blockchain-based data storage system,
                    making them difficult to modify or remove.
                  </li>
                  <li className="text-body-color mb-4 flex text-4xl">
                    <span className="text-primary mr-2 flex items-center rounded-full text-base">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
                      </svg>
                    </span>
                    Simplified Application Process Users may quickly and simply
                    submit their application papers without extensive paperwork
                    or complex procedures.
                  </li>
                  <li className="text-body-color mb-4 flex text-4xl">
                    <span className="text-primary mr-2 flex items-center rounded-full text-base">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
                      </svg>
                    </span>
                    Arweave costs less than conventional ways to store
                    documents, saving customers time and money.
                  </li>
                  <li className="text-body-color mb-4 flex text-4xl">
                    <span className="text-primary mr-2 flex items-center rounded-full text-base">
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
                      </svg>
                    </span>
                    Permastorage enables users to preserve documents permanently
                    for future reference.
                  </li>
                </ul>
              </div>
            </div>
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
                  Arweave&apos;s blockchain-based data storage system.
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
      <Faq />
    </div>
  );
};

export default Home;
