import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import ContainerForm from "./ContainerForm";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PMContainer = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={[styles.pmWrapper, styles.wrapperPosition]}>
        <Text style={[styles.pm, styles.textTypo]}>PM</Text>
      </View>
      <View style={[styles.amWrapper, styles.wrapperPosition]}>
        <Text style={[styles.am, styles.amTypo]}>AM</Text>
      </View>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.text, styles.textTypo]}>06</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, styles.textTypo]}>28</Text>
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.text2, styles.amTypo]}>:</Text>
      </View>
      <View style={[styles.groupItem, styles.framePosition]} />
      <ContainerForm />
      <ContainerForm propTop={112} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    padding: Padding.p_base,
    width: 60,
    left: 202,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    height: 24,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    justifyContent: "center",
    alignItems: "center",
  },
  amTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 24,
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  framePosition: {
    top: 72,
    position: "absolute",
  },
  groupChild: {
    top: -12,
    left: -35,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_200,
    width: 343,
    height: 192,
    display: "none",
    position: "absolute",
  },
  pm: {
    width: 46,
  },
  pmWrapper: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    top: 56,
    padding: Padding.p_base,
    width: 60,
    left: 202,
  },
  am: {
    color: Color.colorDarkslategray_200,
    width: 47,
  },
  amWrapper: {
    top: 112,
    padding: Padding.p_base,
    width: 60,
    left: 202,
  },
  text: {
    width: 38,
  },
  text1: {
    width: 37,
  },
  container: {
    marginLeft: 24,
  },
  frameParent: {
    left: 0,
    width: 202,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    top: 56,
    position: "absolute",
  },
  text2: {
    width: 8,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frame: {
    left: 70,
    opacity: 0.1,
  },
  groupItem: {
    left: 127,
  },
  rectangleParent: {
    top: 0,
    left: 19,
    width: 262,
    height: 168,
    position: "absolute",
  },
});

export default PMContainer;
