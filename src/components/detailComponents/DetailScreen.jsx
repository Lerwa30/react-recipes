import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Details.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe);

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <div
        className={classes.pic}
        style={{
          backgroundSize: "cover",
          background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${recipe.image_url})`,
        }}
      >
        <div className={classes.container}>
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.ingredients}>
          <h2>Recipe:</h2><br></br>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br></br>
          <h2>Ingredients:</h2><br></br>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={classes.instructions}>
          <h2>Instructions:</h2><br></br>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
