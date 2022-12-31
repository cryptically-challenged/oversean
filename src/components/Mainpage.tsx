import React from "react";
import Image from "next/image";
import Image1 from "../pages/d.png";
import Image2 from "../pages/e.png";

export default function Mainpage() {
  return (
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
                  A decentralized application to simplify and secure the college
                  application process for international students, powered by
                  web3, AI, and NFTs.
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
                  Increased security: Documents are securely saved and encrypted
                  on Arweave&apos;s blockchain-based data storage system, making
                  them difficult to modify or remove.
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
                  submit their application papers without extensive paperwork or
                  complex procedures.
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
                  Arweave costs less than conventional ways to store documents,
                  saving customers time and money.
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
  );
}
