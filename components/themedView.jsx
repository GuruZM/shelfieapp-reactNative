import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  // console.log(theme);
  return <View style={[{ backgroundColor: theme.white }, style]} {...props} />;
};

export default ThemedView;

const styles = StyleSheet.create({});
