import { useState } from "react";
import Accordion from "./Accordion";
export default function Faq() {
  const arweave = [
    {
      title: "What is Arweave?",
      content:
        "Arweave is a new type of blockchain-based data storage system that securely stores documents, data, and other digital records.",
    },
    {
      title: "How does Arweave store documents?",
      content:
        "Arweave utilizes a distributed ledger technology to store documents, data, and other digital records in an immutable and secure manner.",
    },
    {
      title: "What are the benefits of using Arweave for document storage?",
      content:
        "Using Arweave for document storage provides increased security, streamlined processes, cost savings, and permastorage of documents.",
    },
    {
      title: "How secure is Arweave?",
      content:
        "Arweave is highly secure, utilizing a distributed ledger technology to ensure that documents, data, and other digital records are stored in an immutable and secure manner.",
    },
    {
      title: "How easy is it to use Arweave?",
      content:
        "Arweave is very user-friendly and requires minimal setup. It is easy to create an account, securely store documents, and submit applications with just a few clicks.",
    },
  ];

  const website = [
    {
      title: "What is the website?",
      content:
        "The website is an online platform that utilizes Arweave’s blockchain-based data storage system to securely store documents, data, and other digital records for the purpose of streamlining the college application process for international students.",
    },
    {
      title: "How does the website work?",
      content:
        "The website allows users to register for an account and securely store their documents on Arweave’s blockchain-based data storage system. Then, users can easily submit their application documents to universities with a few clicks of a button.",
    },
    {
      title: "What are the benefits of using the website?",
      content:
        "Using the website provides increased security, streamlined processes, cost savings, and permastorage of documents. Additionally, the website makes it easier and more secure for international students to apply to universities.",
    },
  ];

  const solana = [
    {
      title: "What is Solana?",
      content:
        "Solana is a high-performance blockchain network that enables developers to build and deploy decentralized applications quickly, securely, and scalably.",
    },
    {
      title: "How does Solana work?",
      content:
        "Solana utilizes a unique Proof-of-History consensus algorithm to enable transactions to be securely validated and stored on the blockchain in a fast and efficient manner.",
    },
    {
      title: "What are the benefits of using Solana?",
      content:
        "Solana provides developers with a secure, scalable platform to develop and deploy decentralized applications. It also enables users to transfer and store their digital assets securely and quickly.",
    },
  ];

  const [temp, setTemp] = useState(website);
  const [active, setActive] = useState("website");
  const handleActive = (e) => {
    setActive(e.target.id);
    if (e.target.id === "website") {
      setTemp(website);
    } else if (e.target.id === "arweave") {
      setTemp(arweave);
    } else if (e.target.id === "solana") {
      setTemp(solana);
    }
  };
  console.log(active === "solana" ? "rounded-submit" : "btn-submit-gray");
  return (
    <div className="mt-20 mb-10 flex justify-center">
      <div className="card shadow-solid-curve h-auto w-5/6">
        <div className="flex justify-center">
          <div className="mt-5 flex space-x-10">
            <button
              id="website"
              className={
                active === "website"
                  ? "shadow-solid-curve-btn bg-yellow px-4 py-2"
                  : "shadow-solid-div-btn bg-blue px-4 py-2"
              }
              onClick={handleActive}
            >
              About
            </button>
            <button
              id="arweave"
              className={
                active === "arweave"
                  ? "shadow-solid-curve-btn bg-yellow px-4 py-2"
                  : "shadow-solid-div-btn bg-blue px-4 py-2"
              }
              onClick={handleActive}
            >
              Arveave
            </button>
            <button
              id="solana"
              className={
                active === "solana"
                  ? "shadow-solid-curve-btn bg-yellow px-4 py-2"
                  : "shadow-solid-div-btn bg-blue px-4 py-2"
              }
              onClick={handleActive}
            >
              Solana
            </button>
          </div>
        </div>
        <div className="mt-10 mb-10">
          {temp.map((item, index) => {
            return <Accordion key={index} title={item.title} content={item.content} />;
          })}
        </div>
      </div>
    </div>
  );
}
