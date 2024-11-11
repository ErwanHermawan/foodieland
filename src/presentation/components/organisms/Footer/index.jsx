// -- core
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- data
import footerData from "./footerData";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					<div className={style.about}>
						<Link className={style.logo} href={footerData.logo.to}>
							<Image src={footerData.logo.image} alt="Foodieland" />
						</Link>
						<p className={style.description}>{footerData.description}</p>
					</div>
					<ul className={style.menu}>
						{footerData.menu.map((val, idx) => (
							<li className={style.item} key={`idx-${idx}`}>
								<Link href={val.to} className={style.link}>
									{val.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={style.bottom}>
					<p className={style.copyright}>{footerData.copyright}</p>
					<ul className={style.sosmed}>
						{footerData.sosmed.map((valS, idxS) => (
							<li className={style.sosmedItem} key={`s-${idxS}`}>
								<Link className={style.sosmedLink} href={valS.to}>
									<i className={`fi-${valS.icon}`}></i>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
