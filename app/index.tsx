import {  View, Text,Image, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from '@/constants/Colors';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Link, router } from "expo-router";
export default function HomeScreen() {

  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  return (
    <LinearGradient
    colors={[Colors.rose.clr,Colors.red.clr]}
    style={{ flex: 1 }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.logoFoodGo}>Foodgo</Text>
        <View style={styles.imageContainer}>
        <Image
         style={styles.image1}
          source={require("@/assets/images/image 2.png")}
          />
          <Image
          style={styles.image2}
          source={require("@/assets/images/image 1.png")}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  logoFoodGo:{
    color:Colors.white.clr,
    fontSize:40,
    fontWeight: "bold",
    fontFamily: 'Lobster_400Regular',
  },
  imageContainer:{
    position:"absolute"
  },
  image1:{
    position:"relative",
    top:360,
    right:100
  },
  image2:{
    position:"relative",
    top:185,
    left:30
  }
});
