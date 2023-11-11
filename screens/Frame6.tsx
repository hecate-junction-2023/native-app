import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const Frame6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <View style={styles.items}>
          <View style={[styles.blurEvenly, styles.buttonPosition]} />
          <View style={[styles.autoTint, styles.buttonPosition]} />
        </View>
      </View>
      <Text style={styles.scheduleTheCooking}>Schedule the cooking</Text>
      <Pressable
        style={[styles.buttonWrapper, styles.innerLayout]}
        onPress={() => navigation.navigate("Frame3")}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Image
            style={[styles.folderIcon, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.button1}>Next</Text>
          <Image
            style={[styles.folderIcon1, styles.folderIconLayout]}
            contentFit="cover"
            source={require("../assets/folder1.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.inner, styles.innerLayout]}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={[styles.rectangleParent, styles.buttonPosition]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text style={[styles.selectTime, styles.textTypo2]}>Select time</Text>
          <Image
            style={[styles.keyboardArrowUp, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/keyboard-arrow-up.png")}
          />
        </View>
      </Pressable>
      <View style={styles.child}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.text, styles.textTypo2]}>15.04.2023</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-296.png")}
        />
        <View style={[styles.rectangleContainer, styles.vectorParentLayout]}>
          <View style={styles.rectangleView} />
          <View style={[styles.pmWrapper, styles.wrapperPosition]}>
            <Text style={[styles.pm, styles.textFlexBox1]}>PM</Text>
          </View>
          <View style={[styles.amWrapper, styles.wrapperPosition]}>
            <Text style={[styles.am, styles.textTypo]}>AM</Text>
          </View>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View>
              <Text style={[styles.text1, styles.textFlexBox1]}>06</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text2, styles.textFlexBox]}>28</Text>
            </View>
          </View>
          <View style={[styles.frame, styles.framePosition]}>
            <Text style={[styles.text3, styles.textTypo]}>:</Text>
          </View>
          <View style={[styles.frameView, styles.framePosition]} />
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View>
              <Text style={[styles.text4, styles.textFlexBox]}>06</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text5, styles.textTypo]}>27</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View>
              <Text style={[styles.text4, styles.textFlexBox]}>06</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text5, styles.textTypo]}>27</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.chevronbackward}
        onPress={() => navigation.navigate("Frame16")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronbackward1.png")}
        />
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
  innerLayout: {
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
    height: 20,
    width: 20,
    display: "none",
    overflow: "hidden",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral0,
  },
  textTypo2: {
    display: "flex",
    fontFamily: FontFamily.latoBold,
    textTransform: "capitalize",
    fontSize: FontSize.inputM_size,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    top: 0,
    height: 48,
    width: 307,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 168,
    position: "absolute",
  },
  wrapperPosition: {
    padding: Padding.p_base,
    width: 60,
    left: 202,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textFlexBox1: {
    height: 24,
    fontSize: FontSize.size_xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    width: 202,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textFlexBox: {
    width: 37,
    height: 24,
    fontSize: FontSize.size_xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  framePosition: {
    top: 72,
    position: "absolute",
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
  scheduleTheCooking: {
    marginLeft: -183,
    top: "10.07%",
    fontSize: FontSize.headingMBold_size,
    letterSpacing: -0.7,
    lineHeight: 44,
    fontFamily: FontFamily.headingMBold,
    color: Color.neutral950,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  folderIcon: {
    display: "none",
  },
  button1: {
    fontSize: FontSize.buttonL_size,
    fontFamily: FontFamily.buttonL,
    color: Color.neutral0,
    marginLeft: 10,
    textAlign: "left",
    fontWeight: "600",
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
    width: "20.26%",
    top: "88.39%",
    right: "39.74%",
    bottom: "5.92%",
    left: "40%",
  },
  groupChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  selectTime: {
    height: "43.75%",
    width: "33.55%",
    top: "29.17%",
    left: "5.54%",
  },
  keyboardArrowUp: {
    height: "50%",
    width: "7.82%",
    top: "25%",
    right: "8.14%",
    bottom: "25%",
    left: "84.04%",
    position: "absolute",
  },
  rectangleParent: {
    position: "absolute",
  },
  inner: {
    width: "78.72%",
    top: "34.36%",
    right: "10.77%",
    bottom: "59.95%",
    left: "10.51%",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral0,
  },
  text: {
    top: 14,
    left: 18,
    width: 103,
    height: 21,
  },
  vectorIcon: {
    height: "15.42%",
    width: "3.91%",
    top: "45.83%",
    right: "7.82%",
    bottom: "38.75%",
    left: "88.27%",
    position: "absolute",
  },
  child: {
    top: 200,
    left: 41,
    height: 48,
    width: 307,
    position: "absolute",
  },
  groupInner: {
    top: -14,
    left: -14,
    borderRadius: Border.br_2xs,
    width: 332,
    height: 196,
    position: "absolute",
  },
  rectangleView: {
    top: -12,
    left: -35,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 343,
    height: 192,
    borderRadius: Border.br_xs,
    display: "none",
    position: "absolute",
  },
  pm: {
    width: 46,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  pmWrapper: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    top: 56,
    borderStyle: "solid",
  },
  am: {
    width: 47,
    height: 24,
    fontSize: FontSize.size_xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  amWrapper: {
    top: 112,
  },
  text1: {
    width: 38,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text2: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  container: {
    marginLeft: 24,
  },
  frameParent: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Color.colorGray_100,
    top: 56,
    borderStyle: "solid",
  },
  text3: {
    width: 8,
    height: 24,
    fontSize: FontSize.size_xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
  },
  frame: {
    left: 70,
    opacity: 0.1,
  },
  frameView: {
    left: 127,
  },
  text4: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_200,
  },
  text5: {
    width: 39,
    height: 24,
    fontSize: FontSize.size_xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameGroup: {
    borderRadius: Border.br_xs,
    top: 0,
  },
  frameContainer: {
    top: 112,
    borderRadius: Border.br_xs,
  },
  rectangleContainer: {
    left: 19,
    width: 262,
    top: 0,
  },
  vectorParent: {
    top: 343,
    left: 42,
    width: 304,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
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
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.neutral0,
  },
});

export default Frame6;
