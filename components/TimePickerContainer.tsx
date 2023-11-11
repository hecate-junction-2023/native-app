import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type TimePickerContainerType = {
  timeValue?: string;

  /** Style props */
  propBorderStyle?: string;
  propBorderColor?: string;
  propBorderWidth?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimePickerContainer = ({
  timeValue,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
}: TimePickerContainerType) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderStyle", propBorderStyle),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
    };
  }, [propBorderStyle, propBorderColor, propBorderWidth]);

  return (
    <View style={styles.inner}>
      <View style={styles.groupChildPosition}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            rectangleViewStyle,
          ]}
        />
        <Text style={styles.pm}>{timeValue}</Text>
        <Image
          style={styles.keyboardArrowUp}
          contentFit="cover"
          source={require("../assets/keyboard-arrow-up.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
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
  pm: {
    height: "43.75%",
    width: "33.55%",
    top: "29.17%",
    left: "5.54%",
    fontSize: FontSize.inputM_size,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  keyboardArrowUp: {
    height: "50%",
    width: "7.82%",
    top: "25%",
    right: "8.14%",
    bottom: "25%",
    left: "84.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  inner: {
    height: "5.69%",
    width: "78.72%",
    top: "34.36%",
    right: "10.77%",
    bottom: "59.95%",
    left: "10.51%",
    position: "absolute",
  },
});

export default TimePickerContainer;
