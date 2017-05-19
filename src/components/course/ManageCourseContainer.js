/*
CoursePage Container (Controller)
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../store/actions/courseActions';
import ManageCoursePage from './manageCoursePageUI/ManageCoursePage';
import {AuthorsFormatedForDropDown} from '../../selectors/dropDown_Authors';

// state.courses => courses in index.js Reducers => courseReducers in
// coursesReducers.js state.authors => authors in index.js Reducers =>
// authorReducers in authorsReducers.js

const mapStateToProps = (state, ownProps) => {

    const courseId = ownProps.params.id; // from the path `/course/:id`
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    //if id is avaiable assign course from state
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    /*const authorsFormatedForDropDown = state
        .authors //authors reducer
        .map(author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            }
        });*/

    return {course: course, authors: AuthorsFormatedForDropDown(state.authors)};
}

//bind actions way of dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) 
        return course[0]; //since filter returns an array, have to grab the first.
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);