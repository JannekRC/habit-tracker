import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { Button } from "react-native-elements";

export default function ListHabits({ route, navigation }) {
  const [items, setItems] = useState([]);

  //firebase
  const colRef = route.params.colRef;

  //update flatlist
 const updateFlatlist = () => {
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
  }

  useEffect(() => {
    updateFlatlist()
  }, []);
  //

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "95%",
          backgroundColor: "#CED0CE",
          marginBottom: 20,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={listSeparator}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.habit}
            </Text>
            <Text style={{ fontSize: 18 }}>
              {item.day} at {item.time.substring(0, item.time.length - 3)}
            </Text>
          </View>
        )}
      />
      <View style={{ marginBottom: 20 }}>
      <Button
          title={"Refresh"}
          onPress={() => updateFlatlist()}
        ></Button>
        <Button
          title={"Add new habit"}
          onPress={() => navigation.navigate("AddHabit", { colRef })}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
