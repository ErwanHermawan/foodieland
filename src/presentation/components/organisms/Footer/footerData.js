// -- asset image
import logo from "core/assets/img/logo/foodieland.svg";

const footerData = {
	logo: {
		image: logo,
		to: "/",
	},
	description:
		"Foodieland is a food blog that provides various recipes and cooking tips.",
	menu: [
		{
			to: "/recipes",
			text: "Recipes",
		},
		{
			to: "/blog",
			text: "Blog",
		},
		{
			to: "/Contact",
			text: "Contact",
		},
		{
			to: "/about",
			text: "About us",
		},
	],
	sosmed: [
		{
			to: "facebook.com",
			icon: "facebook",
		},
		{
			to: "twitter.com",
			icon: "twitter",
		},
		{
			to: "instagram.com",
			icon: "instagram",
		},
	],
	copyright: "© 2020 Flowbase. Powered by <span>Webflow</span>",
};

export default footerData;
