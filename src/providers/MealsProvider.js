// MealsProvider.js File

import React from "react";

// initialization
const MealsContext =  React.createContext();

// Array
const todaysMeals = ["Baked Beans","Baked Sweet Potatoes","Baked Potatoes"]

//Function
const MealsProvider = ({children}) => {

    // Hooks
    const [meals, setMealsList] = React.useState(todaysMeals);
        return(
            <MealsContext.Provider value={{meals}} >
                {children}
            </MealsContext.Provider>
        )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider