/**
 * Using Enzyme, testing componnet with its children
 */
import expect from 'expect';
import React from 'react';
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ManageCoursePage} from '../../components/course/manageCoursePageUI/ManageCoursePage';

// import configureStore from '../../../store/configureStore'; //action creators
// import { loadCourses } from '../../../store/actions/courseActions'; import {
// loadAuthors } from './../../store/actions/authorActions'; Setup test's
// output

function setupComponent() {

    const props = {
        course: {
            id: '',
            watchHref: '',
            title: '',
            authorId: '',
            length: '',
            category: ''
        },
        authors: [],
        actions: {
            //to fix: this.props.actions.saveCourse is not function
            saveCourse: () => {
                //To fix: Cannot read property 'then' of undefined
                return Promise.resolve();
            }
        }
    }

    return mount(<ManageCoursePage {...props}/>);
}

describe('ManageCoursePage via Enzyme', () => {

    it('sets error messages when trying to save empty title', () => {
        const ManageCoursePage = setupComponent();
        //expect to find one form
        const saveBtn = ManageCoursePage
            .find('input')
            .last();
        expect(saveBtn.prop('type')).toBe('submit');
        saveBtn.simulate('click');

        expect(ManageCoursePage.state().errors.title).toBe('Title must be at least 5 characters.')
    });

});
