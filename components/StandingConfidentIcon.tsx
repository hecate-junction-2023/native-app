import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const StandingConfidentIcon = () => {
  return (
    <Image
      style={styles.standingConfidentIcon}
      contentFit="cover"
      source={require("../assets/standing-confident.png")}
    />
  );
};

const styles = StyleSheet.create({
  standingConfidentIcon: {
    position: "absolute",
    height: "32.58%",
    marginLeft: -136,
    top: "21.8%",
    bottom: "45.62%",
    left: "50%",
    maxHeight: "100%",
    width: 273,
    overflow: "hidden",
  },
});

export default StandingConfidentIcon;
