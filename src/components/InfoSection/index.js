import React from 'react'
import {Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,Column2, ImgWrap, Img} from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                    <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                        <Column1>
                            <TextWrapper>
                                {/* <TopLine>{topLine}</TopLine> */}
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightText={lightText}>{description}</Subtitle>
                                <Subtitle lightText={lightText}>{topLine}</Subtitle>
                                {/* <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark= {dark ? 1 : 0}
                                        dark2= {dark2 ? 1 : 0}                                    
                                    >{buttonLabel}</Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        
                    </InfoRow>
                </InfoWrapper>
           </InfoContainer> 
        </>
    )
};

export default InfoSection;
