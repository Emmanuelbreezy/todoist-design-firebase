import { collectedTasks } from '../constants';

export const collectedTasksExist = (selectedProject:string) => {
  return collectedTasks.find(task => task.key === selectedProject);
}
