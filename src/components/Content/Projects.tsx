import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../../context";

export const Projects = ({ activeValue = null}) => {
  const [active, setActive] = useState<string | null>(activeValue);
  const  { setSelectedProjecthandler } = useSelectedProjectValue();
   const  { projects } = useProjectsValue();


   const allproject = (projects && projects.map(project => {
                return (<li 
                        key={project.projectId}
                        data-doc-id={project.docId}
                        data-testid="project-action"
                        className={
                            active === project.projectId 
                            ?
                            'active sidebar__project'
                            : 'sidebar__project'
                        }
                        onClick={() => {
                            setActive('');
                            setSelectedProjecthandler('');
                        }}>
                         I am a Project  
                    </li>)
                }));

   return (
       <ul>
           {allproject}
       </ul>
   )
}