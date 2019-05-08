import React from 'react';
import Item from './Item';

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

class ItemList extends React.Component {
	render() {
		const itemsArr = items.map(function generateItems(item) {
			const { name, description, quantity, category, price } = item;

			return (
				<li>
					<Item
						name={name}
						description={description}
						quantity={quantity}
						category={category}
						price={price}
					/>
				</li>
			);
		});

		return <ul className="item-list">{itemsArr}</ul>;
	}
}

export default ItemList;

//////////////

// function myItems() {
// 	let myItem = '';
// 	for (const item of items) {
// 		const { name, description, quantity, category, price } = item;

// 		myItem = `
// 			<li>
// 				<Item
// 					name=${name}
// 					description=${description}
// 					quantity=${quantity}
// 					category=${category}
// 					price=${price}
// 				/>
// 			</li>`;
// 		console.log(myItem);
// 	}
// 	return myItem;
// }

// class ItemList extends React.Component {
// 	render() {
// 		return (
// 			<ul className="item-list">
// 				<li>
// 					<Item
// 						name="Cereales con chocolate"
// 						description="Cereales rellenos de chocolate"
// 						quantity={2}
// 						category="Cereales"
// 						price={5}
// 					/>
// 				</li>
// 				<li>
// 					<Item
// 						name="Hamburguesa con queso"
// 						description="Hamburguesa rica y saludable"
// 						quantity={1}
// 						category="Fast-food"
// 						price={15}
// 					/>
// 				</li>
// 			</ul>
// 		);
// 	}
// }
