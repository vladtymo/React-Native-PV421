import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import ProductForm from "./ProductForm";
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

  const handleCreateProduct = (product: Product) => {
    let newId = products.length + 1;
    let newItem = {
      ...product,
      price: Number(product.price),
      rating: {
        rate: 0,
        count: 0,
      },
      id: newId,
    };
    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  return (
    <View style={styles.container}>
      <ProductForm onCreate={handleCreateProduct} />
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} onDelete={handleDeleteProduct} />
        )}
        initialNumToRender={6}
        keyExtractor={(i, ind) => i.id?.toString() ?? ind.toString()}
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
