import React,{ useState,useEffect } from 'react'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItems,
        NavLinks,
        NavBtn,
        NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] =useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        CodeHub
                    </NavLogo >
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80}>About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} offset={-80}>Discover</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} offset={-80}>Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} offset={-80}>Sign Up</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} offset={-80}>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
