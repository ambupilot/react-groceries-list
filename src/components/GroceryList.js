import React from "react";
import GroceryListItem from "./GroceryListItem";

export default class GroceryList extends React.Component {
	render() {
		const { groceryItems, readonly, handleClickGroceryItem } = this.props;
		return (
			<React.Fragment>
				{" "}
				<ul>
					{groceryItems
						? groceryItems.map(grocery => {
								return (
									<GroceryListItem
										key={grocery.id}
										grocery={grocery}
										readonly={readonly}
										clickGrocery={handleClickGroceryItem}
									/>
								);
						  })
						: " "}
				</ul>
			</React.Fragment>
		);
	}
}
