import { View, Text, Image, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import { Button } from "react-native";
import validUrl from "valid-url";
import { db, firebase } from "../../firebase";
import { doc } from "firebase/firestore/lite";

const PlaceholderImage =
  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";
const uploadPostScheme = yup.object().shape({
  imageUrl: yup.string().url().required("A Url is Required"),
  caption: yup.string().max(2200, "Caption has reached the character Limit!"),
});

const FormPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceholderImage);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };
  useEffect(() => {
    getUserName();
  }, []);

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageUrl, values.caption);
      }}
      validationSchema={uploadPostScheme}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PlaceholderImage,
              }}
              style={{ width: 100, height: 100 }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ fontSize: 20 }}
                placeholder="Write a caption..."
                multiline={true}
                placeholderTextColor="gray"
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormPostUploader;
