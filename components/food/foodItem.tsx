import { Colors } from "@/constants/Colors";
import { View , ScrollView , FlatList ,Text ,StyleSheet ,TouchableOpacity ,Image } from "react-native";



export default function FoodItem() {
    const data = [1,2,3,45,6,89,7,5,1,5,8,45 ,1,2,3,45,6,89,7,5,1,5,8,45,1,2,3,45,6,89,7,5,1,5,8,45,1,2,3,45,6,89,7,5,1,5,8,45]
    return (
        <ScrollView style={{
            marginTop: 10,
            padding: 10,
          }}
          >
            <View style={styles.titleContainer}>
            {data && data.map((v,n)=>{
                return (
                    <TouchableOpacity key={n} onPress={() => {
                        console.log("item", v);
                    }} 
                    style={{
                        width:"47%",
                        borderWidth: 0.5,
                        borderColor: Colors.red.clr,
                        padding:15,
                        borderRadius: 20,
                        marginTop: 10,
                        alignItems:"center"
                    }}
                    >
                        <View>
                        <Image
                        style={{
                            
                        }}
                        source={require("@/assets/images/image 1.png")}
                        />
                        <Text >Food {v}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
            </View>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width:"100%",
        height:"100%",
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },

})