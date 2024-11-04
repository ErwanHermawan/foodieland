"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- data
import headerData from "./headerData";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.logo}>
						<Image src={headerData.logo} alt="foodieland" />
					</div>
					<button type="button" className={style.burgerMenu}>
						<span className={style.burgerMenuBar}></span>
						<span className={style.burgerMenuBar}></span>
						<span className={style.burgerMenuBar}></span>
					</button>
					<nav className={style.nav}>
						<ul className={style.list}>
							{headerData.menu.map((val, idx) => (
								<li className={style.item} key={`mn-${idx}`}>
									<Link className={style.link} href={val.to}>
										{val.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<ul className={style.sosmed}>
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
			</div>
		</header>
	);
};

export default Header;
