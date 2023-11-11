import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Container = () => {
  return (
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
        This quick dinner is healthy, low-calorie and provides 3 of your 5-a-day
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
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 17,
    height: 17,
    top: 0,
    position: "absolute",
  },
  addAPopPosition: {
    textAlign: "left",
    color: Color.colorBlack,
    left: 172,
    position: "absolute",
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
    overflow: "hidden",
    position: "absolute",
  },
  smashedChickenWith: {
    top: 18,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 129,
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
});

export default Container;
