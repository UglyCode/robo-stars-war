import React, {Component} from 'react';
import {connect} from "react-redux";
import {setSearchField} from "../actions";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import AmountBox from '../components/AmountBox';
import Scroll from '../components/Scroll'

const mapStateToProps = state =>({searchField: state.searchField});

const mapDispatchToProps = dispatch => ({
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});


class Robots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swapiUsersCache: [],
            actualRobots: [],
            cardsAmount: 10
        }
    }

    async _updateSwapiUsers(amount){
        const cardsAmount = Math.min(Math.max(amount, 5),25);
        const {swapiUsersCache} = this.state;

        let fetchArr =[];
        const cacheLength = swapiUsersCache.length;

        if (cacheLength < cardsAmount) {

            for (let i = cacheLength; i < cardsAmount; i++){
                fetchArr.push(fetch(`https://swapi.co/api/people/${i+1}`)); //0 elem not defined at wsapi
            }

            let swapiArr = await Promise.all(fetchArr);
            swapiArr = await Promise.all(swapiArr.map( elem => elem.json()));
            swapiArr.forEach(elem => swapiUsersCache.push(elem));

            this.setState({ swapiUsersCache: swapiUsersCache});
        }

        this.setState({actualRobots: swapiUsersCache.slice(0,cardsAmount)});
    }

    componentDidMount(){

        this._updateSwapiUsers(this.state.cardsAmount);

    }


    onAmountChange = (event) => {
        const amount = event.target.value;
        this.setState({cardsAmount: amount});
        this._updateSwapiUsers(amount);
    };


    render() {
        const { actualRobots, cardsAmount }  = this.state;
        const { searchField, onSearchChange } =  this.props;
        const filteredRobo = actualRobots.filter(robo => {
            return robo.name && robo.name.toLowerCase().includes(searchField)
        });
        if (!actualRobots.length){
            return <h1 className='tc'>Loading</h1>
        }
        return (
            <div>
                <div>
                    <Searchbox searchChange={onSearchChange}/>
                    <AmountBox amountChange={this.onAmountChange} amount={cardsAmount}/>
                </div>
                <Scroll>
                    <CardList robots={filteredRobo} cardClick={this.props.cardClick}/>
                </Scroll>
            </div>
        );
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Robots);