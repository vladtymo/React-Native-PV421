import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";

type ProductItemProps = {
  product: Product;
  onDelete: (id: number) => void;
};

export default function ProductItem({ product, onDelete }: ProductItemProps) {
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
        <Pressable
          style={styles.deleteButton}
          onPress={() => onDelete(product.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
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
  deleteButton: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#dc2626",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
