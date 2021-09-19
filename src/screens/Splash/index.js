import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { userActions } from '../../store/actions'
import { connect } from 'react-redux'

const Splash = ({initialize}) => {
	useEffect(() => {
		const t = setTimeout(() => {
			initialize()
		}, 3000)
		return () => clearTimeout(t);
	}, [])
	return (
		<View style={styles.Outer}>
			<View style={{flex: 1}} />
			<Image style={styles.Logo} source={require('../../assets/logo.png')} />
			<View style={{flex: 0}} />
			<Text style={styles.Title}>Be Social</Text>
			<View style={{flex: 0}} />
			<Text style={styles.Label}>Know what's going on around you.</Text>
			<View style={{flex: 1}} />
		</View>
	)
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, userActions)(Splash)