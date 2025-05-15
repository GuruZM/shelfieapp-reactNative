import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import { Colors } from "../../constants/colors";

const Register = () => {
  const handleSubmit = () => {
    console.log("wechipondoddddddoooo");
  };
  return (
    <View style={styles.container}>
      <Text>Register Wechipondo</Text>
      <Spacer />
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Register</Text>
      </Pressable>
      <Spacer />
      <Link href={"/login"}>Login Instead</Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
