import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

type SizeLPaletteSuccessVariaType = {
  folder?: ImageSourcePropType;
  label?: string;
  folder1?: ImageSourcePropType;
  leftIcon?: boolean;
  rightIcon?: boolean;

  /** Style props */
  sizeLPaletteSuccessVariaPosition?: string;
  sizeLPaletteSuccessVariaBackgroundColor?: string;
  sizeLPaletteSuccessVariaHeight?: number | string;
  sizeLPaletteSuccessVariaWidth?: number | string;
  sizeLPaletteSuccessVariaTop?: number | string;
  sizeLPaletteSuccessVariaRight?: number | string;
  sizeLPaletteSuccessVariaBottom?: number | string;
  sizeLPaletteSuccessVariaLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeLPaletteSuccessVaria = ({
  folder,
  label = "Button",
  folder1,
  leftIcon = true,
  rightIcon = true,
  sizeLPaletteSuccessVariaPosition,
  sizeLPaletteSuccessVariaBackgroundColor,
  sizeLPaletteSuccessVariaHeight,
  sizeLPaletteSuccessVariaWidth,
  sizeLPaletteSuccessVariaTop,
  sizeLPaletteSuccessVariaRight,
  sizeLPaletteSuccessVariaBottom,
  sizeLPaletteSuccessVariaLeft,
}: SizeLPaletteSuccessVariaType) => {
  const sizeLPaletteSuccessVariaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizeLPaletteSuccessVariaPosition),
      ...getStyleValue(
        "backgroundColor",
        sizeLPaletteSuccessVariaBackgroundColor
      ),
      ...getStyleValue("height", sizeLPaletteSuccessVariaHeight),
      ...getStyleValue("width", sizeLPaletteSuccessVariaWidth),
      ...getStyleValue("top", sizeLPaletteSuccessVariaTop),
      ...getStyleValue("right", sizeLPaletteSuccessVariaRight),
      ...getStyleValue("bottom", sizeLPaletteSuccessVariaBottom),
      ...getStyleValue("left", sizeLPaletteSuccessVariaLeft),
    };
  }, [
    sizeLPaletteSuccessVariaPosition,
    sizeLPaletteSuccessVariaBackgroundColor,
    sizeLPaletteSuccessVariaHeight,
    sizeLPaletteSuccessVariaWidth,
    sizeLPaletteSuccessVariaTop,
    sizeLPaletteSuccessVariaRight,
    sizeLPaletteSuccessVariaBottom,
    sizeLPaletteSuccessVariaLeft,
  ]);

  return (
    <View
      style={[styles.sizelPalettesuccessVaria, sizeLPaletteSuccessVariaStyle]}
    >
      {leftIcon && (
        <Image
          style={styles.folderIconLayout}
          contentFit="cover"
          source={folder}
        />
      )}
      <Text style={styles.button}>{label}</Text>
      {rightIcon && (
        <Image
          style={[styles.folderIcon1, styles.folderIconLayout]}
          contentFit="cover"
          source={folder1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  folderIconLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  button: {
    fontSize: FontSize.buttonL_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttonL,
    color: Color.neutral0,
    textAlign: "left",
    marginLeft: 10,
  },
  folderIcon1: {
    marginLeft: 10,
  },
  sizelPalettesuccessVaria: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.success600,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: StyleVariable.buttonPaddingL,
    paddingVertical: 0,
  },
});

export default SizeLPaletteSuccessVaria;
