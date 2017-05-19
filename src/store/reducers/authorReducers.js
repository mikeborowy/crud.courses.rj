import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

/*
In courseActions.js:
function createCourse(course){ return {type: types.CREATE_COURSE, course} }
Reducers are passed to 'state'
*/

export default function authorReducer(prevState = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
            break;
       
        default:
            return prevState;
    }
}

const logger = (state, action) => {
    console.log('%c authorReducer:%c (state = [], action):', 
    'color: green; font-weight:bold;',
     'font-weight:bold;',
      `\n state: ${JSON.stringify(state)}`,
       `\n action: ${JSON.stringify(action)}`)
}

// export function course(state = {}, action) {
//     if (action.type === types.CREATE_COURSE) 
//         return action.course;
//     else 
//         return
//     state
// }