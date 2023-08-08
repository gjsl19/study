import React, { useEffect, useState } from "react";
import { FaBars, FaCircleDown } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    let abortController = new AbortController();
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }

    //console.log(window)

    return () => {
      abortController.abort();
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // Function from react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    // Empty tags are simplified <React.Fragment>

    // NavLogo is a react router link, which means that
    // it needs to have its own version of href, which is 'to'

    // IconContext.Provider is useful to change color of all icons
    // within the context

    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="main"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  exact="true"
                >
                  paywatch
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="withdrawal"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  exact="true"
                >
                  마일리지와 인출
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="repay"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  exact="true"
                >
                  급여선지급 서비스 상환
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">
                APP
                <FaCircleDown />
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
