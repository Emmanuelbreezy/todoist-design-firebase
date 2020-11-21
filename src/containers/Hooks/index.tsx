import {useState, useEffect} from 'react';
import moment from 'moment';
import { firebase } from '../../firebase/firebase';
import { collectedTasksExist } from '../../helpers';



export const useTasks = (selectedProject:string) => {
    const [tasks, setTasks] = useState<any>([]);
    const [archivedTasks, setArchivedTasks] = useState<any>([]);

    useEffect(() => {
        let unsubscribe = firebase
                             .firestore()
                             .collection('tasks')
                             .where('userid', '==', '123');
      unsubscribe = 
            selectedProject && !collectedTasksExist(selectedProject) 
                ? (unsubscribe = unsubscribe.where('projectid','==', selectedProject)) 
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YY')
                ))
                : selectedProject === 'INBOX' || selectedProject === '0'
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;

        let unsubscribeSnap = unsubscribe.onSnapshot(snapshot => {
            
            const newTasks:{[x:string]:any}[] = snapshot.docs.map((task)=> {
               let tsk = {...task.data()}
                console.log(tsk,'value')
               return {id:task.id,...tsk}
            }
               );

               setTasks( 
                    selectedProject === 'NEXT_7' ? 
                    newTasks.filter(task => moment(task.date,'DD-MM-YYYY').diff(moment(), 'days') <= 7 
                                           && task.archived !== true
                        ) : newTasks.filter(task => task.archived !== true) 
                );

                setArchivedTasks(newTasks.filter(task => task.archived !== false));
             });
             
    return () => unsubscribeSnap();

    },[selectedProject]); // run this onces

    return { tasks, archivedTasks} ;
}; 

type PropProj ={}

export const useProjects = () => {
    const [projects, setProjects] = useState<PropProj | any>({});

    useEffect(() => {
       firebase
          .firestore()
          .collection('projects')
          .where('userid','==', '12345')
          .orderBy('projectid')
          .get()
          .then(snapshot => {
              const allProjects = snapshot.docs.map(project => ({
                  ...project.data(),
                  docId: project.id
              }));

              if (JSON.stringify(allProjects) !== JSON.stringify(projects)){
                  setProjects(allProjects);
              }
          })
    },[projects])

    return {projects,setProjects:{'id':'dataw2'}};
}


















