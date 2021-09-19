import { actionTypes } from '../actionTypes'

const initialState = {
	data: null,
	init: false,
}

export default (state=initialState, action) => {
	switch(action.type) {
		case actionTypes.USER_INIT:
			return {...state, init: true};
		case actionTypes.USER_LOGIN:
			return {...state, data: action.data};
		default:
			return state;
	}
}