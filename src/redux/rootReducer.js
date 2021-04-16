import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { 
  userLoginReducer, userRegisterReducer
} from './user/user.reducer'

const userPersistConfig = {
  key: 'userLogin',
  storage,
  whitelist: ['currentUser']
};

const rootReducer = combineReducers({
  userLogin: persistReducer(userPersistConfig, userLoginReducer),
  userRegister: userRegisterReducer
});

export default rootReducer;