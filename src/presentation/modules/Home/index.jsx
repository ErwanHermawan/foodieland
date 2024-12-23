"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import SectionCategories from "@organisms/SectionCategories";

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
		</>
	);
};

export default Home;
