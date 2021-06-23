import './App.css';
import Nav from './nav/Nav';
import Filter from './filter/Filter';
import InputField from './input-field/InputField';
import OutputField from './output-field/OutputField';
import { Component } from 'react';

class App extends Component {
  state = {
    tasks: [],
    buttons: [
      {
        name: 'All',
        id: 1,
        isActive: true,
      },
      {
        name: 'Active',
        id: 2,
        isActive: false,
      },
      {
        name: 'Done',
        id: 3,
        isActive: false,
      },
    ]
  } 

  componentDidMount() {
    const temp = JSON.parse(localStorage.getItem('tasks'));
    if (temp) {
      temp.map(task => {return {...task, isVisible: true};})
      this.setState({tasks: temp});
    }                      
  }

  componentDidUpdate() {
    const temp = this.state.tasks.map(task => {
      return {...task, isVisible: true, isSearch: true}
    });
    
    localStorage.setItem('tasks', JSON.stringify(temp));
  }

  addTask = (task) => {
    this.setState({
        tasks: [...this.state.tasks, task]
    })
    
  }

  handleDeleteTask = (id) => {
    this.setState((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    }))
  }

  handleFilterDoneTask = (name) => {
    if (name === 'All') {
      const temp = this.state.tasks.map(task => {
        return {...task, isVisible: true}; 
      })
      this.setState({tasks: temp});
    }
    if (name === 'Active') {
      const temp = this.state.tasks.map(task => {
        if (task.isDone === true) return {...task, isVisible: false}; 
        return {...task, isVisible: true};
       })
       this.setState({tasks: temp});
    }
    if (name === 'Done') {
      const temp = this.state.tasks.map(task => {
       if (task.isDone === true) return {...task, isVisible: true}; 
       return {...task, isVisible: false};
      })
      this.setState({tasks: temp});
    }
  }

  handleActiveChange = (id) => {
    const temp = this.state.buttons.map(button => {
      if (button.id === id) return {...button, isActive: true}
      return {...button, isActive: false}
    });
    this.setState({buttons: temp})
  }

  handleSearchTasks = (text) => {
    const temp = this.state.tasks.map(task => {
      if (task.text.toLowerCase().includes(text.toLowerCase())) return {...task, isSearch: true};
      return {...task, isSearch: false}
    });
    this.setState({tasks: temp});
  }

  handleDoneTasks = (id) => {
    const temp = this.state.tasks.map(task => {
      if (task.id === id) return {...task, isDone: !task.isDone};
      return {...task}
    });
    this.setState({tasks: temp});
  }

  handleImportantTasks = (id) => {
    const temp = this.state.tasks.map(task => {
      if (task.id === id) return {...task, isImportant: !task.isImportant};
      return {...task}
    });
    this.setState({tasks: temp});
  }

  render () {
    
    return (
      <div className="App">
        <Nav handleSearchTasks={this.handleSearchTasks}/>
        <Filter handleFilterDoneTask={this.handleFilterDoneTask}
        handleActiveChange={this.handleActiveChange}
        buttons={this.state.buttons}/>
        <InputField addTask={this.addTask}
        tasks = {this.state.tasks}
        buttons = {this.state.buttons}/>
        <OutputField tasks={this.state.tasks}
        handleDeleteTask={this.handleDeleteTask}
        handleDoneTasks={this.handleDoneTasks}
        handleImportantTasks={this.handleImportantTasks}
        />
      </div>
    );
  }
}

export default App;
