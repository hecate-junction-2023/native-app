import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

type ContainerFormType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerForm = ({ propTop }: ContainerFormType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View>
        <Text style={[styles.text, styles.textTypo]}>06</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text1, styles.textTypo]}>27</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    height: 24,
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 37,
  },
  text1: {
    width: 39,
  },
  container: {
    marginLeft: 24,
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_xs,
    width: 202,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContainerForm;
