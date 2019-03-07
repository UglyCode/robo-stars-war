import {
   CHANGE_SEARCH_FIELD,
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_FAILED,
   REQUEST_ROBOTS_SUCCESS
} from './constant';

export const setSearchField = (text) => ({
   type: CHANGE_SEARCH_FIELD,
   payload: text
});

export const requestRobots = () => (dispatch) => {
   dispatch({type: REQUEST_ROBOTS_PENDING});
   fetch(`https://swapi.co/api/people/1`)
       .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS,
         payload: data}))
       .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED,
          payload: error}))
};