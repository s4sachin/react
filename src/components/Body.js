import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
	return restaurants.filter((restaurant) => {
		return restaurant.data.name
			.toLowerCase()
			.includes(searchText.toLowerCase());
	});
}

const BodyComponent = () => {
	// let searchText = "sample";

	const [searchText, setSearchText] = useState("");
	const [restaurants, setRestaurants] = useState(restaurantList);

	return (
		<>
			<div className='search-container'>
				<input
					type='text'
					className='search-input'
					placeholder='search for foods'
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						const data = filterData(searchText, restaurants);
						setRestaurants(data);
					}}>
					Search
				</button>
			</div>
			<div className='restaurant-list'>
				{restaurants.map((restaurant) => {
					return (
						<RestaurantCard
							{...restaurant.data}
							key={restaurant.data.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default BodyComponent;
