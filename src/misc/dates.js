const months = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const showPostDate = (ts=Date.now()) => {
	const nows = Date.now()
	const diff = nows-ts
	if(diff<60*1000) return 'Just Now';
	if(nows-ts<60*60*1000) return Math.floor(diff/60/1000) + 'm ago';
	if(nows-ts<24*60*60*1000) return Math.floor(diff/60/60/1000) + 'h ago';
	if(nows-ts<7*24*60*60*1000) return Math.floor(diff/24/60/60/1000) + 'd ago';

	const d = new Date(ts);
	return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
}