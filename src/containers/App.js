import React, {Component} from 'react';
import './App.css';
import Robots from './Robots';
import Posts from './Posts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRobot: undefined
        }
    };

    cardOnClick = (event) => {
      this.setState({currentRobot: event.currentTarget.id});
    };

    backOnClick = () => {
        this.setState({currentRobot: undefined});
    };

    render() {

        let currentPage = this.state.currentRobot ?
            <Posts backOnClick={this.backOnClick} currentRobot={this.state.currentRobot}/> :
            <Robots cardClick={this.cardOnClick}/>;

        return (
            <div className='tc'>
                <header><h1 className='f1'>ROBO-STARS WAR</h1></header>
                {currentPage}
            </div>
        );
    };
}


export default App;