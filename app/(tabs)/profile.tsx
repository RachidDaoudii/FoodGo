import {  View, Text,Image, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from '@/constants/Colors';
export default function ProfileScreen() {

  return (
      <View style={styles.titleContainer}>
      <Text>Profile</Text>
      </View>
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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  logoFoodGo:{
    color:Colors.white.clr,
    fontSize:30,
    fontWeight: "bold",
  },
});
