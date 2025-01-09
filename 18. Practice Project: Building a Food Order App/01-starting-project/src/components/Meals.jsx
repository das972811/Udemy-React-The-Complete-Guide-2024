// import { useEffect, useState } from "react";

import useHttp from "../hooks/useHttp";

import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');
    
    //         if (!response.ok) {
    
    //         }
    
    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }

    //     fetchMeals()
    // }, []);

    if (isLoading) {
        return <p>Fetching Data...</p>
    }

    return (
        <ul id="meals">
            {loadedMeals.map(meal => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    );
}