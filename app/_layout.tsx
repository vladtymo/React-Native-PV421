import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { Provider } from "react-redux";
import { migrateDbIfNeeded } from "../services/db";
import { store } from "./store";

const DATABASE_NAME = "colors.db";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={migrateDbIfNeeded}>
      <Provider store={store}>
        <Stack>
          {/* <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="details" options={{ title: "Details" }} />
            <Stack.Screen name="about" options={{ title: "About" }} /> */}
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Home", headerShown: false }}
          ></Stack.Screen>
        </Stack>
      </Provider>
    </SQLiteProvider>
  );
}
