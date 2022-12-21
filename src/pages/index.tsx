import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {

  const [disabled1,setDisabled1]=useState<boolean>(true);
  const [disabled2,setDisabled2]=useState<boolean>(true);
  
  return (
    <>
      {/* <button className="btn shadow-solid">content</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        className="input-text shadow-solid"
      />
      <br />
      <br />
      <button type="submit" className="btn-submit shadow-solid-curve">
        submit or signin
      </button>
      <br />
      <br />
      <div className="card shadow-solid-div"></div> */}

<div className="flex justify-center">
        <div className="w-5/6">
          <div className="flex justify-between ... py-3">
            <div className="">

            </div>

            <div className="flex space-x-12 ml-auto mr-32 ...">
              <button className="text-xl" disabled={disabled1}>Placeholder</button>
              <button className="text-xl" disabled={disabled2}>Placeholder</button>
            </div>

            <div className="">
              <button type="submit" className="btn-submit shadow-solid-curve">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
