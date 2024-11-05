"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- states
import useStateHeader from "@states/header";

// -- style
import style from "./style.module.scss";

// -- data
import headerData from "./headerData";

const Header = (props) => {
	const { menu } = useStateHeader();

	// show navigation menu
	const [showNavigation, setShowNavigation] = useState(false);
	const handleToggleNavigation = () => {
		setShowNavigation(!showNavigation);
	};

	useEffect(() => {
		if (showNavigation) {
			document.querySelector("body").classList.add("rm-scroll");
			document.querySelector("body").classList.add("show-menu");
		} else {
			document.querySelector("body").classList.remove("rm-scroll");
			document.querySelector("body").classList.remove("show-menu");
		}
	}, [showNavigation]);

	// Sticky Menu Area
	const ref = useRef();
	const [height, setHeight] = useState(0);

	// use effect
	useEffect(() => {
		setHeight(ref.current.offsetHeight);
	}, []);

	// on render, set listener
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
		// eslint-disable-next-line
	}, []);

	let _lastScrollTop = 0;
	let _delta = 0;
	let _headerHeight = height / 2;
	// sticky header

	const isSticky = () => {
		const _scrollTop = window.scrollY;

		if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
			return;
		}

		// --- Scroll Down
		if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
			document.querySelector("body").classList.add("scroll-down");
		} else {
			// --- Scroll Up
			if (_scrollTop + window.screen.height < document.body.clientHeight) {
				document.querySelector("body").classList.remove("scroll-down");
				if (_scrollTop > _headerHeight) {
					document.querySelector("body").classList.add("header-on-scroll");
				} else {
					document.querySelector("body").classList.remove("header-on-scroll");
				}
			}
		}

		_lastScrollTop = _scrollTop;
	};

	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.inner} ref={ref}>
					<div className={style.logo}>
						<Image src={headerData.logo} alt="foodieland" />
					</div>
					<nav className={style.nav}>
						<ul className={style.list}>
							{headerData.menu.map((val, idx) => (
								<li className={style.item} key={`mn-${idx}`}>
									<Link
										className={
											menu === val.text.toLowerCase()
												? `${style.link} ${style.active}`
												: style.link
										}
										href={val.to}
									>
										{val.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={style.sosmed}>
						<ul className={style.sosmedList}>
							{headerData.sosmed.map((valS, idxS) => (
								<li className={style.sosmedItem} key={`mn-${idxS}`}>
									<Link
										className={`${style.sosmedLink} ${valS.icon.toLowerCase()}`}
										href={valS.to}
									>
										<i className={`fi-${valS.icon}`}></i>
										{valS.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<button
						type="button"
						className={style.burgerMenu}
						onClick={handleToggleNavigation}
					>
						<span className={style.burgerMenuBar}></span>
						<span className={style.burgerMenuBar}></span>
						<span className={style.burgerMenuBar}></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
