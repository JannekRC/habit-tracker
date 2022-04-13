import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { Header, Button, Input, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Habit Tracker</Text>
      </View>
      <Button
        title={"Start"}
        onPress={() => navigation.navigate("Intro")}
      ></Button>
    </SafeAreaView>
  );
}

export function Intro({ navigation }) {
  const [name, setName] = useState ("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>What do you want to be called?</Text>
      </View>
      <Input placeholder="Name or nickname. Nobody's judging!" onChangeText={value => setName(value)}></Input>
      <Text>{name}</Text>
      <Button
        title={"Continue"}
        onPress={() => navigation.navigate("AddHabit")}
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
