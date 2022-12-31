import React from "react";
import Image from "next/image";
import SolanaLogo from "../pages/solana.png";
import DocumentLogo from "../pages/document.jpg";
import CollegeLogo from "../pages/college.png";

export default function Instructionspage() {
  return (
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
  );
}
