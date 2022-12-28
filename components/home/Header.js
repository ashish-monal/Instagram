import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/insta.png")} />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome
            name="plus-square-o"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="facebook-messenger"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  conatiner: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
  },
});
export default Header;
