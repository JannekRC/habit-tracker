import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Header, Button, Input, CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddHabit({ navigation, route }) {
  // // initialize firebase
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBBSuf8iiACnQVyHGVm-OOfYksYIVdo7Sc",
  //   authDomain: "habittracker-9fc6a.firebaseapp.com",
  //   databaseURL:
  //     "https://habittracker-9fc6a-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "habittracker-9fc6a",
  //   storageBucket: "habittracker-9fc6a.appspot.com",
  //   messagingSenderId: "346712267295",
  //   appId: "1:346712267295:web:2bab2cfcea760622ee132a",
  // };

  // initializeApp(firebaseConfig);
  // //
  const colRef = route.params.colRef;

  const [yoga, setYoga] = useState(false);
  const [mediation, setMediation] = useState(false);
  const [jogging, setJogging] = useState(false);
  const [text, setText] = useState(undefined);
  const [habit, setHabit] = useState("");

  //set habit from checkbox/radiobuttons (and navigate to next page)
  const setSelected = () => {
    let tempHabit = "";
    if (text != undefined) {
      tempHabit = text
      setHabit(tempHabit);
      navigation.navigate("SetReminders", { habit, colRef });
    } else {
      if (yoga === true) {
        tempHabit = "Yoga";
        setHabit(tempHabit);
        navigation.navigate("SetReminders", { habit, colRef });
      }
      if (mediation === true) {
        tempHabit = "Mediation";
        setHabit(tempHabit);
        navigation.navigate("SetReminders", { habit, colRef });
      }
      if (jogging === true) {
        tempHabit = "Jogging";
        setHabit(tempHabit);
        navigation.navigate("SetReminders", { habit, colRef });
      } else {
        Alert.alert("Please either write the name of a habit, or select one");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>New Habit</Text>
      </View>

      {/* INPUT FIELD */}
      <Input
        placeholder="Your new habit"
        onChangeText={(value) => setText(value)}
      ></Input>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>or choose:</Text>

      {/* CHECKBOXES */}

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

      {/* CONTINUE BUTTON */}
      <Button title={"Continue!"} onPress={() => setSelected()}></Button>
    </SafeAreaView>
  );
}

export function SetReminders({ route, navigation }) {
  //firebase

  const colRef = route.params.colRef;

  getDocs(colRef)
    .then((snapshot) => {
      let habits = [];
      snapshot.docs.forEach((doc) => {
        habits.push({ ...doc.data(), id: doc.id });
      });
      console.log(habits);
    })
    .catch((err) => {
      console.log(err.message);
    });

  //

  //date picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };
  //

  const [day, setDay] = useState("");

  const addHabit = () => {
    console.log(route.params.habit);
    addDoc(colRef, {
      habit: route.params.habit,
      day: day,
      time: date.toLocaleTimeString(),
    }).then(() => {
      navigation.navigate("ListHabits", { colRef });
    });
    console.log("we did it");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>When do you want to practice?</Text>

        <View>
          <Button onPress={() => showTimepicker} title="Show time picker!" />
        </View>
        <Text>At {date.toLocaleTimeString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        {/* CHOOSE DAYS */}
        <Text>on</Text>
        <View>
          <Button onPress={() => setDay("Monday")} title="M" />
          <Button onPress={() => setDay("Tuesday")} title="T" />
          <Button onPress={() => setDay("Wednesday")} title="W" />
          <Button onPress={() => setDay("Tuesday")} title="T" />
          <Button onPress={() => setDay("Friday")} title="F" />
          <Button onPress={() => setDay("Sunday")} title="S" />
        </View>
      </View>
      <Text></Text>
      <Button title={"Continue"} onPress={() => addHabit()}></Button>
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
