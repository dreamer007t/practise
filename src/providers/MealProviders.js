import React from "react";

const MealContext = React.createContext();

const todaysMeals = ["Baked Beans","Baked Sweet Potatoes","Baked Potatoes"]

const MealsProviders = ({children}) => {

    const[meals,setMealsList] = React.useState(todaysMeals)

    return(
        <MealContext.Provider value={{ meals  }} >
            {children}
        </MealContext.Provider>
    )

}

export const useMealsListContext = () => {React.useContext(MealContext)};

export default MealsProviders;