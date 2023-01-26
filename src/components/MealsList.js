import { useMealsListContext } from "../providers/MealProviders";

const MealsList = () => {

    const { meals } = useMealsListContext();

    return(
        <div>
            <h1>Meals List Using Context API</h1>
            <h2>{meals}</h2>
        </div>
    )
}


export default MealsList;