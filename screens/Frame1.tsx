import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.autoTintPosition]} />
          <View style={[styles.autoTint, styles.autoTintPosition]} />
        </View>
      </View>
      <Text style={styles.cookingSessions}>Cooking sessions</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectanglePosition]}
        onPress={() => navigation.navigate("Frame9")}
      >
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={styles.roastedGarlicTomato}>
          Roasted Garlic Tomato Soup
        </Text>
        <Text style={[styles.text, styles.textFlexBox]}>15.04.2023</Text>
        <Text style={[styles.pm, styles.pmTypo]}>1:00 pm</Text>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <Image
          style={[styles.standingConfident1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/standing-confident-1.png")}
        />
        <Image
          style={[styles.image15Icon, styles.image3Position1]}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.textFlexBox]}>
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
        <Text style={[styles.text1, styles.textFlexBox]}>15.04.2023</Text>
        <Text style={[styles.pm1, styles.pmTypo]}>6:28 pm</Text>
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
          style={[styles.questionmarkcircleIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/questionmarkcircle.png")}
        />
      </View>
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
  rectanglePosition: {
    left: "3.59%",
    right: "3.85%",
    width: "92.56%",
    height: "20.02%",
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
    right: "0%",
    width: "100%",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  pmTypo: {
    width: "15.24%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: "18.93%",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "53.25%",
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
  iconLayout: {
    right: "48.75%",
    left: "46.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "4.71%",
    height: "10.06%",
    position: "absolute",
    overflow: "hidden",
  },
  blurEvenly: {
    backgroundColor: Color.neutral0,
    top: "0%",
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
  cookingSessions: {
    top: "7.46%",
    left: "12.05%",
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
    top: "0.59%",
    height: "99.41%",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  roastedGarlicTomato: {
    top: "7.69%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    left: "47.09%",
    width: "45.15%",
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    left: "50.14%",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    width: "21.61%",
    height: "18.93%",
    alignItems: "center",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
    top: "32.54%",
  },
  pm: {
    left: "51.52%",
    top: "49.11%",
  },
  icon: {
    top: "36.69%",
    bottom: "53.25%",
    right: "48.2%",
    width: "4.71%",
    height: "10.06%",
    left: "47.09%",
    borderRadius: Border.br_3xs,
  },
  icon1: {
    bottom: "36.69%",
    right: "48.2%",
    width: "4.71%",
    height: "10.06%",
    left: "47.09%",
    borderRadius: Border.br_3xs,
  },
  standingConfident1: {
    height: "70.41%",
    width: "26.87%",
    top: "29.59%",
    right: "3.05%",
    left: "70.08%",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    bottom: "0%",
  },
  image15Icon: {
    top: 0,
    left: 2,
    width: 160,
    height: 169,
    position: "absolute",
  },
  rectangleParent: {
    top: "14.22%",
    bottom: "65.76%",
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
    top: "10.06%",
    left: "46.54%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    width: "45.15%",
    fontWeight: "700",
    position: "absolute",
  },
  text1: {
    top: "28.4%",
    left: "49.58%",
    display: "flex",
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    width: "21.61%",
    height: "18.93%",
    alignItems: "center",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    fontWeight: "700",
    lineHeight: 44,
  },
  pm1: {
    top: "44.97%",
    left: "50.97%",
  },
  icon3: {
    bottom: "57.4%",
    top: "32.54%",
  },
  icon4: {
    bottom: "40.83%",
    top: "49.11%",
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
    right: "11.91%",
    bottom: "30.77%",
    left: "83.1%",
  },
  rectangleGroup: {
    top: "38.27%",
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

export default Frame1;
