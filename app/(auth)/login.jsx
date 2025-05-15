import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import { Colors } from "../../constants/colors";
const Login = () => {
  const handleSubmit = () => {
    console.log("wechipondoddddddoooo");
  };
  return (
    <View style={styles.container}>
      <Text>Login Wechipondo</Text>
      <Spacer />
      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
      </Pressable>
      <Spacer />
      <Link href={"/register"}>Register Instead</Link>
    </View>
  );
};

export default Login;

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
