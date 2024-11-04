// -- asset image
import logo from "core/assets/img/logo/foodieland.svg";

const headerData = {
	logo: logo,
	menu: [
		{
			to: "/",
			text: "Home",
		},
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
};

export default headerData;
