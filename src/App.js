import React from 'react';
import ItemList from './components/ItemList';
import './App.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ItemList />
			</div>
		);
	}
}

export default App;
