import { Link } from "expo-router";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Details Screen</Text>
        <Link href="/about" style={styles.link}>
          Go to About
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
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
