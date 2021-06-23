import {Component} from 'react';
import './inputField.css';

class InputField extends Component {
    state = {
        text: "",
        isDisabled: "disabled"
    }

    getNewTaskId = () => {
        if (this.props.tasks.length === 0) return 0;
        return this.props.tasks[this.props.tasks.length-1].id + 1;
    }

    getVisible = () => {
        const temp = this.props.buttons.filter((button) => {
            if (button.isActive === true) return button
        })
        if (temp[0].name !== 'Done') return true; 
        return false;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask({
            id: this.getNewTaskId(),
            text: this.state.text,
            canRemove: true,
            isDone: false,
            isImportant: false,
            isVisible: this.getVisible(),
            isSearch: true,
        })
        this.setState({
            text:''
        })
    }

    render() {
        return (
            <form className="new-task" onSubmit={this.handleSubmit}>
                <div className="new-task__textarea">
                    <label htmlFor="new-task__text">New Task</label>
                    <textarea   onChange={this.handleChange} 
                                className="new-task__text" 
                                name='text' 
                                value={this.state.text}></textarea>    
                </div>
                <input  type="submit" value="Add" 
                        className={(this.state.text != '') ? 'new-task__button' : 'new-task__button__nonactive'} 
                        disabled={(this.state.text != '') ? '' : 'disabled'}/>
            </form>
        )
    }
}

export default InputField;