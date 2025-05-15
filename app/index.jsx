import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logo from "../assets/splash-icon.png";
import { Link } from "expo-router";
import ThemedView from "../components/themedView";
import Spacer from "../components/spacer";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={logo} style={styles.img} /> */}
      <Text style={styles.title}> Whats Good Chairman</Text>
      <Spacer />
      <Link href={"/login"}>Login</Link>
      <Spacer />
      <Link href={"/register"}>Register</Link>

      <Spacer />
      <Link href={"/profile"}>Profile</Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
