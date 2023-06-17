import React from "react";
import axios from "axios";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Details.module.css';

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe)

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data);
    })
  }, [])

  return (
    <>
      <div
        className={classes.pic}
        style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${recipe.image_url})`
        }}
      >
      <div className={classes.container}>
      <h1>{recipe.recipe_name}</h1>
      </div>
      <section>
        {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
      </section>
      </div>
    </>
  );
};

export default DetailScreen;
