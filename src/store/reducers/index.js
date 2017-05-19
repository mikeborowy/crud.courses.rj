import {combineReducers} from 'redux';
import {ajaxCallsInProgress} from './ajaxCallReducer';
import loader from './loaderReducer';
import courses from './courseReducers';
import authors from './authorReducers';

/*
the given name exported of reducers here will be use thru 
components as 

store.getState() =>
{
    ajaxCallsInProgress:0
    courses:Array[5]
    authors:Array[3]
}

*/
const allAppReducers = combineReducers({
    ajaxCallsInProgress,
    // loader,
    courses, //shorthand property name
    authors
})

export default allAppReducers;