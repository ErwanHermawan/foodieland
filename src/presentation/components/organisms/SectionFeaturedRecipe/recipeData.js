import image1 from "core/assets/img/recipe/1.jpg";
import image2 from "core/assets/img/recipe/2.jpg";
import image3 from "core/assets/img/recipe/3.jpg";
import image4 from "core/assets/img/recipe/4.jpg";
import image5 from "core/assets/img/recipe/5.jpg";
import image6 from "core/assets/img/recipe/6.jpg";
import image7 from "core/assets/img/recipe/7.jpg";
import image8 from "core/assets/img/recipe/8.jpg";

const recipeData = {
	title: "Simple and tasty recipes",
	description:
		"Discover a variety of simple and tasty recipes that you can try at home with your loved ones and family members to make your day more enjoyable.",
	item: [
		{
			image: image1,
			title: "Big and Juicy Wagyu Beef Cheeseburger",
			to: "/recipe/big-and-juicy-wagyu-beef-cheeseburger",
			favorite: true,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Snack",
				},
			],
		},
		{
			image: image2,
			title: "Fresh Lime Roasted Salmon with Ginger Sauce",
			to: "/recipe/fresh-lime-roasted-salmon-with-ginger-sauce",
			favorite: false,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Fish",
				},
			],
		},
		{
			image: image3,
			title: "Strawberry Oatmeal Pancake with Honey Syrup",
			to: "/recipe/strawberry-oatmeal-pancake-with-honey-syrup",
			favorite: true,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Breakfast",
				},
			],
		},
		{
			image: image4,
			title: "Fresh and Healthy Mixed Mayonnaise Salad",
			to: "/recipe/fresh-and-healthy-mixed-mayonnaise-salad",
			favorite: false,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Healthy",
				},
			],
		},
		{
			image: image5,
			title: "Chicken Meatballs with Cream Cheese",
			to: "/recipe/chicken-meatballs-with-cream-cheese",
			favorite: true,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Meat",
				},
			],
		},
		{
			image: image6,
			title: "Fruity Pancake with Orange & Blueberry",
			to: "/recipe/fruity-pancake-with-orange-blueberry",
			favorite: true,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Sweet",
				},
			],
		},
		{
			image: image7,
			title: "The Best Easy One Pot Chicken and Rice",
			to: "/recipe/the-best-easy-one-pot-chicken-and-rice",
			favorite: false,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Snack",
				},
			],
		},
		{
			image: image8,
			title: "The Creamiest Creamy Chicken and Bacon Pasta",
			to: "/recipe/the-creamiest-creamy-chicken-and-bacon-pasta",
			favorite: false,
			info: [
				{
					icon: "fi-timer",
					text: "30 min",
				},
				{
					icon: "fi-fork-knife",
					text: "Chicken",
				},
			],
		},
	],
};

export default recipeData;
