import React,{useState} from 'react';
import {HeroContainer,HeroBg, VideoBg, HeroContent , HeroH1, HeroP, 
    HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSecElements';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>HI I'm Jumana Jambughoda</HeroH1>
                <HeroP>
                  I'm A Computer Science Student passionate about programming.  
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter ={onHover} onMouseLeave ={onHover} primary='true' dark='true' >
                        Hire Me {hover? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
        
    )
};

export default HeroSection;
