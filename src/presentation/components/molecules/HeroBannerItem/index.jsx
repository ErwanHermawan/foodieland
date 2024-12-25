// -- cores
import { useState } from "react";
import Image from "next/image";

// atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

const HeroBannerItem = (props) => {
	const {
		subtitle,
		title,
		description,
		info,
		author,
		bagde,
		button,
		image,
		iframe,
	} = props;
	const [openModal, setOpenModal] = useState(false);
	const [iframeData, setIframeData] = useState("");

	const handleModalOpen = (iframeData) => {
		setIframeData(iframeData);
		setOpenModal(true);
		document.querySelector("body")?.classList.add("rm-scroll");
	};

	const handleModalClose = () => {
		setOpenModal(false);
		document.querySelector("body")?.classList.remove("rm-scroll");
		setTimeout(() => {
			setIframeData("");
		}, 300);
	};

	return (
		<>
			{/* banner item */}
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
						<Button variant="black" onClick={() => handleModalOpen(iframe)}>
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

			{/* modal */}
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
						src={`https://www.youtube.com/embed/IUOhSacJTJc?si=${iframeData}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default HeroBannerItem;
