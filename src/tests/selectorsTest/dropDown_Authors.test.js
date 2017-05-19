import expect from 'expect';
import {AuthorsFormatedForDropDown} from '../../selectors/dropDown_Authors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(AuthorsFormatedForDropDown(authors)).toEqual(expected);
    });
  });
});
