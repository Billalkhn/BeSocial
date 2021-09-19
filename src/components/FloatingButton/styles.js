import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../misc/constants'

const styles = StyleSheet.create({
	Outer: {
		position: 'absolute',
		bottom: 25,
		right: 25,
		height: 60, 
		width: 60,
		borderRadius: 30,
		backgroundColor: PRIMARY_COLOR,
		elevation: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	Icon: {
		height: 30,
		width: 30,
		resizeMode: 'contain',
		tintColor: '#fff',
	}
})

export default styles