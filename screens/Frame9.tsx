import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
  Border,
  Padding,
} from "../GlobalStyles";

const Frame9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.navigationBar, styles.buttonPosition]}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.iconLayout3]} />
          <View style={[styles.autoTint, styles.iconLayout3]} />
        </View>
      </View>
      <Text style={[styles.hereIsYour, styles.timeDateFlexBox]}>
        Here is your match!
      </Text>
      <Pressable
        style={styles.buttonParent}
        onPress={() => navigation.navigate("Frame2")}
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
      <View style={styles.veganChickpeaCurry}>
        <View style={[styles.veganChickpeaCurryChild, styles.iconLayout3]} />
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
          <Image
            style={[styles.image10Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Image
            style={[styles.image8Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
        </View>
        <Text style={[styles.getSomeProtein, styles.getSomeProteinClr]}>
          Get some protein into a vegan diet with this tasty chickpea curry
          jacket. It's an easy midweek meal, or filling lunch that packs a lot
          of flavour.
        </Text>
        <Image
          style={[styles.favouriteCheckIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/favouritecheck.png")}
        />
        <Text style={[styles.veganChickpeaCurry1, styles.getSomeProteinClr]}>
          Vegan chickpea curry jacket potatoes
        </Text>
        <Image
          style={[styles.image2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <Text
        style={[styles.timeDate, styles.timeDateTypo]}
      >{`Time & Date`}</Text>
      <Text style={[styles.text, styles.pmTypo]}>15.04.2023</Text>
      <Text style={[styles.pm, styles.pmTypo]}>1:00 pm</Text>
      <Image
        style={[styles.standingConfidentIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/standing-confident.png")}
      />
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
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward2.png")}
        />
      </Pressable>
      <Text style={[styles.mikelovescooking, styles.timeDateTypo]}>
        mikelovescooking
      </Text>
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Frame4")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/group-834.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: "0%",
    left: "0%",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  timeDateFlexBox: {
    textAlign: "center",
    lineHeight: 44,
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
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
  },
  getSomeProteinClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  timeDateTypo: {
    fontSize: FontSize.headingXSBold_size,
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.plusJakartaSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    top: "60.31%",
    textAlign: "center",
    color: Color.neutral950,
    lineHeight: 44,
    position: "absolute",
  },
  iconPosition: {
    bottom: "35.19%",
    top: "61.02%",
    height: "3.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  blurEvenly: {
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.neutral0,
    height: "100%",
  },
  autoTint: {
    backgroundColor: Color.lightAndDarkAutoTint,
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
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
    right: "-0.77%",
    left: "0%",
    position: "absolute",
  },
  hereIsYour: {
    marginLeft: -161,
    top: "10.07%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 44,
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
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    left: "0%",
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
    top: "90.28%",
    right: "30.51%",
    bottom: "4.03%",
    left: "32.56%",
    position: "absolute",
  },
  veganChickpeaCurryChild: {
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
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  image7Icon: {
    left: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "20%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
  },
  image8Icon: {
    right: "20%",
    left: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "20%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  image9Icon: {
    right: "40%",
    left: "40%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "20%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  image10Icon: {
    right: "60%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "20%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  image11Icon: {
    right: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "20%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    left: "0%",
  },
  rating: {
    height: "10.12%",
    width: "23.55%",
    top: "83.93%",
    right: "2.49%",
    bottom: "5.95%",
    left: "73.96%",
    position: "absolute",
  },
  getSomeProtein: {
    width: "49.86%",
    top: "36.9%",
    left: "47.65%",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  favouriteCheckIcon: {
    height: "16.67%",
    width: "7.76%",
    top: "12.5%",
    right: "3.05%",
    bottom: "70.83%",
    left: "89.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  veganChickpeaCurry1: {
    width: "45.15%",
    top: "9.52%",
    left: "45.43%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  image2Icon: {
    height: "80.36%",
    width: "39.34%",
    top: "10.12%",
    right: "57.06%",
    bottom: "9.52%",
    left: "3.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  veganChickpeaCurry: {
    height: "19.91%",
    width: "92.56%",
    top: "66.23%",
    right: "4.36%",
    bottom: "13.86%",
    left: "3.08%",
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
  text: {
    left: "23.59%",
  },
  pm: {
    left: "66.67%",
  },
  standingConfidentIcon: {
    height: "32.58%",
    marginLeft: -136,
    top: "21.8%",
    bottom: "45.62%",
    width: 273,
    left: "50%",
    position: "absolute",
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
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
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
  mikelovescooking: {
    marginLeft: -107,
    top: 148,
    lineHeight: 32,
    textAlign: "left",
    left: "50%",
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
  },
  wrapper: {
    left: 333,
    top: 575,
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

export default Frame9;
