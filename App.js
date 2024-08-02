import { StatusBar } from "expo-status-bar";
import { StyleSheet,  Button} from "react-native";
import CategoryScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoritesScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {Ionicons} from '@expo/vector-icons'
import { color } from "react-native-reanimated";
import FavoriteContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
 const Drawer =createDrawerNavigator();

function DrawerNavigator() {
  return( 
  <Drawer.Navigator
   screenOptions={{
    headerStyle: {backgroundColor: '#351401'},
   headerTintColor: 'white',
   sceneContainerStyle: {backgroundColor: '#3f2f25'}, 
   drawerContentStyle: {backgroundColor: '#351401'},
   drawerInactiveTintColor: 'white',
   drawerActiveTintColor:  '#351401',
   drawerActiveBackgroundColor:'#e4bba1'

  }}>
    <Drawer.Screen name="Categories" component={CategoryScreen} options={{
      title: 'All Categories',
      drawerIcon: ({Color, size}) =>(
      <Ionicons name="list" color={color} size={size}/>
    )
    }}/>
    <Drawer.Screen
    name="Favorites" 
    component ={FavoriteScreen}
    options={{
      drawerIcon: ({color, size}) =>(
      <Ionicons name="star" color={color} size={size}/>
    )

    }}/>
  </Drawer.Navigator>
  );

}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
       screenOptions= {{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}, 
        }}
        
         initialRouteName="MealsCategories"
         >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ 
        
              headerShown: false
             }}
          /> 
          <Stack.Screen 
          name="MealsOverView" 
          component={MealsOverviewScreen} 
            />
          <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}
          options={{
            title: 'About the Meal',
          }}
        />
        </Stack.Navigator> 
      </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});