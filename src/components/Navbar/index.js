import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavBarContainer, NavLogo, NavMenu,NavItems, NavLinks, MobileIcon, NavBtn, NavBtnLink} from './NavBarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Jumana Jambughoda</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItems>
                        {/* <NavItems>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItems> */}
                        <NavItems>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
