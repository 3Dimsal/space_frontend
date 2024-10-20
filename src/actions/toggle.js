import { SHOW } from '../constants/actionTypes.js';

//Create Action Creators: functions that return actions

export const toggle = (selected) => (dispatch) => {
    try {

        dispatch({ type: SHOW, payload: selected});

    }catch(error) {
        console.log(error);
    }

    
}