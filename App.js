import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";

const burgerKing = {
	name: "Burger King",
	image:
		"https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Junk-Food-More-Harm-and-Lesser-Well-being.jpeg",
	cuisines: ["Burger", "American"],
	rating: "4.2",
};

const FooterComponent = () => {
	return <h2>Footer Section</h2>;
};

const AppLayoutComponent = () => {
	return (
		<>
			<HeaderComponent />
			<BodyComponent />
			<FooterComponent />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a Functional Component
root.render(<AppLayoutComponent />);
