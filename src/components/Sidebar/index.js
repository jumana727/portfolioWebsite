import React from 'react';
import {SideBarContainer,CloseIcon,Icon,SideBarWrapper,SideBarBtnWrap,SideBarMenu,SideBarLink,SideBarRoute} from './SideBarElements';

const SideBar = ({isOpen , toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to='/signin'>Sign In</SideBarRoute>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
        
    )
};

export default SideBar;
