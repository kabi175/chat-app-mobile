import React from 'react';
import UI from './src/UI';
import { store } from './src/store';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<Provider store={store}>
			<UI />
		</Provider>
	);
}
