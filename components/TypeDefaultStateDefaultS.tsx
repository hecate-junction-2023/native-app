import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

type TypeDefaultStateDefaultSType = {
  pLPoland?: ImageSourcePropType;
  chevronDown?: ImageSourcePropType;
  envelope?: ImageSourcePropType;
  placeholder?: string;
  pLPoland1?: ImageSourcePropType;
  chevronDown1?: ImageSourcePropType;
  questionCircle?: ImageSourcePropType;
  trailingDropdown?: boolean;
  trailingText?: string;
  leadingDropdown?: boolean;
  leadingText?: string;
  leadingIcon?: boolean;
  trailingIcon?: boolean;

  /** Style props */
  typeDefaultStateDefaultSPosition?: string;
  typeDefaultStateDefaultSBorderRadius?: number;
  typeDefaultStateDefaultSPaddingHorizontal?: number | string;
  typeDefaultStateDefaultSMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDefaultStateDefaultS = ({
  pLPoland,
  chevronDown,
  envelope,
  placeholder = "Placeholder",
  pLPoland1,
  chevronDown1,
  questionCircle,
  trailingDropdown = false,
  trailingText = "$",
  leadingDropdown = false,
  leadingText = "$",
  leadingIcon = false,
  trailingIcon = false,
  typeDefaultStateDefaultSPosition,
  typeDefaultStateDefaultSBorderRadius,
  typeDefaultStateDefaultSPaddingHorizontal,
  typeDefaultStateDefaultSMarginTop,
}: TypeDefaultStateDefaultSType) => {
  const typeDefaultStateDefaultSStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeDefaultStateDefaultSPosition),
      ...getStyleValue("borderRadius", typeDefaultStateDefaultSBorderRadius),
      ...getStyleValue(
        "paddingHorizontal",
        typeDefaultStateDefaultSPaddingHorizontal
      ),
      ...getStyleValue("marginTop", typeDefaultStateDefaultSMarginTop),
    };
  }, [
    typeDefaultStateDefaultSPosition,
    typeDefaultStateDefaultSBorderRadius,
    typeDefaultStateDefaultSPaddingHorizontal,
    typeDefaultStateDefaultSMarginTop,
  ]);

  return (
    <View
      style={[
        styles.typedefaultStatedefaultS,
        styles.dropdownFlexBox,
        typeDefaultStateDefaultSStyle,
      ]}
    >
      {leadingDropdown && (
        <View style={[styles.leadingDropdown, styles.dropdownFlexBox]}>
          <Image
            style={styles.plPolandLayout}
            contentFit="cover"
            source={pLPoland}
          />
          <Text style={[styles.pl, styles.plTypo]}>PL</Text>
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={chevronDown}
          />
        </View>
      )}
      {leadingIcon && (
        <Image
          style={[styles.envelopeIcon, styles.plPolandLayout]}
          contentFit="cover"
          source={envelope}
        />
      )}
      {leadingText && (
        <Text style={[styles.text, styles.plTypo]}>{leadingText}</Text>
      )}
      <Text style={[styles.placeholder, styles.plTypo]}>{placeholder}</Text>
      {trailingDropdown && (
        <View style={[styles.trailingDropdown, styles.dropdownFlexBox]}>
          <Image
            style={styles.plPolandLayout}
            contentFit="cover"
            source={pLPoland1}
          />
          <Text style={[styles.pl, styles.plTypo]}>PL</Text>
          <Image
            style={styles.chevronDownIcon}
            contentFit="cover"
            source={chevronDown1}
          />
        </View>
      )}
      {trailingText && (
        <Text style={[styles.text, styles.plTypo]}>{trailingText}</Text>
      )}
      {trailingIcon && (
        <Image
          style={[styles.envelopeIcon, styles.plPolandLayout]}
          contentFit="cover"
          source={questionCircle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  plTypo: {
    textAlign: "left",
    color: Color.neutral500,
    fontFamily: FontFamily.buttonL,
    fontWeight: "600",
    fontSize: FontSize.inputM_size,
  },
  plPolandLayout: {
    height: 16,
    width: 16,
    display: "none",
  },
  pl: {
    marginLeft: 4,
  },
  chevronDownIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
    marginLeft: 4,
  },
  leadingDropdown: {
    display: "none",
  },
  envelopeIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  text: {
    marginLeft: 8,
    display: "none",
  },
  placeholder: {
    flex: 1,
    marginLeft: 8,
  },
  trailingDropdown: {
    marginLeft: 8,
    display: "none",
  },
  typedefaultStatedefaultS: {
    borderRadius: StyleVariable.inputM,
    backgroundColor: Color.neutral0,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: StyleVariable.inputPaddingM,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default TypeDefaultStateDefaultS;
