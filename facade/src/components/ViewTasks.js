import React from 'react'
import Task from './Task';

export default class ViewTasks extends React.Component{

    render(){
        const {tasks} = this.props;
        const newTasks= tasks.map((task)=>{
            return <Task key={task.id} task={task}></Task>
        })

        return(
            <div>
                {newTasks}
            </div>
        )
    }
}