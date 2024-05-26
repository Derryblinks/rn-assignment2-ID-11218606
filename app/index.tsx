import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87CEEB", // Change the background color to a light blue
      }}
    >
      <Text style={{fontSize:24, fontWeight:"bold"}}>My name is <Text style={{fontWeight:"bold"}}>Derrick Boateng</Text> </Text>
    </View>
  );
}
