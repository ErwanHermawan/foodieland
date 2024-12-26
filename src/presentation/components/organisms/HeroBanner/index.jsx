// -- cores
import { useEffect, useState } from "react";
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

// -- zustand state
import useStateHeroBanner from "@states/heroBanner";

const HeroBanner = (props) => {
	const [showSingle, setShowSingle] = useState(false);
	const { openModal, iframeData, setModal, setIframe } = useStateHeroBanner();

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const handleModalOpen = (iframeSrc) => {
		setIframe(iframeSrc);
		setModal(true);
		document.querySelector("body")?.classList.add("rm-scroll");
	};

	const handleModalClose = () => {
		setModal(false);
		document.querySelector("body")?.classList.remove("rm-scroll");
		setTimeout(() => {
			setIframe("");
		}, 300);
	};

	const settings = {
		arrow: false,
		dots: false,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		focusOnSelect: true,
		centerPadding: "0",
		variableWidth: false,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 8000,
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
							<HeroBannerItem {...val} id={idx} onModalOpen={handleModalOpen} />
						</div>
					))}
				</Slider>
			</div>

			{/* Modal */}
			<div
				className={`${style.modal} ${openModal ? style.modalShow : ""}`}
				onClick={handleModalClose}
			>
				<button className={style.closeButton} onClick={handleModalClose}>
					<i className="fi-times"></i>
				</button>
				<div
					className={style.modalContent}
					onClick={(e) => e.stopPropagation()}
				>
					<iframe
						src={`https://www.youtube.com/embed/${iframeData}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
