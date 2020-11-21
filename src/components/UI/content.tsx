import React from "react";
import { Header } from './Layer/Header/header';
import { MainContent } from "./Layer/MainContent/main_content";
import { SideBar } from "./Layer/SideBar/sidebar";
import { ProjectsProvider, SelectedProjectProvider } from '../../context';

const Content = () => {
    return(
      <SelectedProjectProvider>
        <ProjectsProvider>
          <div className="w-full h-screen flex bg-background-secondary flex-col flex-1">
            <Header/>
            <div className="relative w-full  flex flex-1 flex-col lg:flex-row  lg:w-3/4 mx-auto" >
              <SideBar />
              <MainContent />
            </div>
          </div>
        </ProjectsProvider>
      </SelectedProjectProvider>
    );
}

export default Content;