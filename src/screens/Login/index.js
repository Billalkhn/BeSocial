import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { userActions } from "../../store/actions";

const Login = ({login}) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState('');
	const onLogin = () => {
		// login("nandu@1234", "password")
		
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			if(pass.length>=6) {
				setError(null);
				login(email, pass);
			} else {
				setError("Password should have atleast 6 characters")
			}
		} else {
			setError("Invalid email address")
		}
	}
	return (
		<View style={styles.Outer}>
			<Text style={styles.Label}>Email Address</Text>
			<TextInput onChangeText={setEmail} autoFocus style={styles.Input} keyboardType="email-address" autoCapitalize="none" />
			<Text style={styles.Label}>Password</Text>
			<TextInput onChangeText={setPass} style={styles.Input} secureTextEntry />
			<TouchableOpacity onPress={onLogin} style={styles.LoginButton}>
				<Text style={styles.LoginLabel}>LOGIN</Text>
			</TouchableOpacity>
			{error?(
				<View style={styles.Error}>
					<Image style={styles.ErrorIcon} source={require('../../assets/error.png')} />
					<Text style={styles.ErrorLabel}>{error}</Text>
				</View>
			):null}
		</View>
	)
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, userActions)(Login)