import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Withdrawal from "../components/Withdrawal";
import Repay from "../components/Repay";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let abortController = new AbortController();
    setIsOpen(!isOpen);
    return () => {
      abortController.abort();
    };
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main {...homeObjOne} />
      <Withdrawal {...homeObjTwo} />
      <Repay {...homeObjThree} />
    </>
  );
};
export default Home;
