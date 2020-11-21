import React from "react";
import { firebase} from '.././../firebase/firebase';

interface Props{
    id: string
}

export const Checkbox = ({ id }:Props) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived:true
            });
    };

    return (
        <div className="" data-testid="checkbox-action" onClick={()=> archiveTask()}>
            <span className=""></span>
        </div>
    )
};