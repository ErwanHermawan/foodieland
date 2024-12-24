// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";

const Button = (props) => {
	const {
		variant = "primary",
		category,
		children,
		href,
		icon,
		...rest
	} = props;
	const iconCont = icon && <SystemIcon name={icon} />;

	let variantClass;
	switch (variant) {
		case "primary":
			variantClass = style.btnPrimary;
			break;
		case "accent":
			variantClass = `${style.btnAccent} ${icon ? style.btnAccentCustom : ""}`;
			break;
		case "black":
			variantClass = style.btnBlack;
			break;
		default:
			variantClass = "";
	}

	let categoryClass;
	switch (category) {
		case "outline":
			categoryClass = style.btnOutline;
			break;
		case "icon":
			categoryClass = style.btnIcon;
			break;
		case "rounded":
			categoryClass = style.btnRounded;
			break;
		default:
			categoryClass = "";
	}

	const variantStyle = [style.btn, variantClass, categoryClass]
		.filter(Boolean) // Remove undefined or empty values
		.join(" ");

	const Component = href ? Link : "button";

	return (
		<Component {...rest} className={variantStyle} href={href}>
			{children}
			{iconCont}
		</Component>
	);
};

export default Button;
