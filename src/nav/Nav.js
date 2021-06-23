import {Component} from 'react';
import {ReactComponent as ReactIcon} from './Logo.svg';
import './nav.css';

class Nav extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.handleSearchTasks(e.target.value);
    }

    render() {



        return (
            <div className='navigator'>
                <ReactIcon/>
                <input onChange={this.handleChange} type="search" name='text' value={this.state.text} id="inputSearch" className="navigator__searchItem"  placeholder="Search task for to do"></input>
            </div>
        )         
    }
}

export default Nav;
