import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <Link href="/">Home</Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
