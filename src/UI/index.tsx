import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
	createStackNavigator,
	StackNavigationProp,
} from '@react-navigation/stack';
import SignIn from './signin';
import SignUp from './signup';
import Home from './home';
import Chat from './chat';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type AuthStackParamList = {
	signin: undefined;
	signup: undefined;
};

type HomeStackParamList = {
	home: undefined;
	chat: { username: string };
};

export type AuthScreenProp = StackNavigationProp<
	AuthStackParamList,
	'signin' | 'signup'
>;
export type HomeScreenProp = StackNavigationProp<
	HomeStackParamList,
	'home' | 'chat'
>;

export type HomeChatRouteProp = RouteProp<HomeStackParamList, 'chat'>;

const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const UI: React.FC = () => {
	const auth = useSelector((state: RootState) => state.auth);
	const isLoggerIn = () => !auth.username;
	return (
		<NavigationContainer>
			{isLoggerIn() ? (
				<AuthStack.Navigator
					initialRouteName='signup'
					screenOptions={{ headerShown: false }}
				>
					<AuthStack.Screen name='signup' component={SignUp} />
					<AuthStack.Screen name='signin' component={SignIn} />
				</AuthStack.Navigator>
			) : (
				<HomeStack.Navigator initialRouteName='home'>
					<HomeStack.Screen
						name='home'
						component={Home}
						options={{ headerShown: false }}
					/>
					<HomeStack.Screen
						name='chat'
						component={Chat}
						options={{ headerShown: true }}
					/>
				</HomeStack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default UI;
