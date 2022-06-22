import React from 'react';
import Icon1 from '../../images/memshare.PNG';
import Icon2 from '../../images/vidchat.PNG';
import Icon3 from '../../images/enotice.jpeg';

import {ProjectsWrapper, ProjectsCard, ProjectsH1, ProjectsH2, ProjectsP, ProjectsIcon, ProjectsContainer} from './projectElements';

const Projects = () => {
  return (
      <ProjectsContainer id="projects">
          <ProjectsH1> MY Projects </ProjectsH1>
          <ProjectsWrapper>
              <ProjectsCard>
                  <ProjectsIcon src={Icon1}/>
                  <ProjectsH2>MemShare Web App</ProjectsH2>
                  <ProjectsP>This is a social media application built using React, Node.js, Express & MongoDB . The App is called "MemShare" and it is a simple social media app that allows users to post interesting events that happened in their lives.</ProjectsP>
              </ProjectsCard>
              <ProjectsCard>
                  <ProjectsIcon src={Icon2}/>
                  <ProjectsH2>Video Chat App</ProjectsH2>
                  <ProjectsP>This is a React Video Chat Application using WebRTC.</ProjectsP>
              </ProjectsCard>
              <ProjectsCard>
                  <ProjectsIcon src={Icon3}/>
                  <ProjectsH2>E-Notice Board App</ProjectsH2>
                  <ProjectsP>An Android application to show upload and show notices.</ProjectsP>
              </ProjectsCard>
          </ProjectsWrapper>
      </ProjectsContainer>
  )
};

export default Projects;
