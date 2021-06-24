import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots }from './robots';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import ErrorBoudary from '../components/ErrorBoudary'




class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                {
                    return response.json(); 
                })
            .then(users => 
                {
                    this.setState({robots: users});
                });     
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render(){
        const { robots,searchfield } = this.state;

        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    
    if(!robots.length){
        return (
            <div>
                <h1><label for="file">Loading Cyborgs:</label></h1>
                <progress id="file" value="50" max="100"> 50% </progress>
            </div>
        );
    }
    else{

    return(
        <div className='tc'>
            <h1 className='f1'>SKYNET</h1>
            <SearchBox searchChange={this.onSearchChange} />

            <Scroll>
                <ErrorBoudary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoudary>
            </Scroll>
        </div>
    
    );

    }
}

}
export default App;