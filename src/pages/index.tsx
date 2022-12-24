import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {

  const [disabled1,setDisabled1]=useState<boolean>(true);
  const [disabled2,setDisabled2]=useState<boolean>(true);
  
  return (
    <>
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
                type="submit"
                className="btn-submit shadow-solid-curve"
                onClick={connectWallet}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page */}
      <div className="my-10 flex justify-center">
        <div className="flex w-5/6">
          <div className="w-1/2 mr-2.5">
            <div className="h-1/2 w-full bg-blue"></div>
            <div className="card shadow-solid-curve h-1/2 w-full"></div>
          </div>
          <div className="w-1/2 ml-2.5">
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
      <div className="my-20 flex justify-center">
        <div className="card shadow-solid-curve h-96 w-5/6"></div>
      </div>
      {/* Footer */}
    </>
  );
};

export default Home;
