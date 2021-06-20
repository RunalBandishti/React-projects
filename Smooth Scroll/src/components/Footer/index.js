import React from 'react'
import { SocialMedia,
        SocialWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinkWrap,
        FooterLinkItem,
        FooterLinkTitle,
        FooterLink } from './FooterElement';
import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Carrers</FooterLink>
                            <FooterLink to='/'>Investor</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrap>

                    <FooterLinkWrap>
                        <FooterLinkItem>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Video</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItem> 
                        
                    </FooterLinkWrap>
                </FooterLinksContainer>
                    <SocialMedia>
                        <SocialWrap>
                            <SocialLogo to='/' onClick={toggleHome}>CodeHub</SocialLogo>
                            <WebsiteRights>CodeHub &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" targer="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" targer="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" targer="_blank" aria-label="Youtube">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="/" targer="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialWrap>
                    </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
