import expect from 'expect';
import { createStore } from 'redux';
import allAppReducers from '../../store/reducers';
import * as courseActions from '../../store/actions/courseActions';
import initialState from '../../constants/initialState';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(allAppReducers, initialState);
    const course = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    //could dispatch multiple actions here and assert on result

    // assert
    const currentState = store.getState().courses[0];
    const expectedState = {
      title: "Clean Code"
    };

    expect(currentState).toEqual(expectedState);
  });
});
