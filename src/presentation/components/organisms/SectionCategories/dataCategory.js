import breakfast from "core/assets/img/dummy/breakfast.png";
import vegan from "core/assets/img/dummy/vegan.png";
import meat from "core/assets/img/dummy/meat.png";
import dessert from "core/assets/img/dummy/dessert.png";
import lunch from "core/assets/img/dummy/lunch.png";
import chocolate from "core/assets/img/dummy/chocolate.png";

const dataCategories = {
	title: "Categories",
	button: {
		text: "View All Categories",
		link: "/categories",
	},
	item: [
		{
			to: "/category/breakfast",
			image: breakfast,
			text: "Breakfast",
			color: "#708246",
		},
		{
			to: "/category/vegan",
			image: vegan,
			text: "Vegan",
			color: "#6CC63F",
		},
		{
			to: "/category/meat",
			image: meat,
			text: "Meat",
			color: "#CC261B",
		},
		{
			to: "/category/dessert",
			image: dessert,
			text: "Dessert",
			color: "#F09E00",
		},
		{
			to: "/category/lunch",
			image: lunch,
			text: "Lunch",
			color: "#000000",
		},
		{
			to: "/category/chocolate",
			image: chocolate,
			text: "Chocolate",
			color: "#A2604A",
		},
	],
};

export default dataCategories;
