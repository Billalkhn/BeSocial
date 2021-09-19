import { actionTypes } from '../actionTypes'

const SAMPLE_POSTS = {
	'0': {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis felis odio, in facilisis libero iaculis quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin eget lacus condimentum, tempor lorem nec, vestibulum neque. Donec non malesuada urna, quis suscipit justo. Morbi placerat purus congue, laoreet urna ut, placerat libero. Nulla non consectetur sapien. Mauris eleifend felis vitae purus vulputate, non pulvinar diam tempor. Mauris id consequat ipsum. In dapibus turpis sed odio malesuada, et mollis neque condimentum. Etiam fermentum fringilla elit sed lacinia. Donec congue risus vel enim congue, vel fringilla turpis pharetra. Vivamus vehicula sapien sed elementum congue. Fusce scelerisque sollicitudin libero, eget imperdiet odio pulvinar a.\n\nSed at dui at ligula scelerisque congue. Aenean dictum dolor augue, in iaculis erat condimentum non. Suspendisse dui enim, placerat quis interdum faucibus, rutrum nec diam. Sed hendrerit semper pulvinar. Proin vel rutrum urna. Pellentesque ultricies orci nibh, eu bibendum sem rhoncus non. Pellentesque eleifend fermentum risus, vel tempus ex accumsan non. Nam in felis pellentesque, bibendum turpis a, vestibulum ligula. Vivamus a posuere nunc, ac egestas tortor. Donec a maximus est. In et justo risus. Duis elementum tristique auctor. Integer vulputate nisl enim, quis tristique dui sollicitudin vitae. Curabitur quis velit eros. Nullam auctor lobortis auctor.',
		createdAt: Date.now() - 10000000,
		user: 'user1',
		username: 'Saqlain Mushtaq',
		userdp: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c155820/saqlain-mushtaq.jpg',
		likeCount: 12,
		repostCount: 1,
		liked: false,
		reposted: false,
	},
	'1': {
		text: 'Cras dignissim nunc quis mauris finibus molestie. Nunc a egestas mi. Nam ac tincidunt ex. Vestibulum tempor luctus mollis. Pellentesque pharetra orci quis ex egestas molestie. Donec libero nisi, pellentesque non scelerisque a, consectetur at mi. Pellentesque felis ligula, porttitor vitae quam pellentesque, suscipit blandit neque. Morbi lobortis pulvinar ex. Praesent sit amet volutpat sapien. Proin ornare massa eget ante dictum, in dictum turpis sollicitudin. Aliquam eu nisl non ante bibendum molestie vel sit amet ante.',
		createdAt: Date.now() - 1000000,
		user: 'user2',
		username: 'Mohammed Irfan',
		userdp: 'https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316684.png',
		likeCount: 5234637,
		repostCount: 2384837,
		liked: false,
		reposted: false,
	},
	'2': {
		text: 'Cras dignissim nunc quis mauris finibus molestie. Nunc a egestas mi. Nam ac tincidunt ex. Vestibulum tempor luctus mollis. Pellentesque pharetra orci quis ex egestas molestie. Donec libero nisi, pellentesque non scelerisque a, consectetur at mi. Pellentesque felis ligula, porttitor vitae quam pellentesque, suscipit blandit neque. Morbi lobortis pulvinar ex. Praesent sit amet volutpat sapien. Proin ornare massa eget ante dictum, in dictum turpis sollicitudin. Aliquam eu nisl non ante bibendum molestie vel sit amet ante.',
		createdAt: Date.now() - 6000000000,//200000000,
		user: 'user2',
		username: 'Rawalpindi Express',
		userdp: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c156004/shoaib-akhtar.jpg',
		likeCount: 5234637,
		repostCount: 2384837,
		liked: false,
		reposted: false,
	},
}

const loadPosts = () => {
	return async dispatch => {
		dispatch({type: actionTypes.POSTS_LOADING})
		try {
			const res = await fetch('https://my-json-server.typicode.com/NanduKkd/JsonApiTest/db');
			const resJson = await res.json();
			// throw new Error('error');
			dispatch({type: actionTypes.POSTS_LOADED, posts: resJson})
		} catch (e) {
			dispatch({type: actionTypes.POSTS_ERROR, error: true})
		}
	}
}

const likePost = (id) => {
	return async dispatch => {
		dispatch({type: actionTypes.POSTS_LIKED, id})
	}
}
const repostPost = (id) => {
	return async (dispatch, getState) => {
		if(getState().posts.posts[id].reposted) {
			// console.log(id, 'repost....', getState().posts.posts[id].reposted)
			dispatch({type: actionTypes.POSTS_REMOVED, id: 'me_'+id});
		} else {
			dispatch({
				type: actionTypes.POSTS_ADDED,
				id: 'me_'+id,
				data: {
					originalId: id,
					createdAt: Date.now()
				},
			})
		}
		dispatch({type: actionTypes.POSTS_REPOSTED, id})
	}
}


const randomId = () => {
	let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	console.log(char.length);
	let id = '';
	for(let i=0; i<8; i++) {
		id += char.substring(Math.floor(Math.random()*66), 1);
	}
	return id;
}

const addPost = (content) => {
	return async (dispatch, getState) => {
		const newId = randomId();
		dispatch({
			type: actionTypes.POSTS_ADDED,
			id: newId,
			data: {
				text: content,
				createdAt: Date.now(),
				user: 'me',
				username: getState().user.data.email,
				userdp: '',
				likeCount: 0,
				repostCount: 0,
				liked: false,
				reposted: false,
			}
		})
	}
}

export const postsActions = {
	loadPosts, likePost, repostPost, addPost
}