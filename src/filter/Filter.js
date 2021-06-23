import {Component} from 'react';
import './filter.css';

class Filter extends Component {
    // state = {
    //     buttons: [
    //         {
    //             id: 1,
    //             isActive: true,
    //         },
    //         {
    //             id: 2,
    //             isActive: false,
    //         },
    //         {
    //             id: 3,
    //             isActive: false,
    //         }
    //     ]
    // }

    handleChoise = (id) => {
        // const temp = this.props.buttons.map(button => {
        //     if (button.id === id) return {...button, isActive: true}
        //     return {...button, isActive: false}
        // });
        // this.setState({buttons: temp})
        this.props.handleActiveChange(id)
    }
    
    handleFilterTask = (name) => {
        this.props.handleFilterDoneTask(name);
    }

    render() {
        const {name, id , isActive} = this.props.buttons;
        return (
            <section className="submenu">
                {
                    this.props.buttons.map(button => (
                    <button onClick={() => {this.handleChoise(button.id);this.handleFilterTask(button.name)}} key={button.id}
                    className={button.isActive ? "submenu__button activeSubmenuButton" : "submenu__button"}>{button.name}</button>
                    ))
                }    
            </section>
        )
    }    
}

export default Filter;