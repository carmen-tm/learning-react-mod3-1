import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
	render() {
		console.log(this.props);
		console.log(this.props.mySweetItems);
		const itemsArr = this.props.mySweetItems.map(function generateItems(item) {
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
