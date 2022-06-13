import React, { useEffect, useState } from "react";

export default function Recipe() {
    const [recipe, setRecipe] = useState({});
    let ingredients = [];

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((response) => {
                setRecipe(response.meals[0]);
            });
    }, []);

    for (let i = 1; i < 20; i++) {
        let comboString =
            recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`];
        ingredients.push(comboString);
    }

    return (
        <div className="recipeContainer">
            <img src={recipe.strMealThumb}></img>
            <h1>{recipe.strMeal}</h1>
            <h2>Type: {recipe.strArea}</h2>
            <h3> {recipe.strCategory} </h3>
            <p> {recipe.strInstructions} </p>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}
