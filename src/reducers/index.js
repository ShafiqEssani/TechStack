import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  //libraries: () => [] // first reducer named libraries and will return an empty array.
  libraries: LibraryReducer, // LibraryReducer ia assigned to a key of libraries,
  //Application state will now be an object has a key libraries with a value
  //whatever is returned form LibraryReducer

  SelectedLibraryId: SelectionReducer
});

//console.log(store.getState());
// { libraries: [] }
