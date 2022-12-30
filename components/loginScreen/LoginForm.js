import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import firebase from "../../firebase";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { async } from "@firebase/util";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have atleast 6 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Login Sucessful", email, password);
    } catch (error) {
      Alert.alert(
        "Instagram By Ashish Ranjan",
        error.message + "\n\n... what do you like to do next ?",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
            style: "cancle",
          },
          {
            text: "Sign Up",
            onPress: () => navigation.push("SignupScreen"),
          },
        ]
      );
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Phone Number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                placeholderTextColor="#444"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoFocus={false}
                secureTextEntry={true}
                placeholderTextColor="#444"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5", fontWeight: "700" }}>
                Forgot Password?
              </Text>
            </View>
            <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Don't have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
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
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 5,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupText: {
    color: "#6BB0F5",
    fontWeight: "700",
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
