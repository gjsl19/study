import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Main02 from "../components/Main02";

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
      <Main />
      <Main02 />
    </>
  );
};
export default Home;
