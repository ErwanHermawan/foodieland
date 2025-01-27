// -- data
import recipeData from "./recipeData";

// -- style
import style from "./style.module.scss";

// -- molecules
import RecipeItem from "@molecules/RecipeItem";
import Ads from "@molecules/Ads";

const SectionFeaturedRecipe = (props) => {
	return (
		<div className={style.section}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{recipeData.title}</h2>
					<p className={style.description}>{recipeData.description}</p>
				</div>
				<div className={style.body}>
					{recipeData.item.map((val, idx) => {
						// Check if the Ads component will be added
						const isAdsAdded = (idx + 1) % 5 === 0;

						return (
							<div
								key={`fr-${idx}`}
								className={`${style.wrapper} ${
									isAdsAdded ? style.wrapperWithAds : ""
								}`}
							>
								<RecipeItem {...val} />
								{isAdsAdded && <Ads />}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SectionFeaturedRecipe;
