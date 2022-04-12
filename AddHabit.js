import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header, Button, Input, CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddHabit({ navigation }) {
  const [habits, setHabits] = useState({
    yoga: "false",
    mediation: "false",
    jogging: "false",
  })
  
  const selected = () => {
    if (yoga === true){
      
    }
  };
  ;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>New Habit</Text>
      </View>
      <Input placeholder="Your new habit"></Input>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>or choose:</Text>
      <CheckBox
        title="Yoga"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <Button
        title={"Continue!"}
        onPress={() => navigation.navigate("Calculator")}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
