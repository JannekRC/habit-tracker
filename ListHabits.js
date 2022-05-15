import React, { useState, useEffect } from "react";
import { Text, View, Button, FlatList, StyleSheet, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, push, ref, onValue } from "firebase/database";

export default function ListHabits({ route, navigation }) {
  const [items, setItems] = useState([]);

  //firebase
  const db = getFirestore();

  const colRef = collection(db, "habits");

  //update flatlist
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let habits = [];
        snapshot.docs.forEach((doc) => {
          habits.push({ ...doc.data(), id: doc.id });
        });
        console.log(habits);
        setItems(Object.values(habits));
        console.log(items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //

  // //update flatlist
  // useEffect(() => {
  //   onValue(habits, (snapshot) => {
  //     const data = snapshot.val();
  //     setItems(Object.values(data));
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: "5%", marginLeft: "5%" }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={{ fontSize: 15 }}>
              {item.habit}, {item.day}, {item.time}
            </Text>
          </View>
        )}
        data={items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 100,
    marginLeft: 20,
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
