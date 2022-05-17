import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { Header, Button, Input, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export default function Main({ navigation }) {
  //firebase
  // initialize firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBBSuf8iiACnQVyHGVm-OOfYksYIVdo7Sc",
    authDomain: "habittracker-9fc6a.firebaseapp.com",
    databaseURL:
      "https://habittracker-9fc6a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "habittracker-9fc6a",
    storageBucket: "habittracker-9fc6a.appspot.com",
    messagingSenderId: "346712267295",
    appId: "1:346712267295:web:2bab2cfcea760622ee132a",
  };

  initializeApp(firebaseConfig);
  //

  const db = getFirestore();

  const colRef = collection(db, "habits");

  // getDocs(colRef)
  //   .then((snapshot) => {
  //     let habits = [];
  //     snapshot.docs.forEach((doc) => {
  //       habits.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(habits);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  // //

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Habit Tracker</Text>
      </View>
      <Button
        title={"Add new habit"}
        onPress={() => navigation.navigate("AddHabit", { colRef })}
      ></Button>
      <Button
        title={"Manage habits"}
        onPress={() => navigation.navigate("ListHabits", { colRef })}
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
