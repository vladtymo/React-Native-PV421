import { storage } from "@/services/storage";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Storage() {
  const [color, setColor] = React.useState("");

  useEffect(() => {
    loadColor();
  }, []);

  const loadColor = async () => {
    let storedColor = await storage.load<string>("favoriteColor");
    setColor(storedColor || "");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Async Storage</Text>
      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
      <TextInput
        placeholder="Enter color:"
        style={styles.input}
        value={color}
        onChangeText={setColor}
      />
      <Button
        title="Save"
        onPress={async () => {
          await storage.save("favoriteColor", color);
        }}
      />
      {/* <Button
        title="Load"
        onPress={async () => {
          let storedColor = await storage.load<string>("favoriteColor");
          setColor(storedColor || "");
        }}
      /> */}

      <Text>My favorite color is</Text>
      <Text style={styles.colorText}>{color || "unknown"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  colorText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#999",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  link: {
    marginTop: 10,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
