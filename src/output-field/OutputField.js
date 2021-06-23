import {Component} from 'react';
import './outputField.css';
import Task from './Task';
import InputField from '../input-field/InputField'

class OutputField extends Component {

    render() {
        return (
            <ul className="list">
                {
                    this.props.tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            handleDeleteTask = {this.props.handleDeleteTask}
                            handleDoneTasks = {this.props.handleDoneTasks}
                            handleImportantTasks={this.props.handleImportantTasks}/>         
                    ))
                }
            </ul>
        )
    }
}

export default OutputField;