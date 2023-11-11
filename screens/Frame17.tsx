import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame17 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <Image
        style={[styles.child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition1]} />
          <View style={[styles.autoTint, styles.buttonPosition1]} />
        </View>
      </View>
      <Pressable
        style={[styles.buttonWrapper, styles.buttonPosition]}
        onPress={() => navigation.navigate("Frame13")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder2.png")}
          />
          <Text style={styles.button1}>LogIn</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder3.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={() => navigation.navigate("Frame18")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.button1}>Register</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.iconFruitsLemon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--fruits--lemon2.png")}
      />
      <Image
        style={[styles.iconFruitsAvocado, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--fruits--avocado2.png")}
      />
      <Text style={[styles.createAnAccount, styles.alreadyHaveAnTypo]}>
        Create an account
      </Text>
      <Text
        style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}
      >{`Already have an 
account?`}</Text>
      <Image
        style={[styles.chevronbackwardIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chevronbackward1.png")}
      />
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition1: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  buttonPosition: {
    left: "40%",
    right: "39.74%",
    width: "20.26%",
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
  alreadyHaveAnTypo: {
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
    letterSpacing: -0.7,
    fontSize: FontSize.headingMBold_size,
    position: "absolute",
  },
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    height: "29.03%",
    width: "65.9%",
    top: "6.64%",
    right: "34.1%",
    bottom: "64.34%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  item: {
    height: "45.13%",
    width: "25.87%",
    top: "51.01%",
    bottom: "3.86%",
    left: "74.13%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blurEvenly: {
    position: "absolute",
    backgroundColor: Color.neutral0,
    height: "100%",
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
  button1: {
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
  button: {
    borderRadius: StyleVariable.buttonL,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: StyleVariable.buttonPaddingL,
    paddingVertical: 0,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  buttonWrapper: {
    top: "60.78%",
    bottom: "33.53%",
  },
  buttonContainer: {
    top: "32.82%",
    bottom: "61.49%",
  },
  iconFruitsLemon: {
    height: "16.82%",
    width: "36.41%",
    top: "73.22%",
    right: "41.79%",
    bottom: "9.95%",
    left: "21.79%",
  },
  iconFruitsAvocado: {
    height: "21.5%",
    width: "46.54%",
    top: "73.83%",
    right: "52.95%",
    bottom: "4.67%",
    left: "0.51%",
  },
  createAnAccount: {
    top: "26.07%",
    left: "9.74%",
  },
  alreadyHaveAn: {
    top: "50%",
    left: "15.64%",
  },
  chevronbackwardIcon: {
    height: "3.08%",
    width: "6.67%",
    top: "7.11%",
    right: "88.21%",
    bottom: "89.81%",
    left: "5.13%",
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
    left: "50%",
    width: 390,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame17;
