/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Feed = (props) => {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Feed;
