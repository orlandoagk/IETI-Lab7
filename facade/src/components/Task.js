import React from 'react';

export default class Task extends React.Component{


    render(){
        return(
            <div>
                <h2>
                    {this.props.task.id}
                </h2>
                <h2>
                    {this.props.task.text}
                </h2>
                <h2>
                    {this.props.task.status}
                </h2>
                <h2>
                    {this.props.task.dueDate}
                </h2>
                <h2>
                    {this.props.task.responsible}
                </h2>
            </div>
        )
    }
}