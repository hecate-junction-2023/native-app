import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.child, styles.childPosition]} />
      <Image
        style={styles.iconFruitsLemon}
        contentFit="cover"
        source={require("../assets/icon--fruits--lemon.png")}
      />
      <Image
        style={[styles.item, styles.itemPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={[styles.welcomeToCook, styles.buttonFlexBox]}>{`Welcome to 
COOK THE PAIN AWAY`}</Text>
      <Image
        style={styles.iconFruitsAvocado}
        contentFit="cover"
        source={require("../assets/icon--fruits--avocado.png")}
      />
      <Image
        style={[styles.inner, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.autoTintPosition]} />
          <View style={[styles.autoTint, styles.autoTintPosition]} />
        </View>
      </View>
      <Pressable
        style={[styles.buttonWrapper, styles.buttonLayout]}
        onPress={() => navigation.navigate("Frame17")}
      >
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.button1}>Start</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.statusBar, styles.buttonFlexBox]}>
        <View style={[styles.left, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon}
            contentFit="cover"
            source={require("../assets/items2.png")}
          />
        </View>
        <View style={[styles.right, styles.leftFlexBox]}>
          <Image
            style={styles.itemsIcon1}
            contentFit="cover"
            source={require("../assets/items3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  itemPosition: {
    top: 0,
    left: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  autoTintPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonLayout: {
    height: 48,
    position: "absolute",
  },
  folderIconLayout: {
    display: "none",
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    top: -8,
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
  },
  iconFruitsLemon: {
    height: "32.58%",
    width: "70.51%",
    top: "44.31%",
    right: "-6.15%",
    bottom: "23.1%",
    left: "35.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  item: {
    width: 640,
    height: 603,
    position: "absolute",
  },
  welcomeToCook: {
    top: 155,
    left: 9,
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: FontFamily.headingMBold,
    textAlign: "center",
    display: "flex",
    width: 364,
    height: 89,
    color: Color.neutral0,
    position: "absolute",
  },
  iconFruitsAvocado: {
    height: "41.77%",
    width: "84.49%",
    top: "45.5%",
    right: "15.51%",
    bottom: "12.74%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inner: {
    top: 652,
    width: 275,
    height: 193,
  },
  blurEvenly: {
    backgroundColor: Color.neutral0,
    height: "100%",
  },
  autoTint: {
    backgroundColor: Color.lightAndDarkAutoTint,
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
  button1: {
    fontSize: FontSize.buttonL_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttonL,
    textAlign: "left",
    marginLeft: 10,
    color: Color.neutral0,
  },
  folderIcon1: {
    marginLeft: 10,
  },
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  buttonWrapper: {
    top: 736,
    left: 156,
    width: 79,
  },
  itemsIcon: {
    width: 35,
    height: 14,
  },
  left: {
    flex: 1,
    alignSelf: "stretch",
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
  },
  statusBar: {
    height: "6.99%",
    marginLeft: -195,
    top: "0.47%",
    bottom: "92.54%",
    left: "50%",
    width: 390,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    position: "absolute",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame;
