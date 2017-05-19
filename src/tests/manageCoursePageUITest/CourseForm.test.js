/**
 * Using Enzyme, testing one layer deep
 */
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../../components/course/manageCoursePageUI/CourseForm';

//Setup test's output
function setupComponent(saving) {
  const props = {
    course: {},
    allAuthors: [], 
    isSaving: saving, 
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {

  it('renders form and h1', () => {

    const courseFormWrapper = setupComponent(false);
    //expect to find one form
    expect(courseFormWrapper.find('form').length).toBe(1);
    expect(courseFormWrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const courseFormWrapper = setupComponent(false);
    expect(courseFormWrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const courseFormWrapper = setupComponent(true);
    expect(courseFormWrapper.find('input').props().value).toBe('Saving...');
  });
});
