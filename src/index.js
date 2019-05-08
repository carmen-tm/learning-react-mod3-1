import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from './components/ItemList';

import * as serviceWorker from './serviceWorker';

const items = [
	{
		name: 'Cereales con chocolate',
		description: 'Cereales rellenos de chocolate',
		quantity: 2,
		category: 'Cereales',
		price: 5
	},
	{
		name: 'Hamburguesa con queso',
		description: 'Hamburguesa rica y saludable',
		quantity: 1,
		category: 'Fast-food',
		price: 15
	},
	{
		name: 'Agua mineral',
		description: 'Agua de un charco del Himalaya',
		quantity: 2,
		category: 'Bebida',
		price: 5
	}
];

// With arrow functions
const cheapItems = items.filter(item => item.price < 10);

// Traditional function
// const cheapItems = items.filter(function(item) {
// 	return item.price < 10;
// });

ReactDOM.render(
	<ItemList mySweetItems={cheapItems} />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
