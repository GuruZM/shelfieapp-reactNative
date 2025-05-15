import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Dashboardlayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.primary,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.white,
        tabBarInactiveTintColor: theme.white,
      }}
    >
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              color={focused ? "white" : "black"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "white" : "black"}
              name={focused ? "create" : "create-outline"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "white" : "black"}
              name={focused ? "person" : "person-outline"}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Dashboardlayout;

const styles = StyleSheet.create({});
