import React from "react";

export default function Recipe(props) {
    return (
        <div className="recipeContainer ">
            <h1>recipe will go here</h1>
            {props.ingredients.map((ingredient) => {
                <li>{ingredient}</li>;
            })}
        </div>
    );
}
