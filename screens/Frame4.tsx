import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={styles.shoppingList}>Shopping List</Text>
      <View style={styles.buttonWrapper}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={[styles.folderIcon, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder2.png")}
          />
          <Text style={[styles.button1, styles.button1Typo]}>Back</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder3.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.chevronbackwardIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chevronbackward.png")}
      />
      <Pressable
        style={styles.chevronbackwardPosition}
        onPress={() => navigation.navigate("Frame9")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward.png")}
        />
      </Pressable>
      <Text style={[styles.kgTomatoes8, styles.button1Typo]}>{`1 kg Tomatoes
8 Gloves Garlic
1 Onion
1 teaspoon Salt
1 teaspoon Black Pepper
1/2 cup heavy cream
Fresh Basil (optional)`}</Text>
      <Text style={styles.roastedGarlicTomato}>Roasted Garlic Tomato Soup</Text>
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
      <Image
        style={[styles.iconSettings, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-settings.png")}
      />
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
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
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  folderIconLayout: {
    height: 20,
    width: 20,
    display: "none",
    overflow: "hidden",
  },
  button1Typo: {
    fontSize: FontSize.buttonL_size,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  shoppingList: {
    top: "8.77%",
    left: "20%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
  },
  folderIcon: {
    display: "none",
  },
  button1: {
    fontWeight: "600",
    fontFamily: FontFamily.buttonL,
    color: Color.neutral0,
    marginLeft: 10,
    textAlign: "left",
  },
  folderIcon1: {
    marginLeft: 10,
    display: "none",
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
    height: "5.69%",
    width: "20.26%",
    top: "90.28%",
    right: "40%",
    bottom: "4.03%",
    left: "39.74%",
    position: "absolute",
  },
  chevronbackwardIcon: {
    left: "2.56%",
    bottom: "89.81%",
    right: "90.77%",
    top: "7.11%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  chevronbackwardPosition: {
    left: "2.56%",
    bottom: "89.81%",
    right: "90.77%",
    top: "7.11%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  kgTomatoes8: {
    height: "22.63%",
    width: "71.28%",
    top: "33.89%",
    left: "18.72%",
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  roastedGarlicTomato: {
    top: "18.13%",
    left: 56,
    fontSize: FontSize.headingXSBold_size,
    lineHeight: 32,
    display: "flex",
    width: 278,
    textAlign: "left",
    alignItems: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
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
    left: "50%",
    width: 390,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
  },
  iconSettings: {
    height: "4.15%",
    width: "8.97%",
    top: "7.23%",
    right: "-103.59%",
    bottom: "88.63%",
    left: "194.62%",
    display: "none",
    position: "absolute",
  },
  image16Icon: {
    top: 508,
    left: 114,
    width: 161,
    height: 182,
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

export default Frame4;
