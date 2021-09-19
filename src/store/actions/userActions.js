import { actionTypes } from '../actionTypes'

const initialize = () => {
	return async dispatch => {
		dispatch({type: actionTypes.USER_INIT})
	}
}

const login = (email='', password='') => {
	return async dispatch => {
		dispatch({type: actionTypes.USER_LOGIN, data: {email}})
	}
}

export const userActions = {
	initialize,
	login
}