import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import { Button } from "react-native";
import validUrl from "valid-url";
const PlaceholderImage =
  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";
const uploadPostScheme = yup.object().shape({
  imageUrl: yup.string().url().required("A Url is Required"),
  caption: yup.string().max(2200, "Caption has reached the character Limit!"),
});

const FormPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceholderImage);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("your post submitted sucessfully");
        navigation.goBack();
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
