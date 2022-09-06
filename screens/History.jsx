import { View, Text, FlatList, StyleSheet } from "react-native";

export function History({ route }) {
  const { calculations } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text>History:</Text>
        <FlatList
          data={calculations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text key={item.id}>{item.calculation}</Text>
          )}
        />
      </View>
    </View>
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
    marginTop: 20,
    justifyContent: "center",
  },
});