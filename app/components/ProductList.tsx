import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import ProductItem from "./ProductItem";

const api = "https://fakestoreapi.com/products";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch(api)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => Alert.alert("Error", err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        initialNumToRender={6}
        keyExtractor={(i, ind) => i.id?.toString() ?? ind}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
});
