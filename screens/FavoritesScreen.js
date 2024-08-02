import { useContext } from "react"
import {  View, Text,StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context"
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
function FavoriteScreen (){
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) => 
        favoriteMealsCtx.ids.includes(meal.id)
)
if (favoriteMeals.laength === 0 ){
    return <View style= {styles.rootContainer}>
        <Text style= {styles.text}>
            you have no Favorite meals yet......!!!!
        </Text>
    </View>
}
return  <MealsList items= {favoriteMeals}/>
}
export default FavoriteScreen 
const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})