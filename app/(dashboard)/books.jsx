import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Books = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Books</Text>
    </SafeAreaView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    // justifyContent: "center",
  },
});
