import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <Link href="/">Home</Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
