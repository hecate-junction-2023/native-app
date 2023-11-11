import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const JenniferWalkingIcon = () => {
  return (
    <Image
      style={styles.jenniferWalkingIcon}
      contentFit="cover"
      source={require("../assets/jennifer-walking.png")}
    />
  );
};

const styles = StyleSheet.create({
  jenniferWalkingIcon: {
    position: "absolute",
    top: 195,
    left: 0,
    width: 527,
    height: 527,
    overflow: "hidden",
  },
});

export default JenniferWalkingIcon;
