import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DateForm1 = () => {
  return (
    <View style={styles.inner}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.text}>15.04.2023</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 48,
    width: 307,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral0,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
  },
  text: {
    top: 14,
    left: 18,
    fontSize: FontSize.inputM_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 21,
    position: "absolute",
  },
  vectorIcon: {
    height: "15.42%",
    width: "3.91%",
    top: "45.83%",
    right: "7.82%",
    bottom: "38.75%",
    left: "88.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  inner: {
    top: 200,
    left: 41,
    height: 48,
    width: 307,
    position: "absolute",
  },
});

export default DateForm1;
