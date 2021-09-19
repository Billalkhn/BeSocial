import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../misc/constants'

const styles = StyleSheet.create({
	Outer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: PRIMARY_COLOR,
	},
	Title: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#fff',
	},
	Label: {
		fontSize: 16,
		color: '#fffa',
	},
	Logo: {
		height: 100,
		width: 100,
		tintColor: '#fff',
	}
})
export default styles;