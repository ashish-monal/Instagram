import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SignUpForm from "../components/signupScreen/SignUpForm";

const Instagram_Logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png";

const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: Instagram_Logo, height: 100, width: 100 }} />
    </View>
    <SignUpForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignUpScreen;
