import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type SectionCardType = {
  soupName?: string;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const SectionCard = ({ soupName, onGroupPressablePress }: SectionCardType) => {
  return (
    <Pressable style={styles.rectangleParent} onPress={onGroupPressablePress}>
      <View style={styles.groupChild} />
      <Text style={styles.roastedGarlicTomato}>{soupName}</Text>
      <Text style={[styles.text, styles.pmTypo]}>15.04.2023</Text>
      <Text style={[styles.pm, styles.pmTypo]}>1:00 pm</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.standingConfident1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/standing-confident-1.png")}
      />
      <Image
        style={styles.image15Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChild: {
    height: "99.41%",
    width: "100%",
    top: "0.59%",
    right: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    position: "absolute",
  },
  roastedGarlicTomato: {
    width: "45.15%",
    top: "7.69%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    left: "47.09%",
    position: "absolute",
  },
  text: {
    width: "21.61%",
    top: "32.54%",
    left: "50.14%",
  },
  pm: {
    width: "15.24%",
    top: "49.11%",
    left: "51.52%",
  },
  icon: {
    top: "36.69%",
    bottom: "53.25%",
    right: "48.2%",
    width: "4.71%",
    height: "10.06%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "47.09%",
  },
  icon1: {
    top: "53.25%",
    bottom: "36.69%",
    right: "48.2%",
    width: "4.71%",
    height: "10.06%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "47.09%",
  },
  standingConfident1: {
    height: "70.41%",
    width: "26.87%",
    top: "29.59%",
    right: "3.05%",
    left: "70.08%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
  },
  image15Icon: {
    top: 0,
    left: 2,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 160,
    height: 169,
    position: "absolute",
  },
  rectangleParent: {
    height: "20.02%",
    width: "92.56%",
    top: "14.22%",
    right: "3.85%",
    bottom: "65.76%",
    left: "3.59%",
    position: "absolute",
  },
});

export default SectionCard;
