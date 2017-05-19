import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
/**
 * because component file :
 * export class ManageCoursePage --> import {ManageCourseContainer}
 * export default ManageCoursePage --> import ManageCourseContainer
 * we need to disale syntax checking by eslint
 */
import CoursesPageContainer from './components/course/CoursesPageContainer'; //eslint-disable-line import/no-named-as-default
import ManageCourseContainer from './components/course/ManageCourseContainer'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="courses" component={CoursesPageContainer}/>
      <Route path="course" component={ManageCourseContainer}/>
      <Route path="course/:id" component={ManageCourseContainer}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  </Router>
);
