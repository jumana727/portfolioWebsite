import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
  
    
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1108px;
    }

    @media screen and (max-width: 468px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 150px;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 0px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition : all 0.2s ease-in-out;

    &:hover {
        transforn: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsIcon = styled.img`
    height: 400px;
    width: 500px;
    border-radius:10px;
    margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom:64px;
    margin-left: 850px;
    margin-top: 30px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const ProjectsP = styled.p`
    font-size: 1.2rem;
    text-align: center;
`;

