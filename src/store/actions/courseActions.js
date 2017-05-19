import * as types from '../../constants/actionTypes';
import courseApi from '../../api/mockCourseApi';
import {ajaxCallStart, ajaxCallError} from './ajaxCallActions';
import {startLoading} from './loaderActions';
/*
Takes 'course' Object as parameter, do the same name must
be used in courseActions.js and courseReducers.js
You can use store methods in here:
    getState()
    dispatch(action)
    subscribe(listener)
    replaceReducer(nextReducer)
*/
export function createCourse(course) {
    console.log('%c courseActions:%c createCourse(course):', 'color: brown; font-weight:bold;', 'font-weight:bold;', `\n newCourse: ${JSON.stringify(course)}`)
    return {type: types.CREATE_COURSE, course}
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
    return function (dispatch, getState) {

        dispatch(ajaxCallStart());

        // fetch('http://localhost:3333/courses').then(response => response.json())
        return courseApi
            .getAllCourses()
            .then(courses => {
                /*
            watch for naming convention, action takes two arguments
            {type, courses} so if you change here param to coursesArr
            you wull have to change it in courseReducers.js
            */
                //dispatch({type: types.LOAD_COURSES_SUCCESS, courses});
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            })
    }
}

export function saveCourse(course) {
    return function (dispatch, getState) {

        dispatch(ajaxCallStart());

        return courseApi
            .saveCourse(course)
            .then(course => {
                course.id
                    ? dispatch(updateCourseSuccess(course))
                    : dispatch(createCourseSuccess(course));
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
