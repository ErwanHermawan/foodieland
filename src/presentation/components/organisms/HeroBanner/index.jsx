// -- cores
import { useState, useEffect } from "react";

import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- data
import bannerData from "./bannerData";

// -- molecules
import HeroBannerItem from "@molecules/HeroBannerItem";

const HeroBanner = (props) => {
	const [showSingle, setShowSingle] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const settings = {
		arrow: false,
		dots: false,
		centerMode: true,
		infinite: true,
		slidesToShow: 1, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at once
		speed: 1000,
		focusOnSelect: true,
		centerPadding: "0", // Adjust this to add/remove space on the sides of the centered slide
		variableWidth: false, // Set to true if you want dynamic width slides
		pauseOnHover: true,
		autoplay: true, // If you want autoplay functionality
		autoplaySpeed: 8000, // Adjust autoplay speed
	};

	let classNameSingle = style.banner;
	if (bannerData.length === 1) {
		if (showSingle) {
			classNameSingle += " banner-single";
		}
	}

	if (bannerData.length === 1) {
		// Handle single banner scenario
		return (
			<section
				className={classNameSingle}
				id="hero-banner"
				initial="initial"
				animate="enter"
			>
				{bannerData.map((val, idx) => (
					<div className={style.item} key={`hb-${idx}`}>
						<div className="container">
							{/* Pass the single item (val) to HeroBannerItem */}
							<HeroBannerItem {...val} />
						</div>
					</div>
				))}
			</section>
		);
	}

	// Handle multiple banners scenario
	return (
		<section className={classNameSingle} id="hero-banner">
			<div className="container">
				<Slider {...settings}>
					{bannerData.map((val, idx) => (
						<div className={style.item} key={`hb-${idx}`}>
							{/* Pass the single item (val) to HeroBannerItem */}
							<HeroBannerItem {...val} id={idx} />
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default HeroBanner;
