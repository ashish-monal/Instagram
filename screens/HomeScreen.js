import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTab, { bottomTabIcons } from "../components/home/BottomTab";
import { db } from "../firebase";
import { doc } from "firebase/firestore/lite";

const HomeScreen = ({ navigation }) => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {post.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Platform.OS == "android" ? 35 : 0,
  },
});

export default HomeScreen;
