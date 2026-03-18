import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout() {
  return (
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
  );
}
