import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.postHeader}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={{ uri: post.profile_picture }}
        style={styles.postHeaderImage}
      />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <View>
      <Text style={{ color: "white", fontWeight: "900", marginRight: 10 }}>
        ...
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={styles.postImageContainer}>
    <Image source={{ uri: post.imageUrl }} style={styles.image} />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIcon}>
      <TouchableOpacity>
        <Entypo
          name="heart-outlined"
          size={30}
          color="white"
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons
          name="comment"
          size={30}
          color="white"
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="send"
          size={30}
          color="white"
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Ionicons
          name="bookmark-outline"
          size={30}
          color="white"
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user} </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "gray" }}>
      View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
      {post.comments.length > 1 ? "comments" : "comment"}
    </Text>
  </View>
);

// Zero Comment donot render any components
// 1 comment render component without all and singular comment
// 2 comment render component with all and plural comments

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  postHeaderImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  postImageContainer: {
    width: "100%",
    height: 450,
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIcon: {
    flexDirection: "row",
    width: "28%",
    justifyContent: "space-between",
  },
});
export default Post;
