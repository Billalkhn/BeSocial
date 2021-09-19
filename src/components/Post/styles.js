import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from '../../misc/constants'

const styles = StyleSheet.create({
	Outer: {
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	Container: {
		backgroundColor: '#fff',
		elevation: 5,
		borderRadius: 10,
	},
	Header: {
		padding: 15,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	RepostWrapper: {
		flexDirection: 'row',
		marginBottom: 5,
		alignItems: 'center',
	},
	Repost: {
		color: '#888',
		fontSize: 14,
		alignItems: 'center',
	},
	RepostIcon: {
		tintColor: '#999',
		height: 15,
		width: 15,
		marginRight: 10,
		marginLeft: 10,
	},
	HeaderRow: {
		flexDirection: 'row',
	},
	Dp: {
		height: 50, width: 50,
		borderRadius: 20,
	},
	HeaderDetails: {
		marginLeft: 15,
		flex: 1,
	},
	HeaderTitle: {
		fontSize: 18,
		fontWeight: 'normal',
	},
	HeaderDate: {
		fontSize: 14,
		color: '#777'
	},
	Content: {},
	ContentTextWrapper: {
		margin: 20,
	},
	ContentText: {
		fontSize: 15,
		lineHeight: 20,
	},
	ReadMoreOuter: {
		paddingHorizontal: 5,
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	ReadMore: {
		fontSize: 15,
		lineHeight: 20,
		backgroundColor: '#fff',
		color: PRIMARY_COLOR,
		fontWeight: 'bold',
	},
	Footer: {
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: '#ddd',
		justifyContent: 'space-evenly',
	},
	FooterButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 10,
		alignItems: 'center',
	},
	FooterButtonIcon: {
		height: 15,
		width: 15,
		tintColor: '#777',
	},
	FooterButtonLabel: {
		fontSize: 14,
		marginLeft: 5,
	},
	FooterButtonSeparator: {
		width: 1,
		backgroundColor: '#ddd',
	}
})

export default styles;