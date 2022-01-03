import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Options from './components/options';
import Card from './components/card';

const Home = () => {
	const [show, setShow] = useState<boolean>(false);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View flex-0 row spread centerV paddingH-10 bg-blue30 height='8%'>
				<Text text40 white>
					WhatsApp
				</Text>

				<Options visible={show} onClose={() => setShow(false)}>
					<View
						flex-0
						style={{
							position: 'absolute',
							right: 20,
							top: 15,
							borderColor: 'black',
							borderWidth: 1,
						}}
						bg-white
					>
						<Text>Log Out</Text>
						<Text>Clear</Text>
					</View>
				</Options>
				<Entypo
					onPress={() => setShow(true)}
					name='dots-three-vertical'
					size={24}
					color='white'
				/>
			</View>
			<View
				flex
				bg-green40
				style={{ borderColor: 'white', borderWidth: 5 }}
			>
				<ScrollView>
					<Card username={'kabi'} />
					<Card username={'kalai'} />
					<Card username={'mohan'} />
					<Card username={'saravanan'} />
					<Card username={'kabi'} />
					<Card username={'kalai'} />
					<Card username={'mohan'} />
					<Card username={'saro'} />
					<Card username={'kabi'} />
					<Card username={'kalai'} />
					<Card username={'mohan'} />
					<Card username={'saro'} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Home;
