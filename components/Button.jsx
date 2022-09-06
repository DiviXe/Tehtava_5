import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const Button = ({ methods: { add, subtract }, calculations }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.ButtonView}>
      <TouchableOpacity style={styles.Button} onPress={add}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={subtract}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.calcHistoryButton}
        onPress={() =>
          navigate("History", {
            calculations: calculations,
          })
        }
      >
        <Text>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Button;