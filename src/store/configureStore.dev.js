/**
 * "*.dev.js" files are used for development
 * --------------------------------------------
 * "*.dist.js" files are used for distribution 
 * of final version
 * -------------------------------------------
 */
import {createStore, applyMiddleware} from 'redux';
import allAppReducers from './reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const consoleMessages = (store) => (next) => (action) => {
    let result;

    //console.group()
    // console.log(`dispatching action => ${ action.type }`);
    // console.log(`dispatching course:`, store.getState().course);
    
    //result = next(action);
    // let {courses} = store.getState();

    // // ski days: ${JSON.stringify(allSkiDays)}
    // console.log(`
    // courses num: ${courses.length}
    // courses:${JSON.stringify(courses, null, "      ")}
    // `)

    // console.groupEnd();

    result = next(action);
    console.log(`State`, store.getState() )


    return result;
}

export default function configureStore(initialState) {
    return createStore(
        allAppReducers, 
        initialState, 
        applyMiddleware(thunk, consoleMessages, reduxImmutableStateInvariant())
        );
}
