import expect from 'expect';
import * as courseActions from '../../store/actions/courseActions';
import * as types from '../../constants/actionTypes';


// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});


//============== TEST THUNK ====================//
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';  //Store mockup
import nock from 'nock';//HTTP calls mockup

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  /*
   * Pass 'done' callback function to Mocha. 
   * Call this function when async work is complete 
   */
  it('should create AJAX_CALL_START and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }}); //fake response

    const expectedActions = [
      {type: types.AJAX_CALL_START},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {

      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.AJAX_CALL_START);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      
      /*
      to fix:  Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; 
      if returning a Promise, ensure it resolves. Go to api\delay.js and cahnge value to 0
      */

      done();
    });
  });
});
