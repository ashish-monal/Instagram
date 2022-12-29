import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/512/home.png",
    inactive: "https://img.icons8.com/fluency-systems-regular/512/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/metro/512/search.png",
    inactive: "https://img.icons8.com/ios/512/search.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/2x/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/2x/instagram-reel.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-filled/512/shopping-mall.png",
    inactive: "https://img.icons8.com/ios/512/shopping-mall.png",
  },
  {
    name: "Profile",
    active:
      "https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-9/186508064_832828344249581_2118770412988818507_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=TiZlMKblyM8AX_1-3pe&_nc_ht=scontent-del1-2.xx&oh=00_AfCFXLu5pfkzXKeX1MF5Rn90HuxTEJ57wMB-k7gx3orVYg&oe=63D37ADE",
    inactive:
      "https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-9/186508064_832828344249581_2118770412988818507_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=TiZlMKblyM8AX_1-3pe&_nc_ht=scontent-del1-2.xx&oh=00_AfCFXLu5pfkzXKeX1MF5Rn90HuxTEJ57wMB-k7gx3orVYg&oe=63D37ADE",
  },
];

const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#ffffff",
  },
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#ff8501",
  }),
});

export default BottomTab;
