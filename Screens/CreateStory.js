/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CreateStory = (props) => {
  return (
    <View style={styles.container}>
      <Text>CreateStory Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CreateStory;
