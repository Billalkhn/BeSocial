import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'

import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Home from '../screens/Home'
import { PRIMARY_COLOR } from '../misc/constants'
import CreatePost from '../screens/CreatePost'

const Stack = createNativeStackNavigator()

const Stacks = ({user, init}) => {
	return (
		<Stack.Navigator screenOptions={{headerStyle: {backgroundColor: PRIMARY_COLOR}, headerTintColor: '#fff'}} >
			{init? user?
				<>
					<Stack.Screen name="Home" component={Home} options={{headerTitle: 'Be Social'}} />
					<Stack.Screen name="CreatePost" component={CreatePost} options={{headerTitle: 'Create Post'}} />
				</>
			: <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
			:	<Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
			}
		</Stack.Navigator>
	)
}

const mapStateToProps = ({user}) => ({user: user.data, init: user.init})
export default connect(mapStateToProps)(Stacks)