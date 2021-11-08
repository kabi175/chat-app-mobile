import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './signin';
import SignUp from './signup';

const Stack = createStackNavigator();

const UI = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='signup' component={SignUp} />
			</Stack.Navigator>
			<Stack.Navigator>
				<Stack.Screen name='signin' component={SignIn} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default UI;
