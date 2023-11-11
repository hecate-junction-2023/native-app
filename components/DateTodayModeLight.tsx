import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type DateTodayModeLightType = {
  dateText?: string;
  carId?: ImageSourcePropType;
  eventDay?: boolean;

  /** Style props */
  dateTodayModeLightBorderRadius?: number | string;
  textFontWeight?: string;
  textFontFamily?: string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DateTodayModeLight = ({
  dateText = "23",
  carId,
  eventDay = true,
  dateTodayModeLightBorderRadius,
  textFontWeight,
  textFontFamily,
  textColor,
}: DateTodayModeLightType) => {
  const dateTodayModeLightStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", dateTodayModeLightBorderRadius),
    };
  }, [dateTodayModeLightBorderRadius]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", textFontWeight),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("color", textColor),
    };
  }, [textFontWeight, textFontFamily, textColor]);

  return (
    <View style={[styles.datetodayModelight, dateTodayModeLightStyle]}>
      <Text style={[styles.text, textStyle]}>{dateText}</Text>
      {eventDay && (
        <Image
          style={styles.datetodayModelightChild}
          contentFit="cover"
          source={carId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.inputS_size,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.primaryBlue,
    textAlign: "center",
    zIndex: 0,
  },
  datetodayModelightChild: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 4,
    height: 4,
    zIndex: 1,
  },
  datetodayModelight: {
    borderRadius: Border.br_981xl,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
    flex: 1,
  },
});

export default DateTodayModeLight;
