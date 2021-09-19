import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../misc/constants'

const styles = StyleSheet.create({
	Outer: {
		flex: 1,
		padding: 15,
	},
	Label: {
		fontSize: 16,
		marginBottom: 10,
	},
	Input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#aaa',
		marginBottom: 5,
		textAlignVertical: 'top',
		color: '#000',
		fontSize: 16,
		paddingHorizontal: 10,
	},
	Submit: {
		padding: 10,
		alignItems: 'center',
		backgroundColor: PRIMARY_COLOR,
	},
	SubmitLabel: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default styles;