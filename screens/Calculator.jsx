import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";

const Calculator = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();
  const [calculationHistory, setCalculationHistory] = useState([]);

  const add = () => {
    const calculatedResult = +value1 + +value2;
    setResult(calculatedResult);

    const calculation = value1 + " + " + value2 + " = " + calculatedResult;
    setCalculationHistory([
      ...calculationHistory,
      { calculation: calculation, id: 1 },
    ]);
    setValue1("");
    setValue2("");
  };

  const subtract = () => {
    const calculatedResult = +value1 - +value2;
    setResult(calculatedResult);

    const calculation = value1 + " - " + value2 + " = " + calculatedResult;
    setCalculationHistory([
      ...calculationHistory,
      { calculation: calculation, id: 2 },
    ]);
    setValue1("");
    setValue2("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Text>Result: {result} </Text>
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
      <Button methods={{ add, subtract }} calculations={calculationHistory} />
    </KeyboardAvoidingView>
  );
};

export default Calculator;

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
});