import React,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Test from '../components/Test';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>  
            <HeroSection /> 
            <InfoSection {...homeObjOne}/>
            <Projects />
            {/* <InfoSection {...homeObjTwo}/> */}
            <Footer />

        </>
    )  
}

export default Home;
