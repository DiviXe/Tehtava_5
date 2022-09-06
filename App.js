import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// nämä pitää asentaa ennenkuin ohjelma toimii jos käy niin, että ohjelma ei toimi
// jostain syystä keyboard resetoi joka inputin jälkeen, mistä tämä voisi johtua?
const Stack = createNativeStackNavigator();

export default function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState();
  const [result, setResult] = useState([]);
  const add = () => {
    const sum = +value1 + +value2;
    setResult([
      ...result,
      { key: value1 + " + " + value2 + " = " + sum, id: 1 },
    ]);
    setTotal(sum);
    setValue1("");
    setValue2("");
  };
  const subtract = () => {
    const sum = +value1 - +value2;
    setResult([
      ...result,
      { key: value1 + " - " + value2 + " = " + sum, id: 2 },
    ]);
    setTotal(sum);
    setValue1("");
    setValue2("");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function Calculator({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Result: {total} </Text>
        <View style={styles.Text}>
          <TextInput
            value={value1}
            onChangeText={(text) => setValue1(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.Text}>
          <TextInput
            value={value2}
            onChangeText={(text) => setValue2(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.ButtonView}>
          <TouchableOpacity style={styles.Button} onPress={add}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={subtract}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calcHistoryButton}
            onPress={() => navigation.navigate("History")}
          >
            <Text>History</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function History() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text>History:</Text>
          <FlatList
            data={result}
            renderItem={({ item, index }) => (
              <Text key={index}>{item.key}</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    borderWidth: 2,
    borderColor: "gray",
    width: "50%",
    margin: 5,
  },
  ButtonView: {
    marginTop: 4,
    flexDirection: "row",
  },

  Button: {
    height: 40,
    width: 40,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "gray",
    borderWidth: 1,
  },
  list: {
    width: "40%",
    alignItems: "center",
  },
  calcHistoryButton: {
    height: 40,
    width: 70,
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    backgroundColor: "gray",
    borderWidth: 1,
  },
});
