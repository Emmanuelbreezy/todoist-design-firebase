import React from "react";
import { useTasks } from "../../../../../containers/Hooks";
import { Checkbox } from "../../../../Widgets/Checkbox";


export const Tasks = () => {
    const { tasks } = useTasks('INBOX');
    console.log(tasks,'functack');

    let projectName = '';

    return(
        <div data-testid="tasks">
            <h2 data-test="project_name">{projectName}</h2>

            <ul>
                {tasks.map((task:any) => (
                    <li key={`${'task.key'}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}