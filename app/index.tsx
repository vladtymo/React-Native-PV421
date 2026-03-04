import React from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProductList from "./components/ProductList";

const App = () => {
  const [count, setCount] = React.useState(0);

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          setCount(count + 1);
        },
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      },
    ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.text}>Counter: {count}</Text>
        <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
        <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
        <Button
          title={"Web-Button Alert"}
          onPress={() => setCount(count + 1)}
        /> */}
        <ProductList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default App;
