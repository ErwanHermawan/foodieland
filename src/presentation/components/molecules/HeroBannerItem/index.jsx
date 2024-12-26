// -- cores
import { useEffect } from "react";
import Image from "next/image";

// atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

// -- states
import useStateHeroBanner from "@states/heroBanner";

const HeroBannerItem = (props) => {
	const { subtitle, title, description, info, author, bagde, button, image } =
		props;

	// Access global state
	const { setModal, setIframe } = useStateHeroBanner();

	// Modal open handler
	const handleModalOpen = (iframe) => {
		setIframe(iframe);
		setModal(true);
	};

	return (
		<div className={style.item}>
			<div className={style.image}>
				<Image
					className={style.imageEl}
					src={image}
					alt={title}
					width={640}
					height={640}
				/>
			</div>
			<div className={style.text}>
				<div className={style.top}>
					<div className={style.subtitle}>
						<Image
							className={style.subtitleIcon}
							src={subtitle.icon}
							alt={subtitle.text}
						/>
						<p className={style.subtitleText}>{subtitle.text}</p>
					</div>
					<h1 className={style.title}>{title}</h1>
					<p className={style.description}>{description}</p>
					<div className={style.info}>
						{info.map((valI, idxI) => (
							<div className={style.infoItem} key={`i-${idxI}`}>
								<i className={`fi ${valI.icon} ${style.infoIcon}`}></i>
								<span className={style.infoText}>{valI.text}</span>
							</div>
						))}
					</div>
				</div>
				<div className={style.bottom}>
					<div className={style.author}>
						<Image
							className={style.authorImage}
							src={author.image}
							alt={author.name}
						/>
						<div className={style.authorText}>
							<p className={style.authorName}>{author.name}</p>
							<p className={style.authorDate}>{author.publishDate}</p>
						</div>
					</div>
					<Button
						variant="black"
						onClick={() => handleModalOpen(button.iframe)}
					>
						<i className={`fi ${button.icon}`}></i>
						<span>{button.text}</span>
					</Button>
				</div>
				<div className={style.badge}>
					<Image
						className={style.badgeImage}
						src={bagde.image}
						alt={bagde.icon}
					/>
					<Image
						className={style.badgeIcon}
						src={bagde.icon}
						alt={bagde.icon}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
