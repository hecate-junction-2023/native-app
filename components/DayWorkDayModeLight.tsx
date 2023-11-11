import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type DayWorkDayModeLightType = {
  text?: string;

  /** Style props */
  dayWorkDayModeLightPosition?: string;
  thColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DayWorkDayModeLight = ({
  text = "Th",
  dayWorkDayModeLightPosition,
  thColor,
}: DayWorkDayModeLightType) => {
  const dayWorkDayModeLightStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dayWorkDayModeLightPosition),
    };
  }, [dayWorkDayModeLightPosition]);

  const thStyle = useMemo(() => {
    return {
      ...getStyleValue("color", thColor),
    };
  }, [thColor]);

  return (
    <View style={[styles.dayworkDayModelight, dayWorkDayModeLightStyle]}>
      <Text style={[styles.th, thStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  th: {
    fontSize: FontSize.inputS_size,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.darkGray1,
    textAlign: "center",
    width: 28,
  },
  dayworkDayModelight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
});

export default DayWorkDayModeLight;
