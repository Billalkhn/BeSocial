import user from './user'
import posts from './posts'
import { combineReducers } from 'redux'

export default combineReducers({
	user,
	posts,
})