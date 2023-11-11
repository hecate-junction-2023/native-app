import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type WaitingForMatchSectionType = {
  /** Style props */
  propRight?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WaitingForMatchSection = ({
  propRight,
  propLeft,
}: WaitingForMatchSectionType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={[styles.groupChild, styles.image3Position]} />
      <Text style={styles.waitingForMatch}>Waiting for match</Text>
      <Text style={[styles.text, styles.pmTypo]}>15.04.2023</Text>
      <Text style={[styles.pm, styles.pmTypo]}>6:28 pm</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon2.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
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
        style={[styles.questionmarksquareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/questionmarksquare.png")}
      />
      <Image
        style={[styles.questionmarkcircleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/questionmarkcircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image3Position: {
    left: "0%",
    bottom: "0.59%",
    top: "0%",
    height: "99.41%",
    position: "absolute",
  },
  pmTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.neutral950,
    fontFamily: FontFamily.headingMBold,
    lineHeight: 44,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    height: "18.93%",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    width: "100%",
    right: "0%",
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
  },
  waitingForMatch: {
    width: "45.15%",
    top: "10.06%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    left: "46.54%",
    position: "absolute",
  },
  text: {
    width: "21.61%",
    top: "28.4%",
    left: "49.58%",
  },
  pm: {
    width: "15.24%",
    top: "44.97%",
    left: "50.97%",
  },
  icon: {
    top: "32.54%",
    bottom: "57.4%",
    right: "48.75%",
    width: "4.71%",
    height: "10.06%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "46.54%",
  },
  icon1: {
    top: "49.11%",
    bottom: "40.83%",
    right: "48.75%",
    width: "4.71%",
    height: "10.06%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "46.54%",
  },
  image3: {
    width: "44.32%",
    right: "55.68%",
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDimgray,
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
  rectangleParent: {
    height: "20.02%",
    width: "92.56%",
    top: "38.27%",
    right: "3.85%",
    bottom: "41.71%",
    left: "3.59%",
    position: "absolute",
  },
});

export default WaitingForMatchSection;
