import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const ErrorScreen = ({tryAgain, errorMessage}) => {
	return (
		<View style={styles.Outer}>
			<Image style={styles.Icon} source={require('../../assets/error.png')} />
			<Text style={styles.Main}>{errorMessage}</Text>
			<TouchableOpacity onPress={() => tryAgain()} style={styles.Button}>
				<Text style={styles.ButtonLabel}>Please try again.</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ErrorScreen;