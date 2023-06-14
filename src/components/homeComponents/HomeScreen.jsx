import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import AdBanner from './AdBanner'
import RecipeCard from '../../elements/RecipeCard';

const HomeScreen = () => {  

  const getRecipes = () => {
    axios
    .get('https://recipes.devmountain.com/recipes')
    .then((res) => {
      // setRecipes(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    getRecipes();
  }, [])

  return (
    <div>
      <AdBanner />
      <input></input>
      <RecipeCard />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen