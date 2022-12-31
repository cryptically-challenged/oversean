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
