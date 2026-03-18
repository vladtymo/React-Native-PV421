import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { plus, reset, selectCount } from "../slices/menuSlice";

export default function About() {
  const dispatch = useDispatch();
  const count = useAppSelector(selectCount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        This React Native app is built with Expo Router and TypeScript.
      </Text>

      <Button title="Plus" onPress={() => dispatch(plus())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
      <Text style={styles.count}>Count: {count}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Project</Text>
        <Text style={styles.value}>Product Management Demo</Text>

        <Text style={styles.label}>Stack</Text>
        <Text style={styles.value}>React Native • Expo • TypeScript</Text>

        <Text style={styles.label}>Purpose</Text>
        <Text style={styles.value}>
          Practice navigation and state management.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
    lineHeight: 22,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  label: {
    fontSize: 13,
    textTransform: "uppercase",
    color: "#666",
    marginTop: 6,
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#111",
  },
  count: {
    fontSize: 16,
    color: "#111",
    marginTop: 10,
  },
});
