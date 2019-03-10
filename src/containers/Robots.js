import React, {Component} from 'react';
import {connect} from "react-redux";
import { setSearchField, getRequestedRobots, setCardsAmount } from "../actions";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import AmountBox from '../components/AmountBox';
import Scroll from '../components/Scroll'

const mapStateToProps = state =>({
    searchField: state.searchRobots.searchField.toLowerCase(),
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    swapiUsersCache: state.requestRobots.swapiUsersCache,
    cardsAmount: state.changeCardsAmount.cardsAmount
});

const mapDispatchToProps = dispatch => ({
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        updateRoboCacheIfNeeded: (from, to) => dispatch(getRequestedRobots(from, to)),
        onCardsAmountChange: (event) => dispatch(setCardsAmount(event.target.value))
});


class Robots extends Component {
    constructor(props) {
        super(props);
    }

    updateSwapiUsers(){
        this.props.updateRoboCacheIfNeeded(this.props.swapiUsersCache.length, this.props.cardsAmount);
    }

    componentDidMount(){
        this.updateSwapiUsers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update: ', prevProps, this.props);
        if (prevProps.swapiUsersCache.length < this.props.cardsAmount){
            this.updateSwapiUsers();
        }
    }

    render() {
        const { searchField, onCardsAmountChange, onSearchChange, cardsAmount, swapiUsersCache, isPending, error} =  this.props;
        const filteredRobo = swapiUsersCache.filter((robo, i)=> {
            return i < cardsAmount && robo.name && robo.name.toLowerCase().includes(searchField)
        });

        if (isPending){
            return <h1 className='tc'>Loading</h1>
        } else if (error.name) {
            console.log(error);
            return <h1 className='tc'>error.name</h1>
        }

        return (
            <div>
                <div>
                    <Searchbox searchChange={onSearchChange}/>
                    <AmountBox amountChange={onCardsAmountChange} amount={cardsAmount}/>
                </div>
                <Scroll>
                    <CardList robots={filteredRobo} cardClick={this.props.cardClick}/>
                </Scroll>
            </div>
        );
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Robots);