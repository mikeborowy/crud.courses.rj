import React, {Component, PropTypes} from 'react';
import CourseForm from './CourseForm';
import initialState from '../../../constants/initialState';
import toastr from 'toastr';

/**
 * Avaiable as:
 * import {ManageCoursePage} from '../components/ManageCoursePage'
 */
export class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            isSaving: initialState.isSaving
        }

        this.UpdateCourseState = this
            .UpdateCourseState
            .bind(this);
        this.SaveCourse = this
            .SaveCourse
            .bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({
                course: Object.assign({}, nextProps.course)
            });
        }
    }

    UpdateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;

        return this.setState({course: course});
    }

    FormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    SaveCourse(event) {
        event.preventDefault();

        if (!this.FormIsValid()) 
            return

        this.setState({isSaving: true});
        this
            .props
            .actions
            .saveCourse(this.state.course)
            /*
            whatever is in .then() will be evoked with
            delay, until promise saveCourse will be resolved,
            then() takes two params, success fn and error fn
            */
            .then(() => this.RedirectRoPage('/courses'))
            .catch(error => {
                toastr.error(error);
                this.setState({isSaving: true});
            });
    }

    RedirectRoPage(page) {
        this.setState({isSaving: true})
        toastr.success('Course saved')
        this
            .context
            .router
            .push(page)
    }

    render() {
        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    isSaving={this.state.isSaving}
                    allAuthors={this.props.authors}
                    onChange={this.UpdateCourseState}
                    onSave={this.SaveCourse}/>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on
// this.context.router.
ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
};

/**
 * Avaiable as:
 * import ManageCoursePage from '../components/ManageCoursePage'
 */
export default ManageCoursePage;