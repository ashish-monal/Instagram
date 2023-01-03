import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={styles.storyConatiner}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ marginTop: 5 }}>
              {story.user.length > 11
                ? story.user.slice(0, 6).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storyConatiner: {
    alignItems: "center",
  },
});

export default Stories;
