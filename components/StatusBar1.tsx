import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

type StatusBar1Type = {
  dimensionCode?: ImageSourcePropType;
  carDimensions?: ImageSourcePropType;

  /** Style props */
  statusBarPosition?: string;
  statusBarHeight?: number | string;
  statusBarMarginLeft?: number | string;
  statusBarTop?: number | string;
  statusBarBottom?: number | string;
  statusBarLeft?: number | string;
  statusBarWidth?: number | string;
  statusBarRight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBar1 = ({
  dimensionCode,
  carDimensions,
  statusBarPosition,
  statusBarHeight,
  statusBarMarginLeft,
  statusBarTop,
  statusBarBottom,
  statusBarLeft,
  statusBarWidth,
  statusBarRight,
}: StatusBar1Type) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statusBarPosition),
      ...getStyleValue("height", statusBarHeight),
      ...getStyleValue("marginLeft", statusBarMarginLeft),
      ...getStyleValue("top", statusBarTop),
      ...getStyleValue("bottom", statusBarBottom),
      ...getStyleValue("left", statusBarLeft),
      ...getStyleValue("width", statusBarWidth),
      ...getStyleValue("right", statusBarRight),
    };
  }, [
    statusBarPosition,
    statusBarHeight,
    statusBarMarginLeft,
    statusBarTop,
    statusBarBottom,
    statusBarLeft,
    statusBarWidth,
    statusBarRight,
  ]);

  return (
    <View style={[styles.statusBar, statusBarStyle]}>
      <View style={[styles.left, styles.leftFlexBox]}>
        <Image
          style={styles.itemsIcon}
          contentFit="cover"
          source={dimensionCode}
        />
      </View>
      <View style={[styles.right, styles.leftFlexBox]}>
        <Image
          style={styles.itemsIcon1}
          contentFit="cover"
          source={carDimensions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsIcon: {
    width: 35,
    height: 14,
  },
  left: {
    flex: 1,
  },
  itemsIcon1: {
    width: 76,
    zIndex: 0,
    height: 14,
  },
  right: {
    width: 127,
    paddingRight: Padding.p_10xs,
    marginLeft: 179,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  statusBar: {
    width: 390,
    height: 59,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StatusBar1;
