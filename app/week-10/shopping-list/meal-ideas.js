"use client";

import { useState, useEffect } from 'react';

// API fetching function for meal ideas based on the ingredient
const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

// API fetching function for meal details, including ingredients
const fetchMealDetails = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);  // Store the meal ideas
  const [selectedMeal, setSelectedMeal] = useState(null);  // Store the selected meal and its details
  const [ingredients, setIngredients] = useState([]);  // Store the ingredients of the selected meal

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
    // Reset selected meal and ingredients if no meal ideas are found
    if (mealIdeas.length === 0) {
      setSelectedMeal(null);
      setIngredients([]);
    }
  };

  // Function to load meal details, including ingredients
  const loadMealDetails = async (idMeal) => {
    const mealDetails = await fetchMealDetails(idMeal);
    if (mealDetails) {
      setSelectedMeal(mealDetails);
      const ingredientList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient) {
          ingredientList.push(`${ingredient} - ${measure}`);
        }
      }
      setIngredients(ingredientList);  // Set ingredients
    }
  };

  // Effect to load meal ideas whenever the ingredient changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Render the component
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Meal Ideas for {ingredient}</h2>
      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className={`text-gray-800 cursor-pointer hover:text-blue-500 ${selectedMeal && selectedMeal.idMeal === meal.idMeal ? 'font-bold' : ''}`}
              onClick={() => loadMealDetails(meal.idMeal)}  // When clicked, load details
            >
              <p>{meal.strMeal}</p>
              {selectedMeal && selectedMeal.idMeal === meal.idMeal && ingredients.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-gray-600 bg-blue-50 p-2 rounded-md">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No meal ideas available for this ingredient.</p>
      )}
    </div>
  );
};

export default MealIdeas;
