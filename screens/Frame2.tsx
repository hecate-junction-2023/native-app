import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={[styles.navigationBar, styles.img0003IconPosition]}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.autoTintPosition]} />
          <View style={[styles.autoTint, styles.autoTintPosition]} />
        </View>
      </View>
      <Text style={styles.cookingSessions}>Cooking sessions</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectanglePosition]}
        onPress={() => navigation.navigate("Frame10")}
      >
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={styles.smashedChickenWith}>
          Smashed chicken with corn slaw
        </Text>
        <Text style={[styles.text, styles.pmFlexBox]}>17.04.2023</Text>
        <Text style={[styles.pm, styles.pmFlexBox]}>5:00 pm</Text>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <Image
          style={[styles.image1Icon, styles.image3Position1]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.img0003Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/img-0003.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.pmFlexBox]}>
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
        onPress={() => navigation.navigate("Frame15")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </Pressable>
      <Image
        style={[styles.plusIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/plus.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.image3Position]} />
        <Text style={styles.waitingForMatch}>Waiting for match</Text>
        <Text style={[styles.text1, styles.pm1Typo]}>15.04.2023</Text>
        <Text style={[styles.pm1, styles.pm1Typo]}>6:28 pm</Text>
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <View style={[styles.image3, styles.image3Position]} />
        <Image
          style={styles.removebgPreviewgrey1Icon}
          contentFit="cover"
          source={require("../assets/0002removebgpreviewgrey-1.png")}
        />
        <Image
          style={[styles.questionmarksquareIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/questionmarksquare.png")}
        />
        <Image
          style={[styles.questionmarkcircleIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/questionmarkcircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img0003IconPosition: {
    bottom: "0%",
    right: "0%",
  },
  autoTintPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  rectanglePosition: {
    left: "2.31%",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
  },
  pmFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image3Position1: {
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  leftFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  image3Position: {
    bottom: "0.59%",
    height: "99.41%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  pm1Typo: {
    height: "18.93%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
    position: "absolute",
  },
  iconLayout: {
    right: "48.75%",
    width: "4.71%",
    height: "10.06%",
    left: "46.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blurEvenly: {
    right: "0%",
    width: "100%",
    backgroundColor: Color.neutral0,
    top: "0%",
  },
  autoTint: {
    backgroundColor: Color.lightAndDarkAutoTint,
    right: "0%",
    width: "100%",
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
    position: "absolute",
  },
  cookingSessions: {
    top: "7.46%",
    left: "12.31%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
    position: "absolute",
  },
  groupChild: {
    width: "94.5%",
    right: "5.5%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  smashedChickenWith: {
    width: "42.67%",
    top: "7.14%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    left: "44.5%",
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    width: "20.42%",
    top: "32.14%",
    left: "47.38%",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: "19.05%",
    alignItems: "center",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
  },
  pm: {
    width: "14.4%",
    top: "48.81%",
    left: "48.69%",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: "19.05%",
    alignItems: "center",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
  },
  icon: {
    top: "36.31%",
    bottom: "53.57%",
    right: "51.05%",
    width: "4.45%",
    height: "10.12%",
    maxWidth: "100%",
    left: "44.5%",
    borderRadius: Border.br_3xs,
  },
  icon1: {
    top: "52.98%",
    bottom: "36.9%",
    right: "51.05%",
    width: "4.45%",
    height: "10.12%",
    maxWidth: "100%",
    left: "44.5%",
    borderRadius: Border.br_3xs,
  },
  image1Icon: {
    top: 0,
    left: 0,
    width: 164,
    height: 168,
    position: "absolute",
  },
  img0003Icon: {
    height: "80.95%",
    width: "41.62%",
    top: "19.05%",
    left: "58.38%",
    bottom: "0%",
    right: "0%",
  },
  rectangleParent: {
    height: "19.91%",
    width: "97.95%",
    top: "15.17%",
    right: "-0.26%",
    bottom: "64.93%",
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
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 298,
    top: 731,
    width: 70,
    height: 70,
    position: "absolute",
  },
  plusIcon: {
    height: "3.55%",
    width: "7.69%",
    top: "88.98%",
    right: "10.51%",
    bottom: "7.46%",
    left: "81.79%",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    right: "0%",
    width: "100%",
  },
  waitingForMatch: {
    width: "45.15%",
    top: "10.06%",
    left: "46.54%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    position: "absolute",
  },
  text1: {
    width: "21.61%",
    top: "28.4%",
    left: "49.58%",
  },
  pm1: {
    width: "15.24%",
    top: "44.97%",
    left: "50.97%",
  },
  icon3: {
    top: "32.54%",
    bottom: "57.4%",
  },
  icon4: {
    top: "49.11%",
    bottom: "40.83%",
  },
  image3: {
    width: "44.32%",
    right: "55.68%",
    backgroundColor: Color.colorDimgray,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  removebgPreviewgrey1Icon: {
    top: 78,
    left: 275,
    width: 86,
    height: 91,
    position: "absolute",
  },
  questionmarksquareIcon: {
    height: "55.03%",
    width: "25.48%",
    top: "22.49%",
    right: "65.1%",
    bottom: "22.49%",
    left: "9.42%",
  },
  questionmarkcircleIcon: {
    height: "15.98%",
    width: "4.99%",
    top: "53.25%",
    right: "11.91%",
    bottom: "30.77%",
    left: "83.1%",
  },
  rectangleGroup: {
    height: "20.02%",
    width: "92.56%",
    top: "38.27%",
    right: "5.13%",
    bottom: "41.71%",
  },
  view: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame2;
