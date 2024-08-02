import { View, Text, Pressable, StyleSheet, Image ,Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";
import React from "react";
function MealItem({ id,
  title, 
  imageUrl, 
  complexity,
   duration,
    affordability  }) {
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetailsScreen',{
          mealId: id // Use the props.id here
        });
      }
  return (
    <View style={styles.mealItem}>
      <Pressable 
      android_ripple={{color : '#ccc'}} 
       style={({ pressed }) => 
          (pressed ? styles.buttonPressed : null)}
          onPress={selectMealItemHandler}
          >
        <View style= {styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails 
        duration={duration} 
        affordability={affordability} 
        complexity={complexity}/>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 8, // Changed from 'margin' to 'marginBottom' for consistency
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
 
  buttonPressed: {
    opacity: 0.5,
  },
});

