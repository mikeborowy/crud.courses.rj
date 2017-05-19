/**
 * Using Ract Test Utils
 */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../manageCoursePageUI/CourseForm';

//Setup test's output
function setup(saving) {
  let props = {
    course: {},
    allAuthors: [],
    isSaving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let courseForm = renderer.getRenderOutput();

  return {props, courseForm, renderer};
}

describe('CourseForm via React Test Utils', () => {

  it('renders form and h1', () => {
    const {courseForm} = setup();
    //should return form tag in CourseForm js
    expect(courseForm.type).toBe('form');
    /*destructure array that returns children
    so we expect first element to be h1*/
    let [h1] = courseForm.props.children;
    expect(h1.type).toBe('h1');

  });

  it('save button is labeled "Save" when not isSaving', () => {
    const {courseForm} = setup(false);
    const submitButton = courseForm.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when isSaving', () => {
    const {courseForm} = setup(true);
    const submitButton = courseForm.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
