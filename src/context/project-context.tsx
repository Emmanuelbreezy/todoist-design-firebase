import React,{createContext,useContext} from 'react';
import { useProjects } from '../containers/Hooks'

export const ProjectsContext = createContext({
    projects: [{'projectId':'data'},{'docId':'emma'}],
    setProjects:{}
});


export const ProjectsProvider = (props:any) => {
    const { projects, setProjects } = useProjects();

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {props.children}
        </ProjectsContext.Provider>
    )
}

export const useProjectsValue = () => useContext(ProjectsContext);


