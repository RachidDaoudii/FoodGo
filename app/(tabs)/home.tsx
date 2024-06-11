import {  View, Text,Image, StyleSheet, Platform,TextInput,Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import FoodItem from '@/components/food/foodItem';
export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  return (

      <View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.logoFoodGo}>Foodgo</Text>
            <Text style={styles.description}>Order your favourite food!</Text>
          </View>
          <View>
            <Image source={require("@/assets/images/user.png")}/>
          </View>
        </View>
        <View>
        <FoodItem/>
        </View>
        {/* <View>
          <View>
            <TextInput placeholder="User Nickname"/>
          </View>
          <Pressable onPress={()=>console.log(123)}
          >
            <Ionicons style={styles.btn} name="filter" size={24} color="black" />
          </Pressable>
        </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width:"100%",
    padding:15,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  logoFoodGo:{
    color:Colors.dark,
    fontSize:30,
    fontFamily: 'Lobster_400Regular',
  },
  description:{
    color:Colors.gray.clr,
    fontSize:18,
  },
  btn:{
    backgroundColor:Colors.red.clr,
    color:Colors.white.clr
  }
});
