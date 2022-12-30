import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Phone Number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          placeholderTextColor="#444"
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          textContentType="password"
          autoFocus={false}
          secureTextEntry={true}
          placeholderTextColor="#444"
        />
      </View>
      <Button title="Log in" />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 5,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
  },
});

export default LoginForm;
