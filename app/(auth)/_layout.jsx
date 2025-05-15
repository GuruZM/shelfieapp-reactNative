import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../constants/colors";
import { Stack } from "expo-router";
const _layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: theme.white,
        }}
      ></Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
