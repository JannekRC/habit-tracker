import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function Calculator({ navigation }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");
  const [main, setMain] = useState([]);

  const plusButtonPressed = () => {
    const sum = parseFloat(text1) + parseFloat(text2);
    setResult(`Result: ${sum}`);
    setMain([`${text1} + ${text2} = ${sum}`, ...main]);
    setText1("");
    setText2("");
  };

  const minusButtonPressed = () => {
    const sum = parseFloat(text1) - parseFloat(text2);
    setResult(`Result: ${sum}`);
    setMain([`${text1} - ${text2} = ${sum}`, ...main]);
    setText1("");
    setText2("");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}> {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        value={text1}
        onChangeText={(text1) => setText1(text1)}
        keyboardType="numeric"
      />
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        value={text2}
        onChangeText={(text2) => setText2(text2)}
        keyboardType="numeric"
      />
      <View style={styles.buttons}>
        <View style={{ marginHorizontal: 10 }}>
          <Button onPress={plusButtonPressed} title="+" />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Button onPress={minusButtonPressed} title="-" />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            onPress={() => navigation.navigate("Main", { main })}
            title="Main"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 110,
  },
  list: {
    flex: 0.5,
    marginTop: 20,
    alignItems: "center",
  },
});
