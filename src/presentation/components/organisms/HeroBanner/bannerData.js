import banner1 from "core/assets/img/dummy/hero-banner-1.jpg";
import banner2 from "core/assets/img/dummy/hero-banner-2.jpg";
import banner3 from "core/assets/img/dummy/hero-banner-3.jpg";
import badge from "core/assets/img/dummy/badge.png";
import badgeIcon from "core/assets/img/icon/badge-icon.png";
import recipeIcon from "core/assets/img/icon/recipe.png";
import author from "core/assets/img/dummy/john-smith.png";

const bannerData = [
	{
		subtitle: {
			text: "Hot Recipes",
			icon: recipeIcon,
		},
		title: "Spicy delicious chicken wings",
		description:
			"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
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
		author: {
			image: author,
			name: "John Smith",
			publishDate: "15 March 2024",
		},
		bagde: {
			image: badge,
			icon: badgeIcon,
		},
		button: {
			text: "View Recipe",
			to: "/recipe",
			icon: "fi-play-circle",
			iframe: "CBMPcTpaXbU?si=69AbV1SjLg3ZUjTF",
		},
		image: banner1,
	},
	{
		subtitle: {
			text: "Hot Recipes",
			icon: recipeIcon,
		},
		title: "Health Japanese Fried Rice",
		description:
			"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
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
		author: {
			image: author,
			name: "John Smith",
			publishDate: "15 March 2024",
		},
		bagde: {
			image: badge,
			icon: badgeIcon,
		},
		button: {
			text: "View Recipe",
			to: "/recipe",
			icon: "fi-play-circle",
			iframe: "KNbGCwh3lko?si=E-OGz4cb2mpPs5mK",
		},
		image: banner2,
	},
	{
		subtitle: {
			text: "Hot Recipes",
			icon: recipeIcon,
		},
		title: "The Creamiest Creamy Chicken and Bacon Pasta",
		description:
			"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
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
		author: {
			image: author,
			name: "John Smith",
			publishDate: "15 March 2024",
		},
		bagde: {
			image: badge,
			icon: badgeIcon,
		},
		button: {
			text: "View Recipe",
			to: "/recipe",
			icon: "fi-play-circle",
			iframe: "J-9p4Y0ZxAs?si=Fp7vwgepV0xHotNu",
		},
		image: banner3,
	},
];

export default bannerData;
