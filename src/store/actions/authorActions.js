import * as types from '../../constants/actionTypes';
import authorApi from '../../api/mockAuthorApi';
import { ajaxCallStart } from './ajaxCallActions';
/*
Takes 'course' Object as parameter, do the same name must
be used in courseActions.js and courseReducers.js
*/

export function loadAuthors() {
    return function (dispatch) {

        dispatch( ajaxCallStart() ); 

        //fetch('http://localhost:3333/authors').then(response => response.json() )
        return authorApi
            .getAllAuthors()
            .then(authors => {
                /*
            watch for naming convention, action takes two arguments
            {type, courses} so if you change here param to coursesArr
            you will have to change it in courseReducers.js
            */
                // dispatch( loadCoursesSuccess( coursesArr ) );
                dispatch({type: types.LOAD_AUTHORS_SUCCESS, authors});
            })
            .catch(error => {
                throw error;
            })
    }
}