import {Component} from 'react';
import './task.css';

class Task extends Component {
    state = {
        // isImportant: false,
        // isDone: false,
    }

    deleteTask = (id) => {
        this.props.handleDeleteTask(id);
    }

    handleImportant = (id) => {
        this.props.handleImportantTasks(id);
    }

    handleDone = (id) => {
        this.props.handleDoneTasks(id);
    }

    render() {
        const {id, canRemove, text, isDone, isImportant, isVisible, isSearch} = this.props.task
        return (
            <li className={`${(isImportant ? 'importantOn' : '')} 
                            ${(isVisible ? '' : 'visible')}
                            ${(isSearch ? '' : 'searchVisible')}`}>
                <span 
                    onClick={() => this.handleDone(id)} 
                    className={(isDone ? 'checked' : '')}>{text}</span>
                <button className={(!isImportant && 'important') || ('important importantButton')} 
                        onClick={() => this.handleImportant(id)}>{(!isImportant &&'MARK IMPORTANT') || ('NOT IMPORTANT')}</button>
                {canRemove && <button className="close" onClick={() => this.deleteTask(id)}></button>}
            </li>   
        )
    }
}

export default Task;