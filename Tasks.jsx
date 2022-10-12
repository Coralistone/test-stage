import React, { useState } from "react";
import { useTache } from "../hook/useTache";
import TaskItem from "./TaskItem";

function Tasks() {
  
  const{tasksToDisplay:tasks } = useTache();
 
  const STATUT=tasks.map((item,id)=>item.statut);
  const UNIQUE_STATUT=[...new Set(STATUT)]

  const handleDelete=(idaSupprimer) =>{
   var filteredTasks = tasks.filter(task => task.id !== idaSupprimer);
   setTasksToDisplay(filteredTasks);
  };

    return (
    <div className="taches row">
     {
       UNIQUE_STATUT.sort().map((unStatut,id)=>(
        <div className="col" key={id}> 
        {unStatut===1 && <h3>Carte 1</h3>}
        {unStatut===2 && <h3>Carte 2</h3>}
        {unStatut===3 && <h3>Carte 3</h3>}
        {unStatut===4 && <h3>Carte 4</h3>}
        {tasks
        .filter(task => task.statut === unStatut)
        .map((task,id)=> <TaskItem task={task} key={id}
        onDelete={handleDelete}/>)}
        </div>))
       }

    </div>  
);
}
export default Tasks;