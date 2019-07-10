import {combineReducers} from 'redux';
import LibraReducer from './LibraryReducer';
import TestReducer from './TestReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers ({
    libraries : LibraReducer,
    test : TestReducer,
    selectedLibraryId : SelectionReducer
})