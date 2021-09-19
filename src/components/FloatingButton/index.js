import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const FloatingButton = ({onPress}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.Outer}>
			<Image style={styles.Icon} source={require('../../assets/pen.png')} />
		</TouchableOpacity>
	)
}

export default FloatingButton;