import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calendar from "./Components/Calendar";

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
