// -- cores
import { useState } from "react";
import Image from "next/image";

// atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

const HeroBannerItem = (props) => {
	const { data } = props;
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
			{data.map((val, idx) => (
				<div className={style.item} key={`hb-${idx}`}>
					<div className={style.image}>
						<Image
							className={style.imageEl}
							src={val.image}
							alt={val.title}
							width={640}
							height={640}
						/>
					</div>
					<div className={style.text}>
						<div className={style.top}>
							<div className={style.subtitle}>
								<Image
									className={style.subtitleIcon}
									src={val.subtitle.icon}
									alt={val.subtitle.text}
								/>
								<p className={style.subtitleText}>{val.subtitle.text}</p>
							</div>
							<h1 className={style.title}>{val.title}</h1>
							<p className={style.description}>{val.description}</p>
							<div className={style.info}>
								{val.info.map((valI, idxI) => (
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
									src={val.author.image}
									alt={val.author.name}
								/>
								<div className={style.authorText}>
									<p className={style.authorName}>{val.author.name}</p>
									<p className={style.authorDate}>{val.author.publishDate}</p>
								</div>
							</div>
							<Button
								variant="black"
								onClick={() => handleModalOpen(val.iframe)}
							>
								<i className={`fi ${val.button.icon}`}></i>
								<span>{val.button.text}</span>
							</Button>
						</div>
						<div className={style.badge}>
							<Image
								className={style.badgeImage}
								src={val.bagde.image}
								alt={val.bagde.icon}
							/>
							<Image
								className={style.badgeIcon}
								src={val.bagde.icon}
								alt={val.bagde.icon}
							/>
						</div>
					</div>
				</div>
			))}

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
