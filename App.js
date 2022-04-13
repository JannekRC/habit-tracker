import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./Calculator";
import Main from "./Main";
import AddHabit from "./AddHabit";
import { Intro } from "./Main";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
        <Stack.Screen name="AddHabit" component={AddHabit} options={{headerShown:false}}/>
        <Stack.Screen name="Calculator" component={Calculator} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
