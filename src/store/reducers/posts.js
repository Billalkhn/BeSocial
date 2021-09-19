import { actionTypes } from '../actionTypes'

const initialState = {
	posts: {},
	list: [],
	loading: false,
	error: null,
}

export default (state=initialState, action) => {
	let posts, list;
	switch(action.type) {
		case actionTypes.POSTS_LOADING:
			return {...state, loading: true, error: null};
		case actionTypes.POSTS_LOADED:
			posts = action.posts
			list = Object.keys(posts);
			list.sort((a,b) => {
				return posts[b].createdAt - posts[a].createdAt;
			});
			return {...state, posts, list, loading: false};
		case actionTypes.POSTS_ERROR:
			return {...state, loading: false, posts: {}, list: [], error: action.error};
		case actionTypes.POSTS_LIKED:
			posts = {...state.posts}
			posts[action.id] = {
				...posts[action.id],
				liked: !posts[action.id].liked,
				likeCount: posts[action.id].likeCount+(posts[action.id].liked?-1:1),
			};
			return {...state, loading: false, posts}
		case actionTypes.POSTS_REPOSTED:
			posts = {...state.posts}
			posts[action.id] = {
				...posts[action.id],
				reposted: !posts[action.id].reposted,
				repostCount: posts[action.id].repostCount+(posts[action.id].reposted?-1:1),
			};
			return {...state, loading: false, posts}
		case actionTypes.POSTS_ADDED:
			posts = {...state.posts};
			list = [...state.list];
			posts[action.id] = action.data;
			list.push(action.id);
			list.sort((a,b) => {
				return posts[b].createdAt - posts[a].createdAt;
			});
			return {...state, loading: false, posts, list};
		case actionTypes.POSTS_REMOVED:
			posts = {...state.posts};
			list = [...state.list];
			posts[action.id] = undefined;
			list = list.filter(i => i!==action.id);
			return {...state, loading: false, posts, list};
		default:
			return state;
	}
}