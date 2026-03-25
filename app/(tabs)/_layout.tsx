import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { useAppSelector } from "../hooks";
import { selectCount } from "../slices/menuSlice";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const count = useAppSelector(selectCount);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "darkcyan",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarBadge: count,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="bell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="animations"
        options={{
          title: "Animations",
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <Tabs.Screen
        name="db"
        options={{
          title: "DB",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="storage" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="gestures"
        options={{
          title: "Gestures",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="gesture" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
