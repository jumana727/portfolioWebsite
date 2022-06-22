import React from 'react';
import {
    FooterContainer,
    Footerwrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    Sociallogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
   } from './footerElements';

   import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedin
   } from 'react-icons/fa';


const footer = () => {
  return (
      <FooterContainer>
          <Footerwrap>
              <FooterLinksContainer>
              <Sociallogo to='/'>
                    Jumana
                </Sociallogo>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>My Socials</FooterLinkTitle>
                          <SocialIcons>
                            
                            <SocialIconLink href="/https://twitter.com/Jumana91189569" target="_blank"
                            aria-label="Twitter">
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/jumana-jambughoda-959905221/" target="_blank"
                            aria-label="LinkedIn">
                            <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/jumana727" target="_blank"
                            aria-label="Github">
                            <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
          </Footerwrap>
      </FooterContainer>
  );
};

export default footer;
