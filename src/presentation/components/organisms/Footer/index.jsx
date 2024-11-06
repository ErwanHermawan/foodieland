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
				<div className={style.about}>
					<Link href={footerData.logo.to}>
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
		</footer>
	);
};

export default Footer;
