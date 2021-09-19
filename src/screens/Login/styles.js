import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../misc/constants';

const styles = StyleSheet.create({
	Outer: {
		flex: 1,
		justifyContent: 'center',
		padding: 25,
		backgroundColor: PRIMARY_COLOR,
	},
	Label: {
		color: '#fff',
		marginBottom: 5,
	},
	Input: {
		backgroundColor: '#fff',
		color: '#000',
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	LoginButton: {
		fontSize: 16,
		paddingVertical: 10,
		borderColor: '#fff',
		borderWidth: 2,
		alignItems: 'center',
	},
	LoginLabel: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	Error: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ErrorIcon: {
		height: 25,
		width: 25,
	},
	ErrorLabel: {
		color: '#ffcfcf',
		marginLeft: 5,
		fontSize: 16,
	}
})
export default styles;