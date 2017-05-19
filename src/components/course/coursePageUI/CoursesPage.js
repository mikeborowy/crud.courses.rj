/*
CoursePage Presentional Container (View)
 */
import React, {Component, PropTypes} from 'react';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

export class CoursesPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.RedirectToAddCoursePage = this.RedirectToAddCoursePage.bind(this);
    }

    RedirectToAddCoursePage(){
        browserHistory.push("/course")
    }

    render() {
        // const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit" 
                    value="Add Course" 
                    className="btn btn-primary"
                    onClick={this.RedirectToAddCoursePage}/>
                <CourseList courses={this.props.courses}/>
            </div>
        )
    }
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
    // dispatch: PropTypes.func.isRequired  => is not reuired when use
    // mapDispatchToProps method
}

export default CoursesPage