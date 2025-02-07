"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import SectionCategories from "@organisms/SectionCategories";
import SectionFeaturedRecipe from "@organisms/SectionFeaturedRecipe";
import SectionLearn from "@organisms/SectionLearn";
import SectionInstagram from "@organisms/SectionInstagram";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("home");
	}, [setMenu]);

	return (
		<>
			<HeroBanner />
			<SectionCategories />
			<SectionFeaturedRecipe />
			<SectionLearn />
			<SectionInstagram />
		</>
	);
};

export default Home;
