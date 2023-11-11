import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const VeganChickpeaCurryContainer = () => {
  return (
    <View style={styles.veganChickpeaCurry}>
      <View style={styles.veganChickpeaCurryChild} />
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
      <Text style={[styles.getSomeProtein, styles.getSomeProteinFlexBox]}>
        Get some protein into a vegan diet with this tasty chickpea curry
        jacket. It's an easy midweek meal, or filling lunch that packs a lot of
        flavour.
      </Text>
      <Image
        style={[styles.favouriteCheckIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/favouritecheck.png")}
      />
      <Text style={[styles.veganChickpeaCurry1, styles.getSomeProteinFlexBox]}>
        Vegan chickpea curry jacket potatoes
      </Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  getSomeProteinFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  veganChickpeaCurryChild: {
    width: "100%",
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
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  image7Icon: {
    left: "80%",
    width: "20%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  image8Icon: {
    right: "20%",
    left: "60%",
    width: "20%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  image9Icon: {
    right: "40%",
    left: "40%",
    width: "20%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  image10Icon: {
    right: "60%",
    left: "20%",
    width: "20%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  image11Icon: {
    right: "80%",
    width: "20%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  },
  veganChickpeaCurry1: {
    width: "45.15%",
    top: "9.52%",
    left: "45.43%",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  image2Icon: {
    height: "80.36%",
    width: "39.34%",
    top: "10.12%",
    right: "57.06%",
    bottom: "9.52%",
    left: "3.6%",
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
});

export default VeganChickpeaCurryContainer;
