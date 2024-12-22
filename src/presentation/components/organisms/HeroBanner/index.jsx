// -- cores
import Image from "next/image";

// atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

// -- data
import bannerData from "./bannerData";

const HeroBanner = (props) => {
	return (
		<section className={style.banner}>
			<div className="container">
				{bannerData.map((val, idx) => (
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
								<Button variant="primary" href="">
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
			</div>
		</section>
	);
};

export default HeroBanner;
