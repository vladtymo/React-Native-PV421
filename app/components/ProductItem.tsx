import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.meta}>{product.category}</Text>
        <Text style={styles.meta}>
          ⭐ {product.rating.rate} ({product.rating.count})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
});
