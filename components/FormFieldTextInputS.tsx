import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypeDefaultStateDefaultS from "./TypeDefaultStateDefaultS";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type FormFieldTextInputSType = {
  personInfo?: string;
  personName?: string;
  label?: boolean;
  showTextInput?: boolean;
  leadingDropdown?: boolean;
  leadingIcon?: boolean;
  leadingText?: boolean;
  trailingDropdown?: boolean;
  trailingText?: boolean;
  trailingIcon?: boolean;

  /** Style props */
  propTop?: number | string;
  propHeight?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormFieldTextInputS = ({
  personInfo,
  personName,
  label = true,
  showTextInput,
  propTop,
  propHeight,
  propLeft,
  leadingDropdown,
  leadingIcon,
  leadingText,
  trailingDropdown,
  trailingText,
  trailingIcon,
}: FormFieldTextInputSType) => {
  const formFieldTextInputSStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propHeight, propLeft]);

  return (
    <View style={[styles.formFieldtextInputs, formFieldTextInputSStyle]}>
      {label && (
        <View style={styles.label}>
          <Text style={styles.label1}>{personInfo}</Text>
        </View>
      )}
      <TypeDefaultStateDefaultS
        pLPoland={require("../assets/pl--poland1.png")}
        chevronDown={require("../assets/chevrondown1.png")}
        envelope={require("../assets/envelope.png")}
        leadingText="$"
        placeholder="Marie Redick"
        pLPoland1={require("../assets/pl--poland1.png")}
        chevronDown1={require("../assets/chevrondown1.png")}
        trailingText="$"
        questionCircle={require("../assets/questioncircle.png")}
        trailingDropdown={false}
        trailingText={false}
        leadingDropdown={false}
        leadingText={false}
        leadingIcon={false}
        trailingIcon={false}
        typeDefaultStateDefaultSPosition="unset"
        typeDefaultStateDefaultSBorderRadius={6}
        typeDefaultStateDefaultSPaddingHorizontal="unset"
        typeDefaultStateDefaultSMarginTop={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label1: {
    flex: 1,
    fontSize: FontSize.inputS_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMBold,
    color: Color.neutral500,
    textAlign: "left",
  },
  label: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  formFieldtextInputs: {
    position: "absolute",
    top: 155,
    left: 46,
    width: 312,
  },
});

export default FormFieldTextInputS;
