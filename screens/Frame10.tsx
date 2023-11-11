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
  Border,
} from "../GlobalStyles";

const Frame10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.autoTintPosition]} />
          <View style={[styles.autoTint, styles.autoTintPosition]} />
        </View>
      </View>
      <Text style={[styles.hereIsYour, styles.timeDateFlexBox]}>
        Here is your match!
      </Text>
      <Text
        style={[styles.timeDate, styles.timeDateTypo]}
      >{`Time & Date`}</Text>
      <Image
        style={[styles.img0003Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/img-00031.png")}
      />
      <Text style={[styles.leacookingmaster, styles.timeDateTypo]}>
        leacookingmaster
      </Text>
      <Text style={[styles.text, styles.pmTypo]}>15.04.2023</Text>
      <Text style={[styles.pm, styles.pmTypo]}>1:00 pm</Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon3.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon4.png")}
      />
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame3")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.buttonParent}
        onPress={() => navigation.navigate("Frame1")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={styles.folderIconLayout}
            contentFit="cover"
            source={require("../assets/folder2.png")}
          />
          <Text style={styles.button1}>Cancel Match</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder3.png")}
          />
        </View>
        <View style={styles.clear} />
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
      <View style={styles.smashedChickenWithCornSlaw}>
        <View style={styles.smashedChickenWithCornSlawChild} />
        <View style={styles.rating}>
          <Image
            style={[styles.image7Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image8Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image10Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image11Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
        </View>
        <Text style={[styles.addAPop, styles.addAPopPosition]}>
          Add a pop of colour to your plate with this vibrant turmeric marinade.
          This quick dinner is healthy, low-calorie and provides 3 of your
          5-a-day
        </Text>
        <Image
          style={styles.favouriteCheckIcon}
          contentFit="cover"
          source={require("../assets/favouritecheck.png")}
        />
        <Text style={[styles.smashedChickenWith, styles.addAPopPosition]}>
          Smashed chicken with corn slaw
        </Text>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Frame4")}
      >
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../assets/group-834.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  autoTintPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  timeDateFlexBox: {
    textAlign: "center",
    lineHeight: 44,
  },
  timeDateTypo: {
    fontSize: FontSize.headingXSBold_size,
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pmTypo: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    top: "59.6%",
    textAlign: "center",
    color: Color.neutral950,
    lineHeight: 44,
    position: "absolute",
  },
  iconPosition: {
    bottom: "35.9%",
    top: "60.31%",
    height: "3.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
  iconLayout: {
    width: 17,
    height: 17,
    top: 0,
    position: "absolute",
  },
  addAPopPosition: {
    color: Color.colorBlack,
    left: 172,
    textAlign: "left",
    position: "absolute",
  },
  blurEvenly: {
    backgroundColor: Color.neutral0,
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
  hereIsYour: {
    top: "10.07%",
    left: "9.23%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 44,
    position: "absolute",
  },
  timeDate: {
    top: "54.38%",
    left: "32.31%",
    letterSpacing: -0.5,
    textAlign: "center",
    lineHeight: 44,
    fontSize: FontSize.headingXSBold_size,
  },
  img0003Icon: {
    height: "34.83%",
    width: "40.77%",
    top: "21.33%",
    right: "30%",
    bottom: "43.84%",
    left: "29.23%",
    position: "absolute",
  },
  leacookingmaster: {
    top: "17.54%",
    left: "21.03%",
    lineHeight: 32,
    textAlign: "left",
  },
  text: {
    left: "23.59%",
  },
  pm: {
    left: "66.67%",
  },
  icon: {
    width: "8.03%",
    right: "78.64%",
    left: "13.33%",
  },
  icon1: {
    width: "8.41%",
    right: "35.69%",
    left: "55.9%",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  chevronbackward: {
    left: "5.13%",
    top: "7.11%",
    right: "88.21%",
    bottom: "89.81%",
    width: "6.67%",
    height: "3.08%",
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
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  clear: {
    height: "70.83%",
    width: "25%",
    right: "53.47%",
    bottom: "29.17%",
    left: "21.53%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonParent: {
    height: "5.69%",
    width: "36.92%",
    top: "90.64%",
    right: "31.79%",
    bottom: "3.67%",
    left: "31.28%",
    position: "absolute",
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
    height: "6.99%",
    top: "0.47%",
    bottom: "92.54%",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
  },
  smashedChickenWithCornSlawChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    height: 168,
    width: 361,
    position: "absolute",
  },
  image7Icon: {
    left: 68,
  },
  image8Icon: {
    left: 51,
  },
  image9Icon: {
    left: 34,
  },
  image10Icon: {
    left: 17,
  },
  image11Icon: {
    left: 0,
  },
  rating: {
    top: 146,
    left: 267,
    width: 85,
    height: 17,
    position: "absolute",
  },
  addAPop: {
    top: 57,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    width: 180,
  },
  favouriteCheckIcon: {
    top: 21,
    left: 322,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  smashedChickenWith: {
    top: 18,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    width: 129,
    fontWeight: "700",
    color: Color.colorBlack,
    left: 172,
  },
  image1Icon: {
    top: 17,
    left: 13,
    width: 142,
    height: 135,
    position: "absolute",
  },
  smashedChickenWithCornSlaw: {
    top: 561,
    left: 14,
    height: 168,
    width: 361,
    position: "absolute",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 333,
    top: 577,
    width: 31,
    height: 31,
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

export default Frame10;
