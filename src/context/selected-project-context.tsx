import React,{createContext,useContext, useState} from 'react';

export const SelectedProjectContext = createContext({
    SelectedProject:'INBOX',
    setSelectedProjecthandler: (value:string) => {}
});


export const SelectedProjectProvider = (props:any) => {
    const [ SelectedProject, setSelectedProject ] = useState<string>('INBOX');
    
    const setSelectedProjecthandler = (value:string) => setSelectedProject(value);
    return (
        <SelectedProjectContext.Provider value={{SelectedProject:SelectedProject, setSelectedProjecthandler:setSelectedProjecthandler}}>
            {props.children}
        </SelectedProjectContext.Provider>
    )
}

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);


