/*
function courses(prevState =[], action)
-----------------------------------
Is mapped (passed as 'state.courses') in coursePage Container (Controller) in 
'CoursesPage.js'. 

It is called by action in 'courseActions.js':
function createCourse(course){ return {type: types.CREATE_COURSE, course} }

It is connected to store in 'configureStore.js'
*/

import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

export default function courseReducer(prevState = initialState.courses, action) {
    switch (action.type) {

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
            break;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...prevState,
                Object.assign({}, prevState, action.course)
            ]
            break;

         case types.UPDATE_COURSE_SUCCESS:
            return [
                ...prevState.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
               break;
        default:
            return prevState;
    }
}

const logger = (state, action) => {
    console.log('%c coursesReducers:%c courses(state = [], action):', 
    'color: green; font-weight:bold;',
     'font-weight:bold;',
      `\n state: ${JSON.stringify(state)}`,
       `\n action: ${JSON.stringify(action)}`)
}