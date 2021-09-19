import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, LayoutAnimation, Animated, Platform, UIManager } from 'react-native'
import styles from './styles'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LoadingScreen({loading, children}) {
	const [k, setk] = useState(false)
	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		setk(loading)
	}, [loading])
	return (
		<View style={styles.Outer}>
			<View style={[styles.Container, {marginTop: k?0:-60}]}>
				<ActivityIndicator color="#0aa" size="large" />
			</View>
			{children}
		</View>
	)
}
