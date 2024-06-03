import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "db715cdb9a4141d687a53a6151792778";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕦{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦servers{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥦 vegetarian" : "🍗 Non-vegatarian"}{" "}
            </strong>
          </span>
        </div>
        <span>
          <strong>💸{food.pricePerServing / 100}per serving</strong>
        </span>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeIns}>
          <ol>
            {" "}
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
