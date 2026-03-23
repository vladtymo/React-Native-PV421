import { addItem, deleteItem, getItems } from "@/services/db";
import React, { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Color } from "../models/Color";

const Database = () => {
  const [items, setItems] = useState<Color[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    setItems((await getItems()) ?? []);
  };

  const addItemHandle = async () => {
    if (!text.trim()) return;

    const createdItem = await addItem(text);
    setItems([...items, createdItem]);
    setText("");
  };

  const removeItemHandle = async (id: number) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Database Screen</Text>

      <Text>Name: </Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Add New Color" onPress={addItemHandle} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              {item.id} - {item.value}
            </Text>
            <Button
              title="Remove"
              onPress={() => removeItemHandle(item.id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Database;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    height: 40,
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "black",
    minWidth: 300,
  },
  label: {
    fontSize: 12,
    color: "black",
    marginBottom: 4,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    minWidth: 300,
  },
  itemText: {
    flex: 1,
    color: "black",
  },
});
