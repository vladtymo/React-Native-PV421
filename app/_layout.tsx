import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store";

const DATABASE_NAME = "colors.db";

// const expoDb = openDatabaseSync(DATABASE_NAME);
// const db = drizzle(expoDb);
// const { success, error } = useMigrations(db, migrations);

export default function RootLayout() {
  return (
    // <Suspense fallback={<ActivityIndicator size="large" />}>
    // <SQLiteProvider databaseName={DATABASE_NAME} onInit={migrateDbIfNeeded}>
    <Provider store={store}>
      <GestureHandlerRootView>
        <Stack>
          {/* <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="details" options={{ title: "Details" }} />
            <Stack.Screen name="about" options={{ title: "About" }} /> */}
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Home", headerShown: false }}
          ></Stack.Screen>
        </Stack>
      </GestureHandlerRootView>
    </Provider>
    // {/* </SQLiteProvider> */}
    // </Suspense>
  );
}
