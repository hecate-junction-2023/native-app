import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type DateHeaderSimplePositonCeType = {
  month?: string;
  dimensionLabel?: ImageSourcePropType;
  year?: string;
  imageLabel?: ImageSourcePropType;

  /** Style props */
  dateHeaderSimplePositonCePosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DateHeaderSimplePositonCe = ({
  month = "December",
  dimensionLabel,
  year = "2022",
  imageLabel,
  dateHeaderSimplePositonCePosition,
}: DateHeaderSimplePositonCeType) => {
  const dateHeaderSimplePositonCeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dateHeaderSimplePositonCePosition),
    };
  }, [dateHeaderSimplePositonCePosition]);

  return (
    <View
      style={[styles.dateHeadersimplePositonce, dateHeaderSimplePositonCeStyle]}
    >
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../assets/chevron.png")}
      />
      <View style={styles.year}>
        <View style={styles.year}>
          <Text style={styles.december}>{month}</Text>
          <Image
            style={[styles.chevronIcon1, styles.chevronIconLayout]}
            contentFit="cover"
            source={dimensionLabel}
          />
        </View>
        <View style={styles.parent}>
          <Text style={styles.december}>{year}</Text>
          <Image
            style={[styles.chevronIcon2, styles.chevronIconLayout]}
            contentFit="cover"
            source={imageLabel}
          />
        </View>
      </View>
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../assets/chevron2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chevronIconLayout: {
    display: "none",
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  chevronIcon: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  december: {
    fontSize: FontSize.inputM_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkGray1,
    textAlign: "left",
  },
  chevronIcon1: {
    marginLeft: 8,
  },
  year: {
    flexDirection: "row",
  },
  chevronIcon2: {
    marginLeft: 4,
  },
  parent: {
    marginLeft: 4,
    flexDirection: "row",
  },
  dateHeadersimplePositonce: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default DateHeaderSimplePositonCe;
