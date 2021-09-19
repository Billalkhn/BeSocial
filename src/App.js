import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import store from './store/store'
import Stacks from './navigation/AppNavigation'

export default () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stacks />
			</NavigationContainer>
		</Provider>
	)
}