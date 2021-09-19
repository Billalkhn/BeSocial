import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Outer: {
		paddingTop: 200,
		paddingHorizontal: 25,
	},
	Main: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	Button: {
		padding: 5,
	},
	Icon: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		marginBottom: 20,
		opacity: 0.7,
	},
	ButtonLabel: {
		color: '#00f',
		fontSize: 15,
		textDecorationColor: '#00f',
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid',
		textAlign: 'center',
	}
})

export default styles