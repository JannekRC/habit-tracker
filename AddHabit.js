import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header, Button, Input, CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddHabit({ navigation }) {
  const [yoga, setYoga] = useState("false")
  const [mediation, setMediation] = useState("false")
  const [jogging, setJogging] = useState("false")

  const [habit, setHabit] = useState("");
  
  const selected = () => {
    if (yoga === true){
      setHabit("Yoga");
    }
    if (mediation === true){
      setHabit("Mediation");
    }
    if (jogging === true){
      setHabit("Jogging");
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
        checked={yoga}
        onPress={() => setYoga(!yoga)}
      />
      <CheckBox
        title="Meditation"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={mediation}
        onPress={() => setMediation(!mediation)}
      />
      <CheckBox
        title="Jogging"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={jogging}
        onPress={() => setJogging(!jogging)}
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
