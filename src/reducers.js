import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    CARDS_AMOUNT_CHANGE, REQUEST_ROBOTS_NOTNEEDED
} from './constant';

const initialStateSearch = {
    searchField : ''
};

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

const initialStateCardsAmout = {
    cardsAmount: 10
};

export const changeCardsAmount = (state = initialStateCardsAmout, action = {}) => {
    switch (action.type) {
        case CARDS_AMOUNT_CHANGE:
            return Object.assign({}, state, {cardsAmount: action.payload});
        default:
            return state;
    }
};


const initialStateRobots = {
    isPending: false,
    swapiUsersCache: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) =>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_NOTNEEDED:
            return Object.assign({}, state, {isPending: false});
        case REQUEST_ROBOTS_SUCCESS:
            console.log(state.swapiUsersCache, action.payload, state.swapiUsersCache.concat(action.payload));
            return Object.assign({}, state, {isPending: false, swapiUsersCache: state.swapiUsersCache.concat(action.payload)});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload});
        default:
            return state;
    }
};

