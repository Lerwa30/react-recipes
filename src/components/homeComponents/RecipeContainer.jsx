import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";
import classes from "./Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
    <section className={classes.recipe_section}>
      <h2>Search a recipe!</h2>
      <span className={classes.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input className={classes.input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={classes.recipe_container}>
        {recipeDisplay}
      </div>
    </section>
  );
};

export default RecipeContainer;