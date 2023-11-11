import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={styles.scheduleTheCooking}>Schedule the cooking</Text>
      <Pressable
        style={[styles.buttonWrapper, styles.innerLayout]}
        onPress={() => navigation.navigate("Frame12")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.button1}>Next</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.inner, styles.innerLayout]}>
        <View style={[styles.rectangleParent, styles.buttonPosition]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text style={[styles.selectTime, styles.selectTypo]}>
            Select time
          </Text>
          <Image
            style={[styles.keyboardArrowUp, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-up.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.child}
        onPress={() => navigation.navigate("Frame8")}
      >
        <View style={styles.groupPosition}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.selectDate, styles.selectTypo]}>
            Select Date
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame16")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.buttonFlexBox]}>
        <View style={[styles.left, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon}
            contentFit="cover"
            source={require("../assets/items.png")}
          />
        </View>
        <View style={[styles.right, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon1}
            contentFit="cover"
            source={require("../assets/items1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  innerLayout: {
    height: "5.69%",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  folderIconLayout: {
    display: "none",
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral0,
  },
  selectTypo: {
    display: "flex",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.latoBold,
    textTransform: "capitalize",
    fontSize: FontSize.inputM_size,
    textAlign: "left",
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    top: 0,
    height: 48,
    width: 307,
    position: "absolute",
  },
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  blurEvenly: {
    position: "absolute",
    backgroundColor: Color.neutral0,
    top: "0%",
  },
  autoTint: {
    backgroundColor: Color.lightAndDarkAutoTint,
    position: "absolute",
  },
  items: {
    height: "14.71%",
    width: "35.47%",
    top: "61.76%",
    right: "32.26%",
    bottom: "23.53%",
    left: "32.26%",
    position: "absolute",
  },
  navigationBar: {
    height: "4.03%",
    width: "100.77%",
    top: "95.97%",
    left: "-0.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  scheduleTheCooking: {
    marginLeft: -183,
    top: "10.07%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    fontFamily: FontFamily.headingMBold,
    color: Color.neutral950,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  button1: {
    fontSize: FontSize.buttonL_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttonL,
    color: Color.neutral0,
    marginLeft: 10,
    textAlign: "left",
  },
  folderIcon1: {
    marginLeft: 10,
  },
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    paddingVertical: 0,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  buttonWrapper: {
    width: "20.26%",
    top: "88.39%",
    right: "39.74%",
    bottom: "5.92%",
    left: "40%",
  },
  groupChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  selectTime: {
    height: "43.75%",
    width: "33.55%",
    top: "29.17%",
    left: "5.54%",
  },
  keyboardArrowUp: {
    height: "50%",
    width: "7.82%",
    top: "25%",
    right: "8.14%",
    bottom: "25%",
    left: "84.04%",
    position: "absolute",
  },
  rectangleParent: {
    position: "absolute",
  },
  inner: {
    width: "78.72%",
    top: "34.36%",
    right: "10.77%",
    bottom: "59.95%",
    left: "10.51%",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral0,
  },
  selectDate: {
    top: 14,
    left: 18,
    width: 103,
    height: 21,
  },
  vectorIcon: {
    height: "15.42%",
    width: "3.91%",
    top: "45.83%",
    right: "7.82%",
    bottom: "38.75%",
    left: "88.27%",
    position: "absolute",
  },
  child: {
    top: 200,
    left: 41,
    height: 48,
    width: 307,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  chevronbackward: {
    left: "2.56%",
    top: "7.11%",
    right: "90.77%",
    bottom: "89.81%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  itemsIcon: {
    width: 35,
    height: 14,
  },
  left: {
    alignSelf: "stretch",
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
    height: "6.99%",
    marginLeft: -195,
    top: "0.47%",
    bottom: "92.54%",
    width: 390,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame14;
