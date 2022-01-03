import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeChatRouteProp, HomeScreenProp } from '.';

const Chat: React.FC = () => {
	const route = useRoute<HomeChatRouteProp>();
	const { username } = route.params;
	const navigation = useNavigation<HomeScreenProp>();

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: username,
			headerRight: () => (
				<TouchableOpacity onPress={() => console.log('seting clicked')}>
					<View paddingH-20 paddingV-10 backgroundColor='blue'>
						<Entypo
							onPress={() => {}}
							name='dots-three-vertical'
							size={24}
							color='black'
						/>
					</View>
				</TouchableOpacity>
			),
		});
	}, [navigation, username]);

	return (
		<View>
			<Text>hello</Text>
		</View>
	);
};
export default Chat;
