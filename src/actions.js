import {
   CHANGE_SEARCH_FIELD,
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_FAILED,
   REQUEST_ROBOTS_SUCCESS,
   REQUEST_ROBOTS_NOTNEEDED,
   CARDS_AMOUNT_CHANGE
} from './constant';

export const setSearchField = (text) => ({
   type: CHANGE_SEARCH_FIELD,
   payload: text
});

export const setCardsAmount = (amount) => ({
   type: CARDS_AMOUNT_CHANGE,
   payload: Math.min(Math.max(amount, 5),25)
});

export const getRequestedRobots = (from, to) => (dispatch) => {
   dispatch({type: REQUEST_ROBOTS_PENDING});
   let fetchArr = [];

   console.log(from, to);
   for (let i = from; i < to; i++){
      console.log(`https://swapi.co/api/people/${i+1}`);
      fetchArr.push(fetch(`https://swapi.co/api/people/${i+1}`)); //0 elem not defined at wsapi
   }

   if (!fetchArr.length) return dispatch({type: REQUEST_ROBOTS_NOTNEEDED});

   Promise.all(fetchArr)
       .then(swapiArr => Promise.all(swapiArr.map( elem => elem.json())))
       .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS,
         payload: data}))
       .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED,
          payload: error}))
};
